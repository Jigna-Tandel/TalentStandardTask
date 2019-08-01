/* Self introduction section */
import React, { Component } from 'react';
import Cookies from 'js-cookie'
import CkEditor from "react-ckeditor-component";
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { FormErrors } from '../Form/FormErrors.jsx';


export default class SelfIntroduction extends React.Component {
    constructor(props) {
        super(props)

        const summary = this.props ?
            Object.assign({}, this.props)
            : {
                summary:"",
                description:""
            }

        this.state = {
            showEditSection: false,
            isError:false,
            newsummary: summary
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
       
    }

    openEdit() {
        const summary = Object.assign({}, this.props)
        this.setState({
            showEditSection: true,
            newsummary: summary
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {
       // var newContent = event.editor.getData();
     
        const data = Object.assign({}, this.state.newsummary)
        data[event.target.name] = event.target.value
       
        this.setState({
            newsummary: data
        })
       
   
       
       
    }

    saveContact() {
      //  console.log(this.props.componentId)
        console.log('newSummary',this.state.newsummary)
        const data = Object.assign({}, this.state.newsummary)
       
        this.props.updateProfileData(data)
        this.props.updateWithoutSave(data)
        
        
        this.closeEdit()
    }

   

    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderEdit() {


    
        return (
            <div className='ui sixteen wide column'>
           
          <div className="field">
            <ChildSingleInput
                    inputType="text"
                    label="summary"
                    name="summary"
                    value={this.state.newsummary.summary}
                    controlFunc={this.handleChange}
                    maxLength={150}
                    //isError={this.state.isError}
                    placeholder="Please provide a short summary about yourself"
                    errorMessage="Please enter summary"
                />
           </div>
           

            <textarea
                    type="text"
                    label="description"
                    name="description"
                    value={this.state.newsummary.description}
                    onChange={this.handleChange}
                    maxLength={600}
                    placeholder="Please tell us about your hobbies,
                                additional experties you like to add"
                    errorMessage="Please enter description"
                /> 
                {/* <CkEditor
                    name="description"
                    activeClass="p10"
                    value={this.state.newsummary.description}
                    content={this.props.description}
                   // controlFunc={this.handleChange}
                    events={{
                        "blur": this.handleChange,
                        "afterPaste": this.handleChange,
                        "change": this.handleChange
                    }}
                />
           */}
                
           
               
          
<button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
<button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
</div>
      )
    }

    renderDisplay() {

        
        let summary = this.props.summary ? this.props.summary: ""
        let description= this.props.description ? this.props.description: ""

        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <p>Summary: {summary}</p>
                         <p>Description: {description}</p> 
                        
                    </React.Fragment>
                    <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
                </div>
            </div>
        )
    }
}



