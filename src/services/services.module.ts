import { DynamicModule, ForwardReference, Module, Type } from "@nestjs/common";
import { SessionModule } from './session/session.module';
import { CredentialModule } from './credential/credential.module';

const ModuleSet: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference> = [
  SessionModule,
  CredentialModule
]

@Module({
  imports: ModuleSet,
  exports: ModuleSet
})
export class ServicesModule {}
