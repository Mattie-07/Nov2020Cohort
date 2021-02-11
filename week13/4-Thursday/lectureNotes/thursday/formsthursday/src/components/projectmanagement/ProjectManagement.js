import React, {useState, useEffect} from 'react'
import addProject from './AddProject'
import Project from './Project'
import { v4 as uuidv1 } from 'uuid';

const ProjectManagement = () => {
    const[projects, setProjects] = useState([]); // [{id , category, title}]
    //it will set the inital data for the project array 
    // each array will containt three keys, an id, title, and category.
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.addProject{
            id:uuidv1,
            title: title,
            category
        })



    }
    useEffect(() =>{
        setProjects(
            [
                {
                    id: uuidv1(),
                    category: "Front-End",
                    title: "Javascript"
                },
                {
                    id: uuidv1(),
                    category: "Back-End",
                    title: "Node"
                },
                {
                    id: uuidv1(),
                    category: "Front-End",
                    title: "React"
                }
            ]
            )
    }, [])
    const handleAddProject = (newProject)=>{
            setProjects([newProject, ...projects]) // INmfmratoin here will be pased to the object.
    }

    const handleRemoveProject = (id) =>{
        //this will eventually passed down to the child.

        //spread to remove mutation of old state
        let oldProjects = [...projects];

        let filteredProjects = oldProjects.filter(project =>{
            return id !== project.id  // checking to see if the id is the same. if they are not its filtered and put back inside of the filtered project variable
        })
        //state is updated with new filtered projects
        setProjects(filteredProjects);


    }

    return (
        <>
        <div className="row">
            <div className="col-6 offset-3 text-center">
                <h3>Project Management</h3>
            </div>
        </div>
    
    <div className="row">
    <div className="card">
    <h5 className="card-header">Featured</h5>
    <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
    </div>
</div>
        <div className="col-6 offset-3">
    </div>
    {/* somewhere down here Im also going to be using the code that hnadled that other method I created */}
    </div>
    <div className="row">
        <div className="col-6 offset-3 mt-5">
            <AddProject addProject={(projects)=>handleAddProject(projects)} /> 
            {/* the projecs are going to be passed down to its childer with the prop declared on this line.  */}
        </div>
    </div>
    </>
    )
    }

export default ProjectManagement
