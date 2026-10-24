import { GeneralAccount } from "../entities/GeneralAccount";
import { BasicRepository } from "./BasicRepository";

export interface BankAccountRepository extends BasicRepository<GeneralAccount> {
  findByUserId(userId: string): Promise<GeneralAccount | null>
}
