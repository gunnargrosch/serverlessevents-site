import React from 'react'
import Helmet from 'react-helmet'
import { GatsbySeo } from 'gatsby-plugin-next-seo'
import Layout from '../components/layout'
import AddEventForm from '../components/AddEventForm'

const AddEvent = (props) => (
    <Layout>
    <GatsbySeo
      title='Serverless Events - A curated list of awesome serverless events around the world'
      description='A curated list of awesome serverless events around the world by and for the community'
    />
    <Helmet
      title="Serverless Events - A curated list of awesome serverless events around the world"
      meta={[
        { name: 'description', content: 'A curated list of awesome serverless events around the world by and for the community' },
        { name: 'keywords', content: 'serverless, events, community' }
      ]}
    ></Helmet>

      <AddEventForm />

    </Layout>
)

export default AddEvent