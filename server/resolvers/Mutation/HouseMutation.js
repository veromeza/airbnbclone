const Houses = require('../../models/Houses');

module.exports = {

    createHouse:(root,args) =>{
        console.log(args.data)
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
}

