/* Social media JSX */
import React from 'react';
import Cookies from 'js-cookie';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { Popup } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class SocialMediaLinkedAccount extends React.Component {
    constructor(props) {
        super(props);
        const linkedAccounts = props.linkedAccounts ?
        Object.assign({}, props.linkedAccounts)
        : {
            linkedAccounts:{
                 linkedIn:"",
                 github:""
            }
            }
        
                   
            
    this.state = {
        showEditSection: false,
        newContact: linkedAccounts

        }
       
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
        this.cilckGithub=this.cilckGithub.bind(this)
        this.cilckLinkedIn=this.cilckLinkedIn.bind(this)
       //console.log('LinkedProps',this.p)
    }
    componentDidMount() {
        $('.ui.button.social-media')
            .popup();
    }

    openEdit() {
        const linkedAccounts = Object.assign({}, this.props.linkedAccounts)
               this.setState({
            showEditSection: true,
            newContact: linkedAccounts
        })
       

    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

   

    handleChange(event) {
        const data = Object.assign({}, this.state.newContact)
        data[event.target.name] = event.target.value
               this.setState({
            newContact: data
        })
    }

  
    saveContact(){
        alert('save click')
        const data = Object.assign({}, this.state.newContact)
        let name1="linkedIn"
        let name2='github'
        let value1=this.state.newContact.linkedIn
        let value2=this.state.newContact.github
        const updateData = { linkedAccounts:{[name1]:value1,[name2] :value2}}
           
      this.props.updateProfileData(updateData)
      this.props.saveProfileData(updateData)
     
       this.closeEdit()
       
   }
                
     

    cilckGithub(){
        let GitHub = this.props.linkedAccounts.github ? this.props.linkedAccounts.github : ""
            
        window.open(GitHub)
     
       
    }
    cilckLinkedIn(){
        let LinkedIn = this.props.linkedAccounts.linkedIn ? this.props.linkedAccounts.linkedIn : ""
            
        window.open(LinkedIn)
     
       
    }


    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    

    
    renderEdit() {
        return (
            <div className='ui sixteen wide column'>
               
                <ChildSingleInput
                    inputType="text"
                    label="linkedIn Account"
                    name="linkedIn"
                    value={this.state.newContact.linkedIn}
                    controlFunc={this.handleChange}
                    maxLength={200}
                    placeholder="Enter LinkedIn Account"
                    errorMessage="Please enter a valid LinkedIn Account"
                />

                <ChildSingleInput
                    inputType="text"
                    label="github Account"
                    name="github"
                    value={this.state.newContact.github}
                     controlFunc={this.handleChange}
                    maxLength={200}
                    placeholder="Enter a GitHub Account"
                    errorMessage="Please enter a valid GitHub Account"
                />

                <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
            </div>
        )
    }

    renderDisplay() {

        return (
            <div className='row'>
            <div className="ui sixteen wide column">
                <React.Fragment>
                <button type="button" 
                className="ui.button.social-media LinkedAccount" 
                onClick={this.cilckLinkedIn}>
                   
                    LinkedAccount
                    </button>
                <button type="button" 
                        className="ui.button.social-media" 
                        onClick={this.cilckGithub}>
                GitHub Account</button>
                </React.Fragment>
                <button type="button" className="ui right floated teal button" onClick={this.openEdit} >Edit</button>
            </div>
        </div>
        )
    }

    }