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
'Peter the Great''s city has canals that reflect a spellbinding collection of cultural palaces, 
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
 '2023-12-29', 
 '2024-01-19', 
 '2450', 
 'https://atlasprirodirossii.ru/wp-content/uploads/2019/12/otdyh-s-detmi-v-karelii-zimoj-2.jpg');


  INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Thessaloniki, Greece', 
'Greece''s second city is known to be less chaotic than Athens, but sometimes all you want is to get away and escape the hectic urban lifestyle in order to come back refreshed and rested. 
 Thessaloniki''s convenient location and its airport makes it easy to leave even just for a weekend, so here is a list of our suggestions for the best weekend getaways from Thessaloniki.', 
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
'Costa Rica isn''t just a rugged vacation for adventure seekers. It''s also the perfect place for a relaxing spa getaway. 
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

  INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Arctic Circle Cruise', 
'Arctic cruises, also known as polar cruises or Arctic expeditions, are voyages that take travelers to explore the Arctic region. 
The Arctic is a vast area located around the North Pole and includes parts of various countries, such as Canada, Greenland (a territory of Denmark),
 Norway, Russia, and the United States (Alaska). This remote and fascinating region, known for its dramatic landscapes and incredible biodiversity, 
 offers an unmatched experience. From glaciers that have sculpted mountains and fjords to the endless tundra teeming with wildlife, a cruise to the Arctic
  is an immersion in the grandeur and raw beauty of nature. The chance to sail through ice-choked seas under the Midnight Sun in the summer or witness the 
  enchanting Northern Lights in the winter is a once-in-a-lifetime opportunity for intrepid travelers. ', 
 '2025-06-27', 
 '2025-07-19', 
 '6560', 
 'https://avidcruiser.com/wp-content/uploads/2017/10/Hapag-Lloyd-1320x946.jpg');

   INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Zanzibar, Tanzania', 
'Looking for the best tours in Zanzibar?
Whether you are coming to Zanzibar Island for a week or few days vacation you should always choose the best Zanzibar day trips and experiences like stone 
town tour, prison island tour, safari blue trip, mnemba atoll snorkeling tour, spice plantation tour etc.
Zanzibar excursions prices.
 Average day trips/ excursions rates are between $15 to $50 usd depends upon distance to the attractions and number of people you are.
Group and private guided tours. Our daily activities consist of half day and full day trips and can be organized for individual, family and small groups, 
and we also have special services for big or incentive groups.', 
 '2022-06-12', 
 '2022-06-19', 
 '5530', 
 'https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-e7d11f75-7d70-4249-bb07-f4cd37fdc5c2');


    INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Socotra, Yemen', 
'The island of Socotra receives great attention from the government in Yemen in order to benefit from its diverse stocks, natural characteristics, and economic advantages. 
Benefit from global efforts and interests to preserve Socotra Island as a natural jewel, according to official data issued by the Ministry of Tourism there. 
The island of Socotra enjoys a unique plant diversity, as the number of plant species reaches about nine hundred species, of which three hundred are endemic. 
There is also a group of medicinal plants among them, and there are more than three hundred species of fungal organisms that take Socotra as the only place to live in the world.  
Among the information available on the island of Socotra is the presence of the yamtah plant or the yamtah: This succulent plant produces a white liquid when cut, 
which is cultivated by locals in abundance near villages to be used as fodder for animals. ', 
 '2025-06-02', 
 '2025-06-17', 
 '3530', 
 'https://pbs.twimg.com/media/E8AhDz5XoAIny-y?format=jpg&name=4096x4096');


     INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Beirut, Lebanon', 
'Discover Beirut accompanied by an expert guide on this wonderful family friendly tour. Discover the city that was once called the Paris of the Middle east. 
Your expert guide will not only introduce you to the must-see monuments, but also Beiruts secrets and hidden gems. The tour itinerary ensures that you dont 
miss any of the most famous sights, but also shows you some things you never knew existed.
The pigeon rock is a stunning set of rocks and a Popular tourist destination known for its iconic rock formations in picturesque seaside surrounds, 
welcome you to the city of Beirut. Pigeons Rock (also known as the Rock of Raouch) is located at Beiruts western-most tip, the two huge rock 
formations stand like gigantic sentinels to the city.', 
 '2025-08-01', 
 '2025-09-16', 
 '1530', 
 'https://www.webturizm.ru/storage/photos/lebanon/lebanon-beirut-27610.jpg');

   INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Alaska, USA', 
