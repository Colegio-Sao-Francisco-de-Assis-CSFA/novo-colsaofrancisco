-- CreateTable
CREATE TABLE `Usuario` (
    `id` CHAR(25) NOT NULL,
    `nome` VARCHAR(120) NULL,
    `email` VARCHAR(145) NOT NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` TEXT NULL,
    `setor` ENUM('COORDENACAO', 'PROFESSOR', 'DESIGNER', 'ADMIN') NOT NULL,

    UNIQUE INDEX `Usuario_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Post` (
    `id` CHAR(25) NOT NULL,
    `titulo` VARCHAR(100) NOT NULL,
    `conteudo` TEXT NOT NULL,
    `imagem` TEXT NOT NULL,
    `publicado` BOOLEAN NOT NULL DEFAULT false,
    `categoria` ENUM('NOTICIAS', 'EVENTOS', 'AVISOS', 'ARTIGOS', 'OUTROS') NOT NULL,
    `autorId` VARCHAR(191) NOT NULL,
    `criadoEm` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `atualizadoEm` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
CREATE TABLE `Questao` (
    `id` CHAR(25) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `enunciado` CHAR(25) NOT NULL DEFAULT '',
    `image` TEXT NULL DEFAULT '',
    `category` ENUM('PUBLICA', 'SAS', 'CSFA', 'PARTICULARES', 'TREINAMENTO') NOT NULL DEFAULT 'CSFA',
    `disciplina` ENUM('MATEMATICA', 'PORTUGUES', 'INGLES', 'ESPANHOL', 'FISICA', 'QUIMICA', 'HISTORIA', 'GEOGRAFIA', 'ARTE', 'FILOSOFIA', 'SOCIOLOGIA', 'BIOLOGIA', 'EDUCACAO_FISICA') NOT NULL DEFAULT 'MATEMATICA',
    `nivel` ENUM('INICIAIS', 'FINAIS', 'MEDIO') NOT NULL DEFAULT 'INICIAIS',
    `ano` ENUM('PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO', 'QUINTO', 'SEXTO', 'SETIMO', 'OITAVO', 'NONO') NOT NULL DEFAULT 'PRIMEIRO',
    `dificuldade` ENUM('FACIL', 'MEDIO', 'DIFICIL') NOT NULL DEFAULT 'FACIL',
    `type` ENUM('MULTIPLA', 'DISSERTATIVA', 'VERDADEIRO_OU_FALSO') NOT NULL DEFAULT 'MULTIPLA',
    `tempoEstimado` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `autorId` CHAR(25) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prova` (
    `id` VARCHAR(25) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `type` ENUM('MULTIPLA', 'DISSERTATIVA', 'VERDADEIRO_OU_FALSO') NOT NULL DEFAULT 'MULTIPLA',
    `disciplina` ENUM('MATEMATICA', 'PORTUGUES', 'INGLES', 'ESPANHOL', 'FISICA', 'QUIMICA', 'HISTORIA', 'GEOGRAFIA', 'ARTE', 'FILOSOFIA', 'SOCIOLOGIA', 'BIOLOGIA', 'EDUCACAO_FISICA') NOT NULL DEFAULT 'MATEMATICA',
    `category` ENUM('PUBLICA', 'SAS', 'CSFA', 'PARTICULARES', 'TREINAMENTO') NOT NULL DEFAULT 'CSFA',
    `nivel` ENUM('INICIAIS', 'FINAIS', 'MEDIO') NOT NULL DEFAULT 'INICIAIS',
    `dificuldade` ENUM('FACIL', 'MEDIO', 'DIFICIL') NOT NULL DEFAULT 'FACIL',
    `status` ENUM('PUBLICADA', 'RASCUNHO') NOT NULL DEFAULT 'RASCUNHO',
    `publishedAt` DATETIME(3) NULL,
    `duracaoTotal` INTEGER NOT NULL DEFAULT 1,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProvaQuestao` (
    `provaId` VARCHAR(25) NOT NULL,
    `questaoId` VARCHAR(25) NOT NULL,
    `ordem` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`provaId`, `questaoId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Log` (
    `id` CHAR(25) NOT NULL,
    `action` ENUM('CREATED', 'UPDATED', 'DELETED') NOT NULL,
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
ALTER TABLE `ProvaQuestao` ADD CONSTRAINT `ProvaQuestao_provaId_fkey` FOREIGN KEY (`provaId`) REFERENCES `Prova`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProvaQuestao` ADD CONSTRAINT `ProvaQuestao_questaoId_fkey` FOREIGN KEY (`questaoId`) REFERENCES `Questao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Log` ADD CONSTRAINT `Log_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
