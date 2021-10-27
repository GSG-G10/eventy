/***************************** organizations ******************************/
INSERT INTO organization (
        name,
        email,
        password,
        image,
        description,
        categories
    )
VALUES (
        'Browsecat',
        'nalvares0@csmonitor.com',
        'Q0fTCwdxmR',
        'http://dummyimage.com/220x100.png/cc0000/ffffff',
        'This is the organization description which should include a breif information about this organization and its activities',
        'literature'
    ),
    (
        'Skipfire',
        'kpeoples1@nba.com',
        'UqQBSPg',
        'http://dummyimage.com/132x100.png/dddddd/000000',
        'This is the organization description which should include a breif information about this  organization and its activities',
        'literature'
    ),
    (
        'Agivu',
        'jthorneloe2@sciencedaily.com',
        'DV4de1MN5X',
        'http://dummyimage.com/221x100.png/cc0000/ffffff',
        'This is the organization description which should include a breif information about this organization and its activities',
        'formal'
    ),
    (
        'Browsebug',
        'abaglin3@telegraph.co.uk',
        'xTRCYE4kepD',
        'http://dummyimage.com/127x100.png/dddddd/000000',
        'This is the organization description which should include a breif information about this organization and its activities',
        'art'
    ),
    (
        'Ooba',
        'twindmill4@stanford.edu',
        'gIHLa6Fecs9j',
        'http://dummyimage.com/201x100.png/cc0000/ffffff',
        'This is the organization description which should include a breif information about this organization and its activities',
        'technology'
    ),
    (
        'Skinix',
        'bamyes5@examiner.com',
        'QpDOF7HIG',
        'http://dummyimage.com/200x100.png/dddddd/000000',
        'This is the organization description which should include a breif information about this organization and its activities',
        'technology'
    ),
    (
        'Meetz',
        'apurchon6@thetimes.co.uk',
        'GU2kf5jOdF',
        'http://dummyimage.com/227x100.png/dddddd/000000',
        'This is the organization description which should include a breif information about this organization and its activities',
        'literature'
    ),
    (
        'Eamia',
        'loakshott7@quantcast.com',
        '20fvqHFap',
        'http://dummyimage.com/174x100.png/cc0000/ffffff',
        'This is the organization description which should include a breif information about this  organization and its activities', 
        'medicine'
    ),
    (
        'Eimbee',
        'mbartalini8@seesaa.net',
        'M08UqQrHG6h',
        'http://dummyimage.com/181x100.png/dddddd/000000',
        'This is the organization description which should include a breif information about this  organization and its activities',
        'literature'
    ),
    (
        'Thoughtblab',
        'dinkpin9@kickstarter.com',
        'HFZvhYcADi',
        'http://dummyimage.com/135x100.png/cc0000/ffffff',
        'This is the organization description which should include a breif information about this organization and its activities',
        'medicine'
    );
/*********************** events ************************************/
INSERT INTO events (
        name,
        description,
        price,
        attendance,
        start_date,
        expire_date,
        location,
        image,
        duration,
        details,
        organizer_id,
        category
    )
