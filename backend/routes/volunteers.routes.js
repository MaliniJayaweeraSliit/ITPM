const router = require('express').Router();

const {
    getVolunteers,
    getVolunteer,
    addVolunteer,
    deleteVolunteer,
    updateVolunteer,
    login,
} = require('../controllers/volunteer.controller.js')

// get all students
router.get('/getoperators', getVolunteers);

// get a single student
router.get('/getoperator:id', getVolunteer);

// add a new student
router.post('/addoperator', addVolunteer);

// delete a student
router.delete('/deleteoperator:id', deleteVolunteer);

// update a student
router.patch('/updateoperator:id', updateVolunteer);

router.patch('/login', login);

module.exports = router;