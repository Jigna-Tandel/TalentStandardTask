/* Language section */
import React from "react";
import Cookies from "js-cookie";
import { ChildSingleInput } from "../Form/SingleInput.jsx";

export default class LanguageTable extends React.Component {
  constructor(props) {
    super(props);

    const language = props.languageData
      ? Object.assign({}, props.languageData)
      : {
          language: ""
        };
    this.state = {
      language: language
    };

    this.onAddLanguage = this.onAddLanguage.bind(this);
  }

  onAddLanguage() {
    this.props.onAddLanguage();
  }

  render() {
    return (
      <div>
        <table id="language">
          <thead>
            <tr>
              <th>ID</th>

              <th>Language</th>
              <th>Level</th>
              <th>
                <button
                  type="button"
                  className="ui right floated teal button"
                  onClick={this.onAddLanguage}
                >
                  Add New
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>English</td>
              <td>level</td>
              <td>
                <table>
                  <tr>
                    <td>
                      <button
                        type="button"
                        className="ui right floated teal button"
                        // onClick={this.onSave}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="ui right floated teal button"
                        // onClick={this.onSave}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