VALUES (
        'BlackRock California Municipal Income Trust',
        'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
        0,
        46,
        '2021-10-26',
        '2022-03-10',
        'Huo’erqi',
        'http://dummyimage.com/134x100.png/5fa2dd/ffffff',
        '6:59',
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        10,
        'art'
    ),
    (
        'Aramark',
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
        0,
        6,
        '2021-11-11',
        '2022-05-09',
        'Chervonoarmiys’k',
        'http://dummyimage.com/108x100.png/dddddd/000000',
        '5:33',
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        4,
        'society'
    ),
    (
        'First Trust High Income Long Short Fund',
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
        0,
        80,
        '2021-12-13',
        '2022-04-30',
        'Rājshāhi',
        'http://dummyimage.com/233x100.png/cc0000/ffffff',
        '1:39',
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        2,
        'medicine'
    ),
    (
        'Precision Drilling Corporation',
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        0,
        86,
        '2022-01-16',
        '2022-05-19',
        'Binjai',
        'http://dummyimage.com/166x100.png/cc0000/ffffff',
        '20:40',
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
        3,
        'literature'
    ),
    (
        'Stanley Black & Decker, Inc.',
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        0,
        18,
        '2022-01-04',
        '2022-05-16',
        'Pangushan',
        'http://dummyimage.com/145x100.png/cc0000/ffffff',
        '11:42',
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        6,
        'literature'
    ),
    (
        'Constellation Brands Inc',
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
        0,
        97,
        '2021-12-05',
        '2022-03-20',
        'Monastirákion',
        'http://dummyimage.com/116x100.png/cc0000/ffffff',
        '4:16',
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        5,
        'technology'
    ),
    (
        'TD Ameritrade Holding Corporation',
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        0,
        34,
        '2021-12-18',
        '2022-04-11',
        'Xinhua',
        'http://dummyimage.com/206x100.png/ff4444/ffffff',
        '6:17',
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
        10,
        'politics'
    ),
    (
        'Prudential Financial, Inc.',
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        0,
        29,
        '2021-11-10',
        '2022-03-23',
        'Villa del Rosario',
        'http://dummyimage.com/185x100.png/dddddd/000000',
        '15:51',
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        7,
        'formal'
    ),
    (
        'Nustar Energy L.P.',
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        0,
        45,
        '2021-10-29',
        '2022-03-25',
        'Alfeizerão',
        'http://dummyimage.com/133x100.png/cc0000/ffffff',
        '10:50',
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
        5,
        'politics'
    ),
    (
        'Gulf Island Fabrication, Inc.',
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        0,
        75,
        '2021-12-22',
        '2022-03-01',
        'Novoukrainskiy',
        'http://dummyimage.com/250x100.png/dddddd/000000',
        '8:32',
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        6,
        'art'
    ),
    (
        'EOG Resources, Inc.',
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        0,
        91,
        '2021-12-09',
        '2022-04-22',
        'Petaling Jaya',
        'http://dummyimage.com/227x100.png/5fa2dd/ffffff',
        '10:24',
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        5,
        'formal'
    ),
    (
        'First Trust Specialty Finance and Financial Opportunities Fund',
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        0,
        22,
        '2021-11-14',
        '2022-04-02',
        'Esquipulas',
        'http://dummyimage.com/242x100.png/cc0000/ffffff',
        '6:22',
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        10,
        'formal'
    ),
    (
        'National Energy Services Reunited Corp.',
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
        67,
        64,
        '2021-11-20',
        '2022-03-26',
        'Tras Cerros',
        'http://dummyimage.com/107x100.png/dddddd/000000',
        '20:13',
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
        5,
        'technology'
    ),
    (
        'QuickLogic Corporation',
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        0,
        64,
        '2021-12-04',
        '2022-05-07',
        'Xikou',
        'http://dummyimage.com/152x100.png/5fa2dd/ffffff',
        '3:11',
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        5,
        'art'
    ),
    (
        'Customers Bancorp, Inc',
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        18,
        79,
        '2021-11-24',
        '2022-02-10',
        'Lugait',
        'http://dummyimage.com/110x100.png/cc0000/ffffff',
        '21:04',
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
        7,
        'technology'
    ),
    (
        'WisdomTree United Kingdom Hedged Equity Fund',
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        97,
        60,
        '2022-01-07',
        '2022-05-16',
        'Na Khu',
        'http://dummyimage.com/241x100.png/cc0000/ffffff',
        '4:43',
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
        4,
        'art'
    ),
    (
        'Analog Devices, Inc.',
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        55,
        48,
        '2021-12-02',
        '2022-04-29',
        'Hamburg Harvestehude',
        'http://dummyimage.com/241x100.png/ff4444/ffffff',
        '21:44',
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
        7,
        'technology'
    ),
    (
        'Cohen & Steers Quality Income Realty Fund Inc',
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
        45,
        20,
        '2021-11-08',
        '2022-05-09',
        'Shanxi',
        'http://dummyimage.com/148x100.png/ff4444/ffffff',
        '0:27',
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        8,
        'literature'
    ),
    (
        'Liquidity Services, Inc.',
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        44,
        36,
        '2021-12-19',
        '2022-01-29',
        'Dal’neye Konstantinovo',
        'http://dummyimage.com/161x100.png/ff4444/ffffff',
        '16:04',
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        10,
        'politics'
    ),
    (
        'Seneca Foods Corp.',
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
        0,
        98,
        '2021-12-20',
        '2022-03-24',
        'Salon-de-Provence',
        'http://dummyimage.com/123x100.png/dddddd/000000',
        '16:55',
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
        5,
        'medicine'
    ),
    (
        'Hennessy Advisors, Inc.',
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        100,
        8,
        '2021-11-08',
        '2022-03-15',
        'Xudat',
        'http://dummyimage.com/195x100.png/dddddd/000000',
        '16:33',
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        1,
        'medicine'
    ),
    (
        'Fifth Street Senior Floating Rate Corp.',
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        43,
        13,
        '2021-11-26',
        '2022-01-31',
        'Mendeleyevo',
        'http://dummyimage.com/139x100.png/cc0000/ffffff',
        '14:15',
        'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
        4,
        'art'
    ),
    (
        'Renewable Energy Group, Inc.',
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        33,
        19,
        '2021-11-13',
        '2022-01-25',
        'Lurut',
        'http://dummyimage.com/179x100.png/ff4444/ffffff',
        '16:41',
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
        2,
        'society'
    ),
    (
        'voxeljet AG',
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
        67,
        48,
        '2021-12-31',
        '2022-04-08',
        'Cikaso',
        'http://dummyimage.com/134x100.png/cc0000/ffffff',
        '3:43',
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        3,
        'politics'
    ),
    (
        'Scorpio Tankers Inc.',
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
        7,
        47,
        '2021-11-02',
        '2022-02-24',
        'Taghazout',
        'http://dummyimage.com/152x100.png/5fa2dd/ffffff',
        '9:33',
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
        2,
        'literature'
    ),
    (
        'DigitalGlobe, Inc',
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
        0,
        28,
        '2021-12-14',
        '2022-04-29',
        'Shang Boingor',
        'http://dummyimage.com/143x100.png/5fa2dd/ffffff',
        '15:16',
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        2,
        'medicine'
    ),
    (
        'ARI Network Services, Inc.',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
        91,
        55,
        '2021-11-29',
        '2022-02-02',
        'Zhaigang',
        'http://dummyimage.com/206x100.png/ff4444/ffffff',
        '2:43',
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        4,
        'medicine'
    ),
    (
        'Orange',
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
        84,
        7,
        '2021-12-06',
        '2022-04-04',
        'Hadabei',
        'http://dummyimage.com/117x100.png/dddddd/000000',
        '2:40',
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        4,
        'art'
    ),
    (
        'Exxon Mobil Corporation',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
        0,
        7,
        '2022-01-09',
        '2022-05-14',
        'Pangrumasan',
        'http://dummyimage.com/196x100.png/ff4444/ffffff',
        '20:45',
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        10,
        'politics'
    ),
    (
        'iPath US Treasury Long Bond Bear ETN',
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
        38,
        35,
        '2022-01-13',
        '2022-05-07',
        'Krotoszyn',
        'http://dummyimage.com/106x100.png/cc0000/ffffff',
        '4:48',
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        2,
        'formal'
    ),
    (
        'Independence Holding Company',
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
        0,
        93,
        '2021-12-11',
        '2022-02-11',
        'Mahdishahr',
        'http://dummyimage.com/152x100.png/cc0000/ffffff',
        '19:43',
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        5,
        'politics'
    ),
    (
        'People''s United Financial, Inc.',
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        0,
        51,
        '2021-12-02',
        '2022-04-27',
        'Aiguo',
        'http://dummyimage.com/174x100.png/cc0000/ffffff',
        '5:52',
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        6,
        'society'
    ),
    (
        'Reliance Steel & Aluminum Co.',
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
        0,
        73,
        '2021-12-24',
        '2022-04-24',
        'Kunda',
        'http://dummyimage.com/249x100.png/dddddd/000000',
        '6:26',
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        8,
        'formal'
    ),
    (
        'The Medicines Company',
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
        97,
        77,
        '2021-11-01',
        '2022-03-07',
        'Omaha',
        'http://dummyimage.com/181x100.png/5fa2dd/ffffff',
        '17:12',
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        5,
        'politics'
    ),
    (
        'Peregrine Pharmaceuticals Inc.',
        'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
        94,
        9,
        '2021-12-09',
        '2022-05-07',
        'Ilagan',
        'http://dummyimage.com/205x100.png/ff4444/ffffff',
        '19:56',
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
        2,
        'formal'
    ),
    (
        'CHS Inc',
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
        0,
        85,
        '2021-11-06',
        '2022-03-13',
        'Araxá',
        'http://dummyimage.com/228x100.png/cc0000/ffffff',
        '7:57',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        4,
        'medicine'
    ),
    (
        'Dynagas LNG Partners LP',
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
        36,
        94,
        '2021-11-03',
        '2022-04-28',
        'Stockholm',
        'http://dummyimage.com/143x100.png/dddddd/000000',
        '18:18',
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        2,
        'society'
    ),
    (
        'Under Armour, Inc.',
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
        0,
        22,
        '2022-01-22',
        '2022-04-23',
        'Truskavets',
        'http://dummyimage.com/160x100.png/dddddd/000000',
        '16:06',
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        9,
        'formal'
    ),
    (
        'Glatfelter',
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
        43,
        83,
        '2021-11-12',
        '2022-02-03',
        'Aubenas',
        'http://dummyimage.com/118x100.png/dddddd/000000',
        '22:50',
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        2,
        'formal'
    ),
    (
        'IF Bancorp, Inc.',
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        0,
        44,
        '2021-11-09',
        '2022-05-17',
        'Xiongbei',
        'http://dummyimage.com/138x100.png/5fa2dd/ffffff',
        '15:27',
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
        2,
        'formal'
    );
