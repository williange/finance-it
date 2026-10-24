import { checkEmptyString } from "../../../validators/checkEmptyString";
import { checkInvalidNumberValue } from "../../../validators/checkInvalidNumberValue";

export enum TransactionType {
  INCOME,
  EXPENSE
}

export enum TransactionStatus {
  PENDING,
  COMPLETED,
  CANCELLED
}

export class Transaction {
  constructor(
    private id: string,
    private name: string,
    private value: number,
    private date: Date,
    private type: TransactionType,
    private status: TransactionStatus,
    private isRecurring?: boolean,
    private categoryId?: string,
  ) {
    checkEmptyString(id, "id")
    checkEmptyString(name, "name")
    checkInvalidNumberValue(value, "value")
  }

  public toObject() {
    return {
      id: this.id,
      name: this.name,
      value: this.value,
      date: this.date,
      type: this.type,
      status: this.status,
      categoryId: this.categoryId,
      isRecurring: this.isRecurring,
    };
  }
}
