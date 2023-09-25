CREATE DATABASE IF NOT EXISTS project3;

USE project3;

CREATE TABLE users (
    userId INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(255) DEFAULT NULL,
    lastName VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    pswrd VARCHAR(255) DEFAULT NULL,
    userRole VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY (`userId`),
    UNIQUE KEY `email` (`email`)
)  ENGINE=INNODB AUTO_INCREMENT=5 DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;

CREATE TABLE vacations (
    vcnId INT NOT NULL AUTO_INCREMENT,
    destination VARCHAR(255) DEFAULT NULL,
    about MEDIUMTEXT DEFAULT NULL,
    fromDate DATETIME DEFAULT NULL,
    toDate DATETIME DEFAULT NULL,
    price INT DEFAULT NULL,
    imageSrc VARCHAR(255) DEFAULT NULL,
    PRIMARY KEY (`vcnId`)
)  ENGINE=INNODB AUTO_INCREMENT=5 DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;


CREATE TABLE following (
    fId INT NOT NULL AUTO_INCREMENT,
    fUserId INT DEFAULT NULL,
    fVacationId INT DEFAULT NULL,
    PRIMARY KEY (fId)
)  ENGINE=INNODB AUTO_INCREMENT=5 DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_0900_AI_CI;


INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Eilat, Israel', 
'It is known to everyone as the southernmost city in Israel, is famous for being a \"VAT-free\" city and also serves as a coveted gateway across the border to beautiful Sinai.
 \nIt has a great abundance of attractions and activities of every kind you can think of, a lively nightlife scene and not a few excellent restaurants and supermarkets that are open 24/7. 
 \nIn addition to all these, it is heaven on earth for shopaholics and despite the hot temperatures, \nit has an ice bar and a skating rink that will allow you to refresh yourself even 
 on particularly hot days - nice to meet you, Eilat!', 
 '2023-06-01', 
 '2023-06-07', 
 '1400', 
 'https://static.timesofisrael.com/www/uploads/2020/11/F201107YA10.jpg');

INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Havana, Cuba', 
'With an average of 330 days of sunshine a year and over 400 kilometres of pristine shores lining the coast, 
 Cuba is the perfect place for a relaxing beach getaway. Soak up the sun on the famous white-sand shores of Varadero Beach, 
 snorkel in the coral reefs off the coast of Playa Pilar and walk along the soft sands of Playa Paraiso. 
The island is also home to more UNESCO World Heritage Sites than any other Caribbean country, perfect for travellers 
looking to soak in the local culture and learn about Cuba\'s fascinating history. Explore the cobblestone streets of 
Old Havana where classic American cars line the street, tour the seaside fortress of El Morro in Santiago de Cuba and discover the colonial squares of Trinidad.    
Choose from a range of cheap Cuba vacation deals including last minute Cuba deals and start planning your tropical getaway with Sunwing', 
 '2022-07-02', 
 '2022-07-08', 
 '5600', 
 'https://travelinsider.ru/wp-content/uploads/2017/06/Rooftop-pool-Gran-Hotel-Manzana-Kempinski.jpg');
 
 
 INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Antalia, Turkey', 
'With a population of around 2,350 thousand Antalya is a world famous tourism city in Turkey. 
 Antalya is a tourism paradise in its own right. Alanya, Side, Belek, Kas, Kalkan, Kemer, Muratpasa, Manavgat, 
 along with the districts of the world\'s most demanded holiday cities.', 
 '2024-08-02', 
 '2024-08-08', 
 '2400', 
 'https://sportishka.com/uploads/posts/2022-03/thumbs/1646384528_13-sportishka-com-p-antaliya-kemer-turizm-krasivo-foto-14.jpg');

 INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('St Petersburg, Russia', 
'Peter the Great\'s city has canals that reflect a spellbinding collection of cultural palaces, 
 and the environment inspired many great artists and musical maestros.
Peter the Great\'s city is an exercise in invention. Its canals reflect a spellbinding collection of cultural palaces, 
while the environment inspired many great artists, writers and musical maestros.', 
 '2024-09-02', 
 '2024-09-08', 
 '2420', 
 'https://sportishka.com/uploads/posts/2022-04/1650625445_1-sportishka-com-p-muzei-zapovednik-petergof-krasivo-foto-1.jpg');
 
  INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Ulaanbaatar, Mongolia', 
