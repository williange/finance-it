import { Installment } from "../entities/Installment";
import { BasicRepository } from "./BasicRepository";

export interface InstallmentRepository extends BasicRepository<Installment> {
  findByUserId(userId: string): Promise<Installment | Installment[] | null>
  findByName(name:string): Promise<Installment | Installment[] | null>
  findByGeneralAccountID(generalAccountId: string): Promise<Installment | Installment[] | null>
  findByBankAccountID(generalAccountId: string): Promise<Installment | Installment[] | null>
  findByCreditCardID(generalAccountId: string): Promise<Installment | Installment[] | null>
}
