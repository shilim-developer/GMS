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
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

/*Data for the table `equipment` */

insert  into `equipment`(`equipmentId`,`equipmentName`,`equipment_type`,`eStandard`,`ePrice`,`totalNum`,`loanableNum`) values (51,'棒球','3','正常',23,23,7),(52,'冰球','4','正常',15,25,10),(53,'篮球','3','111',111,11,1);

/*Table structure for table `equipmentloan` */

DROP TABLE IF EXISTS `equipmentloan`;

CREATE TABLE `equipmentloan` (
  `equipmentLoanId` int(15) NOT NULL AUTO_INCREMENT,
  `e_id` int(15) DEFAULT NULL,
  `eName` varchar(255) DEFAULT NULL,
  `user_id` int(15) DEFAULT NULL,
  `startDate` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `endDate` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `rentDay` int(255) DEFAULT NULL,
  `ePayment` int(255) DEFAULT NULL,
  `rentNum` int(255) DEFAULT NULL,
  `eStatus` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`equipmentLoanId`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

/*Data for the table `equipmentloan` */

insert  into `equipmentloan`(`equipmentLoanId`,`e_id`,`eName`,`user_id`,`startDate`,`endDate`,`rentDay`,`ePayment`,`rentNum`,`eStatus`) values (25,NULL,'棒球',1,'2017-06-10 12:16:59','2017-06-10 12:16:59',NULL,161,7,'审核通过');

/*Table structure for table `equipmenttype` */

DROP TABLE IF EXISTS `equipmenttype`;

CREATE TABLE `equipmenttype` (
  `typeId` int(15) NOT NULL AUTO_INCREMENT,
  `typeName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`typeId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `equipmenttype` */

insert  into `equipmenttype`(`typeId`,`typeName`) values (3,'球类'),(4,'冰雪器材'),(6,'8'),(7,'健身器材'),(8,'游泳器材');

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='角色表';

/*Data for the table `gym_role` */

insert  into `gym_role`(`id`,`description`,`status`,`type`) values (1,'超级管理员',1,NULL),(2,'场地管理员',1,NULL),(3,'器材管理员',1,NULL),(4,'赛事管理员',1,NULL),(5,'普通用户',1,NULL);

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
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_role_id` (`role_id`),
  CONSTRAINT `user_role_id` FOREIGN KEY (`role_id`) REFERENCES `gym_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='用户';

/*Data for the table `gym_user` */

insert  into `gym_user`(`id`,`account`,`password`,`name`,`cardNo`,`email`,`mobilephone`,`address`,`status`,`role_id`) values (1,'admin','a1f187721c63501356bf791e69382c','辉辉','201411701230','269506000@qq.com','13432843285','海大路1号',1,1),(2,'commonUser','a1f187721c63501356bf791e69382c','金刚狼','2014117012301','269506121@qq.com','13432843285','海大路1号',1,5),(3,'placeManager','a1f187721c63501356bf791e69382c','金刚狼','2014117012311','269506121@qq.com','13432843285','海大路1号',1,2),(4,'gameManager','a1f187721c63501356bf791e69382c','陈启绍','201411701205','365012701@qq.com','12331234','海浪A512',NULL,4),(5,'huyloveyou','a1f187721c63501356bf791e69382c','辉辉辉',NULL,'269506000@qq.com',NULL,'海浪',NULL,3);

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
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;

/*Data for the table `place` */

insert  into `place`(`id`,`place_name`,`place_location`,`place_type`,`cost`,`status`) values (29,'篮球场1号场','东',2,1,0),(30,'乒乓球场','西区',7,3,0);

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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

/*Data for the table `place_lease_record` */

insert  into `place_lease_record`(`id`,`place_id`,`start_time`,`end_time`,`user_id`,`cost`,`result`,`pay_status`,`check_status`) values (25,29,'2017-05-29 07:10:00','2017-05-29 09:45:00',1,1,NULL,0,'审核通过'),(26,29,'2017-05-30 07:10:00','2017-05-30 16:05:00',1,3,NULL,0,'审核通过'),(27,29,'2017-06-02 10:15:00','2017-06-02 18:10:00',1,3,NULL,0,'审核通过'),(28,29,'2017-05-31 07:10:00','2017-05-31 09:45:00',1,1,'时间已过',0,'审核不通过'),(29,30,'2017-05-31 07:10:00','2017-05-31 16:05:00',1,9,NULL,0,'审核通过'),(30,30,'2017-06-01 14:30:00','2017-06-01 16:05:00',1,3,'不通过',0,'审核不通过'),(31,29,'2017-05-31 07:10:00','2017-05-31 09:45:00',1,1,NULL,0,'待审核'),(32,29,'2017-06-01 07:10:00','2017-06-01 09:45:00',1,1,NULL,0,'待审核'),(33,29,'2017-06-02 07:10:00','2017-06-02 09:45:00',1,1,'时间没有了',0,'审核不通过');

/*Table structure for table `place_status` */

DROP TABLE IF EXISTS `place_status`;

CREATE TABLE `place_status` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) DEFAULT NULL,
  `time_id` int(11) DEFAULT NULL,
  `place_status` varchar(255) DEFAULT '空闲',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=246 DEFAULT CHARSET=utf8;

/*Data for the table `place_status` */

insert  into `place_status`(`id`,`place_id`,`time_id`,`place_status`) values (176,29,1,'上课'),(177,29,2,'已租借'),(178,29,3,'已租借'),(179,29,4,'已预订'),(180,29,5,'已预订'),(181,29,6,'空闲'),(182,29,7,'空闲'),(183,29,8,'空闲'),(184,29,9,'上课'),(185,29,10,'已租借'),(186,29,11,'已租借'),(187,29,12,'空闲'),(188,29,13,'已租借'),(189,29,14,'空闲'),(190,29,15,'空闲'),(191,29,16,'空闲'),(192,29,17,'已租借'),(193,29,18,'已租借'),(194,29,19,'空闲'),(195,29,20,'已租借'),(196,29,21,'空闲'),(197,29,22,'空闲'),(198,29,23,'空闲'),(199,29,24,'空闲'),(200,29,25,'空闲'),(201,29,26,'空闲'),(202,29,27,'已租借'),(203,29,28,'空闲'),(204,29,29,'空闲'),(205,29,30,'空闲'),(206,29,31,'空闲'),(207,29,32,'空闲'),(208,29,33,'空闲'),(209,29,34,'空闲'),(210,29,35,'空闲'),(211,30,1,'空闲'),(212,30,2,'空闲'),(213,30,3,'空闲'),(214,30,4,'空闲'),(215,30,5,'空闲'),(216,30,6,'空闲'),(217,30,7,'空闲'),(218,30,8,'空闲'),(219,30,9,'空闲'),(220,30,10,'上课'),(221,30,11,'已租借'),(222,30,12,'空闲'),(223,30,13,'空闲'),(224,30,14,'空闲'),(225,30,15,'空闲'),(226,30,16,'上课'),(227,30,17,'空闲'),(228,30,18,'已租借'),(229,30,19,'空闲'),(230,30,20,'空闲'),(231,30,21,'空闲'),(232,30,22,'空闲'),(233,30,23,'空闲'),(234,30,24,'空闲'),(235,30,25,'空闲'),(236,30,26,'空闲'),(237,30,27,'空闲'),(238,30,28,'空闲'),(239,30,29,'空闲'),(240,30,30,'空闲'),(241,30,31,'空闲'),(242,30,32,'空闲'),(243,30,33,'空闲'),(244,30,34,'空闲'),(245,30,35,'空闲');

/*Table structure for table `place_type` */

DROP TABLE IF EXISTS `place_type`;

CREATE TABLE `place_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `place_type_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `place_type` */

insert  into `place_type`(`id`,`place_type_name`) values (2,'篮球场1'),(7,'乒乓球'),(8,'篮球场1');

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

insert  into `time_option`(`id`,`day`,`course`,`start_time`,`end_time`) values (1,'日','1','2017-05-28 07:10:00','2017-05-28 09:45:00'),(2,'一','1','2017-05-29 07:10:00','2017-05-29 09:45:00'),(3,'二','1','2017-05-30 07:10:00','2017-05-30 09:45:00'),(4,'三','1','2017-05-31 07:10:00','2017-05-31 09:45:00'),(5,'四','1','2017-06-01 07:10:00','2017-06-01 09:45:00'),(6,'五','1','2017-06-02 07:10:00','2017-06-02 09:45:00'),(7,'六','1','2017-06-03 07:10:00','2017-06-03 09:45:00'),(8,'日','2','2017-05-28 10:15:00','2017-05-28 11:50:00'),(9,'一','2','2017-05-29 10:15:00','2017-05-29 11:50:00'),(10,'二','2','2017-05-30 10:15:00','2017-05-30 11:50:00'),(11,'三','2','2017-05-31 10:15:00','2017-05-31 11:50:00'),(12,'四','2','2017-06-01 10:15:00','2017-06-01 11:50:00'),(13,'五','2','2017-06-02 10:15:00','2017-06-02 11:50:00'),(14,'六','2','2017-06-03 10:15:00','2017-06-03 11:50:00'),(15,'日','3','2017-05-28 14:30:00','2017-05-28 16:05:00'),(16,'一','3','2017-05-29 14:30:00','2017-05-29 16:05:00'),(17,'二','3','2017-05-30 14:30:00','2017-05-30 16:05:00'),(18,'三','3','2017-05-31 14:30:00','2017-05-31 16:05:00'),(19,'四','3','2017-06-01 14:30:00','2017-06-01 16:05:00'),(20,'五','3','2017-06-02 14:30:00','2017-06-02 16:05:00'),(21,'六','3','2017-06-03 14:30:00','2017-06-03 10:52:30'),(22,'日','4','2017-05-28 16:30:00','2017-05-28 18:10:00'),(23,'一','4','2017-05-29 16:30:00','2017-05-29 18:10:00'),(24,'二','4','2017-05-30 16:30:00','2017-05-30 18:10:00'),(25,'三','4','2017-05-31 16:30:00','2017-05-31 18:10:00'),(26,'四','4','2017-06-01 16:30:00','2017-06-01 18:10:00'),(27,'五','4','2017-06-02 16:30:00','2017-06-02 18:10:00'),(28,'六','4','2017-06-03 16:30:00','2017-06-03 18:10:00'),(29,'日','5','2017-05-28 19:30:00','2017-05-28 10:50:09'),(30,'一','5','2017-05-29 19:30:00','2017-05-29 10:50:09'),(31,'二','5','2017-05-30 19:30:00','2017-05-30 10:50:09'),(32,'三','5','2017-05-31 19:30:00','2017-05-31 10:50:09'),(33,'四','5','2017-06-01 19:30:00','2017-06-01 10:50:09'),(34,'五','5','2017-06-02 19:30:00','2017-06-02 10:50:09'),(35,'六','5','2017-06-03 19:30:00','2017-06-03 10:50:09');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
