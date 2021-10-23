/***************************** organizations ******************************/
INSERT INTO organization (id, name, email, password, image, categories) VALUES (1, 'Cogibox', 'ttollerfield0@harvard.edu', 'whAGcftjpnr6', 'http://dummyimage.com/194x100.png/dddddd/000000', 'RF Shielding');
INSERT INTO organization (id, name, email, password, image, categories) VALUES (2, 'Fadeo', 'emckeon1@github.com', 'jtF9St3O', 'http://dummyimage.com/240x100.png/5fa2dd/ffffff', 'Plumbing & Medical Gas');
INSERT INTO organization (id, name, email, password, image, categories) VALUES (3, 'Eadel', 'mfocke2@stanford.edu', 'PQfFjXII', 'http://dummyimage.com/225x100.png/cc0000/ffffff', 'Masonry');
INSERT INTO organization (id, name, email, password, image, categories) VALUES (4, 'Demizz', 'egentery3@google.ca', '5MEagmDCQGt', 'http://dummyimage.com/108x100.png/ff4444/ffffff', 'Structural and Misc Steel (Fabrication)');
INSERT INTO organization (id, name, email, password, image, categories) VALUES (5, 'Thoughtsphere', 'smallord4@youtu.be', 'XBaWJPVDJQ', 'http://dummyimage.com/223x100.png/5fa2dd/ffffff', 'Exterior Signage');
INSERT INTO organization (id, name, email, password, image, categories) VALUES (6, 'Skibox', 'ipaulusch5@europa.eu', 'njGNPrpL', 'http://dummyimage.com/199x100.png/ff4444/ffffff', 'Curb & Gutter');
INSERT INTO organization (id, name, email, password, image, categories) VALUES (7, 'Devshare', 'sraisher6@sina.com.cn', 'BjUB9yA', 'http://dummyimage.com/155x100.png/cc0000/ffffff', 'Landscaping & Irrigation');
INSERT INTO organization (id, name, email, password, image, categories) VALUES (8, 'Browsecat', 'hmcharg7@tmall.com', 'ZmHsOTb9YC', 'http://dummyimage.com/177x100.png/cc0000/ffffff', 'Fire Protection');
INSERT INTO organization (id, name, email, password, image, categories) VALUES (9, 'Eamia', 'gpurnell8@vinaora.com', 'jBdNY2DZk5GA', 'http://dummyimage.com/127x100.png/dddddd/000000', 'Construction Clean and Final Clean');
INSERT INTO organization (id, name, email, password, image, categories) VALUES (10, 'Dabjam', 'james9@huffingtonpost.com', 'S3MOkJQ', 'http://dummyimage.com/117x100.png/dddddd/000000', 'Casework');

