import React, { useState, useEffect } from 'react'
import Clear from './liftingState/Clear';
import DisplayInfo from './liftingState/DisplayInfo';
import Increment from './liftingState/Increment'; 
const ParentHook = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1)
  }
  const resetCount = () => {
    setCount(0)
  }
  return (
    <>
        <h1 className="text-center mt-5"> Lifting State </h1>
        <div className="row mt-5">
            <div className="col-6 offset-3 formColor p-5 formFont">
                <DisplayInfo count={count} />
                <Increment increment={handleCount}/>
                &nbsp;&nbsp;
                <Clear reset={resetCount} />
            </div>
        </div>
    </>
  )
}
export default ParentHook