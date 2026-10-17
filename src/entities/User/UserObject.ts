import { BankAccountObject } from "../BankAccount";

export type UserObject = {
  id: string,
  username?: string,
  email: string,
  bankAccounts: BankAccountObject[],
  createdAt: Date,
  updatedAt: Date,
}
