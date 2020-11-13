const express=require('express')
const router=express.Router();
const controller=require('./controller')

router.get('/',controller.getUsers);
router.post('/',controller.setUsers);
router.get('/:_id',controller.getUsersById);
router.delete('/:_id',controller.removeUsersById);
router.patch('/:_id',controller.updateUsersById);

module.exports=router;