/***************** attendance *********************/
INSERT INTO attendance (name, email, age, gender, isSubscriber, phone)
VALUES (
        'Marlowe Caddy',
        'mcaddy0@amazon.co.jp',
        51,
        'Male',
        false,
        '191-660-7117'
    ),
    (
        'Albertine Thunder',
        'athunder1@tinyurl.com',
        4,
        'Male',
        true,
        '790-777-8979'
    ),
    (
        'Eric Dowber',
        'edowber2@blogger.com',
        50,
        'Male',
        true,
        '358-400-2549'
    ),
    (
        'Orville Antonsen',
        'oantonsen3@columbia.edu',
        44,
        'Male',
        false,
        '270-150-5123'
    ),
    (
        'Francine Scutts',
        'fscutts4@furl.net',
        23,
        'Female',
        false,
        '439-101-4570'
    ),
    (
        'Arabella Siddle',
        'asiddle5@skyrock.com',
        39,
        'Male',
        false,
        '483-187-5484'
    ),
    (
        'Rem Swindells',
        'rswindells6@deliciousdays.com',
        9,
        'Female',
        false,
        '592-570-8702'
    ),
    (
        'Buckie Tomek',
        'btomek7@exblog.jp',
        38,
        'Male',
        false,
        '720-582-8022'
    ),
    (
        'Ayn Wadeling',
        'awadeling8@sun.com',
        30,
        'Male',
        false,
        '813-322-7373'
    ),
    (
        'Lana Duly',
        'lduly9@shinystat.com',
        36,
        'Male',
        true,
        '562-486-6548'
    ),
    (
        'Manny Element',
        'melementa@diigo.com',
        48,
        'Female',
        true,
        '401-492-8807'
    ),
    (
        'Neil Strodder',
        'nstrodderb@statcounter.com',
        11,
        'Male',
        false,
        '875-254-7195'
    ),
    (
        'Pepita Prichet',
        'pprichetc@foxnews.com',
        52,
        'Female',
        false,
        '518-529-4162'
    ),
    (
        'Kelley Adshede',
        'kadsheded@blogger.com',
        38,
        'Female',
        false,
        '875-680-0384'
    ),
    (
        'Rosy Shakespeare',
        'rshakespearee@altervista.org',
        1,
        'Male',
        false,
        '977-545-8493'
    ),
    (
        'Godart Picheford',
        'gpichefordf@arizona.edu',
        51,
        'Female',
        true,
        '710-742-1338'
    ),
    (
        'Georgeanne Malec',
        'gmalecg@google.cn',
        57,
        'Male',
        false,
        '840-246-6524'
    ),
    (
        'Dylan Pala',
        'dpalah@prnewswire.com',
        26,
        'Female',
        false,
        '441-574-7860'
    ),
    (
        'Garik Layburn',
        'glayburni@t-online.de',
        4,
        'Male',
        false,
        '926-449-1656'
    ),
    (
        'Sianna Ivshin',
        'sivshinj@ameblo.jp',
        8,
        'Male',
        true,
        '933-712-5385'
    );
