/*
  Warnings:

  - You are about to drop the `Boards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Boards";

-- CreateTable
CREATE TABLE "boards" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "author" TEXT NOT NULL,

    CONSTRAINT "boards_pkey" PRIMARY KEY ("id")
);
