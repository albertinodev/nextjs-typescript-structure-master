import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Next JS</h1>
      <p>Next JS Master TYPESCRIPT STRUCTURE.</p>
    </Container>
  )
}

export default Home
