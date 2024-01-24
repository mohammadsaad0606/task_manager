const express = require('express')
const router = express.Router()

const {getAllTasks, createNewTask, getSingleTask, updateTask, deleteTask} = require('../controllers/tasks')


// router.route('/').get(getAllTasks).post(createNewTask)
// router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)


router.get('/',getAllTasks)
router.post('/', createNewTask)
router.get('/:id', getSingleTask)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router