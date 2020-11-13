const Users=require('../Models/models')

const getUsers= async (req,res,next)=>
{
    try{
        const users=await Users.find({});
        return res.json({data:users});
    }catch(err){
        return res.status(400).json({err});
    }
    
}

const setUsers= async (req,res,next)=>
{
    try{
        const user=new Users(req.body);
        await user.save();
        return res.json({data:user});
    }catch(err){
        return res.status(400).json({err});
    }
    
}

const getUsersById= async (req,res,next)=>
{
    try{
        const users=await Users.findOne({_id:req.params._id});
        return res.json({data:users});
    }catch(err){
        return res.status(400).json({err});
    }
    
}

const removeUsersById= async (req,res,next)=>
{
    try{
        const removeUser=await Users.remove({_id:req.params._id});
        return res.json({data:removeUser});
    }catch(err){
        return res.status(400).json({err});
    }
    
}

const updateUsersById= async (req,res,next)=>
{
            try{
      
                const updatedUser=await Users.update({_id:req.params._id},{$set:{email:req.body.email, firstName:req.body.firstName,lastName:req.body.lastName,age:req.body.age}});
                return res.json({data:updatedUser});
            }catch(err){
                return res.status(400).json({err});
            }
    
}

module.exports={
    getUsers,
    setUsers,
    getUsersById,
    removeUsersById,
    updateUsersById
};