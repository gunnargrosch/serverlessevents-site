import React, { Component } from 'react';

const GATEWAY_URL = process.env.GATEWAY_URL

class AddEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {event: '', organizer: '', starttime: '', endtime: '', eventlocation: '', eventlanguage: '', address: '', link: '', description: '', email: ''};
  }

  handleForm = async e => {
    e.preventDefault();
    try {
      await fetch(GATEWAY_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(this.state),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      let successMessage = document.querySelector('.success-message');
      successMessage.innerHTML = 'Event submitted';
    } catch (error) {
      let successMessage = document.querySelector('.success-message');
      successMessage.innerHTML = JSON.stringify(error);
    }
    this.setState({event: '', organizer: '', starttime: '', endtime: '', eventlocation: '', eventlanguage: '', address: '', link: '', description: '', email: ''}) // <= here
  };
  handleFields = e => this.setState({ [e.target.name]: e.target.value }); 

  render() {
    return (
      <div id="main" className="alt">
        <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Add a serverless event</h1>
              </header>
              <p>So you have a serverless event? Great! This is the place to submit your event. If your submitted event is approved 
                it will be listed alongside the others in the awesome list of serverless events.
              </p>
              <form id="addevent" onSubmit={this.handleForm}>
                <div className="field half first">
                    <label htmlFor="event">Event Title</label>
                    <input type="text" name="event" id="event" required onChange={this.handleFields} value={this.state.event} />
                </div>
                <div className="field half">
                    <label htmlFor="organizer">Organizer</label>
                    <input type="text" name="organizer" id="organizer" required onChange={this.handleFields} value={this.state.organizer} />
                </div>
                <div className="field half first">
                    <label htmlFor="starttime">Start time (epoch timestamp)</label>
                    <input type="text" pattern="[0-9]*" name="starttime" id="starttime" required onChange={this.handleFields} value={this.state.starttime} />
                </div>
                <div className="field half">
                    <label htmlFor="endtime">End time (epoch timestamp)</label>
                    <input type="text" pattern="[0-9]*" name="endtime" id="endtime" required onChange={this.handleFields} value={this.state.endtime} />
                </div>
                <div className="field half first">
                    <label htmlFor="eventlocation">Location (Online or city and country)</label>
                    <input type="text" name="eventlocation" id="eventlocation" required onChange={this.handleFields} value={this.state.eventlocation} />
                </div>
                <div className="field half">
                    <label htmlFor="eventlanguage">Language</label>
                    <input type="text" name="eventlanguage" id="eventlanguage" required onChange={this.handleFields} value={this.state.eventlanguage} />
                </div>
                <div className="field full">
                    <label htmlFor="address">Venue and address (if not online)</label>
                    <input type="text" name="address" id="address" onChange={this.handleFields} value={this.state.address} />
                </div>
                <div className="field full">
                    <label htmlFor="link">Event link</label>
                    <input type="text" name="link" id="link" required onChange={this.handleFields} value={this.state.link} />
                </div>
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" rows="2" maxlength="200" required onChange={this.handleFields} value={this.state.description} ></textarea>
                </div>
                <div className="field full first">
                    <label htmlFor="email">Submitters email</label>
                    <input type="text" name="email" id="email" required onChange={this.handleFields} value={this.state.email} />
                </div>
                <div>
                <ul className="actions">
                    <li><input type="submit" value="Submit Event" className="special" /></li>
                    <li><input type="reset" value="Clear" /></li>
                </ul>
                </div>
                <div className="success-message">
                  <label></label>
                </div>
              </form>
            </div>
        </section>
    </div>
    )
  }
}

export default AddEventForm;