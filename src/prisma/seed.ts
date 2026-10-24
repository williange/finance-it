
import { db } from "./db";

let pendingSeed: Promise<void> | undefined;

async function runSeed() {
  const user = await db.orm.public.User.upsert({
    create: {
      email: "johndoe@example.com",
      username: "johndoe",
    },
    update: {
      username: "johndoe",
    },
  });

  let generalAccount = await db.orm.public.GeneralAccount.first({
    name: "Family Finances",
  });

  if (!generalAccount) {
    generalAccount = await db.orm.public.GeneralAccount.create({
      name: "Family Finances",
    });
  }

  const membership = await db.orm.public.GeneralAccountUser.first({
    userId: user.id,
    generalAccountId: generalAccount.id,
  });

  if (!membership) {
    await db.orm.public.GeneralAccountUser.create({
      userId: user.id,
      generalAccountId: generalAccount.id,
    });
  }

  const adminMembership = await db.orm.public.GeneralAccountAdmin.first({
    userId: user.id,
    generalAccountId: generalAccount.id,
  });

  if (!adminMembership) {
    await db.orm.public.GeneralAccountAdmin.create({
      userId: user.id,
      generalAccountId: generalAccount.id,
    });
  }

  let bankAccount = await db.orm.public.BankAccount.first({
    name: "Main Checking Account",
    userId: user.id,
    generalAccountId: generalAccount.id,
  });

  if (!bankAccount) {
    bankAccount = await db.orm.public.BankAccount.create({
      name: "Main Checking Account",
      userId: user.id,
      generalAccountId: generalAccount.id,
    });
  }

  let creditCard = await db.orm.public.CreditCard.first({
    name: "Platinum Card",
    bankAccountId: bankAccount.id,
  });

  if (!creditCard) {
    creditCard = await db.orm.public.CreditCard.create({
      name: "Platinum Card",
      lastFourNumbers: "4321",
      totalLimit: "5000",
      availableLimit: "2500",
      generalAccountId: generalAccount.id,
      bankAccountId: bankAccount.id,
    });
  }

  let category = await db.orm.public.Category.first({
    name: "Groceries",
  });

  if (!category) {
    category = await db.orm.public.Category.create({
      name: "Groceries",
    });
  }

  const budget = await db.orm.public.Budget.first({
    categoryId: category.id,
  });

  if (!budget) {
    await db.orm.public.Budget.create({
      name: "Monthly Groceries Budget",
      value: "600",
      categoryId: category.id,
    });
  }

  const existingTransaction = await db.orm.public.Transaction.first({
    name: "Supermarket Purchase",
    bankAccountId: bankAccount.id,
  });

  if (!existingTransaction) {
    await db.orm.public.Transaction.create({
      name: "Supermarket Purchase",
      value: "150.50",
      date: new Date().toISOString(),
      type: "EXPENSE",
      status: "COMPLETED",
      isRecurring: false,
      categoryId: category.id,
      bankAccountId: bankAccount.id,
    });
  }

  const existingInstallment = await db.orm.public.Installment.first({
    name: "New Laptop",
    creditCardId: creditCard.id,
  });

  if (!existingInstallment) {
    await db.orm.public.Installment.create({
      name: "New Laptop",
      fullValue: "1200",
      quantity: 10,
      valuePerPayment: "120",
      creditCardId: creditCard.id,
    });
  }

  console.log("Seed executed!");
}

export function seed(): Promise<void> {
  pendingSeed ??= runSeed().catch((error: unknown) => {
    pendingSeed = undefined;
    throw error;
  });
  return pendingSeed;
}
