import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const HowTo = props => (
  <nav id="howto">
    <div id="main">
      <section id="howto">
        <div className="inner">
          <header className="major">
            <h2>How to add event</h2>
          </header>
          <p>
            In this first rough version of Serverless Events updates are done in the GitHub repository at <a href="https://github.com/gunnargrosch/serverlessevents-site" target="_blank">https://github.com/gunnargrosch/serverlessevents-site</a>.
          </p>
          <ol>
            <li>Fork the repository <a href="https://github.com/gunnargrosch/serverlessevents-site" target="_blank">https://github.com/gunnargrosch/serverlessevents-site</a></li>
            <li>Add your event in JSON format in eventsData.json</li>
            <li>Submit a PR</li>
          </ol>
          <p>
            Reach out to <a href="https://twitter.com/gunnargrosch" target="_blank">Gunnar Grosch</a> if all of this seems like a lot of work.
          </p>
        </div>
      </section>
    </div>
  </nav>
)

HowTo.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default HowTo
