import { CreditCardObject } from "../CreditCard";
import { InstallmentObject } from "../Installment";
import { TransactionObject } from "../Transaction";

export type BankAccountObject = {
  id: string;
  name: string;
  creditCards?: CreditCardObject[];
  transactions?: TransactionObject[];
  installments?: InstallmentObject[];
};
