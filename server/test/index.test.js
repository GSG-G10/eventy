/* eslint-disable no-undef */
const request = require('supertest');

const app = require('../app');

describe('Post attendance Test', () => {
  test('test 200 status and message to be Joined Event Successfuly', async () => {
    const id = 6;
    const res = await request(app)
      .post(`/api/v1/events/${id}/attendance`)
      .send({
        name: 'ahmad sabbah',
        email: 'new-email1@email.com',
        age: 25,
        gender: 'gender',
        phone: '65465465465',
      })
      .expect(200);
    expect(res.body).toEqual({ message: 'Joined Event Successfuly' });
  });
  test('test 400 status for input validation on gender post attendance', async () => {
    const id = 6;
    const res = await request(app)
      .post(`/api/v1/events/${id}/attendance`)
      .send({
        name: 'ahmad sabbah',
        email: 'email@email.com',
        age: 25,
        gender: 22,
        phone: '65465465465',
      })
      .expect(400);
    expect(res.body).toEqual({ error: { message: '"gender" must be a string', status: 400 } });
  });
  test('test 200 status for already joined message when post existed attendance', async () => {
    const id = 6;
    const res = await request(app)
      .post(`/api/v1/events/${id}/attendance`)
      .send({
        name: 'ahmad sabbah',
        email: 'existed-email@femail.com',
        age: 25,
        gender: 'male',
        phone: '65465465465',
      })
      .expect(200);
    expect(res.body).toEqual({ message: 'Already joined', status: 200 });
  });
});
