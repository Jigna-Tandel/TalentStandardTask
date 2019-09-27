/* Language section */
import React from "react";
import Cookies from "js-cookie";
import { ChildSingleInput } from "../Form/SingleInput.jsx";

export default class LanguageAdd extends React.Component {
  constructor(props) {
    super(props);

    const language = props.languageData
      ? Object.assign({}, props.languageData)
      : {
          Name: "",
          level: ""
        };
    this.state = {
      language: language
    };
    this.onCancel = this.onCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onCancel() {
    this.props.onCancel();
  }
  handleChange(event) {
    // this.setState({ language: event.target.value });

    const data = Object.assign({}, this.state.language);
    data[event.target.name] = event.target.value;

    this.setState({
      language: data
    });
    console.log("data in language", data);
    //  this.props.updateProfileData(data)
  }

  onSave() {
    const data = Object.assign({}, this.state.language);
    const updateData = {
      Languages: [data]
    };
    this.props.onSave(updateData);
    console.log("data in language", updateData);
  }

  render() {
    let level = ["Basic", "Conversational", "Fluent", "Native/Bilingual"];
    let levelOption = level.map(x => (
      <option key={x} value={x}>
        {x}
      </option>
    ));
    return (
      <div className="ui sixteen wide column">
        <div className="ui grid">
          <div className="row">
            <div className="six wide column">
              {/* <ChildSingleInput
                inputType="text"
                // label="Language "
                name="Name"
                value={this.state.language.language}
                controlFunc={this.handleChange}
                maxLength={12}
                placeholder="Language"
                errorMessage="Please "
              /> */}

              <input
                type="text"
                name="Name"
                value={this.state.language.Name}
                onChange={this.handleChange}
                placeholder="Name"
              />
            </div>

            <div className="six wide column">
              <select
                className="ui right labeled dropdown"
                name="level"
                value={this.state.language.level}
                onChange={this.handleChange}
              >
                <option>Language level</option>
                {levelOption}
              </select>
            </div>

            <div className="two wide column">
              <button
                type="button"
                className="ui right floated teal button"
                onClick={this.onSave}
              >
                Add
              </button>
            </div>

            <div className="two wide column">
              <button
                type="button"
                className="ui right floated teal button"
                onClick={this.onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
