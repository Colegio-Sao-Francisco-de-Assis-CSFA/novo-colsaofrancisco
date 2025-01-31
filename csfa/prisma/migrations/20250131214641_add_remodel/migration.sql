-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(121) NOT NULL,
    `email` VARCHAR(121) NOT NULL,
    `emailVerified` DATETIME(3) NULL,
    `name` VARCHAR(121) NULL,
    `image` VARCHAR(121) NULL,
    `setor` VARCHAR(121) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(121) NOT NULL,
    `userId` VARCHAR(121) NOT NULL,
    `provider` VARCHAR(121) NOT NULL,
    `providerAccountId` VARCHAR(121) NOT NULL,
    `refreshToken` TEXT NULL,
    `accessToken` TEXT NULL,
    `tokenType` VARCHAR(50) NULL,
    `expiresAt` INTEGER NULL,
    `scope` TEXT NULL,
    `idToken` TEXT NULL,
    `sessionState` VARCHAR(121) NULL,

    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(121) NOT NULL,
    `userId` VARCHAR(121) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Account` ADD CONSTRAINT `Account_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Session` ADD CONSTRAINT `Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
