import { PrismaClient } from "@prisma/client";

const  prisma = new PrismaClient()

export const getAlluser = async (req, res)=>{
    try{
const users =  await prisma.user.findMany()
res.status(200).json(users)
    }catch(err){
        res.status(500).json({msg: 'failed to load details'})
    }
};

export const getSingleUser = async(req, res)=>{
const {id} = req.params;
try{
const users = await prisma.user.findUnique({where: { id: Number(id)}})
if (!users) return res.status(404).json({ error: 'User not found' });
res.status(200).json(users)
}catch(err){
      res.status(500).json({msg: 'No user was found'})
    }
}

export const createUser = async (req, res) => {
    const { name, email } = req.body;
  
    const exist = await prisma.user.findUnique({where:{email}})
    if (exist) {
        return res.status(400).json({ msg: 'Email already exists! choose a different email' });
      }
    if (!name || !email) {
      return res.status(400).json({ msg: 'Name and email are required' });
    }
  
    try {
      const newUsers = await prisma.user.create({
        data: { email, name },
      });
      res.status(200).json(newUsers);
    } catch (err) {
      console.log(err); 
      res.status(500).json({ msg: 'Failed to create user', error: err.message });
    }
  };

export const updateUser =  async (req, res)=>{
const {id} = req.params
const {name, email}= req.body
try{
    const updateUser = await prisma.user.update({where:{id:Number(id)}, data:{
        email, name
    }
})
res.status(200).json(updateUser)
}catch(err){
res.status(500).json({msg: 'Failed to update'})
}
};

export const deleteUser = async(req, res)=>{
const {id}=req.params
try{
    const deleteUser = await prisma.user.delete({where:{id: Number(id)}})
    res.status(200).send()
}catch(err){
    res.status(500).json({msg:'Failed to delete '})
}
};