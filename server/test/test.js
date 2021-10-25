const request = require('supertest');

const app = require('../app');

// eslint-disable-next-line no-undef
test('test 200 status /', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});

// eslint-disable-next-line no-undef
test('test  /404 route', (done) => {
  request(app)
    .get('/api/v1/error')
    .expect(404)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});
// eslint-disable-next-line no-undef
test('test GET events route', (done) => {
  request(app)
    .get('/api/v1/events')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});
// eslint-disable-next-line no-undef
test('test GET event with id param route', (done) => {
  request(app)
    .get('/api/v1/events/5')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});
// eslint-disable-next-line no-undef
test('test GET event with category queryString route', (done) => {
  request(app)
    .get('/api/v1/events?category=informal')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});
// eslint-disable-next-line no-undef
test('test GET event with type queryString route', (done) => {
  request(app)
    .get('/api/v1/events?type=top')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});
// eslint-disable-next-line no-undef
test('test GET organization route', (done) => {
  request(app)
    .get('/api/v1/organizations')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});
// eslint-disable-next-line no-undef
test('test GET organization route', (done) => {
  request(app)
    .get('/api/v1/organizations/5')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});
