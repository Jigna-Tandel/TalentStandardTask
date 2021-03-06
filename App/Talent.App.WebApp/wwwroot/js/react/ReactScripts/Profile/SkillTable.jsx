/* skill section */
import React from "react";
import Cookies from "js-cookie";
import { ChildSingleInput } from "../Form/SingleInput.jsx";

export default class SkillTable extends React.Component {
  constructor(props) {
    super(props);

    const skill = props.skillData
      ? Object.assign({}, props.skillData)
      : {
          skill: ""
        };
    this.state = {
      skill: skill
    };

    this.onAddNewskill = this.onAddNewskill.bind(this);
  }

  onAddNewskill() {
    this.props.onAddNewskill();
  }

  render() {
    console.log("props in Table:", this.props.skillData);
    console.log("Name in props in Table:", this.props.skillData[0]);
    // console.log("name props in Table:", this.props.skillData["name"]);
    return (
      <div className="ui sixteen wide column">
        <div className="ui grid">
          <div className="row">
            <table className="ui sixteen wide column">
              <thead className="ui sixteen wide column">
                <tr>
                  <th>ID</th>

                  <th>skill</th>
                  <th>Level</th>
                  <th>
                    <button
                      type="button"
                      className="ui right floated teal button"
                      onClick={this.onAddNewskill}
                    >
                      Add New
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="ui sixteen wide column">
                {this.props.skillData.map(x => (
                  <tr key={x._id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.level}</td>
                    <td>
                      <table>
                        <tr>
                          <td>
                            <button
                              type="button"
                              className="ui.basic.green.button"
                              // onClick={this.onSave}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="ui.basic.green.button"
                              // onClick={this.onSave}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
