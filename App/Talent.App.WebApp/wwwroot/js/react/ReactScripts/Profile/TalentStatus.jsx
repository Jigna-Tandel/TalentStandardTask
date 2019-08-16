import React from "react";
import { Form, Checkbox } from "semantic-ui-react";
import { SingleInput } from "../Form/SingleInput.jsx";

export default class TalentStatus extends React.Component {
  constructor(props) {
    super(props);

    const status = this.props.status
      ? Object.assign({}, this.props.status)
      : {
          JobSeekingStatus: ""
        };

    this.state = {
      //selectedOption: "Activly looking for job"
      JobSeekingStatus: status
    };
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.onSave = this.onSave.bind(this);
    // this.update=this.update.bind(this)
  }

  handleOptionChange(event) {
    // this.setState({ jobSeekingStatus: event.target.value });
    // console.log(event.target.value);
    // let data = {};
    // data[event.target.name] = event.target.value;
    // console.log("data", data);
    // this.props.updateProfileData(data);

    const data = Object.assign({}, this.state.JobSeekingStatus);
    data[event.target.name] = event.target.value;

    this.setState({
      JobSeekingStatus: data
    });
    console.log("data", data);
    this.props.updateProfileData(data);
    //  this.props.saveProfileData(data);
  }

  onSave() {
    const data = Object.assign({}, this.state.JobSeekingStatus);
    //this.props.updateProfileData(data);
    this.props.saveProfileData(data);
  }

  render() {
    let option1 = "Activly looking for job";
    let option2 = "Not looking for a job at the moment";
    let option3 = "currently employed but open to others";
    let option4 = "Will be available on later date";

    let selectedOption = this.props.status;
    // let selectedOption = "Activly looking for job";

    return (
      <div className="inline fields">
        <div className="field">
          <div className="ui radio checkbox-check">
            <label>
              <input
                type="radio"
                name="JobSeekingStatus"
                value={option1}
                checked={selectedOption === option1}
                onChange={this.handleOptionChange}
                //className="form-check-input"
              />
              {option1}
            </label>
          </div>
          <div className="ui radio checkbox-check">
            <label>
              <input
                type="radio"
                name="JobSeekingStatus"
                value={option2}
                checked={selectedOption === option2}
                onChange={this.handleOptionChange}
                // className="form-check-input"
              />
              {option2}
            </label>
          </div>
          <div className="ui radio checkbox-check">
            <label>
              <input
                type="radio"
                name="JobSeekingStatus"
                value={option3}
                checked={selectedOption === option3}
                onChange={this.handleOptionChange}
                //className="form-check-input"
              />
              {option3}
            </label>
          </div>
          <div className="ui radio checkbox-check">
            <label>
              <input
                type="radio"
                name="JobSeekingStatus"
                value={option4}
                checked={selectedOption === option4}
                onChange={this.handleOptionChange}
                // className="form-check-input"
              />
              {option4}
            </label>
          </div>
        </div>
        <div className="ui sixteen wide column padded left">
          <button
            type="button"
            className="ui right floated teal button"
            onClick={this.onSave}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
