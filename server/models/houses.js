const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const HouseSchema = new Schema ({
    
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date

    },
    address:{
        street:String,
        city:String,
        number:String,
        country:String,
        state:String,
        zip:String,
        late:Number,
        long:Number,
    },
    created_by:{
        type:[Schema.Types.ObjectId],
        ref:'users'
    },
    booking:[
        {
            guest:String,
            total_price:Number,
            start_date:Date,
            end_date:Date
        }
    ],
    banner:{
        type:String
    },
    huespedes:{
        type:String,
        required:true
    },
    camas:{
        type:String,
        required:true
    },
    wc:{
        type:String,
        required:true
    },
    servicios:{
        type:[String],
        required:true
    },
    price:{
        type:[String],
        required:true
    },
    tags:{
        type:[String]
    },
    is_active:{
        type:Boolean,
        default:true
    }

    }, {timestamps:true})

    module.exports = mongoose.model('houses',HouseSchema);

    