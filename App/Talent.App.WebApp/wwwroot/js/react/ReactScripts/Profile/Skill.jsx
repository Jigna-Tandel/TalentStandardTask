/* skill section */
import React from "react";
import Cookies from "js-cookie";
import { ChildSingleInput } from "../Form/SingleInput.jsx";
import SkillAdd from "./SkillAdd.jsx";
import SkillTable from "./SkillTable.jsx";

export default class Skill extends React.Component {
  constructor(props) {
    super(props);

    // const skillData = props.skillData
    //   ? Object.assign({}, props.skillData)
    //   : {
    //       skillData: ""
    //     };

    this.state = {
      isAddskill: false
      // skillData: skillData
    };
    this.onAddskill = this.onAddskill.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onAddskill() {
    this.setState({ isAddskill: true });
  }
  onCancel() {
    this.setState({ isAddskill: false });
  }
  onSave(data) {
    debugger;
    //this.props.updateProfileData1(data);
    this.props.updateProfileData(data);
    console.log("data in skill", data);
  }

  render() {
    return (
      <div className="ui sixteen wide column">
        <div className="ui grid">
          <div className="row">
            {this.state.isAddskill ? (
              <SkillAdd
                onCancel={this.onCancel}
                onSave={this.onSave}
                skillData={this.props.skillData}
              />
            ) : (
              <div />
            )}
          </div>
          <div className="row">
            <SkillTable
              onAddskill={this.onAddskill}
              skillData={this.props.skillData}
            />
          </div>
        </div>
      </div>
    );
  }
}
