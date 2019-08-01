import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown } from 'semantic-ui-react'
//import { countries } from '../common.js'
import { default as countries } from '../../../../util/jsonFiles/countries.json';

export class LocationCountries extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }
    

    handleChange(event) {
       var data = Object.assign({}, this.props.location);
        //required
        const name = event.target.name;
        let value = event.target.value;
        const id = event.target.id;

        

        data[name] = value;
        if (name == "country") {
            data["city"] = "";
        }            
        var updateData = {
            target: { name: "location", value: data }

        }
        console.log('updatedata in location country',updateData)
        //update props here
        this.props.handleChange(updateData);
       
    }

    render() {
        let countriesOptions = [];
        let citiesOptions = [];
        const selectedCountry = this.props.location.country;
        const selectedCity = this.props.location.city;
       
        
        countriesOptions = Object.keys(countries).map((x) => <option key={x} value={x}>{x}</option>);

        if (selectedCountry != "" && selectedCountry != null ) {
           
            var popCities = countries[selectedCountry].map(x => <option key={x} value={x}> {x}</option>);

            citiesOptions = <span><select
                className="ui dropdown"
                placeholder="City"
                value={selectedCity}
                onChange={this.handleChange}
                name="city">
                <option value="0"> Select a town or city</option>
                {popCities}
            </select></span>
        }
    
    return(
        <div>
            <span>
            <select className="ui right labeled dropdown"
                placeholder="Country"
                value={selectedCountry}
                onChange={this.handleChange}
                name="country">

                <option value="">Select a country</option>
                {countriesOptions}
            </select>
             {/* <div style={{ marginTop:"5px", marginTop:"5px" }}></div> */}
            {citiesOptions}
            </span>
            </div>
        )
    }
    
}