'Privately guided,  family vacation packages are custom-designed, multi-day trip packages with adventures for all ages. 
Plan the perfect family trip allowing each member the opportunity to experience their ultimate Alaska vacation!
Our Alaska tour and travel resident agents use local knowledge to help you plan, coordinate and execute the best 
vacation experience for your family.
Alaskan Tour Guides works closely with many Alaskan outfitters who provide expertise in each of their adventures for your family''s safety and enjoyment.', 
 '2025-01-01', 
 '2025-01-16', 
 '3530', 
 'https://webpulse.imgsmail.ru/imgpreview?mb=webpulse&key=pulse_cabinet-image-6ffabbc0-351a-4cb7-9fe9-b7b7ede3db94');


    INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Moscow, Russia', 
'On Russian vacations, Moscow is the capital of the country and serves as the major political, economic, cultural, and scientific centre. 
As well as the capital of the former Soviet Union, Moscow played a significant role in the development of Russia.
With a span of 1080 sq. km, Moscow features the Moskva River, which bends its way through the city, with the more prominent sites 
featured on the northern bank of the river. Moscow features various ring roads encircling the metropolis at various distances from the centre, 
where the Kremlin and Red Square are located.
An 860-year-old city, Moscow has many reminders of its imperial and Soviet past to be enjoyed on trips to Russia. Built between the 14th and 17th 
centuries, the Kremlin, which once served as the residence of the Great Prince as well as a religious centre, is currently the official residence 
of the President of Russia. The Kremlin is listed as a UNESCO World Heritage Site, along with its neighbouring Red Square, which houses St. Basi''s Cathedral. 
As Moscow''s best-known landmark, the Kremlin represents the city''s political and historical power in Russia through the ages.', 
 '2025-02-05', 
 '2025-02-18', 
 '4530', 
 'https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663335162_2-mykaleidoscope-ru-p-moskva-stolitsa-mira-pinterest-2.jpg');

    INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Tbilisi, Georgia', 
'Freedom Square and Tbilisi Opera and Ballet Theatre are just some of the fascinating places to visit in this area. Not your style? 
Well don''t fret — there''s plenty of choice here. Additional worthwhile options are Metekhi Church and Narikala Fortress. Take a break from cities and concrete at 
Turtle Lake, where you can take in the fresh air, unwind and simply appreciate the views. Want to keep the good times rolling? Although this institution is renowned 
for its name as a prestigious center for knowledge and learning, Tbilisi State University also has some interesting design features. But that''s not all! Whether you''re
 embarking on a personal pilgrimage or just curious about what''s beyond its doors, everybody is welcome to visit Holy Trinity Cathedral of Tbilisi. Why not share a
  pew with local worshipers and attend a service?
  If you have a spare day and you''re happy to travel 45 miles, check out Haghpat. This nearby area is teeming with things to see and do. Haghpat Monastery is a 
  fantastic place to start understanding the story of this destination. The Mikoyan Museum and Odzun Church are more places that shouldn''t be missed.
   Searching for more options? Sighnaghi is 60 miles from Tbilisi. Make your way here for attractions like Bodbe Monastery, the Pirosmani Museum and St. George Church.
    You have a world of choice!', 
 '2025-03-15', 
 '2025-03-28', 
 '2330', 
 'https://avatars.dzeninfra.ru/get-zen_doc/1872259/pub_5d6e387095aa9f00aeaef4a5_5d6e38b7d7859b00ac3433bf/scale_1200');


   INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Kamchatka Volcanoes, Russia', 
