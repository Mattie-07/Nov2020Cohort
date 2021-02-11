import React, { Component } from 'react'

class Forms extends Component {
    constructor(){
        super();
        this.state={
            textValue:"hello!",
            isValid:false,
            selectValue:"" 
        } 
    }

    handleChange = (e) => {
        console.log(e.target.name)
        let targetType = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        let name = e.target.value;
        //e.target.value for 
        //e.target.checked will be the value that comes out when there is a check
    
        this.setState({
            [name]: targetType
        } , () =>{

            console.log(this.state)
        })
    }
    // handleChange = (e) => {
    //     console.log(e.target.value)
    //     this.setState({
    //         textValue: e.target.value
    //     })
    // }
    // handleCheckBox = (e) =>{
    //     // console.log(e.target.checked)
    //     this.setState({
    //         isValid:e.target.checked
    //     })
    // }
    
    // handleDropDrop = (e) => {
    //     console.log(e.target.value)
    //     this.setState({
    //         selectValue: e.target.value

    //     })
    // }
    
    handleForm = (e) => {
        e.preventDefault()
        console.log("form was submitted")
    }
    

    render() {
        return (
        <>
            <h1 className="text-center mt-5"> Class Based Forms</h1>
            <div className="row mt-5">
            <div className=".col-6 offset-3 formColor p-5 formFont">
                <form onSubmit={this.handleForm} >
                    <input name="textValue" type="text" value={this.state.textValue} 
                    onChange={this.handleChange} />
            
                        <br/>
                        <input name="isValid" type="checkbox" checked={this.state.isValid}  onChange={this.handleChange}/>
                        <br/>

                        <select name="selectValue" onChange={this.handleChange}>
                            <option value="New York" >New York</option>
                            <option value="Houston">Houston</option>
                            <option value="Atlanta">Atlanta</option>
                            <option value="Seattle"> Seattle</option>
                            <option value="SantaBarbara"> Santa Barba</option>
                        </select>
                    <input type="submit"/>
                </form>
            </div>
            </div>
        </>
        )
    }
}

export default Forms
