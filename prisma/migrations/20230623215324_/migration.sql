/*
  Warnings:

  - You are about to drop the column `requisitos` on the `vacantesnormandia` table. All the data in the column will be lost.
  - Added the required column `requisito1` to the `VacantesNormandia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requisito2` to the `VacantesNormandia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requisito3` to the `VacantesNormandia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requisito4` to the `VacantesNormandia` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requisito5` to the `VacantesNormandia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vacantesnormandia` DROP COLUMN `requisitos`,
    ADD COLUMN `requisito1` VARCHAR(191) NOT NULL,
    ADD COLUMN `requisito2` VARCHAR(191) NOT NULL,
    ADD COLUMN `requisito3` VARCHAR(191) NOT NULL,
    ADD COLUMN `requisito4` VARCHAR(191) NOT NULL,
    ADD COLUMN `requisito5` VARCHAR(191) NOT NULL;