/*********************** events ************************************/
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (1, 'Triangle Capital Corporation', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 35, 55, '15/01/2022', '17/06/2022', 'Karamat', 'http://dummyimage.com/226x100.png/cc0000/ffffff', '9:46 AM', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 4, 'Fire Protection');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (2, 'Shutterfly, Inc.', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 99, 69, '30/03/2022', '19/07/2022', 'Kostomuksha', 'http://dummyimage.com/190x100.png/ff4444/ffffff', '1:09 AM', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 3, 'Structural and Misc Steel (Fabrication)');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (3, 'BioLife Solutions, Inc.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 87, 36, '01/04/2022', '05/10/2022', 'Piława Górna', 'http://dummyimage.com/143x100.png/cc0000/ffffff', '10:05 AM', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 5, 'Wall Protection');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (4, 'Parsley Energy, Inc.', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 30, 21, '09/11/2021', '12/10/2022', 'Kill', 'http://dummyimage.com/146x100.png/cc0000/ffffff', '12:38 AM', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 10, 'Rebar & Wire Mesh Install');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (5, 'Centrais Electricas Brasileiras S.A.- Eletrobras', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 27, 86, '02/04/2022', '25/06/2022', 'Aragarças', 'http://dummyimage.com/222x100.png/cc0000/ffffff', '1:56 AM', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 2, 'Framing (Wood)');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (6, 'Pacific Special Acquisition Corp.', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 2, 28, '22/11/2021', '07/09/2022', 'Fort Worth', 'http://dummyimage.com/103x100.png/cc0000/ffffff', '6:33 AM', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 8, 'Ornamental Railings');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (7, 'ASA Gold and Precious Metals Limited', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 47, 10, '27/01/2022', '12/08/2022', 'Totoral', 'http://dummyimage.com/108x100.png/5fa2dd/ffffff', '3:27 AM', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 4, 'Doors, Frames & Hardware');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (8, 'LyondellBasell Industries NV', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 20, 64, '20/11/2021', '12/07/2022', 'Jalpatagua', 'http://dummyimage.com/166x100.png/5fa2dd/ffffff', '6:13 AM', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 5, 'Soft Flooring and Base');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (9, 'OSI Systems, Inc.', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 31, 91, '11/01/2022', '08/07/2022', 'Tammela', 'http://dummyimage.com/113x100.png/cc0000/ffffff', '7:07 PM', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 9, 'Masonry & Precast');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (10, 'Harsco Corporation', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 19, 27, '24/03/2022', '29/07/2022', 'Kaum', 'http://dummyimage.com/110x100.png/ff4444/ffffff', '5:22 AM', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 1, 'Temp Fencing, Decorative Fencing and Gates');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (11, 'Cardiovascular Systems, Inc.', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 97, 98, '16/12/2021', '14/08/2022', 'Padej', 'http://dummyimage.com/175x100.png/5fa2dd/ffffff', '4:52 AM', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 5, 'Glass & Glazing');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (12, 'PrimeEnergy Corporation', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 66, 63, '24/12/2021', '18/09/2022', 'Melbourne', 'http://dummyimage.com/220x100.png/ff4444/ffffff', '2:55 AM', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, 'Drywall & Acoustical (FED)');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (13, 'Western Gas Partners, LP', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 61, 1, '13/05/2022', '24/05/2022', 'Gävle', 'http://dummyimage.com/196x100.png/dddddd/000000', '6:01 PM', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 3, 'Drywall & Acoustical (MOB)');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (14, 'Evertec, Inc.', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 83, 2, '10/02/2022', '13/09/2022', 'Dongle', 'http://dummyimage.com/139x100.png/5fa2dd/ffffff', '12:59 PM', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', 4, 'Masonry');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (15, 'NGL ENERGY PARTNERS LP', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 89, 30, '12/11/2021', '24/06/2022', 'Guiniculalay', 'http://dummyimage.com/201x100.png/ff4444/ffffff', '6:44 AM', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 10, 'Framing (Steel)');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (16, 'TPG Specialty Lending, Inc.', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 88, 3, '01/12/2021', '23/08/2022', 'Nanuque', 'http://dummyimage.com/183x100.png/dddddd/000000', '12:16 PM', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 10, 'HVAC');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (17, 'Modern Media Acquisition Corp.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 95, 53, '02/05/2022', '30/08/2022', 'Heilbronn', 'http://dummyimage.com/176x100.png/ff4444/ffffff', '3:44 AM', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 4, 'Roofing (Asphalt)');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (18, 'Tekla Healthcare Opportunies Fund', 'In congue. Etiam justo. Etiam pretium iaculis justo.

In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 12, 48, '22/04/2022', '28/08/2022', 'Sibucao', 'http://dummyimage.com/123x100.png/5fa2dd/ffffff', '2:01 PM', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 2, 'Epoxy Flooring');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (19, 'China Lodging Group, Limited', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 88, 85, '09/11/2021', '15/06/2022', 'Wujiaying', 'http://dummyimage.com/204x100.png/dddddd/000000', '10:01 AM', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 4, 'Fire Protection');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (20, 'Center Coast MLP & Infrastructure Fund', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 42, 92, '14/05/2022', '22/10/2022', 'Bystřany', 'http://dummyimage.com/161x100.png/cc0000/ffffff', '10:55 PM', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, 'Granite Surfaces');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (21, 'Antero Midstream Partners LP', 'In congue. Etiam justo. Etiam pretium iaculis justo.', 67, 67, '26/12/2021', '16/06/2022', 'Xinzhaiping', 'http://dummyimage.com/222x100.png/ff4444/ffffff', '9:37 PM', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 3, 'Roofing (Asphalt)');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (22, 'Phillips 66', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 93, 64, '18/12/2021', '04/08/2022', 'Stockholm', 'http://dummyimage.com/135x100.png/ff4444/ffffff', '1:37 PM', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.

In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 6, 'Casework');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (23, 'Dorian LPG Ltd.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 33, 24, '22/05/2022', '27/08/2022', 'Xingyi', 'http://dummyimage.com/202x100.png/ff4444/ffffff', '5:40 AM', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 8, 'Overhead Doors');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (24, 'Petrobras Argentina S.A.', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 54, 25, '05/11/2021', '14/09/2022', 'Al Fayyūm', 'http://dummyimage.com/141x100.png/cc0000/ffffff', '10:22 AM', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 10, 'Doors, Frames & Hardware');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (25, 'First Trust Developed Markets Ex-US AlphaDEX Fund', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 35, 56, '27/12/2021', '02/08/2022', 'Kedungcangkring', 'http://dummyimage.com/116x100.png/5fa2dd/ffffff', '7:48 AM', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 8, 'Drywall & Acoustical (FED)');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (26, 'WellCare Health Plans, Inc.', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 22, 14, '28/03/2022', '05/07/2022', 'Xinzhan', 'http://dummyimage.com/103x100.png/dddddd/000000', '9:44 PM', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 10, 'Masonry & Precast');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (27, 'China Automotive Systems, Inc.', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 23, 26, '15/01/2022', '20/06/2022', 'Zhuqi', 'http://dummyimage.com/157x100.png/dddddd/000000', '12:07 PM', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 4, 'Glass & Glazing');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (28, 'Hovnanian Enterprises Inc', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 64, 82, '20/01/2022', '22/10/2022', 'Sadovo', 'http://dummyimage.com/171x100.png/cc0000/ffffff', '10:14 AM', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 7, 'Electrical and Fire Alarm');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (29, 'Ally Financial Inc.', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

Fusce consequat. Nulla nisl. Nunc nisl.', 81, 31, '22/01/2022', '30/09/2022', 'Noginsk-9', 'http://dummyimage.com/152x100.png/ff4444/ffffff', '12:20 AM', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 9, 'Temp Fencing, Decorative Fencing and Gates');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (30, 'Francesca''s Holdings Corporation', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 56, 46, '16/12/2021', '11/06/2022', 'Qala i Naw', 'http://dummyimage.com/228x100.png/5fa2dd/ffffff', '8:48 AM', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 10, 'Elevator');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (31, 'Medovex Corp.', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 76, 49, '09/12/2021', '02/09/2022', 'Khokhryaki', 'http://dummyimage.com/100x100.png/cc0000/ffffff', '12:37 AM', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 7, 'Masonry');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (32, 'Glacier Bancorp, Inc.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 74, 86, '27/01/2022', '30/06/2022', 'Jandayan', 'http://dummyimage.com/119x100.png/ff4444/ffffff', '7:21 PM', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 5, 'Wall Protection');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (33, 'FlexShopper, Inc.', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 2, 72, '13/12/2021', '19/09/2022', 'Baishuitan', 'http://dummyimage.com/143x100.png/dddddd/000000', '4:44 AM', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 10, 'Glass & Glazing');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (34, 'Dermira, Inc.', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 100, 6, '12/04/2022', '28/09/2022', 'Ulricehamn', 'http://dummyimage.com/196x100.png/dddddd/000000', '9:55 AM', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 1, 'Construction Clean and Final Clean');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (35, 'Waters Corporation', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

Sed ante. Vivamus tortor. Duis mattis egestas metus.', 28, 79, '07/04/2022', '11/09/2022', 'Padangpanjang', 'http://dummyimage.com/197x100.png/ff4444/ffffff', '2:38 AM', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 4, 'Curb & Gutter');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (36, 'Oritani Financial Corp.', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.

In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 85, 6, '24/12/2021', '17/06/2022', 'West Palm Beach', 'http://dummyimage.com/191x100.png/5fa2dd/ffffff', '1:20 PM', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.', 7, 'Structural & Misc Steel Erection');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (37, 'Popular, Inc.', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 61, 100, '23/04/2022', '13/07/2022', 'Hujiaying', 'http://dummyimage.com/169x100.png/5fa2dd/ffffff', '7:06 AM', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 5, 'Casework');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (38, 'BeiGene, Ltd.', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', 43, 95, '15/05/2022', '29/05/2022', 'Tinambac', 'http://dummyimage.com/187x100.png/ff4444/ffffff', '8:51 PM', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 5, 'Structural and Misc Steel (Fabrication)');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (39, 'BGC Partners, Inc.', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', 92, 81, '09/03/2022', '13/06/2022', 'Pancanagara', 'http://dummyimage.com/155x100.png/ff4444/ffffff', '6:16 AM', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 5, 'Exterior Signage');
INSERT INTO events (id, name, description, price, attendance, start_date, expire_date, location, image, duration, details, organizer_id, category) VALUES (40, 'Axis Capital Holdings Limited', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 71, 59, '24/02/2022', '21/10/2022', 'Puteran Kidul', 'http://dummyimage.com/175x100.png/cc0000/ffffff', '3:48 AM', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 3, 'RF Shielding');

/***************** attendance *********************/

INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (1, 'Marlowe Caddy', 'mcaddy0@amazon.co.jp', 51, 'Male', false, '191-660-7117');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (2, 'Albertine Thunder', 'athunder1@tinyurl.com', 4, 'Male', true, '790-777-8979');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (3, 'Eric Dowber', 'edowber2@blogger.com', 50, 'Male', true, '358-400-2549');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (4, 'Orville Antonsen', 'oantonsen3@columbia.edu', 44, 'Male', false, '270-150-5123');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (5, 'Francine Scutts', 'fscutts4@furl.net', 23, 'Female', false, '439-101-4570');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (6, 'Arabella Siddle', 'asiddle5@skyrock.com', 39, 'Male', false, '483-187-5484');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (7, 'Rem Swindells', 'rswindells6@deliciousdays.com', 9, 'Female', false, '592-570-8702');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (8, 'Buckie Tomek', 'btomek7@exblog.jp', 38, 'Male', false, '720-582-8022');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (9, 'Ayn Wadeling', 'awadeling8@sun.com', 30, 'Male', false, '813-322-7373');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (10, 'Lana Duly', 'lduly9@shinystat.com', 36, 'Male', true, '562-486-6548');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (11, 'Manny Element', 'melementa@diigo.com', 48, 'Female', true, '401-492-8807');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (12, 'Neil Strodder', 'nstrodderb@statcounter.com', 11, 'Male', false, '875-254-7195');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (13, 'Pepita Prichet', 'pprichetc@foxnews.com', 52, 'Female', false, '518-529-4162');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (14, 'Kelley Adshede', 'kadsheded@blogger.com', 38, 'Female', false, '875-680-0384');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (15, 'Rosy Shakespeare', 'rshakespearee@altervista.org', 1, 'Male', false, '977-545-8493');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (16, 'Godart Picheford', 'gpichefordf@arizona.edu', 51, 'Female', true, '710-742-1338');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (17, 'Georgeanne Malec', 'gmalecg@google.cn', 57, 'Male', false, '840-246-6524');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (18, 'Dylan Pala', 'dpalah@prnewswire.com', 26, 'Female', false, '441-574-7860');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (19, 'Garik Layburn', 'glayburni@t-online.de', 4, 'Male', false, '926-449-1656');
INSERT INTO attendance (id, name, email, age, gender, isSubscriber, phone) VALUES (20, 'Sianna Ivshin', 'sivshinj@ameblo.jp', 8, 'Male', true, '933-712-5385');

/******************* event_attendance ******************************/
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (1, 4, 11);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (2, 10, 17);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (3, 12, 32);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (4, 9, 11);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (5, 15, 14);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (6, 16, 5);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (7, 11, 18);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (8, 14, 40);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (9, 9, 15);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (10, 5, 32);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (11, 19, 33);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (12, 12, 8);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (13, 16, 40);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (14, 11, 21);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (15, 11, 7);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (16, 10, 6);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (17, 10, 25);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (18, 13, 19);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (19, 8, 13);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (20, 9, 37);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (21, 13, 14);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (22, 3, 11);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (23, 2, 33);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (24, 4, 25);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (25, 8, 39);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (26, 11, 32);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (27, 3, 18);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (28, 15, 27);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (29, 6, 19);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (30, 3, 32);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (31, 18, 34);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (32, 5, 8);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (33, 15, 25);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (34, 16, 18);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (35, 8, 7);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (36, 15, 24);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (37, 5, 36);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (38, 4, 2);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (39, 12, 14);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (40, 17, 3);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (41, 4, 39);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (42, 4, 6);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (43, 13, 29);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (44, 6, 20);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (45, 1, 36);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (46, 6, 28);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (47, 13, 13);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (48, 14, 29);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (49, 6, 13);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (50, 15, 38);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (51, 15, 2);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (52, 10, 40);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (53, 9, 34);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (54, 8, 16);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (55, 15, 37);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (56, 11, 23);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (57, 10, 30);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (58, 19, 7);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (59, 16, 27);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (60, 12, 34);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (61, 20, 30);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (62, 1, 6);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (63, 10, 23);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (64, 11, 11);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (65, 12, 1);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (66, 14, 17);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (67, 8, 18);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (68, 5, 11);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (69, 6, 25);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (70, 17, 17);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (71, 3, 30);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (72, 13, 1);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (73, 1, 13);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (74, 17, 23);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (75, 19, 37);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (76, 5, 21);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (77, 6, 13);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (78, 16, 19);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (79, 16, 1);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (80, 15, 25);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (81, 8, 25);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (82, 15, 28);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (83, 5, 28);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (84, 10, 40);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (85, 18, 11);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (86, 10, 24);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (87, 20, 25);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (88, 12, 7);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (89, 18, 4);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (90, 17, 37);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (91, 10, 25);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (92, 1, 19);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (93, 6, 3);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (94, 19, 19);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (95, 18, 29);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (96, 1, 33);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (97, 15, 29);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (98, 3, 5);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (99, 17, 6);
INSERT INTO event_attendance (id, attendance_id, event_id) VALUES (100, 8, 38);