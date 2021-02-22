import React, { Component } from 'react'

class AddComponent extends Component {

    render() {
        return (
        <>
            <form>
                <input type="text" placeholder="Product Name"/> <br />
                <input type="text" placeholder="Product Price"/> <br />
                <button type="submit">Submit</button>
            </form>
        </>
        )
    }
}

export default AddComponent
