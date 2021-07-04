CREATE USER 'user01'@'localhost' IDENTIFIED BY 'testpassword';

CREATE DATABASE tododb DEFAULT CHARACTER SET UTF8;
GRANT ALL on tododb.* to 'user01'@'localhost';

CREATE TABLE `todos`(
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255),
    `description` VARCHAR(255),
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `todos`(
    `title`, `description`
) VALUES
('title01', 'description01');
