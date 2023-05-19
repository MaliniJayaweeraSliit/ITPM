const router = require('express').Router();

const {
    getApplications,
    getApplication,
    addApplication,
    deleteApplication,
    updateApplication,
} = require('../controllers/applications.controller.js')

// get all students
router.get('/getapplications', getApplications);

// get a single student
router.get('/getapplication:id', getApplication);

// add a new student
router.post('/addapplication', addApplication);

// delete a student
router.delete('/deleteapplication:id', deleteApplication);

// update a student
router.patch('/updateapplication:id', updateApplication);


module.exports = router;