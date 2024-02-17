-- CreateTable
CREATE TABLE `VacantesNormandia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `publicacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `titulo` VARCHAR(191) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `turno` VARCHAR(191) NOT NULL,
    `horario` VARCHAR(191) NOT NULL,
    `ubicacion` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `requisitos` VARCHAR(191) NOT NULL,
    `sueldo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
