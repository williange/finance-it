import { checkEmptyString } from "../../validators/checkEmptyString";
import { BankAccount, BankAccountObject } from "../BankAccount";
import { mapToObjects } from "../utils";
import { UserObject } from "./UserObject";

export class User {
  constructor(
    private id: string,
    private email: string,
    private bankAccounts: BankAccount[],
    private createdAt: Date,
    private updatedAt: Date,
    private username?: string,
  ) {
    checkEmptyString(id, "id");
    checkEmptyString(email, "email");
    if (username) checkEmptyString(username, "username");
  }

  getBankAccounts():BankAccountObject[] {
    return mapToObjects(this.bankAccounts)
  }

  toObject(): UserObject {
    const user = {
      id: this.id,
      email: this.email,
      bankAccounts: this.getBankAccounts(),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
    if (this.username) {
      return { ...user, username: this.username };
    }
    return user;
  }

  addBankAccount(bankAccount: BankAccount) {
    this.bankAccounts.push(bankAccount);
    this.updatedAt = new Date();
  }
}