'Mongolia, the country of adventure, land of steppe nomads with real freedom and great history behind. 
 Pieceful Mongol nation tribes here in Central Asia for thousands of years. 
 Mongolians are welcome hospitality nation to introduce our nomadic lifestyle to you and proud to share their amazing history with you. ', 
 '2024-09-02', 
 '2024-09-08', 
 '2320', 
 'https://cdn.profile.ru/wp-content/uploads/2022/01/Mongoliya-fon-stepi-ljudi.jpg');

  INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Karelia, Russia', 
'The Republic of Karelia is located in the north-western part of Russia, bordering Finland. 
 The region is of great interest in the first place from a tourist point of view. 
 Active, cultural and green forms of tourism are the most popular.', 
 '2024-12-29', 
 '2024-01-19', 
 '2450', 
 'https://atlasprirodirossii.ru/wp-content/uploads/2019/12/otdyh-s-detmi-v-karelii-zimoj-2.jpg');


  INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Thessaloniki, Greece', 
'Greece\'s second city is known to be less chaotic than Athens, but sometimes all you want is to get away and escape the hectic urban lifestyle in order to come back refreshed and rested. 
 Thessaloniki\'s convenient location and its airport makes it easy to leave even just for a weekend, so here is a list of our suggestions for the best weekend getaways from Thessaloniki.', 
 '2024-09-29', 
 '2024-10-19', 
 '2230', 
 'https://provodniq.com/wp-content/uploads/2017/01/1-63.jpg');


  INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Meteora, Greece', 
'Visit Meteora famed monasteries with the local expert guides of our company , enjoying comfortable tours conducted in a luxury minibus.
  You can choose between Morning Meteora tour , Hiking Meteora activities , majestic sunset Meteora tour with stops at all six monasteries and the best panoramic points , 
  or private full exclusive VIP experiences tailored to your preferences. 
 In all of our tours we offer pick up / drop off from your hotel in Kalabaka or Kastraki. Combine tours and enjoy the most comprehensive and amazing Meteora experience. ', 
 '2024-11-29', 
 '2024-12-19', 
 '2340', 
 'https://img.theculturetrip.com/1440x960/smart/wp-content/uploads/2020/01/gettyimages-481123842.jpg');
 
 
   INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Antananarivo, Madagascar', 
'Madagascar is a lively island full of contrasting tourist places that roots from ancient as well as modern influences, making it a box of beautiful surprises!
There are certain things that you should never miss when travelling on luxury Madagascar holidays. These experiences make visiting this region an unforgettable experience. ', 
 '2024-02-29', 
 '2024-03-19', 
 '2460', 
 'https://traveltimes.ru/wp-content/uploads/2021/12/outdoor-swimming-pool-andilana-resort-1536x864.jpg');
 
 
    INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Lima, Peru', 
'Sooner or later, anyone who wants to be considered a world traveler must visit Peru to earn that lofty title. 
 For many, Peru conjures up images of hidden ancient ruins, breathtaking mountain views, and remote jungle villages. Peru is all this and more! ', 
 '2024-02-29', 
 '2024-03-19', 
 '4560', 
 'https://nypost.com/wp-content/uploads/sites/2/2019/12/peru-1.jpg');

    INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Santa Teresa, Costa Rica', 
'Costa Rica isn\'t just a rugged vacation for adventure seekers. It\'s also the perfect place for a relaxing spa getaway. 
 The area around Arenal Volcano is famous for its luxury spas surrounded by natural hot springs. 
 Beach resorts are also growing in popularity, with destinations like the Papagayo Peninsula offering sandy shores, wildlife experiences, and five-star accommodations. ', 
 '2024-02-29', 
 '2024-03-19', 
 '5560', 
 'https://i.pinimg.com/originals/f1/00/fb/f100fb064658599cf6e1ebf1e2718900.jpg');
 
 
     INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Cornwall, England', 
