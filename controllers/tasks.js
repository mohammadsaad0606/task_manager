const Task = require('../models/Task')

const getAllTasks = async (req, res)=>{
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }

}

const createNewTask  =async (req, res)=>{
    try {
        const task= await Task.create(req.body)
        res.status(201).json({task})    
    } catch (error) {
        res.status(500).json({msg: error})
    }

    
}

const  getSingleTask =async (req, res)=>{
    try {
        const {id:taskID}  =req.params
        const tasks = await Task.findOne({_id:taskID})
    if(!tasks){
        return res.status(404).json({msg:`No task with id ${taskID} found...`})
    }
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({msg: error})
    }
} 


const deleteTask = async (req, res)=>{
    try {
        const {id:taskid} = req.params
        const task = await Task.findOneAndDelete({_id:taskid})
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskid}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
}

const updateTask = async (req, res)=>{
    try {
        const {id:taskId} = req.params
        const task = await Task.findOneAndUpdate({_id:taskId}, req.body, {
            new: true,
            runValidators:true 
        })
        if(!task){
            return res.status(404).json({msg: `No task with id: ${taskId}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
}


module.exports = {
    getAllTasks,
    createNewTask,
    getSingleTask,
    updateTask,
    deleteTask


}