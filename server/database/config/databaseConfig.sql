CREATE DATABASE eventy;
CREATE USER organizer WITH superuser password '123456';
ALTER DATABASE eventy OWNER TO organizer;
-- test db
CREATE DATABASE eventytest;
CREATE USER organizer2 WITH superuser password '123456';
ALTER DATABASE eventytest OWNER TO organizer2;