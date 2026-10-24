import { Transaction } from "../entities/Transaction";
import { BasicRepository } from "./BasicRepository";

export interface InstallmentRepository extends BasicRepository<Transaction> {
  findByUserId(userId: string): Promise<Transaction | Transaction[] | null>
  findByName(name:string): Promise<Transaction | Transaction[] | null>
  findByGeneralAccountID(generalAccountId: string): Promise<Transaction | Transaction[] | null>
  findByBankAccountID(generalAccountId: string): Promise<Transaction | Transaction[] | null>
}
