-- CreateTable
CREATE TABLE `Usuario` (
    `id` CHAR(25) NOT NULL,
    `nome` VARCHAR(100) NULL,
    `email` VARCHAR(145) NOT NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `setor` ENUM('COORDENACAO', 'PROFESSOR', 'DESIGNER', 'INFORMATICA') NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` CHAR(25) NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `content` TEXT NULL,
    `autorId` CHAR(25) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(25) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
