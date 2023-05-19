const Organization = require('../models/organizations.models');

const getOrganizations = async (req, res) => {
    const q = req.query.q;
   
    const organizations = await Organization.find();
  
    if (!organizations) {
      return res.status(404).json({ message: 'No any available organizations found' });
    } else {
      return res.status(200).json(organizations);
    }
  };
  
  //get / serach a single Organization
  
  const getOrganization = async (req, res) => {
    const { id } = req.params;
  
    const organization = await Organization.findById({ _id: id });
  
    if (!organization) {
      return res.status(404).json({ message: 'No organization found' });
    } else {
      return res.status(200).json(organization);
    }
  };
  
  //add new Organization
  
  const addOrganization = async (req, res) => {
    const { email, password} =
      req.body;
  
    try {
      const neworganization = await Organization.create({
        
        email,
        password,
        
      });
  
      return res.status(200).json(neworganization);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: e.message });
    }
  };
  

 const login = async (req, res) => {
   const { email, password } = req.body;
   const data = { email: email, password: password }
   return Organization.find(data)
     .then((organization) => {
       if (organization.length > 0) {
       
         return res.status(200).json({ organization })
       } else {
         return res.status(404).json({ "message": "organization not found" })
       }
     })
     .catch(err => { console.log("login failed " + err) })
 }


module.exports = {
    getOrganizations,
    getOrganization,
    addOrganization,
    login,
};