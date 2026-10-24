import { InstallmentObject } from "../Installment";
import { TransactionObject } from "../Transaction";

export type CreditCardObject = {
   id: string,
   name: string,
   lastFourNumbers: string,
   totalLimit: number,
   availableLimit: number,
   transactions: TransactionObject[],
   installments: InstallmentObject[],
}
