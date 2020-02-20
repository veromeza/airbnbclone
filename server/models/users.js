const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    birth_date:{
        type:Date
    },
    gender:{
        type:String,
        enum:['M','F','Undefined']
    },
    photo:{
        type:String,
    },
    // user_host:{
    //     type:[Schema.Types.ObjectId],
    //     ref:'host'
    // },
    // user_guest:{
    //     type:[Schema.Types.ObjectId],
    //     ref:'guest' 
    // },  
    type_user:{
        type:String,
        enum:['HOST','GUEST','ALL']
    }, 
    is_active:{
        type:Boolean,
        default:true
    }

    }, {timestamps:true})

    module.exports = mongoose.model('users',UserSchema);