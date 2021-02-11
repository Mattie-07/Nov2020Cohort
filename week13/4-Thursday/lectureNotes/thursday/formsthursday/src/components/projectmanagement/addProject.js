import React ,{useState} from "react";
import {Dropdown} from 'react-bootstrap'
const AddProject = () => {
  const [category, setCategory] = useState('Front-end')
  const [title, setTitle] = useState('')

  //what we are going to send back up to the parent is
  // id category, and title 
  console.log(`category is ${category} Ttile is ${title}`)
  return <>

  <form>
    <div className="row">
      <div className="col-9">
        <div className="form-group">

        <input type="text" className="form-control" 
        id="exampleInputEmail1" aria-describedby="emailHelp" 
        placeholder="Enter project" 
        value={title}/>
        onChange = {()=>setTitle(e.target.value)}
      </div>
      </div>
      <div className="col-3">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            {category}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={()=>setCategory('Front-End')} href="#/action-1">Front-End</Dropdown.Item>
            <Dropdown.Item onClick={()=>setCategory('Back-End')}href="#/action-2">Back-end</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
    {/* end of row */}
    <button type="submit" className="btn btn-secondary">Submit</button>
  </form>
  </>;
};
export default AddProject;