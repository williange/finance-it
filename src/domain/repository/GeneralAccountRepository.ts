import { GeneralAccount } from "../entities/GeneralAccount";
import { BasicRepository } from "./BasicRepository";

export interface GeneralAccountRepository extends BasicRepository<GeneralAccount> {
  findByUserId(userId: string): Promise<GeneralAccount | null>
}
