const request = require('supertest');

const app = require('../app');

test('POST /events 201 test', async () => {
  const data = {
    name: 'Code Academy training',
    description: 'Tec training for developers in Gaza',
    price: 3,
    attendance: 4,
    startDate: '2022-11-14',
    expireDate: '2022-12-17',
    location: 'online',
    duration: '08:00:00',
    details: 'Online tec training',
    organizer_id: 23,
    category: 'technology',
  };

  await request(app)
    .post('/api/v1/events')
    .send(data)
    .expect(201)

    .then(async (response) => {
      // Check the response
      expect(response.body.name).toBe(data.name);
      expect(response.body.description).toBe(data.description);
      expect(response.body.price).toBe(data.price);
      expect(response.body.attendance).toBe(data.attendance);
      expect(response.body.startDate).toBe(data.startDate);
      expect(response.body.expireDate).toBe(data.expireDate);
      expect(response.body.location).toBe(data.location);
      expect(response.body.duration).toBe(data.duration);
      expect(response.body.details).toBe(data.details);
      expect(response.body.category).toBe(data.category);
    });
});

test('POST /events 404 test', async () => {
  const data = {
    name: 'Code Academy training',
    description: 'Tec training for developers in Gaza',
    price: 3,
    attendance: 4,
    startDate: '2022-11-14',
    expireDate: '2022-12-17',
    location: 'online',
    duration: '08:00:00',
    details: 'Online tec training',
    organizer_id: 23,
    category: 'technology',
  };

  await request(app)
    .post('/api/v1/eventss')
    .send(data)
    .expect(404)
});
