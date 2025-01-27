-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 27/01/2025 às 22:05
-- Versão do servidor: 8.3.0
-- Versão do PHP: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `apadges`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

DROP TABLE IF EXISTS `usuario`;
CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int NOT NULL,
  `nome` varchar(150) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `setor` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `email`, `setor`) VALUES
(1, 'Adriana Maria De Souza Sandes', 'adrianamaria@colsaofrancisco.com.br', 'Professor'),
(2, 'Aline Macedo Lopes Gutler', 'aline.macedo@colsaofrancisco.com.br', 'Professor'),
(3, 'Aline Miguel Sanches Longo', 'aline.miguel@colsaofrancisco.com.br', 'Professor'),
(5, 'Ana Paula Cecotte Alves', 'anapaula@colsaofrancisco.com.br', 'Professor'),
(45, 'Ananda Cristina Lins Silva De Souza', 'ananda@colsaofrancisco.com.br', 'Professor'),
(6, 'Anderson Kucmus Sobreiro', 'anderson.sobreiro@colsaofrancisco.com.br', 'Professor'),
(61, 'André Souza Da Silva', 'andre.souza@colsaofrancisco.com.br', 'Professor'),
(8, 'Claudia Silva De Oliveira', 'claudia@colsaofrancisco.com.br', 'Professor'),
(44, 'Colabteste', 'teste@colsaofrancisco.com.br', 'Professor'),
(55, 'Cristiano Garcia De Oliveira Santos', 'cristiano.santos@colsaofrancisco.com.br', 'Professor'),
(9, 'Eduardo Rodrigues Righette Green', 'eduardo.green@colsaofrancisco.com.br', 'Professor'),
(10, 'Eldes De Mello Fabro', 'eldes@colsaofrancisco.com.br', 'Professor'),
(11, 'Elisabete Jeronimo Albuquerque Porto', 'elisabete.porto@colsaofrancisco.com.br', 'Professor'),
(13, 'Ely Donizete Dos Santos', 'ely@colsaofrancisco.com.br', 'Professor'),
(15, 'Flávio Lopes De Menezes', 'flavio@colsaofrancisco.com.br', 'Professor'),
(16, 'Gracimeire Barbieri Ito', 'gracimeire@colsaofrancisco.com.br', 'Professor'),
(51, 'Irene Maria Rodrigues Costa Nunes', 'irene@colsaofrancisco.com.br', 'Coordenação'),
(17, 'Jamille Querino Ghidotti', 'jamille@colsaofrancisco.com.br', 'Professor'),
(12, 'José Roberto Rodrigues Costa', 'beto@colsaofrancisco.com.br', 'Tecnologia da informação'),
(19, 'Juliana Fernandes Da Silva', 'juliana.fernandes@colsaofrancisco.com.br', 'Professor'),
(49, 'Luciana Teixeira Do Nascimento', 'luciana.nascimento@colsaofrancisco.com.br', 'Professor'),
(22, 'Nadir Aparecida De Souza Moreira', 'nadir@colsaofrancisco.com.br', 'Professor'),
(48, 'Natália Santos Rocha', 'natalia.rocha@colsaofrancisco.com.br', 'Professor'),
(52, 'Paulo Pedro Felipe', 'paulo.felipe@colsaofrancisco.com.br', 'Professor'),
(50, 'Phellipe Pontes Modesto', 'phellipe@colsaofrancisco.com.br', 'Tecnologia da informação'),
(23, 'Regiane Reis De Oliveira', 'regiane@colsaofrancisco.com.br', 'Professor'),
(59, 'Renata Schnabel Lopes Barbosa', 'renata.barbosa@colsaofrancisco.com.br', 'Professor'),
(25, 'Rosangela Lopes Machado Pivanti', 'rosangela@colsaofrancisco.com.br', 'Professor'),
(26, 'Sabrina Amano', 'sabrina@colsaofrancisco.com.br', 'Professor'),
(27, 'Sandra Aparecida Rinaldo Machado', 'sandra@colsaofrancisco.com.br', 'Professor'),
(29, 'Solange Aparecida De Lima Ruiz', 'solange@colsaofrancisco.com.br', 'Professor'),
(31, 'Tatiana Lopes Gonçalves Dos Santos', 'tatiana.lopes@colsaofrancisco.com.br', 'Professor'),
(36, 'Tatiana Vaz Cardozo', 'tatiana.cardozo@colsaofrancisco.com.br', 'Professor'),
(32, 'Vanessa De Oliveira Xavier', 'vanessa.xavier@colsaofrancisco.com.br', 'Professor'),
(34, 'Vilma Conceição De Oliveira Pinheiro Santos', 'mimapinheiro@gmail.com', 'Professor'),
(41, 'Wallace Da Silva Paleari', 'wallace.paleari@colsaofrancisco.com.br', 'Professor'),
(35, 'Wender Tomaz Dos Reis', 'wender@colsaofrancisco.com.br', 'Professor'),
(66, 'William Paulino', 'william.paulino@colsaofrancisco.com.br', 'Professor'),
(294, 'Maria Helena Vital', 'mariahelena@colsaofrancisco.com.br', 'Recursos Humanos'),
(295, 'João De Assunção Andrade Nunes', 'joaoassuncao@uol.com.br', 'Contabilidade'),
(299, 'Neide Do Nascimento Silva', 'neide@colsaofrancisco.com.br', 'Secretaria'),
(301, 'Adriana Aparecida Gaspar Saheb', 'adrianagaspar@colsaofrancisco.com.br', 'Coordenação'),
(302, 'Carla Maria Rodrigues Gonçalves', 'carla@colsaofrancisco.com.br', 'Coordenação'),
(303, 'Leila Barcha Borghese', 'leila@colsaofrancisco.com.br', 'Coordenação'),
(305, 'Vanessa Simoa Sousa', 'vanessa@colsaofrancisco.com.br', 'Coordenação'),
(310, 'Maria Avany Da Silva Pimentel', 'avany@colsaofrancisco.com.br', 'Portaria ou Recepção'),
(344, 'Ana Lúcia De Oliveira Silva', 'ana.silva@colsaofrancisco.com.br', 'Tesouraria'),
(378, 'Marcelo Sorrentino', 'marcelo.sorrentino@colsaofrancisco.com.br', 'Coordenação'),
(390, 'Rosana Rodrigues Costa Funari De Castro', 'rosanacosta@colsaofrancisco.com.br', 'Direção ou Vice-Direção'),
(392, 'Cinara De Souza Cochar', 'cinara.cochar@colsaofrancisco.com.br', 'Marketing, Comunicação ou Eventos'),
(394, 'Cloves Rodrigues De Souza Neto', 'cloves.neto@colsaofrancisco.com.br', 'Tecnologia da informação'),
(398, 'Isabela Coelho Costa', 'isabela.costa@colsaofrancisco.com.br', 'Financeiro'),
(399, 'Meira Fernandes - Contas A Pagar', 'jonilson.evangelista@meirafernandes.com.br', 'Financeiro'),
(403, 'Andre Richard Pereira Silva Dos Santos', 'andre.santos@colsaofrancisco.com.br', 'Tecnologia da informação'),
(404, 'Gabriel Batista Santos', 'gabriel.santos@colsaofrancisco.com.br', 'Comercial');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
