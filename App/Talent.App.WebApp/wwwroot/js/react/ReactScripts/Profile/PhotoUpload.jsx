﻿/* Photo upload section */
import React, { Component } from 'react';
import Cookies from 'js-cookie';

export default class PhotoUpload extends Component {

    constructor(props) {
        super(props);

       
    };


    

    render() {
        return(
            <div className='row'>
            <div className="ui sixteen wide column">
                <React.Fragment>
                    <p>Name: </p>
                    <p>Email: </p>
                    <p>Phone: </p>
                </React.Fragment>
                <button type="button" className="ui right floated teal button" >Edit</button>
            </div>
        </div>
        )
        
    }
}
