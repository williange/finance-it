import { checkEmptyString } from "../../validators/checkEmptyString";
import { BankAccountObject } from "./BankAccountObject";
import { CreditCard, CreditCardObject } from "../CreditCard";
import { Installment, InstallmentObject } from "../Installment";
import { Transaction, TransactionObject } from "../Transaction";
import { mapToObjects } from "../utils";

export class BankAccount {
  constructor(
    private id: string,
    private name: string,
    private creditCards?: CreditCard[],
    private transactions?: Transaction[],
    private installments?: Installment[],
  ) {
    checkEmptyString(id, "id");
    checkEmptyString(name, "name");
    this.creditCards = creditCards || [];
    this.transactions = transactions || [];
    this.installments = installments || [];
  }

  getCreditCards(): CreditCardObject[] {
    return mapToObjects(this.creditCards);
  }

  getTransactions(): TransactionObject[] {
    return mapToObjects(this.transactions);
  }

  getInstallments(): InstallmentObject[] {
    return mapToObjects(this.installments);
  }

  toObject(): BankAccountObject {
    return {
      ...this,
      creditCards: this.getCreditCards(),
      transactions: this.getTransactions(),
      installments: this.getInstallments(),
    };
  }
}
