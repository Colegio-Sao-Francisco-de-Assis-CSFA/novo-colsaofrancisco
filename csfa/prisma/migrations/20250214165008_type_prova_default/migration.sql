-- DropIndex
DROP INDEX `Post_autorId_fkey` ON `post`;

-- DropIndex
DROP INDEX `ProvaQuestao_questaoId_fkey` ON `provaquestao`;

-- AlterTable
ALTER TABLE `questao` MODIFY `type` ENUM('MULTIPLA', 'DISSERTATIVA', 'VERDADEIRO_OU_FALSO') NOT NULL DEFAULT 'MULTIPLA';

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProvaQuestao` ADD CONSTRAINT `ProvaQuestao_provaId_fkey` FOREIGN KEY (`provaId`) REFERENCES `Prova`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProvaQuestao` ADD CONSTRAINT `ProvaQuestao_questaoId_fkey` FOREIGN KEY (`questaoId`) REFERENCES `Questao`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
