import React from 'react'
import {Button} from '@material-ui/core'
import './Home.css'
import { Link } from 'react-router-dom'
import Home from "./Home"


function Front() {
    return (
        <div className="abc">
<br/><h1>Home page</h1><br/> 
<Button component={Link} to="/Home" variant="contained" color="primary">Product</Button><br/><br/>
<Button component={Link} to="/Checkout" variant="contained" color="primary">Wishlist</Button><br/><br/>
<Button component={Link} to="/Createproduct"variant="contained" color="primary">Create product</Button><br/><br/>
</div> 
        
    )
}

export default Front



