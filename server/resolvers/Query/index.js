const UserQueries = require('./UserQuery');
const HouseQueries = require('./HouseQuery')

module.exports = {
    ...UserQueries,
    ...HouseQueries
};