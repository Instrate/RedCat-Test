import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AccountEntity } from "./account.entity";
import { Repository } from "typeorm";
import { DtoAccountRegistrationData } from "./account.input";
import { UpdatableValueService } from "../updatable-value/updatable-value.service";
import { EnumAccountRole } from "./account.enum";
import { CredentialService } from "../../../services/credential/credential.service";
import { EnumUpdatableValueType } from "../updatable-value/updatable-value.enum";

@Injectable()
export class AccountService {

  constructor(
    @InjectRepository(AccountEntity) private readonly repo: Repository<AccountEntity>,
    private readonly updatableValueService: UpdatableValueService,
    private readonly credService: CredentialService
  ) {
  }

  getAll() {
    return this.repo.find({
      relations: {
        email: true,
        password: true
      }
    });
  }

  findByEmail(email: string) {
    return this.repo.findOne({
      relations: {
        email: true,
        password: true
      },
      where: {
        email: {
          value: email
        }
      }
    });
  }

  async create(data: DtoAccountRegistrationData) {
    if (!!await this.findByEmail(data.email)) {
      return null;
    }
    const item: Partial<AccountEntity> = {
      email: await this.updatableValueService.create(data.email, EnumUpdatableValueType.Email),
      password: await this.updatableValueService.create(this.credService.CreateHash<true>(data.password), EnumUpdatableValueType.Password),
      role: data?.role || EnumAccountRole.Viewer
    };
    return this.repo.save(item).then(async (val) => {
      if (!val) {
        return null;
      }
      const eup = await this.updatableValueService.updateOwner(val.email.id, val);
      if (!eup) {
        return null;
      }
      const pup = await this.updatableValueService.updateOwner(val.password.id, val);

      if (!pup) {
        return null;
      }
      return val;
    });
  }

  async deleteByEmail(email: string) {
    const account = await this.findByEmail(email);
    if (!account) {
      return null;
    }
    return this.repo.delete(account.id);
  }


}
