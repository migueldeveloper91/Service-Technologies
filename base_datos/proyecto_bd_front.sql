-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: datos_clientes
-- ------------------------------------------------------
-- Server version	9.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `id_clinte` int NOT NULL,
  `nombre_cliente` varchar(100) DEFAULT NULL,
  `apellido_cliente` varchar(100) DEFAULT NULL,
  `telefono_ clinte` int DEFAULT NULL,
  `direccion_clinte` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_clinte`),
  CONSTRAINT `fk_cliente` FOREIGN KEY (`id_clinte`) REFERENCES `producto_tegnologico` (`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_hardware_ssd`
--

DROP TABLE IF EXISTS `producto_hardware_ssd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_hardware_ssd` (
  `id_ssd` int NOT NULL,
  `marca_ssd` varchar(100) DEFAULT NULL,
  `descripcion_ssd` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_ssd`),
  CONSTRAINT `fk_ssd` FOREIGN KEY (`id_ssd`) REFERENCES `producto_tegnologico` (`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_hardware_ssd`
--

LOCK TABLES `producto_hardware_ssd` WRITE;
/*!40000 ALTER TABLE `producto_hardware_ssd` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_hardware_ssd` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_ram`
--

DROP TABLE IF EXISTS `producto_ram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_ram` (
  `id_ram` int NOT NULL,
  `marca_ram` varchar(100) DEFAULT NULL,
  `descripcion_ram` varchar(100) DEFAULT NULL,
  `capacidad_ram` int DEFAULT NULL,
  PRIMARY KEY (`id_ram`),
  CONSTRAINT `fk_ram` FOREIGN KEY (`id_ram`) REFERENCES `producto_tegnologico` (`id_producto`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_ram`
--

LOCK TABLES `producto_ram` WRITE;
/*!40000 ALTER TABLE `producto_ram` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_ram` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_tegnologico`
--

DROP TABLE IF EXISTS `producto_tegnologico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_tegnologico` (
  `id_producto` int NOT NULL,
  `nombre_producto` varchar(100) DEFAULT NULL,
  `color_producto` varchar(100) DEFAULT NULL,
  `tamaño_producto` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_tegnologico`
--

LOCK TABLES `producto_tegnologico` WRITE;
/*!40000 ALTER TABLE `producto_tegnologico` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_tegnologico` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-22 16:56:16
