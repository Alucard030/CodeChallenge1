const mongoose=require('mongoose');
const userSchema= mongoose.Schema(
    {
        email:{
            type:String,
            required:true
        },
        firstName:{
            type:String,
            required:true,
            validate: {
                validator: function(v) {
                  return /^[a-zA-Z]+$/.test(v);
                },
                message: props => `${props.value} is not a valid name!`
              }
        },
        lastName:{
            type:String,
            default: 'NA',
            validate: {
                validator: function(v) {
                  return /^[a-zA-Z]+$/.test(v);
                },
                message: props => `${props.value} is not a valid name!`
              }
        },
        age:{
            type:Number,
            required:true,
            min:21,
            max:60
        }
    }
)
const Users=mongoose.model('Users',userSchema);
module.exports=Users;


