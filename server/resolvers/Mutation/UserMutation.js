const Users = require('../../models/Users');
const storage = require('../../utils/storage');


module.exports = {

    // createUser:(root,args) => {
	// 	return Users.create(args.data);
	// },

    createUser:async(root,args) => {
        if(args.data.photo){
            //args.data.photo.foreach(photo => {})
            const { createReadStream } = await args.data.photo;
            const stream = createReadStream();
            const image = await storage ({ stream });
            
            args.data = {...args.data, photo:image.url};
        }
        return Users.create(args.data);
    },



    
    updateUser:(root,args) => {
        return Users.findByIdAndUpdate(args.id,{$set:{...args.data}},{new:true}).exec();

    },
    deleteUser:(root,args) => {
        return Users.findByIdAndUpdate(args.id, {$set:{is_active:false}},{new:true}).exec();
    }

}