/*
  Warnings:

  - You are about to drop the column `category` on the `prova` table. All the data in the column will be lost.
  - You are about to drop the column `dificuldade` on the `prova` table. All the data in the column will be lost.
  - You are about to drop the column `tag` on the `prova` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `prova` table. All the data in the column will be lost.
  - You are about to drop the column `conteudo` on the `questao` table. All the data in the column will be lost.
  - You are about to drop the column `tag` on the `questao` table. All the data in the column will be lost.
  - You are about to alter the column `type` on the `questao` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(6))`.

*/
-- DropIndex
DROP INDEX `Post_autorId_fkey` ON `post`;

-- DropIndex
DROP INDEX `ProvaQuestao_questaoId_fkey` ON `provaquestao`;

-- AlterTable
ALTER TABLE `prova` DROP COLUMN `category`,
    DROP COLUMN `dificuldade`,
    DROP COLUMN `tag`,
    DROP COLUMN `type`,
    ADD COLUMN `ano` ENUM('PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO', 'QUINTO', 'SEXTO', 'SETIMO', 'OITAVO', 'NONO') NOT NULL DEFAULT 'PRIMEIRO',
    ADD COLUMN `disciplina` ENUM('MATEMATICA', 'PORTUGUES', 'INGLES', 'ESPANHOL', 'FISICA', 'QUIMICA', 'HISTORIA', 'GEOGRAFIA', 'ARTE', 'FILOSOFIA', 'SOCIOGIA', 'BIOLOGIA', 'EDUCACAO_FISICA') NOT NULL DEFAULT 'MATEMATICA',
    MODIFY `nivel` ENUM('ENSINO_MEDIO', 'ANOS_FINAIS', 'ANOS_INICIAIS') NOT NULL DEFAULT 'ANOS_INICIAIS';

-- AlterTable
ALTER TABLE `questao` DROP COLUMN `conteudo`,
    DROP COLUMN `tag`,
    ADD COLUMN `ano` ENUM('PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO', 'QUINTO', 'SEXTO', 'SETIMO', 'OITAVO', 'NONO') NOT NULL DEFAULT 'PRIMEIRO',
    ADD COLUMN `category` ENUM('PUBLICA', 'SAS', 'CSFA') NOT NULL DEFAULT 'CSFA',
    ADD COLUMN `dificuldade` ENUM('FACIL', 'MEDIO', 'DIFICIL') NOT NULL DEFAULT 'FACIL',
    ADD COLUMN `disciplina` ENUM('MATEMATICA', 'PORTUGUES', 'INGLES', 'ESPANHOL', 'FISICA', 'QUIMICA', 'HISTORIA', 'GEOGRAFIA', 'ARTE', 'FILOSOFIA', 'SOCIOGIA', 'BIOLOGIA', 'EDUCACAO_FISICA') NOT NULL DEFAULT 'MATEMATICA',
    ADD COLUMN `enunciado` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `image` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `nivel` ENUM('ENSINO_MEDIO', 'ANOS_FINAIS', 'ANOS_INICIAIS') NOT NULL DEFAULT 'ANOS_INICIAIS',
    MODIFY `type` ENUM('MULTIPLA', 'DISSERTATIVA', 'VERDADEIRO_OU_FALSO') NOT NULL;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_autorId_fkey` FOREIGN KEY (`autorId`) REFERENCES `Usuario`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProvaQuestao` ADD CONSTRAINT `ProvaQuestao_provaId_fkey` FOREIGN KEY (`provaId`) REFERENCES `Prova`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProvaQuestao` ADD CONSTRAINT `ProvaQuestao_questaoId_fkey` FOREIGN KEY (`questaoId`) REFERENCES `Questao`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
