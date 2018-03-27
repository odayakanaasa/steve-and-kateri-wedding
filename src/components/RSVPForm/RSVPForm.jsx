import React from 'react';
import {navigateTo} from "gatsby-link";
import './RSVPForm.css';

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class RSVPForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => navigateTo('/rsvp-confirmation/'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return(
      <div>
        <form
          action="/rsvp-confirmation"
          method="POST"
          className="rsvp-form"
          name="rsvp-form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
             <label>
               Don’t fill this out: <input name="bot-field" />
             </label>
           </p>
          <li>
            <label htmlFor="name">What's your name?</label>
            <small>
                        Please provide the name that appears on your invite
            </small>
            <input type="text" name="name" id="name" onChange={this.handleChange} />
          </li>

          <li>
            <label htmlFor="attending">Will you be joining us?</label>
            <fieldset>
              <input type="radio" 
                name="attending" 
                value="yes" 
                id="yes" 
                onChange={this.handleChange}
              />
              <label htmlFor="yes">I'm There</label>

              <br />

              <input
                type="radio"
                name="attending"
                value="no"
                id="no"
                onChange={this.handleChange}
              />
              <label htmlFor="no">Can't Make It</label>
            </fieldset>
          </li>

          <li>
            <label htmlFor="party-count">
              How many people will be in your party including yourself?
            </label>
            <select name="party-count" onChange={this.handleChange}>
              <optgroup label="Party Count">
                <option value="0" selected>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </optgroup>
            </select>
          </li>

          <li>
            <label htmlFor="child-count">
              How many children are in your party?
            </label>
            <select name="child-count" onChange={this.handleChange}>
              <optgroup label="Number of Children">
                <option value="0" selected>0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </optgroup>
            </select>
          </li>

          <li>
            <label htmlFor="guest-names">
              Please list the names of each person in your party
            </label>
            <textarea name="guest-names" 
              id="guest-names" 
              onChange={this.handleChange}
            />
          </li>
          <button type="submit">Submit Your RSVP</button>
        </form>
      </div>
    )
  }
}