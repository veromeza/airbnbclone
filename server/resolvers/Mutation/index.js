const UserMutations = require('./UserMutation');
const HouseMutations = require('./HouseMutation')

module.exports = {
    ...UserMutations,
    ...HouseMutations
};