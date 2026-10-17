import { checkEmptyArray } from "../../validators/checkEmptyArray";
import { checkEmptyString } from "../../validators/checkEmptyString";
import { BankAccount, BankAccountObject } from "../BankAccount";
import { CreditCard, CreditCardObject } from "../CreditCard";
import { User, UserObject } from "../User";
import { mapToObjects } from "../utils";
import { GeneralAccountObject } from "./GeneralAccountObject";

export class GeneralAccount {
  constructor(
    private id: string,
    private name: string,
    private users: User[],
    private admins: User[],
    private bankAccounts?: BankAccount[],
    private creditCards?: CreditCard[],
  ) {
    checkEmptyString(id, "id");
    checkEmptyString(name, "name");
    checkEmptyArray(users, "users");
    checkEmptyArray(admins, "admins");
  }

  getAdmins(): UserObject[] {
    return mapToObjects(this.admins);
  }

  getUsers(): UserObject[] {
    return mapToObjects(this.users);
  }

  getBankAccounts(): BankAccountObject[] {
    return mapToObjects(this.bankAccounts);
  }

  getCreditCards(): CreditCardObject[] {
    return mapToObjects(this.creditCards);
  }

  toObject(): GeneralAccountObject {
    return {
      ...this,
      admins: this.getAdmins(),
      users: this.getUsers(),
      bankAccounts: this.getBankAccounts(),
      creditCards: this.getCreditCards(),
    };
  }
}
