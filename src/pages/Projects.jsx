import React from 'react'

const projects =[
   { title:"Cooking Tips App",
    description:"A React-based app that shares useful cooking tips. Includes search, categories, and user contributions.",
    technologies:["React", "Bootstrap", "Node.js"],
    codelink:"https://github.com/your-github-repo"},
     {
    title: "Menstrual Cycle Tracker",
    description: "An app to track cycles, predict ovulation, and access health resources.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Specialty Diet Planner",
    description: "Helps users find and follow specialty diets with real-time availability and expert content.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#"
  }
]

function Projects(){
    return(
        <div className='container'>
            <h1 className='text-center mb-4'>My Projects</h1>
            <div className='row'>
                {projects.map((project, index)=>{
                   return(
                     <div className='col-md-4' key={index}>
                        <div className='card h-100 shadow-sm text-white' style={{background:"linear-gradient(to right,#0f2027, #203a43, #2c5364)"}}>
                            <div className='card-body d-flex flex-column'>
                                <h5 className='card-title'>{project.title}</h5>
                                <p className='card-text'>{project.description}</p>
                                <p><strong>Technologies: </strong>{project.technologies.join(",")}</p>
                                <div className='d-flex justify-content-between mt-auto'>
                                     <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Live Demo</a>
                             <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm">Code</a>
                                </div>
                            </div>

                        </div>
                    </div>
                   )
                })}
            </div>
        </div>
    )
}

export default Projects;