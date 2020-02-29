jest.mock('../services/EventService.js', ()=> jest.requireActual('../services/_mocks_/EventServices.js'));

const { createTestClient} = require('apollo-server-testing');
const gql = require('graphql-tag');
const { server } = require('../index');

const GET_EVENTS = gql`
    query{
        getEvents{

            __id
            title
            description
        }
    }`;

test ('Get Events', async()=>{
    const test_server = await server();
    const {query} = createTestClient(test_server);
    const res = await query({mutation:GET_EVENTS});
    expect(res).toMatchSnapshot();
});