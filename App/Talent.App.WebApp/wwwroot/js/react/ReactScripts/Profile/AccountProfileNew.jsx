import React from 'react';
import Cookies from 'js-cookie';
import { IndividualDetailSection, CompanyDetailSection } from './ContactDetail.jsx';
import { BodyWrapper, loaderData } from '../Layout/BodyWrapper.jsx';
import FormItemWrapper from '../Form/FormItemWrapper.jsx';
import { Toggle } from './Toggle.jsx';

export default class AccountProfileNew extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profileData: {
                address: {},
                nationality: '',
                education: [],
                languages: [],
                skills: [],
                experience: [],
                certifications: [],
                visaStatus: '',
                visaExpiryDate: '',
                profilePhoto: '',
                linkedAccounts: {
                    linkedIn: "",
                    github: ""
                },
                jobSeekingStatus: {
                    status: "",
                    availableDate: null
                }
            },
            loaderData: loaderData,

        }

        this.updateWithoutSave = this.updateWithoutSave.bind(this)
        this.updateAndSaveData = this.updateAndSaveData.bind(this)
        this.updateForComponentId = this.updateForComponentId.bind(this)
        this.saveProfile = this.saveProfile.bind(this)
        this.loadData = this.loadData.bind(this)
        this.init = this.init.bind(this);
    };

    init() {
        let loaderData = this.state.loaderData;
        loaderData.allowedUsers.push("Talent");
        loaderData.isLoading = false;
        this.setState({ loaderData, })
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: 'http://localhost:60290/profile/profile/getTalentProfile',
           // url: 'http://localhost:60290/profile/profile/getProfile',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "GET",
            success: function (res) {
                this.updateWithoutSave(res.data)
            }.bind(this)
        })
        this.init()
    }
    //updates component's state without saving data
    updateWithoutSave(newValues) {
        let newProfile = Object.assign({}, this.state.profileData, newValues)
        this.setState({
            profileData: newProfile
        })
    }

    //updates component's state and saves data
    updateAndSaveData(newValues) {
        let newProfile = Object.assign({}, this.state.profileData, newValues)
        this.setState({
            profileData: newProfile
        }, this.saveProfile)
    }

    updateForComponentId(componentId, newValues) {
        this.updateAndSaveData(newValues)
    }

    saveProfile() {
        var cookies = Cookies.get('talentAuthToken');
        $.ajax({
            url: 'http://localhost:60290/profile/profile/updateTalentProfile',
            headers: {
                'Authorization': 'Bearer ' + cookies,
                'Content-Type': 'application/json'
            },
            type: "POST",
            data: JSON.stringify(this.state.profileData),
            success: function (res) {
                console.log(res)
                if (res.success == true) {
                    TalentUtil.notification.show("Profile updated sucessfully", "success", null, null)
                } else {
                    TalentUtil.notification.show("Profile did not update successfully", "error", null, null)
                }

            }.bind(this),
            error: function (res, a, b) {
                console.log(res)
                console.log(a)
                console.log(b)
            }
        })
    }

    render() {
        const profile = {
            firstName: this.state.profileData.firstName,
            lastName: this.state.profileData.lastName,
            email: this.state.profileData.email,
            phone: this.state.profileData.phone
        }
        console.log('Account profile',profile)
        return (
            <BodyWrapper reload={this.loadData} loaderData={this.state.loaderData}>
                <section className="page-body">
                    <div className="ui container">
                        <div className="ui container">
                            <div className="profile">
                                <form className="ui form">
                                <div className="ui grid">
                                <FormItemWrapper
                                            title='User Details'
                                            tooltip='Enter your contact details'
                                        >
                                            <IndividualDetailSection
                                                controlFunc={this.updateForComponentId}
                                                details={profile}
                                                componentId='contactDetails'
                                            />
                                        </FormItemWrapper>
                                    </div>
                                   </form>
                            </div >
                        </div>
                    </div>
                </section>
            </BodyWrapper>
        )
    }
}
