const Houses = require('../../models/houses');

module.exports = {

    getHouses:(root,args) => {
        if(args.is_active || args.date) return Houses.find({args}).populate('created_by').exec();
        if(args.city) return Houses.find({'address.city':args.city}).populate('created_by').exec();
        if(args.tag) return Houses.find({tags:{$in:[args.tag]}}).populate('created_by').exec();

        return Houses.find().exec();
        // Houses.find({'address.city':args.city},{tags:{$in:[args.tag]}},{date:args.date}).exec();

    },

    getHouse:(root,args) => {
            return Houses.findOne({_id:args.id}).populate('created_by').exec();
    }

    // getEvents:(root,args) => {
	// 	if(args.is_active || args.date) return Events.find({args}).populate('created_by').exec();
	// 	if(args.city) return Events.find({'address.city':args.city}).populate('created_by').exec();
	// 	if(args.tag) return Events.find({tags:{$in:[args.tag]}}).populate('created_by').exec(); 
        
	// 	return Events.find().populate('created_by').exec();
	// 	/*Events.find({'address.city':args.city},{tags:{$in:[args.tag]}},{date:args.date}).exec(); */
	// },
	// getEvent: (root,args) => {
	// 	return Events.findOne({_id:args.id}).exec();
	// }

}