-- CreateTable
CREATE TABLE "accountNumber" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "detail" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "management" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "restrictions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "resID" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "debit" DECIMAL NOT NULL DEFAULT 0,
    "credit" DECIMAL NOT NULL DEFAULT 0,
    "managementID" INTEGER NOT NULL,
    CONSTRAINT "restrictions_managementID_fkey" FOREIGN KEY ("managementID") REFERENCES "management" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
