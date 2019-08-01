import React from 'react'
import Cookies from 'js-cookie'
//import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { LocationCountries } from './LocationCountries.jsx';
import { Dropdown } from 'semantic-ui-react'
//import {Nation} from './Nation.jsx';
import { default as countries } from '../../../../util/jsonFiles/countries.json';



export class Address extends React.Component {
    constructor(props) {
        super(props)

        const Address = this.props.Address ?
            Object.assign({}, this.props.Address)
            : {
                address:{
                    
               city: "",
               country: "",
                number: "",
                postCode: 0,
                street: "",
                suburb: ""  
                }
            }

        this.state = {
            showEditSection: false,
            newAddress: Address
        }

        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)

        console.log('props.Address in constructor',this.props.Address)
    }

    openEdit() {
        const Address = Object.assign({}, this.props.Address)
        this.setState({
            showEditSection: true,
            newAddress: Address
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false,
            newAddress:this.props.Address
        })
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newAddress)
        data[event.target.name] = event.target.value
        this.setState({
            newAddress: data
        })
    }

    saveContact() {
        const data = Object.assign({},this.state.newAddress)
        console.log('data',data)
       
           
        let name1="number"
        let name2='street'
        let name3='suburb'
        let name4='postCode'
        let name5='city'
        let name6='country'
       
        let value1=this.state.newAddress.number
        let value2=this.state.newAddress.street
        let value3=this.state.newAddress.suburb
        let value4=this.state.newAddress.postCode
        let value5=this.state.newAddress.location.city
        let value6=this.state.newAddress.location.country
        const updateData = { address:{
                            [name1]:value1,
                            [name2] :value2,
                            [name3]:value3,
                            [name4] :value4,
                            [name5]:value5,
                            [name6] :value6,
                        }}
      this.props.saveProfileData(updateData)
      this.props.updateProfileData(updateData)
     
     

      this.closeEdit()
      console.log('props in save',this.props.Address)
      /*this.props.saveProfileData(data)
      this.props.updateProfileData(data)
     
        this.closeEdit()*/
    }

    render() {
        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderEdit() {
        /*let Address = {city: '',country: '' }
         Address.city = this.state.newAddress ? this.state.newAddress.city:""
         Address.country = this.state.newAddress ? this.state.newAddress.country:""*/
         
      
        let Address = {city: '',country: '' }
        if (this.state.newAddress && this.state.newAddress.location) {
            Address = this.state.newAddress.location
           
        }

        console.log('location in renderEdit',Address)
        

        return (

            <div className='ui sixteen wide column'>
                 <div className="ui grid">
                 <div className="row">
                <div className="four wide column">
                                   
                     <ChildSingleInput
                   inputType="text"
                   label="number"
                   name="number"
                   value={this.state.newAddress.number}
                   controlFunc={this.handleChange}
                   maxLength={150}
                   //isError={this.state.isError}
                   placeholder="Please Enter number"
                   errorMessage="Please enter number"
               />
               </div>
               <div className="four wide column">
               <ChildSingleInput
                   inputType="text"
                   label="street"
                   name="street"
                   value={this.state.newAddress.street}
                   controlFunc={this.handleChange}
                   maxLength={150}
                   //isError={this.state.isError}
                   placeholder="Please Enter street"
                   errorMessage="Please enter street"
               />
               </div>
               <div className="four wide column">
                <ChildSingleInput
                   inputType="text"
                   label="suburb"
                   name="suburb"
                   value={this.state.newAddress.suburb}
                   controlFunc={this.handleChange}
                   maxLength={150}
                   //isError={this.state.isError}
                   placeholder="Please Enter suburb"
                   errorMessage="Please enter suburb"
               />
               </div>
               </div>
               <div className="row">
               <div className="four wide column">
              <ChildSingleInput
                   inputType="text"
                   label="postCode"
                   name="postCode"
                   value={this.state.newAddress.postCode}
                   controlFunc={this.handleChange}
                   maxLength={150}
                   //isError={this.state.isError}
                   placeholder="Please Enter postCode"
                   errorMessage="Please enter postCode"
               />
              </div>
              <div className="four wide column">
                Location:
                <LocationCountries location={Address}  handleChange={this.handleChange} /> 
                
                </div>
                </div>
                <div className="row">
               <div className="sixteen wide column">
                <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
                </div>
                </div>
           
           </div>
            </div>
        )
    }

    renderDisplay() {

        let location = this.props.Address ? this.props.Address: ""

        console.log('props.Address in renderDisplay',this.props.Address)
        console.log('location in renderDisplay',location)
      //  console.log('props.detail.Address',this.props.details.Address)
        
      // let location = {number:'',street:'',suburb:'',postCode:'',city:'',country:''}
        // if (this.props.Address) {
        //   let  location = this.props.Address
        // }
        // else
        // {
        //     let location=this.state.newAddress
        // }

        return (
            <div className='row'>
                <div className="ui sixteen wide column">
                    <React.Fragment>
                        <p>Address:{location.number},
                                    {location.street},
                                    {location.suburb},
                                    {location.postCode}</p> 
                      
                        <p>city:{location.city} </p>
                        <p>country: {location.country}</p>
                      
                    </React.Fragment>
                    <button type="button" className="ui right floated teal button" onClick={this.openEdit}>Edit</button>
                </div>
            </div>
        )
    
    }

}

export class Nationality extends React.Component {
    
    constructor(props) {
        super(props)
       
    const Nations = this.props.nationalityData ?
    Object.assign({}, this.props.nationalityData)
    : {
        nationality:''
    }

        this.state = {
                nationality: Nations
        }

            this.handleChangeNation = this.handleChangeNation.bind(this);
        }
    
        componentDidMount() {
    
        }
        
    
        handleChangeNation(event) {
        

                const data = Object.assign({}, this.state.nationality)
            data[event.target.name] = event.target.value
            this.setState({
                nationality: data
        })

        this.props.saveProfileData(data)
          
        }

       
    
        render() {
            let nationalityOptions = [];
                 
          
            nationalityOptions = Object.keys(countries).map((x) => <option key={x} value={x}>{x}</option>);
            const selectedNation = this.props.nationalityData ?
                                    this.props.nationalityData:
                                    this.state.nationality
       // const selectedNation =  this.state.Nationality
                                   
       console.log('props in render:',this.props.nationalityData)
       console.log('state in render:', this.state.nationality)
    
           
        return(
            <div>
                <span>
                <select className="ui right labeled dropdown"
                    placeholder="Nationality"
                    value={selectedNation}
                    //value={this.state.Nationality}
                    onChange={this.handleChangeNation}
                    name="nationality">
    
                    <option value="">Select Nationality</option>
                    {nationalityOptions}
                </select>
                            </span>
                </div>
            )
        }
        
}