/******************* event_attendance ******************************/
INSERT INTO event_attendance (attendance_id, event_id)
VALUES (13, 10),
    (4, 11),
    (12, 1),
    (13, 35),
    (4, 34),
    (18, 16),
    (4, 8),
    (9, 26),
    (8, 21),
    (15, 32),
    (13, 18),
    (18, 27),
    (4, 33),
    (16, 3),
    (1, 3),
    (8, 22),
    (6, 16),
    (11, 38),
    (7, 13),
    (14, 3),
    (3, 8),
    (20, 5),
    (7, 2),
    (4, 6),
    (12, 20),
    (10, 3),
    (14, 15),
    (9, 13),
    (9, 5),
    (8, 32),
    (2, 2),
    (3, 13),
    (20, 4),
    (9, 32),
    (16, 25),
    (19, 37),
    (5, 5),
    (3, 35),
    (17, 31),
    (9, 9),
    (8, 36),
    (19, 28),
    (20, 17),
    (19, 24),
    (5, 32),
    (11, 28),
    (3, 12),
    (14, 29),
    (18, 4),
    (9, 33),
    (15, 11),
    (14, 36),
    (2, 29),
    (2, 25),
    (3, 5),
    (15, 2),
    (6, 28),
    (1, 26),
    (15, 36),
    (8, 26),
    (11, 33),
    (5, 19),
    (16, 27),
    (14, 26),
    (20, 3),
    (14, 18),
    (7, 35),
    (8, 13),
    (13, 27),
    (20, 10),
    (9, 25),
    (8, 4),
    (7, 39),
    (13, 16),
    (15, 5),
    (16, 2),
    (20, 13),
    (16, 6),
    (17, 16),
    (14, 28),
    (1, 21),
    (1, 23),
    (19, 33),
    (16, 20),
    (17, 18),
    (1, 6),
    (8, 25),
    (6, 9),
    (12, 32),
    (20, 27),
    (12, 17),
    (9, 3),
    (17, 25),
    (20, 19),
    (9, 32),
    (4, 29),
    (12, 18),
    (19, 18),
    (15, 17),
    (8, 9);