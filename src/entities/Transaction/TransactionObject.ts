export type TransactionObject = {
  id: string,
  name: string,
  value: number,
  date: Date,
  type: string,
  status: string,
  categoryId?: string,
  isRecurring?: boolean,
}
