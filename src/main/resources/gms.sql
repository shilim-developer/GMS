/*
SQLyog Ultimate v11.27 (32 bit)
MySQL - 5.7.10-log : Database - gms
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`gms` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `gms`;

/*Table structure for table `equipment` */

DROP TABLE IF EXISTS `equipment`;

CREATE TABLE `equipment` (
  `equipmentId` int(15) NOT NULL AUTO_INCREMENT,
  `equipmentName` varchar(255) DEFAULT NULL,
  `equipment_type` varchar(255) DEFAULT NULL,
  `eStandard` varchar(255) DEFAULT NULL,
  `ePrice` int(255) DEFAULT NULL,
  `totalNum` int(255) DEFAULT NULL,
  `loanableNum` int(255) DEFAULT NULL,
  PRIMARY KEY (`equipmentId`),
  KEY `typeId` (`equipment_type`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

/*Data for the table `equipment` */

insert  into `equipment`(`equipmentId`,`equipmentName`,`equipment_type`,`eStandard`,`ePrice`,`totalNum`,`loanableNum`) values (51,'棒球','3','正常',23,23,10),(52,'冰球','9','正常',5,12,12),(53,'杠铃','10','5公斤',12,34,20),(55,'冰棒球','8','正常',111,11,11),(56,'台球12','11','正常',1111,11,11);

/*Table structure for table `equipmentloan` */

DROP TABLE IF EXISTS `equipmentloan`;

CREATE TABLE `equipmentloan` (
  `equipmentLoanId` int(15) NOT NULL AUTO_INCREMENT,
  `e_id` int(15) DEFAULT NULL,
  `eName` varchar(255) DEFAULT NULL,
  `user_id` int(15) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL,
  `endDate` datetime DEFAULT NULL,
  `rentDay` int(255) DEFAULT NULL,
  `ePayment` int(255) DEFAULT NULL,
  `rentNum` int(255) DEFAULT NULL,
  `eStatus` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`equipmentLoanId`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;

/*Data for the table `equipmentloan` */

insert  into `equipmentloan`(`equipmentLoanId`,`e_id`,`eName`,`user_id`,`startDate`,`endDate`,`rentDay`,`ePayment`,`rentNum`,`eStatus`) values (40,NULL,'棒球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,23,1,'审核通过'),(41,NULL,'棒球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,23,1,'审核不通过'),(42,NULL,'冰球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,15,1,'审核不通过'),(43,NULL,'棒球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,23,1,'审核不通过'),(44,NULL,'棒球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,23,1,'审核通过'),(45,NULL,'棒球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,23,1,NULL),(46,NULL,'棒球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,23,1,NULL),(47,NULL,'棒球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,23,1,NULL),(48,NULL,'棒球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,23,1,NULL),(49,NULL,'棒球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,23,1,NULL),(50,NULL,'棒球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,23,1,NULL),(51,NULL,'棒球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,46,2,NULL),(52,NULL,'棒球',1,'2017-06-11 00:00:00','2017-06-12 00:00:00',NULL,23,1,NULL),(53,NULL,'冰球',1,'2017-06-11 00:00:00','2017-06-13 00:00:00',NULL,55,11,'审核不通过'),(54,NULL,'棒球',1,'2017-06-12 00:00:00','2017-06-13 00:00:00',NULL,23,1,NULL),(55,NULL,'棒球',1,'2017-06-12 00:00:00','2017-06-13 00:00:00',NULL,23,1,'审核通过'),(56,NULL,'棒球',2,'2017-06-12 00:00:00','2017-06-13 00:00:00',NULL,23,1,'审核通过'),(57,NULL,'棒球',2,'2017-06-12 00:00:00','2017-06-13 00:00:00',NULL,23,1,'审核不通过'),(58,NULL,'杠铃',5,'2017-06-12 00:00:00','2017-06-14 00:00:00',NULL,60,5,'审核不通过');

/*Table structure for table `equipmenttype` */

DROP TABLE IF EXISTS `equipmenttype`;

CREATE TABLE `equipmenttype` (
  `typeId` int(15) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`typeId`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

/*Data for the table `equipmenttype` */

insert  into `equipmenttype`(`typeId`,`typeName`) values (3,'球类2'),(8,'游泳器材'),(9,'冰雪器材'),(10,'健身器材'),(11,'台球'),(13,'桌球');

/*Table structure for table `game` */

DROP TABLE IF EXISTS `game`;

CREATE TABLE `game` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `gamename` varchar(50) NOT NULL,
  `gametype` varchar(10) DEFAULT NULL,
  `gameplace` varchar(20) DEFAULT NULL,
  `equip` varchar(50) DEFAULT NULL,
  `gametime` varchar(50) DEFAULT NULL,
  `gamedec` varchar(150) DEFAULT NULL,
  `status` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

/*Data for the table `game` */

insert  into `game`(`id`,`gamename`,`gametype`,`gameplace`,`equip`,`gametime`,`gamedec`,`status`) values (16,'1','1','1','1','2017-06-08T16:00:00.000Z','1','1'),(17,'1','1','1','1','2017-06-08T16:00:00.000Z','1',NULL),(23,'海大杯','足球','足球场','足球','2017-06-09T16:00:00.000Z','精彩的足球赛',NULL),(24,'篮球赛','球类','四号场','篮球','2014-06-24T16:00:00.000Z','精彩的篮球赛',NULL),(25,'篮球赛','篮球','三号场','篮球','2016-06-16T16:00:00.000Z','篮球赛',NULL);

/*Table structure for table `gamegrade` */

DROP TABLE IF EXISTS `gamegrade`;

CREATE TABLE `gamegrade` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  `oname` varchar(10) DEFAULT NULL,
  `grade` varchar(2) DEFAULT NULL,
  `bgrade` varchar(10) DEFAULT NULL,
  `cpname` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `gamegrade` */

insert  into `gamegrade`(`id`,`name`,`oname`,`grade`,`bgrade`,`cpname`) values (1,'李浩','朱婷','1','2：1','张国');

/*Table structure for table `gameperson` */

DROP TABLE IF EXISTS `gameperson`;

CREATE TABLE `gameperson` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `personname` varchar(10) DEFAULT NULL,
  `gender` char(2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `gameperson` */

insert  into `gameperson`(`id`,`personname`,`gender`) values (1,'李浩','男'),(2,'朱婷','女');

/*Table structure for table `gym_operate_log` */

DROP TABLE IF EXISTS `gym_operate_log`;

CREATE TABLE `gym_operate_log` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `log_details` varchar(200) NOT NULL COMMENT '日志的信息',
  `log_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '日志的时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='操作日志';

/*Data for the table `gym_operate_log` */

/*Table structure for table `gym_role` */

DROP TABLE IF EXISTS `gym_role`;

CREATE TABLE `gym_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `description` varchar(100) NOT NULL COMMENT '角色描述',
  `status` tinyint(4) DEFAULT '1' COMMENT '''数据状态,1:正常,2:删除''',
  `type` varchar(10) DEFAULT NULL COMMENT '角色类型',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COMMENT='角色表';

/*Data for the table `gym_role` */

insert  into `gym_role`(`id`,`description`,`status`,`type`) values (1,'超级管理员',1,NULL),(2,'场地管理员',1,NULL),(3,'器材管理员',1,NULL),(4,'赛事管理员',1,NULL),(5,'普通用户',1,NULL),(14,'我是',NULL,NULL),(16,'555',NULL,NULL);

/*Table structure for table `gym_user` */

DROP TABLE IF EXISTS `gym_user`;

CREATE TABLE `gym_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '分别有普通用户，场地，比赛，器材管理专员和超级用户',
  `account` varchar(16) NOT NULL COMMENT '账号',
  `password` varchar(60) NOT NULL COMMENT '密码',
  `name` varchar(30) NOT NULL COMMENT '姓名',
  `cardNo` varchar(30) DEFAULT NULL COMMENT '卡号',
  `email` varchar(30) DEFAULT NULL COMMENT '邮箱',
  `mobilephone` varchar(30) DEFAULT NULL COMMENT '手机',
  `address` varchar(30) DEFAULT NULL COMMENT '地址',
  `status` tinyint(4) DEFAULT '1',
  `role_id` bigint(20) NOT NULL DEFAULT '5',
  PRIMARY KEY (`id`),
  KEY `user_role_id` (`role_id`),
  CONSTRAINT `user_role_id` FOREIGN KEY (`role_id`) REFERENCES `gym_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COMMENT='用户';

/*Data for the table `gym_user` */

insert  into `gym_user`(`id`,`account`,`password`,`name`,`cardNo`,`email`,`mobilephone`,`address`,`status`,`role_id`) values (1,'admin','a1f187721c63501356bf791e69382c','辉辉','201411701230','269506000@qq.com','13432843285','海大路1号',1,1),(2,'commonUser','a1f187721c63501356bf791e69382c','jerry',NULL,'269506121@qq.com',NULL,'海大路1号',1,3),(3,'placeManager','a1f187721c63501356bf791e69382c','金刚琳',NULL,'269506121@qq.com',NULL,'海大路1号',1,2),(4,'gameManager','a1f187721c63501356bf791e69382c','陈启绍','201411701205','365012701@qq.com','12331234','海浪A512',1,4),(5,'test','a1f187721c63501356bf791e69382c','a',NULL,NULL,NULL,NULL,1,5),(6,'test2','a1f187721c63501356bf791e69382c','测试账号',NULL,NULL,NULL,NULL,1,5),(7,'shilim','202cb962ac59075b964b07152d234b70','shilim','12365544','1251314045@qq.com','11111111','11111',1,1),(8,'魔术师','5d41402abc4b2a76b9719d911017c592','市里面','123231','1251314045@qq.com','111111111','111111111',1,1);

/*Table structure for table `place` */

DROP TABLE IF EXISTS `place`;

CREATE TABLE `place` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `place_name` varchar(20) DEFAULT NULL,
  `place_location` varchar(20) DEFAULT NULL,
  `place_type` int(11) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

/*Data for the table `place` */

insert  into `place`(`id`,`place_name`,`place_location`,`place_type`,`cost`,`status`) values (29,'篮球场1号场','东',2,1,0),(30,'乒乓球场','西区',7,3,0),(31,'篮球场12','西',2,11,NULL),(33,'网球场1','东',11,11,0),(34,'222','2222',2,222,0),(35,'biang1','动',2,1112,NULL);

/*Table structure for table `place_lease_record` */

DROP TABLE IF EXISTS `place_lease_record`;

CREATE TABLE `place_lease_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `result` varchar(255) DEFAULT NULL,
  `pay_status` tinyint(1) DEFAULT '0',
  `check_status` varchar(6) DEFAULT '待审核',
  PRIMARY KEY (`id`),
  KEY `place_id` (`place_id`),
  CONSTRAINT `place_lease_record_ibfk_1` FOREIGN KEY (`place_id`) REFERENCES `place` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

/*Data for the table `place_lease_record` */

insert  into `place_lease_record`(`id`,`place_id`,`start_time`,`end_time`,`user_id`,`cost`,`result`,`pay_status`,`check_status`) values (25,29,'2017-05-29 07:10:00','2017-05-29 09:45:00',1,1,NULL,0,'审核通过'),(26,29,'2017-05-30 07:10:00','2017-05-30 16:05:00',1,3,NULL,0,'审核通过'),(27,29,'2017-06-02 10:15:00','2017-06-02 18:10:00',1,3,NULL,0,'审核通过'),(28,29,'2017-05-31 07:10:00','2017-05-31 09:45:00',1,1,'时间已过',0,'审核不通过'),(29,30,'2017-05-31 07:10:00','2017-05-31 16:05:00',1,9,NULL,0,'审核通过'),(30,30,'2017-06-01 14:30:00','2017-06-01 16:05:00',1,3,'不通过',0,'审核不通过'),(31,29,'2017-05-31 07:10:00','2017-05-31 09:45:00',1,1,NULL,0,'审核通过'),(32,29,'2017-06-01 07:10:00','2017-06-01 09:45:00',1,1,'审核不通',0,'审核不通过'),(33,29,'2017-06-02 07:10:00','2017-06-02 09:45:00',1,1,'时间没有了',0,'审核不通过'),(34,31,'2017-05-29 07:10:00','2017-05-29 09:45:00',1,11,NULL,0,'待审核'),(35,33,'2017-06-15 16:30:00','2017-06-15 18:10:00',5,11,NULL,0,'审核通过'),(36,33,'2017-06-11 10:15:00','2017-06-11 16:05:00',5,22,'不通过',0,'审核不通过');

/*Table structure for table `place_status` */

DROP TABLE IF EXISTS `place_status`;

CREATE TABLE `place_status` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) DEFAULT NULL,
  `time_id` int(11) DEFAULT NULL,
  `place_status` varchar(255) DEFAULT '空闲',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=456 DEFAULT CHARSET=utf8;

/*Data for the table `place_status` */

insert  into `place_status`(`id`,`place_id`,`time_id`,`place_status`) values (176,29,1,'上课'),(177,29,2,'已租借'),(178,29,3,'已租借'),(179,29,4,'已预订'),(180,29,5,'已预订'),(181,29,6,'空闲'),(182,29,7,'空闲'),(183,29,8,'空闲'),(184,29,9,'上课'),(185,29,10,'已租借'),(186,29,11,'已租借'),(187,29,12,'空闲'),(188,29,13,'已租借'),(189,29,14,'空闲'),(190,29,15,'空闲'),(191,29,16,'空闲'),(192,29,17,'已租借'),(193,29,18,'已租借'),(194,29,19,'空闲'),(195,29,20,'已租借'),(196,29,21,'空闲'),(197,29,22,'空闲'),(198,29,23,'空闲'),(199,29,24,'空闲'),(200,29,25,'空闲'),(201,29,26,'空闲'),(202,29,27,'已租借'),(203,29,28,'空闲'),(204,29,29,'空闲'),(205,29,30,'空闲'),(206,29,31,'空闲'),(207,29,32,'空闲'),(208,29,33,'空闲'),(209,29,34,'空闲'),(210,29,35,'空闲'),(211,30,1,'空闲'),(212,30,2,'空闲'),(213,30,3,'空闲'),(214,30,4,'空闲'),(215,30,5,'空闲'),(216,30,6,'空闲'),(217,30,7,'空闲'),(218,30,8,'空闲'),(219,30,9,'空闲'),(220,30,10,'上课'),(221,30,11,'已租借'),(222,30,12,'空闲'),(223,30,13,'空闲'),(224,30,14,'空闲'),(225,30,15,'空闲'),(226,30,16,'上课'),(227,30,17,'空闲'),(228,30,18,'已租借'),(229,30,19,'空闲'),(230,30,20,'空闲'),(231,30,21,'空闲'),(232,30,22,'空闲'),(233,30,23,'空闲'),(234,30,24,'空闲'),(235,30,25,'空闲'),(236,30,26,'空闲'),(237,30,27,'空闲'),(238,30,28,'空闲'),(239,30,29,'空闲'),(240,30,30,'空闲'),(241,30,31,'空闲'),(242,30,32,'空闲'),(243,30,33,'空闲'),(244,30,34,'空闲'),(245,30,35,'空闲'),(246,31,1,'上课'),(247,31,2,'已预订'),(248,31,3,'空闲'),(249,31,4,'空闲'),(250,31,5,'空闲'),(251,31,6,'空闲'),(252,31,7,'空闲'),(253,31,8,'空闲'),(254,31,9,'空闲'),(255,31,10,'空闲'),(256,31,11,'空闲'),(257,31,12,'空闲'),(258,31,13,'空闲'),(259,31,14,'空闲'),(260,31,15,'空闲'),(261,31,16,'空闲'),(262,31,17,'空闲'),(263,31,18,'空闲'),(264,31,19,'空闲'),(265,31,20,'空闲'),(266,31,21,'空闲'),(267,31,22,'空闲'),(268,31,23,'空闲'),(269,31,24,'空闲'),(270,31,25,'空闲'),(271,31,26,'空闲'),(272,31,27,'空闲'),(273,31,28,'空闲'),(274,31,29,'空闲'),(275,31,30,'空闲'),(276,31,31,'空闲'),(277,31,32,'空闲'),(278,31,33,'上课'),(279,31,34,'上课'),(280,31,35,'空闲'),(281,32,1,'空闲'),(282,32,2,'空闲'),(283,32,3,'空闲'),(284,32,4,'空闲'),(285,32,5,'空闲'),(286,32,6,'空闲'),(287,32,7,'空闲'),(288,32,8,'空闲'),(289,32,9,'上课'),(290,32,10,'空闲'),(291,32,11,'空闲'),(292,32,12,'空闲'),(293,32,13,'空闲'),(294,32,14,'空闲'),(295,32,15,'空闲'),(296,32,16,'空闲'),(297,32,17,'空闲'),(298,32,18,'空闲'),(299,32,19,'上课'),(300,32,20,'空闲'),(301,32,21,'空闲'),(302,32,22,'空闲'),(303,32,23,'空闲'),(304,32,24,'上课'),(305,32,25,'空闲'),(306,32,26,'空闲'),(307,32,27,'空闲'),(308,32,28,'空闲'),(309,32,29,'空闲'),(310,32,30,'空闲'),(311,32,31,'空闲'),(312,32,32,'上课'),(313,32,33,'空闲'),(314,32,34,'空闲'),(315,32,35,'空闲'),(316,33,1,'上课'),(317,33,2,'空闲'),(318,33,3,'空闲'),(319,33,4,'空闲'),(320,33,5,'空闲'),(321,33,6,'空闲'),(322,33,7,'空闲'),(323,33,8,'空闲'),(324,33,9,'上课'),(325,33,10,'上课'),(326,33,11,'上课'),(327,33,12,'上课'),(328,33,13,'上课'),(329,33,14,'上课'),(330,33,15,'空闲'),(331,33,16,'空闲'),(332,33,17,'空闲'),(333,33,18,'空闲'),(334,33,19,'空闲'),(335,33,20,'空闲'),(336,33,21,'空闲'),(337,33,22,'空闲'),(338,33,23,'上课'),(339,33,24,'空闲'),(340,33,25,'上课'),(341,33,26,'空闲'),(342,33,27,'空闲'),(343,33,28,'空闲'),(344,33,29,'空闲'),(345,33,30,'空闲'),(346,33,31,'空闲'),(347,33,32,'空闲'),(348,33,33,'空闲'),(349,33,34,'空闲'),(350,33,35,'空闲'),(351,34,1,'空闲'),(352,34,2,'空闲'),(353,34,3,'空闲'),(354,34,4,'空闲'),(355,34,5,'空闲'),(356,34,6,'空闲'),(357,34,7,'空闲'),(358,34,8,'空闲'),(359,34,9,'空闲'),(360,34,10,'空闲'),(361,34,11,'空闲'),(362,34,12,'空闲'),(363,34,13,'空闲'),(364,34,14,'空闲'),(365,34,15,'空闲'),(366,34,16,'空闲'),(367,34,17,'空闲'),(368,34,18,'空闲'),(369,34,19,'空闲'),(370,34,20,'空闲'),(371,34,21,'空闲'),(372,34,22,'空闲'),(373,34,23,'空闲'),(374,34,24,'空闲'),(375,34,25,'空闲'),(376,34,26,'空闲'),(377,34,27,'空闲'),(378,34,28,'空闲'),(379,34,29,'空闲'),(380,34,30,'空闲'),(381,34,31,'空闲'),(382,34,32,'空闲'),(383,34,33,'空闲'),(384,34,34,'空闲'),(385,34,35,'空闲'),(386,35,1,'上课'),(387,35,2,'上课'),(388,35,3,'上课'),(389,35,4,'上课'),(390,35,5,'空闲'),(391,35,6,'空闲'),(392,35,7,'空闲'),(393,35,8,'空闲'),(394,35,9,'空闲'),(395,35,10,'空闲'),(396,35,11,'空闲'),(397,35,12,'空闲'),(398,35,13,'空闲'),(399,35,14,'空闲'),(400,35,15,'空闲'),(401,35,16,'空闲'),(402,35,17,'空闲'),(403,35,18,'上课'),(404,35,19,'空闲'),(405,35,20,'空闲'),(406,35,21,'空闲'),(407,35,22,'空闲'),(408,35,23,'空闲'),(409,35,24,'空闲'),(410,35,25,'空闲'),(411,35,26,'空闲'),(412,35,27,'空闲'),(413,35,28,'空闲'),(414,35,29,'空闲'),(415,35,30,'空闲'),(416,35,31,'空闲'),(417,35,32,'空闲'),(418,35,33,'空闲'),(419,35,34,'空闲'),(420,35,35,'空闲'),(421,36,1,'上课'),(422,36,2,'空闲'),(423,36,3,'空闲'),(424,36,4,'空闲'),(425,36,5,'空闲'),(426,36,6,'空闲'),(427,36,7,'空闲'),(428,36,8,'空闲'),(429,36,9,'空闲'),(430,36,10,'空闲'),(431,36,11,'空闲'),(432,36,12,'空闲'),(433,36,13,'空闲'),(434,36,14,'空闲'),(435,36,15,'空闲'),(436,36,16,'空闲'),(437,36,17,'空闲'),(438,36,18,'空闲'),(439,36,19,'空闲'),(440,36,20,'空闲'),(441,36,21,'空闲'),(442,36,22,'空闲'),(443,36,23,'空闲'),(444,36,24,'空闲'),(445,36,25,'空闲'),(446,36,26,'空闲'),(447,36,27,'空闲'),(448,36,28,'空闲'),(449,36,29,'空闲'),(450,36,30,'空闲'),(451,36,31,'空闲'),(452,36,32,'空闲'),(453,36,33,'空闲'),(454,36,34,'空闲'),(455,36,35,'空闲');

/*Table structure for table `place_type` */

DROP TABLE IF EXISTS `place_type`;

CREATE TABLE `place_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `place_type_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

/*Data for the table `place_type` */

insert  into `place_type`(`id`,`place_type_name`) values (2,'篮球场1'),(7,'乒乓球场'),(8,'篮球场2'),(9,'羽毛球'),(11,'网球场'),(13,'羽毛球4');

/*Table structure for table `post` */

DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL,
  `context` varchar(500) DEFAULT NULL,
  `time` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `post` */

insert  into `post`(`id`,`name`,`context`,`time`) values (2,'海大杯足球赛','在体育馆三号足球场，数院对战电院','2017-06-24T16:00:00.000Z'),(3,'海大杯足球赛','在体育馆三号足球场，数院对战电院','2017-06-24T16:00:00.000Z'),(4,'海大杯足球赛','在体育馆三号足球场，数院对战电院','2017-06-24T16:00:00.000Z'),(6,'海大排球赛','111222','2017-07-14');

/*Table structure for table `time_option` */

DROP TABLE IF EXISTS `time_option`;

CREATE TABLE `time_option` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day` varchar(255) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

/*Data for the table `time_option` */

insert  into `time_option`(`id`,`day`,`course`,`start_time`,`end_time`) values (1,'日','1','2017-06-11 07:10:00','2017-06-11 09:45:00'),(2,'一','1','2017-06-12 07:10:00','2017-06-12 09:45:00'),(3,'二','1','2017-06-13 07:10:00','2017-06-13 09:45:00'),(4,'三','1','2017-06-14 07:10:00','2017-06-14 09:45:00'),(5,'四','1','2017-06-15 07:10:00','2017-06-15 09:45:00'),(6,'五','1','2017-06-16 07:10:00','2017-06-16 09:45:00'),(7,'六','1','2017-06-17 07:10:00','2017-06-17 09:45:00'),(8,'日','2','2017-06-11 10:15:00','2017-06-11 11:50:00'),(9,'一','2','2017-06-12 10:15:00','2017-06-12 11:50:00'),(10,'二','2','2017-06-13 10:15:00','2017-06-13 11:50:00'),(11,'三','2','2017-06-14 10:15:00','2017-06-14 11:50:00'),(12,'四','2','2017-06-15 10:15:00','2017-06-15 11:50:00'),(13,'五','2','2017-06-16 10:15:00','2017-06-16 11:50:00'),(14,'六','2','2017-06-17 10:15:00','2017-06-17 11:50:00'),(15,'日','3','2017-06-11 14:30:00','2017-06-11 16:05:00'),(16,'一','3','2017-06-12 14:30:00','2017-06-12 16:05:00'),(17,'二','3','2017-06-13 14:30:00','2017-06-13 16:05:00'),(18,'三','3','2017-06-14 14:30:00','2017-06-14 16:05:00'),(19,'四','3','2017-06-15 14:30:00','2017-06-15 16:05:00'),(20,'五','3','2017-06-16 14:30:00','2017-06-16 16:05:00'),(21,'六','3','2017-06-17 14:30:00','2017-06-17 10:52:30'),(22,'日','4','2017-06-11 16:30:00','2017-06-11 18:10:00'),(23,'一','4','2017-06-12 16:30:00','2017-06-12 18:10:00'),(24,'二','4','2017-06-13 16:30:00','2017-06-13 18:10:00'),(25,'三','4','2017-06-14 16:30:00','2017-06-14 18:10:00'),(26,'四','4','2017-06-15 16:30:00','2017-06-15 18:10:00'),(27,'五','4','2017-06-16 16:30:00','2017-06-16 18:10:00'),(28,'六','4','2017-06-17 16:30:00','2017-06-17 18:10:00'),(29,'日','5','2017-06-11 19:30:00','2017-06-11 10:50:09'),(30,'一','5','2017-06-12 19:30:00','2017-06-12 10:50:09'),(31,'二','5','2017-06-13 19:30:00','2017-06-13 10:50:09'),(32,'三','5','2017-06-14 19:30:00','2017-06-14 10:50:09'),(33,'四','5','2017-06-15 19:30:00','2017-06-15 10:50:09'),(34,'五','5','2017-06-16 19:30:00','2017-06-16 10:50:09'),(35,'六','5','2017-06-17 19:30:00','2017-06-17 10:50:09');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
