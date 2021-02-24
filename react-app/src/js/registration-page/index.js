import React from "react";

import {
  TextInput,
  EmailInput,
  PasswordInput,
  Icon,
  Checkbox,
  Toggle,
  Button,
  OutlineButton,
  Alert,
  Tooltip
} from "labsystem";

export default class RegistrationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errorMessage: false };
  }

  displayErrorMessage = () => {
    console.log("vamos nessa");
    this.setState({ errorMessage: true });
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <div className="registration-page container">
        <header>
          <h5>Labcodes' blog</h5>
          <h1>New user registration</h1>
        </header>
        <div className="intro">
          <div className="columns">
            <div className="column">
              <p className="paragraph-large">
                Before you start doing your thing, we need to get you
                registered. Please fill the following information (all fields
                are required).
              </p>
            </div>
            <div className="column">
              <p className="paragraph-large">
                <a href="#" className="doc-link--purple">
                  Login
                </a>
                if you have already registered.
              </p>
            </div>
          </div>
        </div>
        <form className="registration-form">
          <h2>
            Let's go!
            <br />
            It is all about you
          </h2>
          <div className="columns">
            <div className="column">
              <TextInput label="What's your first and last name?" required />
            </div>
            <div className="column">
              <EmailInput label="Your e-mail" required />
            </div>
          </div>
          <div className="columns">
            <div className="column is-half">
              <TextInput label="Choose an username" required />
            </div>
          </div>
          <h4>
            <Icon type="key" size="small" />
            Secure your account
          </h4>
          <div className="columns">
            <div className="column">
              <PasswordInput
                label="Set a password"
                helpMessage="At least 8 characters, containing letters and numbers"
                required
              />
            </div>
            <div className="column">
              <PasswordInput label="Confirm password" required />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h3>Now select the task(s) you will perform</h3>
              <fieldset>
                <Checkbox
                  id="checkbox-1"
                  label="Write blogposts"
                  name="checkbox1"
                />
                <Checkbox
                  id="checkbox-2"
                  label="Manage the system"
                  name="checkbox2"
                />
                <Checkbox
                  id="checkbox-3"
                  label="Review texts"
                  name="checkbox3"
                />
              </fieldset>
              {errorMessage && (
                <Alert
                  type="error"
                  text="Enter the required fields do proceed."
                  icon="remove"
                />
              )}
            </div>
            <div className="column">
              <h3>Set some personal preferences</h3>
              <fieldset>
                <label className="toogle--lab-checkbox__label">
                  Display my e-mail to readers
                  <Tooltip
                    id="tooltip-icon"
                    text="Your email will be shown in the posts
you have written and your personal
author page."
                    placement="top-start"
                  >
                    <Toggle
                      id="sample-toggle-purple-1"
                      label="Write blogposts"
                      name="sample-toggle-purple-1"
                      color="purple"
                    />
                  </Tooltip>
                </label>
                <label className="toogle--lab-checkbox__label">
                  Receive notifications on my e-mail
                  <Toggle
                    id="sample-toggle-purple-2"
                    name="sample-toggle-purple-2"
                    color="purple"
                  />
                </label>
                <label className="toogle--lab-checkbox__label">
                  Call me by my username
                  <Toggle
                    id="sample-toggle-purple-3"
                    name="sample-toggle-purple-3"
                    color="purple"
                  />
                </label>
              </fieldset>
            </div>
          </div>
          <div className="columns">
            <div className="column is-offset-8">
              <OutlineButton text="Clear and cancel" />
            </div>
            <div className="column">
              <Button
                text="Register"
                onClick={() => this.displayErrorMessage()}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
