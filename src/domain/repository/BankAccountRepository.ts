import { BankAccount } from "../entities/BankAccount";
import { BasicRepository } from "./BasicRepository";

export interface BankAccountRepository extends BasicRepository<BankAccount> {
  findByUserId(userId: string): Promise<BankAccount | BankAccount[] | null>
  findByGeneralAccountID(generalAccountId: string): Promise<BankAccount | BankAccount[] | null>
}
