const Application = require('../models/application.models');

//get all Applications

const getApplications = async (req, res) => {
  const q = req.query.q;
 
  const applications = await Application.find();

  if (!applications) {
    return res.status(404).json({ message: 'No any available applications found' });
  } else {
    return res.status(200).json(applications);
  }
};

//get / serach a single Application

const getApplication = async (req, res) => {
  const { id } = req.params;

  const application = await Application.findById({ _id: id });

  if (!application) {
    return res.status(404).json({ message: 'No application found' });
  } else {
    return res.status(200).json(application);
  }
};

//add new Application

const addApplication = async (req, res) => {
  const applicationid = Number(req.body.applicationid);
  const {projectID, volunteer} =
    req.body;

  try {
    const newvolunteer = await Application.create({
        applicationid,
        projectID,
        volunteer
    });

    return res.status(200).json(newvolunteer);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

//delete a Application

const deleteApplication = async (req, res) => {
  const { id } = req.params;

  const application = await Application.findOneAndDelete({ _id: id });

  if (!application) {
    return res.status(400).json({ error: 'No such application' });
  } else {
    return res.status(200).json({ message: 'Application deleted successfully' });
  }
};

//update a Application

const updateApplication = async (req, res) => {
  const { id } = req.params;

  const application = await Application.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!application) {
    return res.status(400).json({ error: 'No such application' });
  } else {
    return res.status(200).json(application);
  }
};


module.exports = {
    getApplications,
    getApplication,
    addApplication,
    deleteApplication,
    updateApplication,
};