import { CreditCard } from "../entities/CreditCard";
import { BasicRepository } from "./BasicRepository";

export interface CreditCardRepository extends BasicRepository<CreditCard> {
  findByUserId(userId: string): Promise<CreditCard | CreditCard[] | null>
  findByName(name:string): Promise<CreditCard | CreditCard[] | null>
  findByGeneralAccountID(generalAccountId: string): Promise<CreditCard | CreditCard[] | null>
  findByBankAccountID(generalAccountId: string): Promise<CreditCard | CreditCard[] | null>
}
