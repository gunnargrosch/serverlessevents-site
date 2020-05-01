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
            Go to the <Link to="/addevent">Add Event page</Link> and submit your event. If your submitted event is approved it will be listed alongside the others in the awesome list of serverless events.
          </p>
          <p>
            If you have any ideas on how to improve Serverless Events or find a bug, feel free to open an issue or submit a PR to the repository at <a href="https://github.com/gunnargrosch/serverlessevents-site" target="_blank">https://github.com/gunnargrosch/serverlessevents-site</a>.
          </p>
          <p>
            Reach out to <a href="https://twitter.com/gunnargrosch" target="_blank">Gunnar Grosch</a> if you have any questions.
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
