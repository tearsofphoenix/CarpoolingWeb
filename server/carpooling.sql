-- phpMyAdmin SQL Dump
-- version 4.2.5
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2014-07-15 15:09:58
-- 服务器版本： 5.6.19
-- PHP Version: 5.4.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `carpooling`
--

-- --------------------------------------------------------

--
-- 表的结构 `deal`
--

CREATE TABLE IF NOT EXISTS `deal` (
  `uuid` varchar(32) NOT NULL,
  `path_id` varchar(32) NOT NULL,
  `main_user_id` varchar(32) NOT NULL,
  `start_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `end_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `depart_condition` text NOT NULL,
  `properties` text NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `deal_user`
--

CREATE TABLE IF NOT EXISTS `deal_user` (
  `uuid` varchar(32) NOT NULL,
  `member_id` varchar(32) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `location`
--

CREATE TABLE IF NOT EXISTS `location` (
  `uuid` varchar(32) NOT NULL,
  `name` text NOT NULL,
  `longitude` float NOT NULL,
  `latitude` float NOT NULL,
  `properties` text NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `location_path`
--

CREATE TABLE IF NOT EXISTS `location_path` (
  `uuid` varchar(32) NOT NULL,
  `location_id` varchar(32) NOT NULL,
  `path_id` varchar(32) NOT NULL,
  `path_idx` int(11) NOT NULL,
  `properties` text NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `uuid` varchar(32) NOT NULL,
  `session_id` varchar(32) NOT NULL,
  `sender_id` varchar(32) NOT NULL,
  `receiver_id` varchar(32) NOT NULL,
  `content` text NOT NULL,
  `image_id` varchar(32) NOT NULL,
  `audio_id` varchar(32) NOT NULL,
  `properties` text NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `path`
--

CREATE TABLE IF NOT EXISTS `path` (
  `uuid` varchar(36) NOT NULL,
  `starter` varchar(36) DEFAULT NULL,
  `start` varchar(36) DEFAULT NULL,
  `end` varchar(36) DEFAULT NULL,
  `start_date` timestamp NULL DEFAULT NULL,
  `gather_location` varchar(36) DEFAULT NULL,
  `gather_time` time NOT NULL DEFAULT '00:00:00',
  `properties` text,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `path`
--

INSERT INTO `path` (`uuid`, `starter`, `start`, `end`, `start_date`, `gather_location`, `gather_time`, `properties`, `update_time`, `status`) VALUES
('d43a1c12-0c21-11e4-82ad-81510f578bb1', 'a', 'a', 'a', '2014-07-15 13:13:36', 'a', '00:00:00', NULL, '2014-07-15 13:13:36', 0);

-- --------------------------------------------------------

--
-- 表的结构 `path_location`
--

CREATE TABLE IF NOT EXISTS `path_location` (
  `uuid` varchar(32) NOT NULL,
  `path_id` varchar(32) NOT NULL,
  `location_id` varchar(32) NOT NULL,
  `location_idx` int(11) NOT NULL,
  `properties` text NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `session`
--

CREATE TABLE IF NOT EXISTS `session` (
  `uuid` varchar(32) NOT NULL,
  `name` text NOT NULL,
  `properties` text NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `session_user`
--

CREATE TABLE IF NOT EXISTS `session_user` (
  `uuid` varchar(32) NOT NULL,
  `session_id` varchar(32) NOT NULL,
  `user_id` varchar(32) NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `storage`
--

CREATE TABLE IF NOT EXISTS `storage` (
  `uuid` varchar(32) NOT NULL,
  `path` text NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `uuid` varchar(32) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `avatar_id` varchar(32) NOT NULL,
  `wechat_id` text NOT NULL,
  `properties` text NOT NULL,
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`uuid`, `name`, `email`, `avatar_id`, `wechat_id`, `properties`, `update_time`, `status`) VALUES
('23577342995595265', '祝无双', 'a@b.com', '', '', '', '2014-07-15 03:24:07', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `deal`
--
ALTER TABLE `deal`
 ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `deal_user`
--
ALTER TABLE `deal_user`
 ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
 ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `location_path`
--
ALTER TABLE `location_path`
 ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
 ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `path`
--
ALTER TABLE `path`
 ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `path_location`
--
ALTER TABLE `path_location`
 ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
 ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `session_user`
--
ALTER TABLE `session_user`
 ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `storage`
--
ALTER TABLE `storage`
 ADD PRIMARY KEY (`uuid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`uuid`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
