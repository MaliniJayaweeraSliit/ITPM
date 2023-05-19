const router = require('express').Router();

const {
    getOrganizations,
    getOrganization,
    addOrganization,
    login,
} = require('../controllers/organizations.controller.js')
router.get('/getorganizations', getOrganizations);

// get a single student
router.get('/getorganization/:id', getOrganization);

// add a new student
router.post('/addorganization', addOrganization);
router.post('/organization_login', login);

module.exports = router;

