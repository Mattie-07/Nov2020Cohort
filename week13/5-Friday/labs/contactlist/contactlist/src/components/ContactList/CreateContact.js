import React, {useState} from 'react'

const CreateContact = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();


  }

  let contact = {
    id:uuidv1(),
    name: name,
    email: email,
    phone: phone,
    zip:zip,
    city: city,
    address: address,
    estado:estado
  }



  return <>
  <form onSubmit={handleSubmit}>

    <div className="row">
      <div className="col-9 offset-3">
        <div className="forms">

          <input type="text" className='form-category' id="name-category" placeholder="Your First and last Name" value={name} onChange={(e)=>setName(e.target.value)}/>

        </div>
      </div>
    <div className="row">
      <div className="col-9 offset-3">
        <div className="forms">

          <input type="text" className='form-category' id="email-category" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)}/>

        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-9 offset-3">
        <div className="forms">

          <input type="text" className='form-category' id="phone-category" placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)}/>

        </div>
      </div>
      </div>
    <div className="row">
      <div className="col-9 offset-3">
        <div className="forms">

          <input type="text" className='zip' id="zip-category" placeholder="Zip Code" value={zip} onChange={(zipName)=>setZip(e.target.value)}/>

        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-9 offset-3">
        <div className="forms">

          <input type="text" className='form-category' id="city-category" placeholder="Ciy" value={city} onChange={(e)=>setCity(e.target.value)}/>

        </div>
      </div>
  </div> 
  <div className="col-9 offset-3">
        <div className="forms">

          <input type="text" className='form-category' id="address-category" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/>

        </div>
      </div>
    </div>
    <div className="col-9 offset-3">
        <div className="forms">

          <input type="text" className='form-category' id="estado apgry" placeholder="STate" value={estado} onChange={(e)=>setEstado(e.target.value)}/>

        </div>
      </div>
  
  </form>
    </>
}

export default CreateContact
