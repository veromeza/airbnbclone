const Houses = require('../../models/houses');

const storage = require('../../utils/storage');

module.exports = {



	createHouse:async(root,args,context) =>{
		args.data.created_by = context.user._id;
		if (args.data.banner){
			const { createReadStream } = await args.data.banner;
			const stream = createReadStream();
			const image = await storage ({ stream });
			args.data = {...args.data,banner:image.url}
		};
	
		return Houses.create(args.data);

    },
    
    updateHouse:(root, args) =>{
		let updateHouse = {};
		Object.keys(args.data).forEach( key => {
			if(key == 'address'){
				Object.keys(args.data[key]).forEach(addressKey => {
					updateHouse = {
						...updateHouse,
						[`${key}.${addressKey}`]: args.data[key][addressKey]
					};
				});
			}else{
				updateHouse = {...updateHouse,[key]:args.data[key]};
			}

		}); 
		// console.log(updateHouse);
        return Houses.findByIdAndUpdate(args.id,{$set:updateHouse},{new:true}).exec();
    },

    deleteHouse:(root,args) =>{

    }
};

