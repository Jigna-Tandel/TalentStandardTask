import React from 'react'
import { SingleInput } from '../Form/SingleInput.jsx';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Dropdown } from 'semantic-ui-react'

export default class VisaStatus extends React.Component {
    constructor(props) {
        super(props)

        const visaStatus=this.props?
        Object.assign({},this.props):
        {
           visaStatus:''  
        }
        this.state={
            visaStatus:visaStatus
           
                   }

         console.log('visaStatus state',this.state.visaStatus)
         console.log('visaStatus props',this.props)    
        this.handleChangeVisaStatus=this.handleChangeVisaStatus.bind(this)
        this.handleChangeDate=this.handleChangeDate.bind(this)
        this.onSave=this.onSave.bind(this)
    }
    handleChangeDate(date, name) {
        if (name == 'visaExpiryDate') {
            this.props.updateProfileData({ target: { name: "visaExpiryDate", value: date } });
        }
            //    var updateData = {
            //     target: { name: "visaExpiryDate", value: date }
            // }
            // console.log('updateData',updateData)
            // console.log('date',date)
            // this.props.updateProfileData(updateData);

            //this.props.saveProfileData(updateData);
       // }
        // else {
        //     var data = Object.assign({}, this.props.jobDetails);

        //     data[name] = date;
        //     var updateData = {
        //         target: { name: "jobDetails", value: data }
        //     }
        //     this.props.updateStateData(updateData);
        // }        
    }
  
    handleChangeVisaStatus(event)
    {
       
        const data = Object.assign({}, this.state.visaStatus)
        data[event.target.name] = event.target.value
       
        this.setState({
            visaStatus: data,
                  })


       this.props.updateProfileData(data)
    }

  

    onSave()
    {
        const data=Object.assign({},this.state.visaStatus)
        this.props.saveProfileData(data)
           }

    render() {
        const expiryDate = this.props.visaExpiryDate instanceof moment ? this.props.expiryDate : moment().add(14, 'days');

        console.log('ExpiryDate',expiryDate)
       // const expiryDate = this.props.visaExpiryDate instanceof moment ? this.props.expiryDate : moment();
          //const expiryDate = this.props.visaExpiryDate

         // const selectedVisaStatus = this.props.visaStatus
          const selectedVisaStatus = this.props.visaStatus ?
          this.props.visaStatus:
          this.state.visaStatus

          let iscitizenorpr=false
          if(selectedVisaStatus=='Citizen'||selectedVisaStatus=='Permanent Resident')
          {
            iscitizenorpr=false
                     }
            else
          {
            iscitizenorpr=true
                    }
            

        
        let visaStatus = ['Citizen','Permanent Resident','Work Visa','Student Visa']
        let optionvisaStatus = visaStatus.map((x) =>
                <option key={x} value={x}>{x}</option>);
              
            console.log('selectedVisaStatus',selectedVisaStatus)                        

        return(
            <div className='row'>
            <div className="ui sixteen wide column">
           
                 <div className="ui grid">
                 <div className="row">
                <div className="six wide column">
                    <p>Visa Status:</p>
                   
                    <select className="ui right labeled dropdown"
                            name='visaStatus' 
                            value={selectedVisaStatus} 
                            onChange={this.handleChangeVisaStatus} >
                        {optionvisaStatus}
                    </select>
                </div>
                {
            
               iscitizenorpr
                            ? (
                <div className="six wide column">
                    <p>Expiry Date:</p>
                    <div className="summary">
                                      
                                        <DatePicker
                                            selected={expiryDate}
                                            onChange={(date) => this.handleChangeDate(date, "visaExpiryDate")}
                                            minDate={moment()}
                                        />
                                    </div>

                   
                </div>
                
                     
                 ):
                  ( <div className="six wide column"></div>)    
                 } 
                    <div className="four wide column">
                    <p></p>
                    <button type="button" className="ui right floated teal button" onClick={this.onSave} >Save</button> 
                    </div>
                </div>
                </div>
                {/* <React.Fragment>
                    <p>Name: </p>
                    <p>Email: </p>
                    <p>Phone: </p>
                </React.Fragment>
                <button type="button" className="ui right floated teal button" >Edit</button> */}
            </div>
        </div>
        )
      
    }
}