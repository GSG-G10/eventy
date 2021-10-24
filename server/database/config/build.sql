BEGIN;
DROP TABLE IF EXISTS organization,
events,
attendance,
event_attendance CASCADE;
CREATE TABLE organization(
    id SERIAL PRIMARY KEY,
    name VARCHAR(80) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    image TEXT,
    description TEXT,
    categories TEXT NOT NULL
);
CREATE TABLE events(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price INTEGER NOT NULL DEFAULT 0,
    attendance INTEGER DEFAULT 0,
    start_date DATE NOT NULL,
    expire_date DATE NOT NULL,
    location VARCHAR(200) NOT NULL,
    image TEXT,
    duration TIME NOT NULL,
    details TEXT NOT NULL,
    organizer_id INTEGER REFERENCES organization(id),
    category TEXT NOT NULL
);
CREATE TABLE attendance(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    age INTEGER NOT NULL,
    gender VARCHAR(50) NOT NULL,
    isSubscriber BOOLEAN NOT NULL,
    phone VARCHAR(25)
);
CREATE TABLE event_attendance(
    id SERIAL PRIMARY KEY,
    attendance_id INTEGER REFERENCES attendance(id),
    event_id INTEGER REFERENCES events(id)
);
COMMIT;