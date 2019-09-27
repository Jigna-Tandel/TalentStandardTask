/* skill section */
import React from "react";
import Cookies from "js-cookie";
import { ChildSingleInput } from "../Form/SingleInput.jsx";

export default class SkillAdd extends React.Component {
  constructor(props) {
    super(props);

    const skills = this.props.skillData
      ? Object.assign({}, this.props.skillData)
      : {
          Name: "",
          level: ""
        };
    this.state = {
      skill: skills
    };

    // this.setState({ Weather5days: [...this.state.Weather5days, newArr] })
    this.onCancel = this.onCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onCancel() {
    this.props.onCancel();
  }
  handleChange(event) {
    // this.setState({ skill: [{ event.target.name }, event.target.value] });

    const data = this.state.skill;
    data[event.target.name] = event.target.value;

    // const updatedata

    this.setState({
      skill: data
    });
    // this.setState({ skill: [...this.state.skill, data] });
    //this.setState({ skill: [data] });
    console.log("data in skill", this.state.skill);
    // this.props.updateProfileData1(data);
  }

  onSave() {
    // const data = Object.assign({}, this.state.skill);
    // this.props.onSave(data);
    // console.log("data in skill", data);

    const data = Object.assign({}, this.state.skill);
    console.log("value in skill", this.state.skill);

    // let name1 = "Name";
    // let value1 = this.state.skill[Name];
    // let name2 = "level";
    // let value2 = this.state.skill[level];
    const updateData = {
      Skills: [data]
    };
    this.props.onSave(updateData);
    // ajax call to 'profile/addSkill' and pass data
    console.log("data in language", data);
  }

  render() {
    let level = ["Beginner", "Intermediate", "Expert"];
    let levelOption = level.map(x => (
      <option key={x} value={x}>
        {x}
      </option>
    ));
    console.log("state in skillAdd", this.state.skill);
    console.log("Name state in skillAdd", this.state.skill.Name);
    console.log("level state in skillAdd", this.state.skill.level);
    console.log("prop in skillAdd", this.props.skillData);

    return (
      <div className="ui sixteen wide column">
        <div className="ui grid">
          <div className="row">
            <div className="six wide column">
              {/* <ChildSingleInput
                inputType="text"
                // label="skill "
                name="skills"
                value={this.state.skill}
                
                controlFunc={this.handleChange}
     \           maxLength={12}
                placeholder="skill"
                errorMessage="Please "
              /> */}
              <input
                type="text"
                name="Name"
                value={this.state.skill.Name}
                onChange={this.handleChange}
                placeholder="skill"
              />
            </div>

            <div className="six wide column">
              <select
                className="ui right labeled dropdown"
                name="level"
                value={this.state.skill.level}
                onChange={this.handleChange}
              >
                <option>skill level</option>
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
