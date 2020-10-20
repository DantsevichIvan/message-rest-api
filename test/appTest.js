const expect = require('chai').expect;
const request = require('supertest');
const server = require('../src/app').app
const keys = require('./../src/config/dev')
const mongoose = require('mongoose')

let app = request.agent(server)

before(function (done) {
    mongoose.connect(keys.mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function () {
        mongoose.connection.db.dropDatabase(function () {
            done()
        })
    })
})
describe('Get request', function () {
    describe('Get all dialogs', function () {
        it('StatusCode & data.length & data.be.a  return 200, 0, array', function () {
            app.get('/chats').end((err, res) => {
                expect(res.statusCode).to.equal(200)
                expect(res.body.data.length).be.eql(0)
                expect(res.body.data).be.a('array')
            })
        })
    })
    describe('Get search users', function () {
        it('Success should return true', function () {
            app
                .get(`/users?name=${'Ivan'}`)
                .end(function (err, res) {
                    expect(res.body.success).to.equal(true)
                    expect(res.body.data).be.a('array')
                })
        });
    })
})
describe('Post request', function () {
    describe('Add new User', function () {
        it('Success should return true', function () {
            app
                .post('/chat/user')
                .send({
                    nameUser: 'Ivan',
                    img: 'img',
                    numberPhone: 375298559228
                })
                .end((err, res) => {
                    expect(res.body.success).to.equal(true)
                })
        })
    })
    describe('Send Message', function () {
        it('DeliveredMessage should return true', function () {
            app
                .post('/chats/chat/:chatId')
                .send({
                    date: new Date('05 October 2011 14:48 UTC'),
                    textMessage: 'Hello Ivan, I am good.'
                })
                .end((err, res) => {
                    expect(res.body.data.deliveredMessage).to.equal(true)
                })
        });
    })
})
