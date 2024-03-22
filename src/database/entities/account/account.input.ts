import { DtoAccountCreate } from "../../../controllers/api/auth/auth.input";
import { EnumAccountRole } from "./account.enum";

export class DtoAccountRegistrationData extends DtoAccountCreate {
  role?: EnumAccountRole;
}