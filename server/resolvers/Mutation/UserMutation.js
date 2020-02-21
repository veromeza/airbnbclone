const Users = require('../../models/users');


module.exports = {

    createUser:(root,args) => {

        return Users.create(args.data).exec();

    }
    
}