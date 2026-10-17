import { checkEmptyString } from "../../validators/checkEmptyString";
import { checkInvalidNumberValue } from "../../validators/checkInvalidNumberValue";
import { CreditCardObject } from "../CreditCard";
import { Installment, InstallmentObject } from "../Installment";
import { Transaction,TransactionObject } from "../Transaction";

export class CreditCard {
  constructor(
    private id: string,
    private name: string,
    private lastFourNumbers: string,
    private totalLimit: number,
    private availableLimit: number,
    private transactions: Transaction[],
    private installments: Installment[],
  ) {
    checkEmptyString(id, "id");
    checkEmptyString(name, "name");
    checkEmptyString(lastFourNumbers, "lastFourNumbers");
    checkInvalidNumberValue(totalLimit, "totalLimit", 0);
    checkInvalidNumberValue(availableLimit, "availableLimit", 0);
  }

  getTransactions(): TransactionObject[] {
    return this.transactions.map((transaction) => transaction.toObject());
  }

  getInstallments(): InstallmentObject[] {
    return this.installments.map((installment) => installment.toObject());
  }

  toObject(): CreditCardObject {
    return {
      ...this,
      transactions: this.getTransactions(),
      installments: this.getInstallments(),
    };
  }
}
