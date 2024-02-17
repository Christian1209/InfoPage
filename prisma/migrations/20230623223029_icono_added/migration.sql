/*
  Warnings:

  - Added the required column `icono` to the `VacantesNormandia` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `vacantesnormandia` ADD COLUMN `icono` INTEGER NOT NULL;
