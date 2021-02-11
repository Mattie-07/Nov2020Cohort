import React from 'react'
import ProjectItem from './ProjectItem'
const Project = ({project, onDelete }) => {
  return <>
      {project.map(project =>{
          return <ProjectItem key={project.id} proj={project} onDelete={onDelete}/>
        
})}
    </>
}
  
export default Project;
