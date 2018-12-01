let chai = require('chai'),
    expect = chai.expect,
    supertest = require('supertest'),
    mockApp = require(`./mockApp`),
    chaiHttp = require('chai-http');

chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(chaiHttp);

supertest(mockApp);

describe(('Error & Response handler'), () => {

    describe('*** CHECK ERROR ***', () => {
        it('uncaught exception', async () => {
            let result = await getChaiRequest('/error');
            expect(result.body.type).equals('error');
            expect(result.body.code).equals(500);
            expect(result.body.message).equals('Oops! Something went wrong.');
        });

        it('checking 404 error in app', async () => {
            let result = await getChaiRequest('/MyNameIsKhan');
            expect(result.body.type).equals('error');
            expect(result.body.code).equals('E1004');
            expect(result.body.message).equals('Requested resource is not found');
        });

        it('checking unauthorized error in app', async () => {
            let result = await getChaiRequest('/error?q=1');
            expect(result.body.type).equals('error');
            expect(result.body.code).equals('E1001');
            expect(result.body.message).equals('This is unauthorised error');
        });

        it('checking forbidden error in app', async () => {
            let result = await getChaiRequest('/error?q=2');
            expect(result.body.type).equals('error');
            expect(result.body.code).equals('E1002');
            expect(result.body.message).equals('This is forbidden error');
        });

        it('checking bad request in app', async () => {
            let result = await getChaiRequest('/error?q=3');
            expect(result.body.type).equals('error');
            expect(result.body.code).equals('E1003');
            expect(result.body.message).equals('This is bad request');
        });
    })

    describe('*** SUCCESS TEST ***', () => {
        it('checking success messages', async () => {
            let result = await getChaiRequest('/');
            expect(result.body.type).equals('success');
            expect(result.body.code).equals('S1001');
            expect(result.body.message).equals('Operation performed successfully');
        });
    })
})


function getChaiRequest(url) {
    let request = chai.request('http://localhost:8010');
    return request.get(url);
}