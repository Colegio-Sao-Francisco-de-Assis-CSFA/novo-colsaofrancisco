/*
  Warnings:

  - You are about to alter the column `type` on the `prova` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - The values [INFORMATICA] on the enum `Usuario_setor` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `category` to the `Prova` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dificuldade` to the `Prova` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nivel` to the `Prova` table without a default value. This is not possible if the table is not empty.
  - Made the column `tag` on table `prova` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Post_autorId_fkey` ON `post`;

-- DropIndex
DROP INDEX `ProvaQuestao_questaoId_fkey` ON `provaquestao`;

-- AlterTable
ALTER TABLE `prova` ADD COLUMN `category` ENUM('PUBLICA', 'SAS', 'CSFA') NOT NULL,
    ADD COLUMN `dificuldade` ENUM('FACIL', 'MEDIO', 'DIFICIL') NOT NULL,
    ADD COLUMN `nivel` ENUM('ENSINO_MEDIO', 'ANOS_FINAIS', 'ANOS_INICIAIS') NOT NULL,
    ADD COLUMN `status` ENUM('PUBLICADA', 'RASCUNHO') NOT NULL DEFAULT 'RASCUNHO',
    MODIFY `tag` ENUM('MATEMATICA', 'PORTUGUES', 'REDACAO', 'INGLES', 'FISICA', 'QUIMICA', 'HISTORIA', 'GEOGRAFIA', 'ARTES') NOT NULL,
    MODIFY `type` ENUM('MULTIPLA', 'DISSERTATIVA', 'VERDADEIRO_OU_FALSO') NOT NULL;

-- AlterTable
ALTER TABLE `usuario` MODIFY `setor` ENUM('COORDENACAO', 'PROFESSOR', 'DESIGNER', 'ADMIN') NOT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProvaQuestao` ADD CONSTRAINT `ProvaQuestao_provaId_fkey` FOREIGN KEY (`provaId`) REFERENCES `Prova`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProvaQuestao` ADD CONSTRAINT `ProvaQuestao_questaoId_fkey` FOREIGN KEY (`questaoId`) REFERENCES `Questao`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
