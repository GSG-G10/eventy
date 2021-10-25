/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');

const app = require('../app');

test('test 200 status /', async () => {
  await request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .catch((err) => { throw err; });
});

test('test  /404 route', async () => {
  await request(app)
    .get('/api/v1/error')
    .expect(404)
    .expect('Content-Type', /json/)
    .catch((err) => { throw err; });
});
test('test GET events route', async () => {
  await request(app)
    .get('/api/v1/events')
    .expect(200)
    .expect('Content-Type', /json/)
    .catch((err) => { throw err; });
});
test('test GET event with id param route', async () => {
  await request(app)
    .get('/api/v1/events/5')
    .expect(200)
    .expect('Content-Type', /json/)
    .catch((err) => { throw err; });
});
test('test GET event with category queryString route', async () => {
  await request(app)
    .get('/api/v1/events?category=informal')
    .expect(200)
    .expect('Content-Type', /json/)
    .catch((err) => { throw err; });
});
test('test GET event with type queryString route', async () => {
  await request(app)
    .get('/api/v1/events?type=top')
    .expect(200)
    .expect('Content-Type', /json/)
    .catch((err) => { throw err; });
});
test('test GET organization route', async () => {
  await request(app)
    .get('/api/v1/organizations')
    .expect(200)
    .expect('Content-Type', /json/)
    .catch((err) => { throw err; });
});
test('test GET organization route with id param', async () => {
  await request(app)
    .get('/api/v1/organizations/5')
    .expect(200)
    .expect('Content-Type', /json/)
    .catch((err) => { throw err; });
});
