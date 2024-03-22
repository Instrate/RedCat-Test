import { Injectable } from '@nestjs/common';

import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CredentialService {
  static Ref: CredentialService;

  constructor() {
    CredentialService.Ref ??= this;
  }

  static CreatePair() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
    });

    return {
      public: publicKey.export({ type: 'pkcs1', format: 'pem' }),
      private: privateKey.export({ type: 'pkcs1', format: 'pem' }),
    };
  }

  CreateHash<IsSync = boolean>(
    data: string,
    isSync: IsSync = true as IsSync,
    iterations: number = Number(process.env.DATABASE_DATA_HASH_ITERATIONS),
  ): IsSync extends true ? string : Promise<string> {
    return (isSync
      ? bcrypt.hashSync(data, iterations)
      : bcrypt.hash(data, iterations)) as IsSync extends true ? string : Promise<string>;
  }

  ValidateHash<IsSync = boolean>(
    data: string,
    toCompare: string,
    isSync: IsSync = true as IsSync,
  ): IsSync extends true ? boolean : Promise<boolean> {
    return (isSync
      ? bcrypt.compareSync(data, toCompare)
      : bcrypt.compare(data, toCompare)) as IsSync extends true ? boolean : Promise<boolean>;
  }
}