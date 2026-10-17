import { BankAccountObject } from "../BankAccount";
import { CreditCardObject } from "../CreditCard";
import { UserObject } from "../User/";

export type GeneralAccountObject = {
   id: string,
   name: string,
   users: UserObject[],
   admins: UserObject[],
   bankAccounts?: BankAccountObject[],
   creditCards?: CreditCardObject[],
}