'The Cornish Coast takes the British seaside to a completely different level. The views compete with the finest coastlines in Italy, 
 but with the rugged cliffs and sparkling sea, it would be hard to find any place more unique. 
 Cornwall is more than just scenery and exceptional landscapes. It has its very own character filled with history, mystery and traditions.', 
 '2024-05-29', 
 '2024-06-19', 
 '1560', 
 'https://irp-cdn.multiscreensite.com/17cc50ed/dms3rep/multi/http___prod-upp-image-read.ft.jpg');


ALTER TABLE `project3`.`following` 
ADD INDEX `userId_idx` (`fUserId` ASC) VISIBLE;
;
ALTER TABLE `project3`.`following` 
ADD CONSTRAINT `userId`
  FOREIGN KEY (`fUserId`)
  REFERENCES `project3`.`users` (`userId`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `project3`.`following` 
ADD INDEX `vcnId_idx` (`fVacationId` ASC) VISIBLE;
;
ALTER TABLE `project3`.`following` 
ADD CONSTRAINT `vcnId`
  FOREIGN KEY (`fVacationId`)
  REFERENCES `project3`.`vacations` (`vcnId`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `project3`.`following` 
DROP FOREIGN KEY `userId`;
ALTER TABLE `project3`.`following` 
ADD CONSTRAINT `userId`
  FOREIGN KEY (`fUserId`)
  REFERENCES `project3`.`users` (`userId`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;
  
  
  ALTER TABLE `project3`.`following` 
DROP FOREIGN KEY `vcnId`;
ALTER TABLE `project3`.`following` 
ADD CONSTRAINT `vcnId`
  FOREIGN KEY (`fVacationId`)
  REFERENCES `project3`.`vacations` (`vcnId`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

INSERT INTO `project3`.`users` (`firstName`, `lastName`, `email`, `pswrd`,`userRole`) VALUES ('John', 'Evans', 'one@co.il', '$2a$05$CftQ/TO/McwZMqXp227m0enQ/.qGJZi9/8q8vzX.gyS/zUKLYNQ7i', 'user');
INSERT INTO `project3`.`users` (`firstName`, `lastName`, `email`, `pswrd`,`userRole`) VALUES ('Peter', 'Simpson', 'two@co.il', '$2a$05$CftQ/TO/McwZMqXp227m0enQ/.qGJZi9/8q8vzX.gyS/zUKLYNQ7i', 'user');
INSERT INTO `project3`.`users` (`firstName`, `lastName`, `email`, `pswrd`,`userRole`) VALUES ('Ann', 'Whatson', 'three@co.il', '$2a$05$CftQ/TO/McwZMqXp227m0enQ/.qGJZi9/8q8vzX.gyS/zUKLYNQ7i', 'user');
INSERT INTO `project3`.`users` (`firstName`, `lastName`, `email`, `pswrd`,`userRole`) VALUES ('Alex', 'Jones', 'four@co.il', '$2a$05$CftQ/TO/McwZMqXp227m0enQ/.qGJZi9/8q8vzX.gyS/zUKLYNQ7i', 'user');
INSERT INTO `project3`.`users` (`firstName`, `lastName`, `email`, `pswrd`,`userRole`) VALUES ('Alexandra', 'Petrucci', 'five@co.il', '$2a$05$CftQ/TO/McwZMqXp227m0enQ/.qGJZi9/8q8vzX.gyS/zUKLYNQ7i', 'user');
INSERT INTO `project3`.`users` (`firstName`, `lastName`, `email`, `pswrd`,`userRole`) VALUES ('James', 'McArthur', 'six@co.il', '$2a$05$CftQ/TO/McwZMqXp227m0enQ/.qGJZi9/8q8vzX.gyS/zUKLYNQ7i', 'user');
INSERT INTO `project3`.`users` (`firstName`, `lastName`, `email`, `pswrd`,`userRole`) VALUES ('admin', 'admin', 'admin@co.il', '$2a$05$zuQbCdGePSo9q/ID3xVu9uV0goz.HgiLGew4/O8lRiPgkGrLw3K1G', 'admin');


INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('5', '5');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('5', '6');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('5', '7');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('6', '8');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('6', '9');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('7', '10');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('8', '11');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('8', '12');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('8', '13');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('9', '14');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('10', '15');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('10', '16');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('10', '16');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('10', '15');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('9', '5');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('8', '6');
INSERT INTO `project3`.`following` (`fUserId`, `fVacationId`) VALUES ('8', '7');

