/* Language section */
import React from "react";
import Cookies from "js-cookie";
import { ChildSingleInput } from "../Form/SingleInput.jsx";
import LanguageAdd from "./LanguageAdd.jsx";
import LanguageTable from "./LanguageTable.jsx";

export default class Language extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddLanguage: false
    };
    this.onAddLanguage = this.onAddLanguage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onAddLanguage() {
    this.setState({ isAddLanguage: true });
  }
  onCancel() {
    this.setState({ isAddLanguage: false });
  }
  onSave(data) {
    this.props.updateProfileData(data);
  }

  render() {
    return (
      <div className="ui sixteen wide column">
        <div className="ui grid">
          <div className="row">
            {this.state.isAddLanguage ? (
              <LanguageAdd
                onCancel={this.onCancel}
                onSave={this.onSave}
                languageData={this.props.languageData}
              />
            ) : (
              <div />
            )}
          </div>
          <div className="row">
            <LanguageTable
              onAddLanguage={this.onAddLanguage}
              languageData={this.props.languageData}
            />
          </div>
        </div>
      </div>
    );
  }
}
