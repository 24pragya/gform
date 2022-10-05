import React from 'react'
import './Template.css'
import blank from '../images/blank.png'
import { v4 as uuidv4 } from 'uuid';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import {useHistory} from 'react-router-dom';

function Template() {
    const history =useHistory();
    
    const createForm = () => {
        const id = uuidv4();
        
        history.push('/form/'+id)
    }
  return (
    <div className="template_section">
        <div className="template_top">
            <div className="template_left">
                <span style = {{fontsize:"16px", color: "#202124"}}>Start new form</span>
            </div>
            <div className="template_right"></div>
        </div>
        <div className="template_body">
            <div className="card" onClick = {createForm}>
                <img src={blank} alt="no image" className="card_image"/>
                <p className="card_title">Add Question</p>
            </div>
        </div>
        
    </div>
  )
}

export default Template