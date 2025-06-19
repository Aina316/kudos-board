/*
  Warnings:

  - You are about to drop the column `image` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Card` table. All the data in the column will be lost.
  - Added the required column `boardId` to the `Card` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gif` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_ownerId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "image",
DROP COLUMN "ownerId",
ADD COLUMN     "boardId" INTEGER NOT NULL,
ADD COLUMN     "gif" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "boards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
