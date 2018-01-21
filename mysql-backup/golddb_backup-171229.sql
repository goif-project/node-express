# ************************************************************
# Sequel Pro SQL dump
# バージョン 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# ホスト: 127.0.0.1 (MySQL 5.7.20)
# データベース: golf_db
# 作成時刻: 2017-12-28 16:57:44 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# テーブルのダンプ total_score
# ------------------------------------------------------------

DROP TABLE IF EXISTS `total_score`;

CREATE TABLE `total_score` (
  `total_score_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `score` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`total_score_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `total_score` WRITE;
/*!40000 ALTER TABLE `total_score` DISABLE KEYS */;

INSERT INTO `total_score` (`total_score_id`, `score`, `user_name`)
VALUES
	(1,100,'あごあご'),
	(2,1,'あごあごあご'),
	(3,10,'agoago'),
	(4,50,'あーご'),
	(5,100,'名前');

/*!40000 ALTER TABLE `total_score` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
