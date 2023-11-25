/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Notes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `author` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Notes" ADD COLUMN     "author" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Notes_title_key" ON "Notes"("title");
