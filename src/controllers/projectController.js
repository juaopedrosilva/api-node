const express = require('express')
const authMiddleware = require('../middlewares/auth')
const router = express.Router()

const Project = require('../model/project')
const Task = require('../model/task')

router.use(authMiddleware)

router.get('/', async (req, res) => {
    try {
        const project = await Project.find().populate('user')
        return res.send({ project })
    } catch(err){
        return res.status(400).send({ error: 'Error loading  project'})

    }
})

router.get('/:projectId', async (req, res) => {
    try {
        const project = await Project.findById(req.params.projectId).populate('user')
        return res.send({ project })
    } catch(err){
        return res.status(400).send({ error: 'Error loading  project'})

    }
})

router.post('/', async (req, res) => { 
    try {
        const project = await Project.create({ ...req.body, user: req.userId})
        return res.send({ project })
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new project'})
     }
})

router.put('/:projectId', async (req, res) => { 
    res.send({ user: req.userId})
})

router.delete('/:projectId', async (req, res) => { 
    try {
        const project = await Project.findByIdAndRemove(req.params.projectId)
        return res.send()
    } catch(err){
        return res.status(400).send({ error: 'Error loading  project'})

    }
})

module.exports = app => app.use('/projects', router)