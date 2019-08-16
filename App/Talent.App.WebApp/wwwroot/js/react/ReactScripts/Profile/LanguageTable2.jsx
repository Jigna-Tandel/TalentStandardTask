/* Language section */
import React from "react";
import Cookies from "js-cookie";
import { ChildSingleInput } from "../Form/SingleInput.jsx";

export default class LanguageTable2 extends React.Component {
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
        <h1 id="title">React Dynamic Table</h1>
        <table id="language">
          <tbody>
            <tr />
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }

  renderTableHeader() {
    let header = Object.keys(this.state.language);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.props.languageData.map((language, index) => {
      const { id, name, level } = this.props.languageData; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{level}</td>
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
      );
    });
  }
}
