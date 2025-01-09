import { Router } from "express";
import {deleteUser,
        updateUser,
        getAlluser,
        getSingleUser,
        createUser} from '../controllers/userDetails.js'

const router = Router()

router.get('/', getAlluser)
router.get('/:id', getSingleUser)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router;