'The route of Volcanoes of Kamchatka tour lies along the remote Klyuchevskoy park and the Southern group of the volcanoes.
 In this wild place you will rarely meet tourists there, and you will be able to enjoy fully the views of wild nature and volcanoes.
 Viewing of the consequences of the Great Tolbachik Fissure Eruption which happened in the 1970s and of the new eruption in 2012-2013:
  Dead forest, solidified lava flows, as well as caves
Ascent of Plosky Tolbachik volcano and the cones of the Northern breakthrough
Exploration of the south group of the volcanoes, such as Mutnovsky and Gorely: a trip to the active craters with visible volcanic activity
A visit of 2 wonderful waterfalls', 
 '2025-04-05', 
 '2025-04-18', 
 '2910', 
 'https://youtravel.me/upload/tours/11152/media/c64/c640148252e96f78ad4391bf3dd132ca.jpg');

  INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Amazon River tour', 
'Amazon River cruises take adventurous explorers on one of the world''s most rewarding wildlife expeditions. Journey deep into the heart of the 
largest rainforest on Earth on a boat trip down the Amazon, a mystical realm of boundless biodiversity where physical and spiritual worlds entwine, 
a primeval domain still ruled by the jaguar, home to giant snakes, towering trees and uncontacted tribes hiding in plain sight.

The best Amazon cruises explore the remote reaches of this fairytale forest. Witness the playful pink river dolphins in the headwaters of the Amazon 
in Peru''s Pacaya-Samiria National Reserve aboard some of the most luxurious Amazon cruises available, or see the kaleidoscopic colors of the clay 
licks in the Ecuadorian Oriente. Why not try boating the Amazon River''s lesser-traveled backwaters in Bolivia and explore three kinds of tropical forest, 
or maybe catch a rare glimpse of the Amazonian manatee in the Anavilhanas National Park of the Brazilian Amazon. What will you discover on your Amazon River tour?', 
 '2025-05-05', 
 '2025-05-18', 
 '7910', 
 'https://i.pinimg.com/originals/a0/2d/2b/a02d2b6ad71ba0cf6ad1dba8b9cf030d.jpg');


   INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Pyongyang, North Korea', 
'A tour to North Korea (DPRK) is the ultimate in adventure travel. Join Koryo Tours as we explore Pyongyang and some of North Korea''s most remote locations for an experience you''ll 
never forget, all in the safe hands of North Korea tour experts.
Our North Korea tours are designed with the purpose of making sure you see and do as much as possible on tour in North Korea (DPRK). Touring this country is the opportunity of a 
lifetime for many, and we use our 28 years of North Korea experience to ensure you get the most out of your time there.
We have classic, speciality, and budget North Korea tours scheduled throughout the year. Get in touch for help on deciding which North Korea tour is best for you. Our experts are 
happy to answer all your questions.', 
 '2025-06-05', 
 '2025-06-18', 
 '8910', 
 'https://avatars.dzeninfra.ru/get-zen_doc/1704910/pub_5e23ef795fd55f00ad268626_5e23f4ddd4f07a00adc1faa0/scale_2400');

   INSERT INTO `project3`.`vacations` (`destination`, `about`, `fromDate`, `toDate`, `price`, `imageSrc`) 
VALUES ('Sicily, Italy', 
'Sicily, amazing Italian region that has a long and great history and hides millions of secrets in its magnificent cities and towns.
 We carry out work to promote tourism for many tourist structures. We offer private tours and shore excursions with pickup and drop-off 
 at your accommodation or port in Taormina area, Messina, Catania and Syracuse, small group tours in Sicily, and taxi services at the 
 cheapest prices in the region. Also, we organize multiday tours including transfers from the main Sicilian airports and ports to hotels 
 or vacation rentals, restaurants. The tours will be drawn up according to your needs and may include the car rentals and bicycle rentals. 
 Our team consists of English, Italian and Russian speaking local experts who are happy to share their knowledge and passion about Sicily. 
 We are happy to organize unforgettable and magic vacation for our guests. We will always be at your side, because in Sicily...', 
 '2025-07-06', 
 '2025-07-17', 
 '5910', 
 'http://yocuzlawyers.com/wp-content/uploads/2013/03/Vernazza.jpg');





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

