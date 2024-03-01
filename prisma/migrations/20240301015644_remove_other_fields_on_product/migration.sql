/*
  Warnings:

  - You are about to drop the column `isActive` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `registeredAt` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Product` DROP COLUMN `isActive`,
    DROP COLUMN `registeredAt`,
    MODIFY `price` DOUBLE NOT NULL;
