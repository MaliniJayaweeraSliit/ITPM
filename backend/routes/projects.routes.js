const router = require('express').Router();

const {
    getProjects,
    getProject,
    addProject,
    deleteProject,
    updateProject,
} = require('../controllers/projects.controller.js')

// get all students
router.get('/getprojects', getProjects);

// get a single student
router.get('/getproject/:id', getProject);

// add a new student
router.post('/addproject', addProject);

// delete a student
router.delete('/deleteproject/:id', deleteProject);

// update a student
router.patch('/updateproject/:id', updateProject);

module.exports = router;