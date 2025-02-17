/*
  Warnings:

  - You are about to drop the column `content` on the `post` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `post` table. All the data in the column will be lost.
  - The primary key for the `prova` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ano` on the `prova` table. All the data in the column will be lost.
  - You are about to alter the column `nome` on the `prova` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `nivel` on the `prova` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Enum(EnumId(11))`.
  - The values [SOCIOGIA] on the enum `Prova_disciplina` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `nome` on the `questao` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - The values [SOCIOGIA] on the enum `Prova_disciplina` will be removed. If these variants are still used in the database, this will fail.
  - You are about to alter the column `nivel` on the `questao` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(10))` to `Enum(EnumId(11))`.
  - You are about to drop the `verificationtoken` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `atualizadoEm` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ordem` to the `ProvaQuestao` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Post_autorId_fkey` ON `post`;

-- DropIndex
DROP INDEX `ProvaQuestao_questaoId_fkey` ON `provaquestao`;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `content`,
    DROP COLUMN `title`,
    ADD COLUMN `atualizadoEm` DATETIME(3) NOT NULL,
    ADD COLUMN `categoria` ENUM('NOTICIAS', 'EVENTOS', 'AVISOS', 'ARTIGOS', 'OUTROS') NOT NULL,
    ADD COLUMN `conteudo` TEXT NULL,
    ADD COLUMN `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `imagem` VARCHAR(255) NULL,
    ADD COLUMN `publicado` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `titulo` VARCHAR(100) NOT NULL,
    MODIFY `autorId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `prova` DROP PRIMARY KEY,
    DROP COLUMN `ano`,
    ADD COLUMN `category` ENUM('PUBLICA', 'SAS', 'CSFA', 'PARTICULARES', 'TREINAMENTO') NOT NULL DEFAULT 'CSFA',
    ADD COLUMN `dificuldade` ENUM('FACIL', 'MEDIO', 'DIFICIL') NOT NULL DEFAULT 'FACIL',
    ADD COLUMN `duracaoTotal` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `publishedAt` DATETIME(3) NULL,
    ADD COLUMN `type` ENUM('MULTIPLA', 'DISSERTATIVA', 'VERDADEIRO_OU_FALSO') NOT NULL DEFAULT 'MULTIPLA',
    MODIFY `id` VARCHAR(25) NOT NULL,
    MODIFY `nome` VARCHAR(100) NOT NULL,
    MODIFY `nivel` ENUM('INICIAIS', 'FINAIS', 'MEDIO') NOT NULL DEFAULT 'INICIAIS',
    MODIFY `disciplina` ENUM('MATEMATICA', 'PORTUGUES', 'INGLES', 'ESPANHOL', 'FISICA', 'QUIMICA', 'HISTORIA', 'GEOGRAFIA', 'ARTE', 'FILOSOFIA', 'SOCIOLOGIA', 'BIOLOGIA', 'EDUCACAO_FISICA') NOT NULL DEFAULT 'MATEMATICA',
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `provaquestao` ADD COLUMN `ordem` INTEGER NOT NULL,
    ADD COLUMN `peso` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `questao` ADD COLUMN `autorId` CHAR(25) NULL,
    ADD COLUMN `tempoEstimado` INTEGER NOT NULL DEFAULT 0,
    MODIFY `nome` VARCHAR(100) NOT NULL,
    MODIFY `category` ENUM('PUBLICA', 'SAS', 'CSFA', 'PARTICULARES', 'TREINAMENTO') NOT NULL DEFAULT 'CSFA',
    MODIFY `disciplina` ENUM('MATEMATICA', 'PORTUGUES', 'INGLES', 'ESPANHOL', 'FISICA', 'QUIMICA', 'HISTORIA', 'GEOGRAFIA', 'ARTE', 'FILOSOFIA', 'SOCIOLOGIA', 'BIOLOGIA', 'EDUCACAO_FISICA') NOT NULL DEFAULT 'MATEMATICA',
    MODIFY `nivel` ENUM('INICIAIS', 'FINAIS', 'MEDIO') NOT NULL DEFAULT 'INICIAIS';

-- DropTable
DROP TABLE `verificationtoken`;

-- CreateTable
CREATE TABLE `Tag` (
    `id` CHAR(25) NOT NULL,
    `nome` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Tag_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PostTag` (
    `postId` CHAR(25) NOT NULL,
    `tagId` CHAR(25) NOT NULL,

    PRIMARY KEY (`postId`, `tagId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Log` (
    `id` CHAR(25) NOT NULL,
    `action` VARCHAR(191) NOT NULL,
    `model` VARCHAR(191) NOT NULL,
    `modelId` VARCHAR(191) NOT NULL,
    `userId` CHAR(25) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTag` ADD CONSTRAINT `PostTag_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTag` ADD CONSTRAINT `PostTag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Questao` ADD CONSTRAINT `Questao_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProvaQuestao` ADD CONSTRAINT `ProvaQuestao_provaId_fkey` FOREIGN KEY (`provaId`) REFERENCES `Prova`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProvaQuestao` ADD CONSTRAINT `ProvaQuestao_questaoId_fkey` FOREIGN KEY (`questaoId`) REFERENCES `Questao`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Log` ADD CONSTRAINT `Log_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
