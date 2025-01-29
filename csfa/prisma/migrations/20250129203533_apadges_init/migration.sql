-- CreateTable
CREATE TABLE `Usuario` (
    `id` CHAR(4) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` CHAR(100) NOT NULL,
    `setor` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
