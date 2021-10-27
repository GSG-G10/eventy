/* eslint-disable no-undef */
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');

const app = require('../app');
const dbBuild = require('../database/config/build');
const connection = require('../database/connection');

describe('Server Tests', () => {
  beforeEach(() => dbBuild());
  afterAll(() => connection.end());

  test('test 200 status /', async () => {
    const res = await request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = {
      message: 'Server is running',
    };
    return expect(expected).toEqual(res.body);
  });

  test('test  /404 route', async () => {
    const res = await request(app)
      .get('/api/v1/error')
      .expect(404)
      .expect('Content-Type', /json/);
    const expected = {
      message: 'Page Not Found!',
    };
    return expect(expected).toEqual(res.body);
  });
  test('test GET events route', async () => {
    const res = await request(app)
      .get('/api/v1/events')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = {
      status: 200,
      message: 'Events imported successfully',
    };
    return expect(expected).toEqual({ status: res.body.status, message: res.body.message });
  });
  test('test GET event with id param route', async () => {
    const res = await request(app)
      .get('/api/v1/events/5')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = {
      status: 200,
      message: 'Event is imported successfully',
      data: [
        {
          id: 5,
          name: 'Stanley Black & Decker, Inc.',
          description: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
          price: 24,
          attendance: 18,
          start_date: '2022-01-03T22:00:00.000Z',
          expire_date: '2022-05-15T21:00:00.000Z',
          location: 'Pangushan',
          image: 'http://dummyimage.com/145x100.png/cc0000/ffffff',
          duration: '11:42:00',
          details: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
          organizer_id: 6,
          category: 'literature',
        },
      ],
    };
    return expect(expected).toEqual(res.body);
  });
  test('test GET event with category queryString route', async () => {
    const res = await request(app)
      .get('/api/v1/events?category=informal')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = {
      status: 200,
      message: 'Events imported successfully',
      data: [],
    };
    return expect(expected).toEqual(res.body);
  });
  test('test GET event with type queryString route', async () => {
    const res = await request(app)
      .get('/api/v1/events?type=top')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = 9;
    return expect(expected).toEqual(res.body.data.length);
  });
  test('test GET organization route', async () => {
    const res = await request(app)
      .get('/api/v1/organizations')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = 10;
    return expect(expected).toEqual(res.body.data.length);
  });
  test('test GET organization route with id param', async () => {
    const res = await request(app)
      .get('/api/v1/organizations/5')
      .expect(200)
      .expect('Content-Type', /json/);
    const expected = {
      status: 200,
      message: 'Organization is imported successfully',
      data: [
        {
          id: 5,
          name: 'Ooba',
          email: 'twindmill4@stanford.edu',
          password: 'gIHLa6Fecs9j',
          image: 'http://dummyimage.com/201x100.png/cc0000/ffffff',
          description: 'This is the organization description whitch should include a breif information about this organization and its activities',
          categories: 'technology',
        },
      ],
    };
    return expect(expected).toEqual(res.body);
  });
});

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

  const response = await request(app)
    .post('/api/v1/events')
    .set('Cookie', [`token=${process.env.token}`])
    .send(data)
    .expect(201);

  // Check the response
  expect(response.body).toStrictEqual(data);
});

test('POST /events 400 test', async () => {
  const data = {
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
    .set('Cookie', [`token=${process.env.token}`])
    .send(data)
    .expect(400);
});

test('POST /events 401 test', async () => {
  const data = {
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
    .expect(401);
});
