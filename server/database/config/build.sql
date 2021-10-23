BEGIN;
  DROP TABLE IF EXISTS ORGANIZATION,EVENTS,ATTENDANCE,EVENT_ATTENDANCE CASCADE;

  CREATE TABLE ORGANIZATION(
      id SERIAL PRIMARY KEY,
      name VARCHAR(80) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      password VARCHAR(100) NOT NULL,
      image TEXT,
      categories TEXT
  );

  CREATE TABLE EVENTS(
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
      details VARCHAR(250) NOT NULL,
      organizer_id INTEGER REFERENCES ORGANIZATION(id),
      category TEXT NOT NULL
  );

  CREATE TABLE ATTENDANCE(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      age INTEGER NOT NULL,
      gender VARCHAR(50) NOT NULL,
      isSubscriber BOOLEAN NOT NULL,
      phone INTEGER
  );

  CREATE TABLE EVENT_ATTENDANCE(
      id SERIAL PRIMARY KEY,
      attendance_id INTEGER REFERENCES ATTENDANCE(id),
      event_id INTEGER REFERENCES EVENTS(id)
  );

COMMIT;