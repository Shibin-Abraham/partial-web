-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2024 at 10:11 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_drive_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `car`
--

CREATE TABLE `car` (
  `car_id` int(11) NOT NULL,
  `car_name` varchar(30) NOT NULL,
  `company` varchar(30) NOT NULL,
  `img_name` varchar(30) NOT NULL,
  `showroom_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`car_id`, `car_name`, `company`, `img_name`, `showroom_id`) VALUES
(9, 'Celerio (vxi)', 'Maruti Suzuki', 'car1.jpeg', 2),
(10, 'Wagonr (lxi)', 'Maruti Suzuki', 'car3.jpeg', 2),
(11, 'S-presso (vxi)', 'Maruti Suzuki', 'car2.jpeg', 3),
(12, 'test', 'test', 'car4.jpeg', 2),
(13, 's', 'Maruti Suzuki', 'car8.jpeg', 2);

-- --------------------------------------------------------

--
-- Table structure for table `car_design`
--

CREATE TABLE `car_design` (
  `car_design_id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `seating` int(11) NOT NULL,
  `type` varchar(20) NOT NULL,
  `fuel` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `car_design`
--

INSERT INTO `car_design` (`car_design_id`, `car_id`, `seating`, `type`, `fuel`) VALUES
(11, 9, 4, 'Manuel', 'Petrol'),
(27, 11, 10, 'Manuel', 'Petrol'),
(35, 10, 4, 'Manuel', 'Petrol'),
(37, 13, 10, 'test', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `showroom`
--

CREATE TABLE `showroom` (
  `showroom_id` int(11) NOT NULL,
  `showroom_name` varchar(30) NOT NULL,
  `showroom_address` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `img_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `showroom`
--

INSERT INTO `showroom` (`showroom_id`, `showroom_name`, `showroom_address`, `status`, `phone`, `img_name`) VALUES
(2, 'Maruti Point', 'Nadakkvu, Kozhikode Kerala 673579', 'open', '1234567890', '0.jpg'),
(3, 'Nexa', 'Pulpally, Wayanad Kerala 673572', 'closed', '2235346401', '1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `test_slot`
--

CREATE TABLE `test_slot` (
  `s_id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL,
  `car_design_id` int(11) NOT NULL,
  `showroom_id` int(11) NOT NULL,
  `full_name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `test_slot`
--

INSERT INTO `test_slot` (`s_id`, `u_id`, `car_design_id`, `showroom_id`, `full_name`, `email`, `phone`, `date`, `time`) VALUES
(2, 1, 27, 2, 'john', 'test@gmail.com', '1234567890', '2024-01-01', '12:30:00'),
(3, 1, 11, 2, 'tsw', 'test@gmail.com', '2235346401', '2024-01-01', '12:30:00'),
(4, 1, 35, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-28', '21:36:00'),
(5, 1, 35, 2, 'shinto', 'Shinto@gmail.com', '1233', '2023-12-28', '21:50:00'),
(6, 1, 35, 2, 'abraham', 'abraham@gmail.com', '964457426', '2023-12-28', '20:51:00'),
(7, 1, 11, 2, 'abraham', 'abraham@gmail.com', '964457426', '2023-12-28', '20:51:00'),
(8, 1, 35, 2, 'Sh', 'Shibin@gmail.com', '964457426', '2023-12-28', '21:53:00'),
(9, 1, 35, 2, 'shilt', 'Shibin@gmail.com', '9747970988', '2023-12-28', '20:57:00'),
(10, 1, 35, 2, 'Shibin', 'Shibin@gmail.com', '123', '2023-12-28', '19:59:00'),
(11, 1, 35, 2, 'Shibin', 'Shibin@gmail.com', '964457426', '2023-12-28', '21:03:00'),
(12, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-28', '22:02:00'),
(13, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '1233455', '2023-12-09', '22:09:00'),
(14, 1, 35, 2, 'Shibin', 'Shibin@gmail.com', '964457426', '2023-12-28', '21:11:00'),
(15, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '964457426', '2023-12-28', '20:11:00'),
(16, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-28', '23:16:00'),
(17, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-29', '20:17:00'),
(18, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '964457426', '2023-12-29', '21:25:00'),
(19, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-29', '21:26:00'),
(20, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '964457426', '2023-12-29', '21:32:00'),
(21, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-29', '20:35:00'),
(22, 1, 35, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-29', '21:39:00'),
(23, 1, 35, 2, 'Shibin', 'Shibin@gmail.com', '964457426', '2023-12-29', '19:43:00'),
(24, 1, 35, 2, 'Shibin', 'Shibin@gmail.com', '964457428', '2023-12-15', '23:48:00'),
(25, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '964457428', '2023-12-15', '23:48:00'),
(27, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '964457426', '2023-12-29', '21:49:00'),
(28, 1, 35, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-29', '20:53:00'),
(29, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '12344', '2023-12-29', '20:56:00'),
(30, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '964457426', '2023-12-29', '21:54:00'),
(31, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '1233455', '2023-12-29', '21:02:00'),
(32, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-29', '22:08:00'),
(33, 1, 11, 2, 'Shibin', 'Shibin@gmail.com', '964457426', '2023-12-29', '20:07:00'),
(36, 1, 27, 2, 'Shibin', 'Shibin@gmail.com', '964457426', '2023-12-29', '22:58:00'),
(37, 1, 27, 2, 'Shibin', 'Shibin@gmail.com', '964457426', '2023-12-29', '22:58:00'),
(38, 1, 35, 2, 'Shibin', 'Shibin@gmail.com', '964457426', '2023-12-29', '22:58:00'),
(48, 1, 35, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-29', '21:56:00'),
(49, 1, 35, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-29', '21:56:00'),
(50, 1, 27, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-29', '21:56:00'),
(51, 1, 27, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-29', '21:56:00'),
(52, 1, 27, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-29', '21:56:00'),
(53, 1, 35, 2, 'Shibin', 'Shibin@gmail.com', '9747970988', '2023-12-29', '21:56:00'),
(54, 1, 35, 2, 'test', 'Shibin@gmail.com', '00000000', '2023-12-29', '21:56:00'),
(55, 1, 35, 2, 'test', 'Shibin@gmail.com', '00000000', '2023-12-29', '21:56:00'),
(56, 1, 27, 2, 'test', 'Shibin@gmail.com', '00000000', '2023-12-29', '21:56:00'),
(57, 1, 27, 2, 'test', 'Shibin@gmail.com', '00000000', '2023-12-29', '21:56:00'),
(58, 1, 35, 2, 'test', 'Shibin@gmail.com', '00000000', '2023-12-29', '21:56:00'),
(59, 1, 27, 2, 'test', 'Shibin@gmail.com', '00000000', '2023-12-29', '21:56:00'),
(60, 1, 11, 2, 'test', 'Shibin@gmail.com', '00000000', '2023-12-29', '21:56:00'),
(61, 1, 11, 2, 'test', 'Shibin@gmail.com', '123', '2023-12-29', '21:03:00'),
(62, 1, 11, 2, 'test', 'Shibin@gmail.com', '123', '2023-12-29', '21:03:00'),
(63, 1, 27, 2, 'test', 'tets@gmail.com', '9747970988', '2023-12-29', '02:32:00'),
(64, 1, 35, 2, 'test', 'tets@gmail.com', '9747970988', '2023-12-29', '02:32:00'),
(65, 1, 11, 2, 'shinto', 'shinto@gmail.com', '964457426', '2023-12-30', '23:35:00'),
(66, 1, 35, 2, 'shinto', 'shinto@gmail.com', '964457426', '2023-12-30', '23:35:00'),
(68, 1, 11, 2, 'abraham', 'abraham@gmail.com', '964457426', '2023-12-29', '03:17:00'),
(69, 1, 11, 2, 'abraham', 'abraham@gmail.com', '964457426', '2023-12-29', '03:17:00'),
(70, 1, 27, 2, 'abraham', 'abraham@gmail.com', '964457426', '2023-12-29', '03:17:00'),
(71, 1, 27, 2, 'abraham', 'abraham@gmail.com', '964457426', '2023-12-29', '03:17:00'),
(72, 1, 11, 2, 'abraham', 'abraham@gmail.com', '964457426', '2023-12-29', '03:17:00');

--
-- Triggers `test_slot`
--
DELIMITER $$
CREATE TRIGGER `insertLog` AFTER INSERT ON `test_slot` FOR EACH ROW INSERT INTO test_slot_log(s_id,operation) VALUES(NEW.s_id,'BOOKED')
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `test_slot_log`
--

CREATE TABLE `test_slot_log` (
  `log_id` int(11) NOT NULL,
  `s_id` int(11) NOT NULL,
  `operation` varchar(20) NOT NULL,
  `operation_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `test_slot_log`
--

INSERT INTO `test_slot_log` (`log_id`, `s_id`, `operation`, `operation_date`) VALUES
(1, 2, 'BOOKED', '2023-12-28 11:40:18'),
(2, 3, 'BOOKED', '2023-12-28 11:56:17'),
(3, 4, 'BOOKED', '2023-12-28 12:02:40'),
(4, 5, 'BOOKED', '2023-12-28 12:17:07'),
(5, 6, 'BOOKED', '2023-12-28 12:19:02'),
(6, 7, 'BOOKED', '2023-12-28 12:19:02'),
(7, 8, 'BOOKED', '2023-12-28 12:20:53'),
(8, 9, 'BOOKED', '2023-12-28 12:24:51'),
(9, 10, 'BOOKED', '2023-12-28 12:26:26'),
(10, 11, 'BOOKED', '2023-12-28 12:29:46'),
(11, 12, 'BOOKED', '2023-12-28 12:31:05'),
(12, 13, 'BOOKED', '2023-12-28 12:34:13'),
(13, 14, 'BOOKED', '2023-12-28 12:38:24'),
(14, 15, 'BOOKED', '2023-12-28 12:39:45'),
(15, 16, 'BOOKED', '2023-12-28 12:41:55'),
(16, 17, 'BOOKED', '2023-12-29 09:42:09'),
(17, 18, 'BOOKED', '2023-12-29 09:49:20'),
(18, 19, 'BOOKED', '2023-12-29 09:50:27'),
(19, 20, 'BOOKED', '2023-12-29 09:56:56'),
(20, 21, 'BOOKED', '2023-12-29 10:00:32'),
(21, 22, 'BOOKED', '2023-12-29 10:03:09'),
(22, 23, 'BOOKED', '2023-12-29 10:08:32'),
(23, 24, 'BOOKED', '2023-12-29 10:09:14'),
(24, 25, 'BOOKED', '2023-12-29 10:09:14'),
(26, 27, 'BOOKED', '2023-12-29 10:13:33'),
(27, 28, 'BOOKED', '2023-12-29 10:17:37'),
(28, 29, 'BOOKED', '2023-12-29 10:21:26'),
(29, 30, 'BOOKED', '2023-12-29 10:24:45'),
(30, 31, 'BOOKED', '2023-12-29 10:27:28'),
(31, 32, 'BOOKED', '2023-12-29 10:31:50'),
(32, 33, 'BOOKED', '2023-12-29 10:33:09'),
(33, 36, 'BOOKED', '2023-12-29 11:22:20'),
(34, 37, 'BOOKED', '2023-12-29 11:22:20'),
(35, 38, 'BOOKED', '2023-12-29 11:22:20'),
(36, 48, 'BOOKED', '2023-12-29 11:27:09'),
(37, 50, 'BOOKED', '2023-12-29 11:27:09'),
(38, 49, 'BOOKED', '2023-12-29 11:27:09'),
(39, 51, 'BOOKED', '2023-12-29 11:27:09'),
(40, 52, 'BOOKED', '2023-12-29 11:27:09'),
(41, 53, 'BOOKED', '2023-12-29 11:27:09'),
(42, 54, 'BOOKED', '2023-12-29 11:28:26'),
(43, 55, 'BOOKED', '2023-12-29 11:28:26'),
(44, 56, 'BOOKED', '2023-12-29 11:28:26'),
(45, 57, 'BOOKED', '2023-12-29 11:28:26'),
(46, 58, 'BOOKED', '2023-12-29 11:28:26'),
(47, 59, 'BOOKED', '2023-12-29 11:28:26'),
(48, 60, 'BOOKED', '2023-12-29 11:28:26'),
(49, 61, 'BOOKED', '2023-12-29 11:30:04'),
(50, 62, 'BOOKED', '2023-12-29 11:30:04'),
(51, 63, 'BOOKED', '2023-12-29 16:57:12'),
(52, 64, 'BOOKED', '2023-12-29 16:57:12'),
(53, 65, 'BOOKED', '2023-12-29 17:04:37'),
(56, 68, 'BOOKED', '2023-12-29 17:42:18'),
(57, 69, 'BOOKED', '2023-12-29 17:42:18'),
(58, 70, 'BOOKED', '2023-12-29 17:42:18'),
(59, 71, 'BOOKED', '2023-12-29 17:42:18'),
(60, 72, 'BOOKED', '2023-12-29 17:42:18');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `u_id` int(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(8000) NOT NULL,
  `name` varchar(20) NOT NULL,
  `img` varchar(1000) NOT NULL,
  `auth` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`u_id`, `email`, `password`, `name`, `img`, `auth`) VALUES
(1, 'test@gmail.com', 'asshdjHhshaj', 'test', '1234567890', 0),
(2, 'john@gmail.com', 'jhhjgjashjcvhj', 'ssss', 'img/e.png', 1),
(4, 'shibin.k190@gmail.com', '$2y$10$EyOZEo885gDwK5dDmzU4P.Zh2b5OoZsVSeYq9Z2yywDjj7urseUAC', 'Shibin', '../images/user_img/Screenshot (1).png', 1),
(5, 'shibin.k.a6235@gamil.com', '$2y$10$DzhoOZymhktAVGgbn13IQOUTV.N4uUKnvdQXKWesiYHbAeZl5qHfm', 'Shibin', '../images/user_img/Screenshot (2).png', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`car_id`),
  ADD KEY `showroom_id` (`showroom_id`);

--
-- Indexes for table `car_design`
--
ALTER TABLE `car_design`
  ADD PRIMARY KEY (`car_design_id`),
  ADD KEY `car_id` (`car_id`);

--
-- Indexes for table `showroom`
--
ALTER TABLE `showroom`
  ADD PRIMARY KEY (`showroom_id`);

--
-- Indexes for table `test_slot`
--
ALTER TABLE `test_slot`
  ADD PRIMARY KEY (`s_id`),
  ADD KEY `test_slot_ibfk_1` (`u_id`),
  ADD KEY `test_slot_ibfk_3` (`showroom_id`),
  ADD KEY `test_slot_ibfk_2` (`car_design_id`);

--
-- Indexes for table `test_slot_log`
--
ALTER TABLE `test_slot_log`
  ADD PRIMARY KEY (`log_id`),
  ADD KEY `test_slot_log_ibfk_1` (`s_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`u_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car`
--
ALTER TABLE `car`
  MODIFY `car_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `car_design`
--
ALTER TABLE `car_design`
  MODIFY `car_design_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `showroom`
--
ALTER TABLE `showroom`
  MODIFY `showroom_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `test_slot`
--
ALTER TABLE `test_slot`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `test_slot_log`
--
ALTER TABLE `test_slot_log`
  MODIFY `log_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `u_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `car`
--
ALTER TABLE `car`
  ADD CONSTRAINT `car_ibfk_1` FOREIGN KEY (`showroom_id`) REFERENCES `showroom` (`showroom_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `car_design`
--
ALTER TABLE `car_design`
  ADD CONSTRAINT `car_design_ibfk_1` FOREIGN KEY (`car_id`) REFERENCES `car` (`car_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `test_slot`
--
ALTER TABLE `test_slot`
  ADD CONSTRAINT `test_slot_ibfk_1` FOREIGN KEY (`u_id`) REFERENCES `user` (`u_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `test_slot_ibfk_2` FOREIGN KEY (`car_design_id`) REFERENCES `car_design` (`car_design_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `test_slot_ibfk_3` FOREIGN KEY (`showroom_id`) REFERENCES `showroom` (`showroom_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `test_slot_log`
--
ALTER TABLE `test_slot_log`
  ADD CONSTRAINT `test_slot_log_ibfk_1` FOREIGN KEY (`s_id`) REFERENCES `test_slot` (`s_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
