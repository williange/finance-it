import { TransactionStatus, TransactionType } from "./Transaction";

export type TransactionObject = {
  id: string;
  name: string;
  value: number;
  date: Date;
  type: TransactionType;
  status: TransactionStatus;
  categoryId?: string;
  isRecurring?: boolean;
};
