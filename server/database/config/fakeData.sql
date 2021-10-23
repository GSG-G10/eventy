/***************************** organizations ******************************/
INSERT INTO organization (id, name, email, password, image, categories) VALUES (1, 'Cogibox', 'ttollerfield0@harvard.edu', 'whAGcftjpnr6', 'http://dummyimage.com/194x100.png/dddddd/000000', 'RF Shielding'),
 (2, 'Fadeo', 'emckeon1@github.com', 'jtF9St3O', 'http://dummyimage.com/240x100.png/5fa2dd/ffffff', 'Plumbing & Medical Gas'),
 (3, 'Eadel', 'mfocke2@stanford.edu', 'PQfFjXII', 'http://dummyimage.com/225x100.png/cc0000/ffffff', 'Masonry'),
 (4, 'Demizz', 'egentery3@google.ca', '5MEagmDCQGt', 'http://dummyimage.com/108x100.png/ff4444/ffffff', 'Structural and Misc Steel (Fabrication)'),
 (5, 'Thoughtsphere', 'smallord4@youtu.be', 'XBaWJPVDJQ', 'http://dummyimage.com/223x100.png/5fa2dd/ffffff', 'Exterior Signage'),
 (6, 'Skibox', 'ipaulusch5@europa.eu', 'njGNPrpL', 'http://dummyimage.com/199x100.png/ff4444/ffffff', 'Curb & Gutter'),
 (7, 'Devshare', 'sraisher6@sina.com.cn', 'BjUB9yA', 'http://dummyimage.com/155x100.png/cc0000/ffffff', 'Landscaping & Irrigation'),
 (8, 'Browsecat', 'hmcharg7@tmall.com', 'ZmHsOTb9YC', 'http://dummyimage.com/177x100.png/cc0000/ffffff', 'Fire Protection'),
 (9, 'Eamia', 'gpurnell8@vinaora.com', 'jBdNY2DZk5GA', 'http://dummyimage.com/127x100.png/dddddd/000000', 'Construction Clean and Final Clean'),
 (10, 'Dabjam', 'james9@huffingtonpost.com', 'S3MOkJQ', 'http://dummyimage.com/117x100.png/dddddd/000000', 'Casework');

/*********************** events ************************************/

