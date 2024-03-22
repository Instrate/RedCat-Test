import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdatableValueEntity } from "./updatable-value.entity";
import { Repository } from "typeorm";
import { EnumUpdatableValueType } from "./updatable-value.enum";
import { AccountEntity } from "../account/account.entity";

@Injectable()
export class UpdatableValueService {

  constructor(
    @InjectRepository(UpdatableValueEntity) private readonly repo: Repository<UpdatableValueEntity>
  ) {
  }


  create(value: string, type: EnumUpdatableValueType) {
    return this.repo.save({ value, type });
  }

  updateOwner(id: string, owner: AccountEntity) {
    return this.repo.update(id, { owner });
  }
}
