import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown } from 'semantic-ui-react'
//import { countries } from '../common.js'
import { default as countries } from '../../../../util/jsonFiles/countries.json';

export class Nation extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            Nationality:this.props.Nationality
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

    }
    

    handleChange(event) {
        this.setState({Nationality:event.target.value})
        const data=this.state.Nationality
        this.props.handleChange(data)
      
    }

    render() {
        let countriesOptions = [];
       // let citiesOptions = [];
        const selectedCountry = this.state.Nationality;
       // const selectedCity = this.props.Nationality.city;
        
        countriesOptions = Object.keys(countries).map((x) => <option key={x} value={x}>{x}</option>);

       
    return(
        <div>
            <span>
            <select className="ui right labeled dropdown"
                placeholder="Nationality"
                value={selectedCountry}
                onChange={this.handleChange}
                name="Nationality">

                <option value="">Select Nationality</option>
                {countriesOptions}
            </select>
                        </span>
            </div>
        )
    }
    
}
