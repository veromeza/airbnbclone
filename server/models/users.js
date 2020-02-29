const mongoose = require ('mongoose')
const bcrypt = require('bcrypt')

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

    }, 
    
    {timestamps:true}
    
    );

    UserSchema.pre('save',function(next){ //hook mongoose (triggers) -esto es para poder generar hashes
        const user = this;
        if(!user.isModified('password')) next();
        const SALT_FACTOR = parseInt(process.env.SALT_FACTOR);
        bcrypt.genSalt(SALT_FACTOR,function(error,salt){
            if(error) return next(error);
            bcrypt.hash(user.password,salt,function(err,hash){
                user.password = hash;
                next ();
            });
        });

    });

    module.exports = mongoose.model('Users',UserSchema);

    