Insert INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (1, 'Aviragen Therapeutics, Inc.', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 68, 12, '2021-03-30', '2020-11-19', 'Santo Antônio de Posse', 'http://dummyimage.com/204x100.png/dddddd/000000', '8:58 PM', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 9, 'Prefabricated Aluminum Metal Canopies'),
(2, 'Constellium N.V.', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 29, 87, '2021-09-17', '2021-07-07', 'Bonthe', 'http://dummyimage.com/196x100.png/dddddd/000000', '9:46 AM', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, 'Plumbing & Medical Gas'),
(3, 'Westmoreland Resource Partners, LP', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 61, 68, '2021-01-29', '2021-10-16', 'Siikajoki', 'http://dummyimage.com/129x100.png/dddddd/000000', '5:15 PM', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 2, 'Structural and Misc Steel (Fabrication)'),
(4, 'Old Dominion Freight Line, Inc.', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 76, 30, '2021-09-12', '2021-04-21', 'Young America', 'http://dummyimage.com/125x100.png/cc0000/ffffff', '3:09 AM', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 9, 'Drywall & Acoustical (MOB)'),
(5, 'Vishay Intertechnology, Inc.', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 93, 100, '2021-02-04', '2021-08-04', 'Nampera', 'http://dummyimage.com/189x100.png/5fa2dd/ffffff', '2:06 PM', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 9, 'Roofing (Asphalt)'),
(6, 'WMIH Corp.', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 81, 22, '2021-10-12', '2021-10-02', 'Temuji', 'http://dummyimage.com/170x100.png/cc0000/ffffff', '6:58 AM', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 6, 'Temp Fencing, Decorative Fencing and Gates'),
(7, 'SITO Mobile, Ltd.', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 41, 79, '2021-01-23', '2021-05-20', 'Panalo-on', 'http://dummyimage.com/147x100.png/ff4444/ffffff', '6:29 PM', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 8, 'Fire Protection'),
(8, 'Invitation Homes Inc.', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 58, 67, '2021-03-10', '2021-05-03', 'Kamionka', 'http://dummyimage.com/195x100.png/dddddd/000000', '8:52 PM', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 5, 'Prefabricated Aluminum Metal Canopies'),
(9, 'BGC Partners, Inc.', 'Fusce consequat. Nulla nisl. Nunc nisl.', 73, 97, '2021-03-27', '2021-05-22', '‘Awaj', 'http://dummyimage.com/250x100.png/dddddd/000000', '6:56 PM', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 2, 'Exterior Signage'),
(10, 'Shutterfly, Inc.', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 95, 10, '2021-01-27', '2020-12-07', 'Bhopālwāla', 'http://dummyimage.com/107x100.png/dddddd/000000', '10:58 PM', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 4, 'Wall Protection'),
(11, 'Everbridge, Inc.', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 35, 6, '2021-09-08', '2021-05-26', 'Luxi', 'http://dummyimage.com/158x100.png/5fa2dd/ffffff', '7:59 AM', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 3, 'Fire Sprinkler System'),
(12, 'National Health Investors, Inc.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 28, 19, '2021-03-16', '2020-12-18', 'Pevek', 'http://dummyimage.com/183x100.png/ff4444/ffffff', '4:55 AM', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 2, 'Glass & Glazing'),
(13, 'Fair Isaac Corporation', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 90, 83, '2020-12-01', '2021-09-11', 'Minle', 'http://dummyimage.com/195x100.png/cc0000/ffffff', '2:17 AM', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 4, 'Construction Clean and Final Clean'),
(14, 'Pacific Mercantile Bancorp', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 25, 14, '2021-07-23', '2021-03-29', 'Alor Setar', 'http://dummyimage.com/153x100.png/dddddd/000000', '9:46 PM', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 6, 'Drywall & Acoustical (FED)'),
(15, 'Anworth Mortgage Asset  Corporation', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 96, 55, '2021-07-18', '2021-03-06', 'Chachagüí', 'http://dummyimage.com/195x100.png/dddddd/000000', '9:11 PM', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 2, 'Drywall & Acoustical (FED)'),
(16, 'Cartesian, Inc.', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 57, 88, '2021-08-10', '2021-01-14', 'Fresno', 'http://dummyimage.com/167x100.png/5fa2dd/ffffff', '1:13 PM', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 6, 'Elevator'),
(17, 'Diversified Restaurant Holdings, Inc.', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 27, 46, '2021-06-26', '2020-11-05', 'Yanwo', 'http://dummyimage.com/183x100.png/5fa2dd/ffffff', '8:20 PM', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 4, 'Wall Protection'),
(18, 'Covisint Corporation', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 13, 52, '2021-05-27', '2021-03-04', 'Wisła', 'http://dummyimage.com/175x100.png/ff4444/ffffff', '12:12 AM', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 10, 'Epoxy Flooring'),
(19, 'Smart Sand, Inc.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 76, 57, '2020-11-01', '2021-01-10', 'Kalapagenep', 'http://dummyimage.com/192x100.png/ff4444/ffffff', '7:19 PM', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 2, 'HVAC'),
(20, 'Customers Bancorp, Inc', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 89, 41, '2021-01-27', '2020-12-16', 'Serra D''El Rei', 'http://dummyimage.com/173x100.png/5fa2dd/ffffff', '9:41 PM', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 1, 'Soft Flooring and Base'),
(21, 'Western Asset/Claymore U.S Treasury Inflation Prot Secs Fd 2', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 12, 81, '2021-07-25', '2021-06-21', 'Hostos', 'http://dummyimage.com/136x100.png/ff4444/ffffff', '8:40 PM', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 4, 'Termite Control'),
(22, 'Anadarko Petroleum Corporation', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 6, 93, '2021-03-05', '2021-04-02', 'Cosne-Cours-sur-Loire', 'http://dummyimage.com/219x100.png/dddddd/000000', '4:32 AM', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 7, 'Hard Tile & Stone'),
(23, 'iRhythm Technologies, Inc.', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 49, 59, '2020-11-25', '2021-05-08', 'Zhongtong', 'http://dummyimage.com/132x100.png/ff4444/ffffff', '4:42 AM', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 5, 'Asphalt Paving'),
(24, 'Transdigm Group Incorporated', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 85, 9, '2021-06-11', '2020-12-02', 'Burqah', 'http://dummyimage.com/176x100.png/cc0000/ffffff', '8:25 PM', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 6, 'Overhead Doors'),
(25, 'Delta Natural Gas Company, Inc.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 69, 55, '2021-07-18', '2021-08-04', 'Piran', 'http://dummyimage.com/160x100.png/dddddd/000000', '10:46 PM', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 10, 'Drilled Shafts'),
(26, 'Vanguard Russell 2000 Value ETF', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 86, 9, '2021-01-28', '2021-06-10', 'Nam Kliang', 'http://dummyimage.com/229x100.png/cc0000/ffffff', '6:56 PM', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 10, 'Framing (Wood)'),
(27, 'Impax Laboratories, Inc.', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 84, 58, '2021-07-24', '2021-01-29', 'Popovi', 'http://dummyimage.com/140x100.png/cc0000/ffffff', '7:48 PM', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 4, 'Glass & Glazing'),
(28, 'Oncobiologics, Inc.', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 67, 95, '2020-11-14', '2021-10-06', 'Bail', 'http://dummyimage.com/156x100.png/cc0000/ffffff', '5:34 AM', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 3, 'Overhead Doors'),
(29, 'Blueprint Medicines Corporation', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 31, 86, '2021-08-16', '2021-03-15', 'Iparia', 'http://dummyimage.com/147x100.png/ff4444/ffffff', '8:15 PM', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 5, 'Roofing (Metal)'),
(30, 'Netflix, Inc.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 32, 36, '2021-04-06', '2020-11-26', 'Monte Novo', 'http://dummyimage.com/178x100.png/cc0000/ffffff', '7:28 AM', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 2, 'Electrical'),
(31, 'Univar Inc.', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 8, 59, '2020-12-31', '2021-01-29', 'Além Paraíba', 'http://dummyimage.com/137x100.png/cc0000/ffffff', '8:35 PM', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 1, 'Curb & Gutter'),
(32, 'Ashford Hospitality Trust Inc', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 19, 67, '2021-01-27', '2021-05-23', 'Pantian', 'http://dummyimage.com/192x100.png/dddddd/000000', '1:24 AM', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 10, 'Doors, Frames & Hardware'),
(33, 'BioDelivery Sciences International, Inc.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 83, 10, '2021-05-22', '2021-10-01', 'Bayanbulag', 'http://dummyimage.com/113x100.png/dddddd/000000', '9:36 PM', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 1, 'Construction Clean and Final Clean'),
(34, 'Cartesian, Inc.', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 29, 6, '2021-06-02', '2020-11-25', 'Masindi Port', 'http://dummyimage.com/132x100.png/cc0000/ffffff', '9:48 AM', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 10, 'Soft Flooring and Base'),
(35, 'Southern California Edison Company', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 81, 5, '2021-02-25', '2021-02-11', 'Niamtougou', 'http://dummyimage.com/201x100.png/5fa2dd/ffffff', '12:05 PM', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 9, 'Sitework & Site Utilities'),
(36, 'BB&T Corporation', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 16, 65, '2021-07-17', '2021-06-03', 'Puerto Berrío', 'http://dummyimage.com/147x100.png/dddddd/000000', '6:53 PM', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 2, 'Landscaping & Irrigation'),
(37, 'e.l.f. Beauty, Inc.', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 45, 38, '2021-02-24', '2020-11-19', 'Матејче', 'http://dummyimage.com/137x100.png/ff4444/ffffff', '1:07 AM', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 4, 'Drywall & Acoustical (FED)'),
(38, 'DTE Energy Company', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 61, 74, '2021-07-01', '2021-08-08', 'Nanyang', 'http://dummyimage.com/154x100.png/5fa2dd/ffffff', '8:48 AM', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 5, 'Retaining Wall and Brick Pavers'),
(39, 'Capital One Financial Corporation', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 39, 98, '2021-07-13', '2020-12-24', 'Khoronk’', 'http://dummyimage.com/184x100.png/5fa2dd/ffffff', '11:58 AM', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 9, 'Epoxy Flooring'),
(40, 'Purefunds Solactive FinTech ETF', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 81, 91, '2020-11-25', '2021-05-13', 'Roissy Charles-de-Gaulle', 'http://dummyimage.com/173x100.png/dddddd/000000', '2:50 PM', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 5, 'Painting & Vinyl Wall Covering');

/***************** attendance *********************/

INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (1, 'Marlowe Caddy', 'mcaddy0@amazon.co.jp', 51, 'Male', false, '191-660-7117'),
 (2, 'Albertine Thunder', 'athunder1@tinyurl.com', 4, 'Male', true, '790-777-8979'),
 (3, 'Eric Dowber', 'edowber2@blogger.com', 50, 'Male', true, '358-400-2549'),
 (4, 'Orville Antonsen', 'oantonsen3@columbia.edu', 44, 'Male', false, '270-150-5123'),
 (5, 'Francine Scutts', 'fscutts4@furl.net', 23, 'Female', false, '439-101-4570'),
 (6, 'Arabella Siddle', 'asiddle5@skyrock.com', 39, 'Male', false, '483-187-5484'),
 (7, 'Rem Swindells', 'rswindells6@deliciousdays.com', 9, 'Female', false, '592-570-8702'),
 (8, 'Buckie Tomek', 'btomek7@exblog.jp', 38, 'Male', false, '720-582-8022'),
 (9, 'Ayn Wadeling', 'awadeling8@sun.com', 30, 'Male', false, '813-322-7373'),
 (10, 'Lana Duly', 'lduly9@shinystat.com', 36, 'Male', true, '562-486-6548'),
 (11, 'Manny Element', 'melementa@diigo.com', 48, 'Female', true, '401-492-8807'),
 (12, 'Neil Strodder', 'nstrodderb@statcounter.com', 11, 'Male', false, '875-254-7195'),
 (13, 'Pepita Prichet', 'pprichetc@foxnews.com', 52, 'Female', false, '518-529-4162'),
 (14, 'Kelley Adshede', 'kadsheded@blogger.com', 38, 'Female', false, '875-680-0384'),
 (15, 'Rosy Shakespeare', 'rshakespearee@altervista.org', 1, 'Male', false, '977-545-8493'),
 (16, 'Godart Picheford', 'gpichefordf@arizona.edu', 51, 'Female', true, '710-742-1338'),
 (17, 'Georgeanne Malec', 'gmalecg@google.cn', 57, 'Male', false, '840-246-6524'),
 (18, 'Dylan Pala', 'dpalah@prnewswire.com', 26, 'Female', false, '441-574-7860'),
 (19, 'Garik Layburn', 'glayburni@t-online.de', 4, 'Male', false, '926-449-1656'),
 (20, 'Sianna Ivshin', 'sivshinj@ameblo.jp', 8, 'Male', true, '933-712-5385');

/******************* event_attendance ******************************/
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (1, 4, 11),
 (2, 10, 17),
 (3, 12, 32),
 (4, 9, 11),
 (5, 15, 14),
 (6, 16, 5),
 (7, 11, 18),
 (8, 14, 40),
 (9, 9, 15),
 (10, 5, 32),
 (11, 19, 33),
 (12, 12, 8),
 (13, 16, 40),
 (14, 11, 21),
 (15, 11, 7),
 (16, 10, 6),
 (17, 10, 25),
 (18, 13, 19),
 (19, 8, 13),
 (20, 9, 37),
 (21, 13, 14),
 (22, 3, 11),
 (23, 2, 33),
 (24, 4, 25),
 (25, 8, 39),
 (26, 11, 32),
 (27, 3, 18),
 (28, 15, 27),
 (29, 6, 19),
 (30, 3, 32),
 (31, 18, 34),
 (32, 5, 8),
 (33, 15, 25),
 (34, 16, 18),
 (35, 8, 7),
 (36, 15, 24),
 (37, 5, 36),
 (38, 4, 2),
 (39, 12, 14),
 (40, 17, 3),
 (41, 4, 39),
 (42, 4, 6),
 (43, 13, 29),
 (44, 6, 20),
 (45, 1, 36),
 (46, 6, 28),
 (47, 13, 13),
 (48, 14, 29),
 (49, 6, 13),
 (50, 15, 38),
 (51, 15, 2),
 (52, 10, 40),
 (53, 9, 34),
 (54, 8, 16),
 (55, 15, 37),
 (56, 11, 23),
 (57, 10, 30),
 (58, 19, 7),
 (59, 16, 27),
 (60, 12, 34),
 (61, 20, 30),
 (62, 1, 6),
 (63, 10, 23),
 (64, 11, 11),
 (65, 12, 1),
 (66, 14, 17),
 (67, 8, 18),
 (68, 5, 11),
 (69, 6, 25),
 (70, 17, 17),
 (71, 3, 30),
 (72, 13, 1),
 (73, 1, 13),
 (74, 17, 23),
 (75, 19, 37),
 (76, 5, 21),
 (77, 6, 13),
 (78, 16, 19),
 (79, 16, 1),
 (80, 15, 25),
 (81, 8, 25),
 (82, 15, 28),
 (83, 5, 28),
 (84, 10, 40),
 (85, 18, 11),
 (86, 10, 24),
 (87, 20, 25),
 (88, 12, 7),
 (89, 18, 4),
 (90, 17, 37),
 (91, 10, 25),
 (92, 1, 19),
 (93, 6, 3),
 (94, 19, 19),
 (95, 18, 29),
 (96, 1, 33),
 (97, 15, 29),
 (98, 3, 5),
 (99, 17, 6),
 (100, 8, 38);
 