/*
  Warnings:

  - You are about to alter the column `action` on the `log` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(14))`.
  - The primary key for the `provaquestao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `peso` on the `provaquestao` table. All the data in the column will be lost.
  - You are about to alter the column `enunciado` on the `questao` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(25)`.
  - Made the column `conteudo` on table `post` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imagem` on table `post` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Log_userId_fkey` ON `log`;

-- DropIndex
DROP INDEX `Post_autorId_fkey` ON `post`;

-- DropIndex
DROP INDEX `PostTag_tagId_fkey` ON `posttag`;

-- DropIndex
DROP INDEX `ProvaQuestao_questaoId_fkey` ON `provaquestao`;

-- DropIndex
DROP INDEX `Questao_autorId_fkey` ON `questao`;

-- AlterTable
ALTER TABLE `log` MODIFY `action` ENUM('CREATED', 'UPDATED', 'DELETED') NOT NULL;

-- AlterTable
ALTER TABLE `post` MODIFY `conteudo` TEXT NOT NULL,
    MODIFY `imagem` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `prova` MODIFY `duracaoTotal` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `provaquestao` DROP PRIMARY KEY,
    DROP COLUMN `peso`,
    MODIFY `provaId` VARCHAR(25) NOT NULL,
    MODIFY `questaoId` VARCHAR(25) NOT NULL,
    MODIFY `ordem` INTEGER NOT NULL DEFAULT 1,
    ADD PRIMARY KEY (`provaId`, `questaoId`);

-- AlterTable
ALTER TABLE `questao` MODIFY `enunciado` CHAR(25) NOT NULL DEFAULT '',
    MODIFY `image` TEXT NULL DEFAULT '',
    MODIFY `tempoEstimado` INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE `usuario` MODIFY `nome` VARCHAR(120) NULL,
    MODIFY `image` TEXT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTag` ADD CONSTRAINT `PostTag_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTag` ADD CONSTRAINT `PostTag_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Questao` ADD CONSTRAINT `Questao_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProvaQuestao` ADD CONSTRAINT `ProvaQuestao_provaId_fkey` FOREIGN KEY (`provaId`) REFERENCES `Prova`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProvaQuestao` ADD CONSTRAINT `ProvaQuestao_questaoId_fkey` FOREIGN KEY (`questaoId`) REFERENCES `Questao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Log` ADD CONSTRAINT `Log_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
