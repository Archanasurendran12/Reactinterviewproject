import React from 'react'
import './Createproduct.css'
import {Button} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';

function Createproduct() {
    return (
        
            
            <div className="base-container">
        <div className="header">CREATE PRODUCT</div><br/><br/>
        <div className="content">
          
            
             
            <div className="form-group">
              <label htmlFor="username">Product Id</label>
              <input type="text" name="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Product Name</label>
              <input type="text" name="email"  />
            </div>
            <div className="form-group">
              <label htmlFor="password">Desscription</label>
              <input type="textArea" name="password" />
            </div>
          
        
            
                    <Button component={Link} to="/Home" variant="contained" color="primary">Submit</Button><br/><br/>               
            
            </div>
            </div>
        
    )
}

export default Createproduct

