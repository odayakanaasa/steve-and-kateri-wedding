import React from 'react';
import './RSVPForm.css';

const RSVPForm = () => (
  <div>
    <form
      action="https://formspree.io/hello@steveafrost.com"
      method="POST"
      className="rsvp-form"
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
          <input type="radio" name="attending" value="yes" id="yes" />
          <label htmlFor="yes">Yes</label>
          <br />
          <input
            type="radio"
            name="attending"
            value="sorry"
            id="sorry"
          />
          <label htmlFor="sorry">Sorry</label>
        </fieldset>
      </li>

      <li>
        <label htmlFor="party-count">
                    How many people will be in your party including yourself?
        </label>
        <input
          type="number"
          name="partycount"
          id="partycount"
          min="1"
          max="6"
        />
      </li>

      <li>
        <label htmlFor="child-count">
                    How many children are in your party?
        </label>
        <input
          type="number"
          name="child-count"
          id="child-count"
          min="0"
          max="6"
        />
      </li>

      <button type="submit">Submit Your RSVP</button>
    </form>
  </div>
);

export default RSVPForm;
