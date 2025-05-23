import React from 'react'
const skills = [
    {name:"Html", level:"Advanced"},
    {name:"CSS", level:"Advanced"},
    {name:'javascript', level:"Advanced"},
    {name:"Reacrt JS" , level:"Advanced"},
    {name:"Node JS", level:"Intermediate"},
    {name:"Express JS", level:"Intermediate"},
    {name:"mongoDB", level:"Basic"},
    {name:"Bootstrap", level:"Advanced"},
    {name:"MS-Office", level:"Advanced"}

];

const getProgress=(level)=>{
    switch(level){
        case 'Advanced':
            return "90%";
        case 'Intermediate':
            return '70%';
        case 'Basic':
            return "50%"
        default:
            return "0%"
    }

}
function Skills(){
    return(
        <div className='container-mt-4'>
            <h1 className='text-center mb-4 mt-3'>My Skills</h1>
            <div className='container'>
                <div className='row'>
                {skills.map((skill, index)=>{
                   return(
                     <div className='col-md-4 mb-4' key={index}>
                        <div className='card shadow-sm p-3 text-center h-100 bg-light'>
                            <h5>{skill.name}</h5>
                            <p className='text-muted'>{skill.level}</p>
                            <div className='progress'>
                                <div className='progress-bar bg-dark text-white'
                                role="progressbar"
                                style={{width: getProgress(skill.level)}}
                                ariavaluemin={parseInt(getProgress(skill.level))}
                                ariavaluemax="100"
                                ariavaluenow="100"
                                >
                                     {getProgress(skill.level)}
                                </div>
                            </div>
                            
                        </div>

                    </div>
                   )

                })}
            </div>
            </div>
        </div>
    )
}

export default Skills;