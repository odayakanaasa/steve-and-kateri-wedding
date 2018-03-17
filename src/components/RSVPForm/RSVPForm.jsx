import React from 'react';
import './RSVPForm.css';

const RSVPForm = () => (
  <div>
    <form
      action="/rsvp-confirmation"
      method="POST"
      className="rsvp-form"
      data-netlify="true"
      name="rsvp-form"
    >
      <li>
        <label htmlFor="name">What's your name?</label>
        <small>
                    Please provide the name that appears on your invite
        </small>
        <input type="text" name="name" id="name" />
      </li>

      <li>
        <label htmlFor="attending">Will you be joining us?</label>
        <fieldset>
          <input type="radio" 
            name="attending" 
            value="yes" 
            id="yes" 
          />
          <label htmlFor="yes">I'm There</label>

          <br />

          <input
            type="radio"
            name="attending"
            value="no"
            id="no"
          />
          <label htmlFor="no">Can't Make It</label>
        </fieldset>
      </li>

      <li>
        <label htmlFor="party-count">
          How many people will be in your party including yourself?
        </label>
        <select name="party-count">
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
        <select name="child-count">
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
        <textarea name="guest-names" id="guest-names" />
      </li>
      <button type="submit">Submit Your RSVP</button>
    </form>
  </div>
);

export default RSVPForm;
