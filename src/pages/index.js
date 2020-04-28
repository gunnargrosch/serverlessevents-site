import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Events from '../components/Events'
import HowTo from '../components/HowTo'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Serverless Events - A curated list of awesome serverless events around the world"
          meta={[
            {
              name: 'description',
              content:
                'A curated list of awesome serverless events around the world by and for the community',
            },
            { name: 'keywords', content: 'serverless, events, community' },
            {
              name: 'og:title',
              content:
                'Serverless Events - A curated list of awesome serverless events around the world',
            },
            {
              name: 'og:description',
              content:
                'A curated list of awesome serverless events around the world by and for the community',
            },
            {
              name: 'og:image',
              content:
                'https://cdn.grosch.se/serverlessevents/serverlessevents-card.png',
            },
            { name: 'twitter:card', content: 'summary_large_image' },
            {
              name: 'twitter:title',
              content:
                'Serverless Events - A curated list of awesome serverless events around the world',
            },
            {
              name: 'twitter:description',
              content:
                'A curated list of awesome serverless events around the world by and for the community',
            },
            { name: 'twitter:site', content: '@gunnargrosch' },
            { name: 'twitter:creator', content: '@gunnargrosch' },
            {
              name: 'og:image',
              content:
                'https://cdn.grosch.se/serverlessevents/serverlessevents-card.png',
            },
          ]}
        ></Helmet>

        <Banner />

        <Events />

        <section id="about">
          <div className="inner">
            <header className="major">
              <h2>About</h2>
            </header>
            <p>
              Serverless Events contains a curated list of upcoming events. This
              can be large conferences, local meetups, podcasts, webinars and a
              whole bunch of other awesome serverless events. The important part
              is that the event is focused on serverless in one way or another
              and by that is helpful to the serverless community.
            </p>
            <p>
              Unsure if your event should be in the list? If your event is
              beneficial for the serverless community it should probably be in
              the list.
            </p>
          </div>
        </section>

        <HowTo />
      </Layout>
    )
  }
}

export default HomeIndex
