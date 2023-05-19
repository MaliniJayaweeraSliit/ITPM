let Project = require("../models/projects.models")

//Add new projects

const addProject = async (req, res) => {
     
        const projectID = req.body.projectID;
        const projectName = req.body.projectName;
        const projectDescription = req.body.projectDescription;
        const projectCategoty = req.body.projectCategoty;
        const projectStartDate = Date(req.body.projectStartDate);
        const projectEndDate = Date(req.body.projectEndDate);
        const projectLocation = req.body.projectLocation;

        const newProject = new Project({
                projectID,
                projectName,
                projectDescription,
                projectCategoty,
                projectStartDate,
                projectEndDate,
                projectLocation
      })
  
      newProject.save().then(()=>{
          res.json("Project Added");
      }).catch((err)=>{
          console.log(err);
      })

    
  };

  // Get all projects

    const getProjects = async (req, res) => {

    Project.find().then((projects)=>{
        res.json(projects)
    }).catch((err)=>{
        console.log(err);
    })
  
  };

  // Delete Projects

 const deleteProject = async (req, res) => {
    let projectID  = req.params.id;
  
    await Project.findByIdAndDelete(projectID)
  
    .then(() => {
        res.status(200).send({status : "project deleted"});    
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "error with delete data"});
    })
  };

 
  //Search for project

const getProject = async (req, res) => {

    let projectID = req.params.id;
    Project.findById(projectID)
        .then((project) => {
            res.status(200).send({status: "Project fetched", project: project})
        }).catch((err) => {
            console.log(err);
            res.status(500).send({status: "Error with get project",error: err.message})
        })
   
}

// Update project

const updateProject = async (req, res) => {
    const { id } = req.params;

  const project = await Project.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!project) {
    return res.status(400).json({ error: 'No such project' });
  } else {
    return res.status(200).json(project);
  }

}


  module.exports = {
    addProject,
    getProjects,
    deleteProject,
    getProject,
    updateProject,
    
  };