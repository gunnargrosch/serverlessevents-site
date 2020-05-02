import React from 'react'
import PropTypes from 'prop-types'
import eventsData from "../../eventsData.json"
import moment from 'moment-timezone';

const Events = props => (
  <nav id="events">
    <div id="main">
      <section id="events">
        <div className="inner">
          <header className="major">
            <h2>Upcoming events</h2>
          </header>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Organizer</th>
                  <th>Date and time {moment.tz(moment.tz.guess()).zoneAbbr()}</th>
                  <th>Location</th>
                  <th>Description</th>
                  <th>Language</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {eventsData.content.map((data, index) => {
                  var usertz = moment.tz.guess();

                  if (Date.now()/1000 < data.starttime) {
                    var utmData = '?utm_source=serverlessevents&utm_medium=site&utm_campaign=serverlessevents&utm_content=serverlessevents'
                    var formattedStartTime = Intl.DateTimeFormat('en-US',{
                      timeZone: usertz,
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                      hour: "numeric",
                      minute: "2-digit"
                    }).format(data.starttime*1000);
                    return (
                  <tr>
                    <td><a href={data.link + utmData} target="_blank">{data.event}</a></td>
                    <td>{data.organizer}</td>
                    <td style={{ whiteSpace: 'nowrap' }}>{formattedStartTime}</td>
                    <td>{data.eventlocation}</td>
                    <td>{data.description}</td>
                    <td>{data.eventlanguage}</td>
                    <td><a href={data.link + utmData} target="_blank">Link</a></td>
                  </tr>
                    )
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </nav>
)

Events.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Events
