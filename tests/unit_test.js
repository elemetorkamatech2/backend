const request = require('supertest');
const express = require('express');
const app = express()
const UserR = require('../routes/UserRoute')

app.use('/UserRoute', UserR)

describe('Testing get', () => {
    it('😍', async () => {
        const response = await request(app)
            .get('/getAll')
        expect(response.status).toBe(404);

    });
});