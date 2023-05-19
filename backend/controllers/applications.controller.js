let Application = require("../models/application.models")

//Add new applications

const addApplication = async (req, res) => {
     
        const applicationid = req.body.applicationid;
        const volunteerNic = req.body.volunteerNic;
        const projectID = req.body.projectID;

        const newApplication = new Application({
                applicationid,
                volunteerNic,
                projectID
      })
  
      newApplication.save().then(()=>{
          res.json("Application Added");
      }).catch((err)=>{
          console.log(err);
      })

    
  };

  // Get all applications

    const getApplications = async (req, res) => {

    Application.find().then((applications)=>{
        res.json(applications)
    }).catch((err)=>{
        console.log(err);
    })
  
  };

  // Delete Applications

 const deleteApplication = async (req, res) => {
    let applicationID  = req.params.id;
  
    await Application.findByIdAndDelete(applicationID)
  
    .then(() => {
        res.status(200).send({status : "application deleted"});    
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "error with delete data"});
    })
  };

 
  //Search for application

const getApplication = async (req, res) => {

    let applicationID = req.params.id;
    Application.findById(applicationID)
        .then((application) => {
            res.status(200).send({status: "Application fetched", application: application})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with get application",error: err.message})
        })
   
}

// Update application

const updateApplication = async (req, res) => {
    const { id } = req.params;

  const application = await Application.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!application) {
    return res.status(400).json({ error: 'No such application' });
  } else {
    return res.status(200).json(application);
  }

}


  module.exports = {
    addApplication,
    getApplications,
    deleteApplication,
    getApplication,
    updateApplication,
    
  };