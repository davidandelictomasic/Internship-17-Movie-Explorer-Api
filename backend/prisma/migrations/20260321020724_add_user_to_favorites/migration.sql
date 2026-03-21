/*
  Warnings:

  - A unique constraint covering the columns `[movieId,userId]` on the table `Favorite` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Favorite_movieId_key";

-- AlterTable
ALTER TABLE "Favorite" ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_movieId_userId_key" ON "Favorite"("movieId", "userId");

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
