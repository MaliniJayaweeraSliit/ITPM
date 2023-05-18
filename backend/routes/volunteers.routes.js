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
router.get('/getvolunteers', getVolunteers);

// get a single student
router.get('/getvolunteer:id', getVolunteer);

// add a new student
router.post('/addvolunteer', addVolunteer);

// delete a student
router.delete('/deletevolunteer:id', deleteVolunteer);

// update a student
router.patch('/updatevolunteer:id', updateVolunteer);

router.patch('/login', login);

module.exports = router;