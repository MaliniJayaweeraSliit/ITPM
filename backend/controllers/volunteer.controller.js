const Volunteer = require('../models/volunteers.model.js');

//get all Volunteers

const getVolunteers = async (req, res) => {
  const q = req.query.q;
 
  const volunteers = await Volunteer.find();

  if (!volunteers) {
    return res.status(404).json({ message: 'No any available volunteers found' });
  } else {
    return res.status(200).json(volunteers);
  }
};

//get / serach a single Volunteer

const getVolunteer = async (req, res) => {
  const { id } = req.params;

  const volunteer = await Volunteer.findById({ _id: id });

  if (!volunteer) {
    return res.status(404).json({ message: 'No volunteer found' });
  } else {
    return res.status(200).json(volunteer);
  }
};

//add new Volunteer

const addVolunteer = async (req, res) => {
  const phone = Number(req.body.epfno);
  const {NIC,volunteer_name, email, password,birth_day} =
    req.body;

  try {
    const newvolunteer = await Volunteer.create({
      NIC,
      volunteer_name,
      email,
      password,
      phone,
      birth_day
    });

    return res.status(200).json(newvolunteer);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
};

//delete a Volunteer

const deleteVolunteer = async (req, res) => {
  const { id } = req.params;

  const volunteer = await Volunteer.findOneAndDelete({ _id: id });

  if (!volunteer) {
    return res.status(400).json({ error: 'No such volunteer' });
  } else {
    return res.status(200).json({ message: 'Volunteer deleted successfully' });
  }
};

//update a Volunteer

const updateVolunteer = async (req, res) => {
  const { id } = req.params;

  const volunteer = await Volunteer.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!volunteer) {
    return res.status(400).json({ error: 'No such volunteer' });
  } else {
    return res.status(200).json(volunteer);
  }
};


 const login = async (req, res) => {
   const { email, password } = req.body;
   const data = { email: email, password: password }
   return Volunteer.find(data)
     .then((volunteer) => {
       if (volunteer.length > 0) {
       
         return res.status(200).json({ volunteer })
       } else {
         return res.status(404).json({ "message": "volunteer not found" })
       }
     })
     .catch(err => { console.log("login failed " + err) })
 }

module.exports = {
    getVolunteers,
    getVolunteer,
    addVolunteer,
    deleteVolunteer,
    updateVolunteer,
    login,
};