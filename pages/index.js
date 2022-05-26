import React from 'react'
import Motion from '../components/motion'
import Metadata from '../components/metadata'
import Link from 'next/link'
import Main from '../components/innerWrapper'

import MainWrapper from '../components/mainWrapper'

const Home = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title='Henrique P.'
        description='Data Scientist'
        name='Henrique Pett'
      />
      <Main>
        <h1 className='heading2Xl'>Hey, I'm Henrique! </h1>
        <p>
          I'm a Data Scientist working at {''}
          <Link href='https://bom.capital/' as='https://bom.capital/'>
            <a className='internalPassage'>Bom Capital</a>
          </Link>{' '}
          and
          <br />a Machine Learning Engineer at {''}
          <Link
            href='https://www.taufferconsulting.com/'
            as='https://www.taufferconsulting.com/'
          >
            <a className='internalPassage'>Tauffer Consulting</a>
          </Link>
        </p>
        <div className='contentWrapper'>
          <section>
            <ul>
              <li className='blog'>
                <Link href='/about' as='/about'>
                  <a className='internalPassage'>About</a>
                </Link>
              </li>
              <li className='blog'>
                <Link href='/projects' as='/projects'>
                  <a className='internalPassage'>Projects</a>
                </Link>
              </li>
              <li className='blog'>
                <Link href='/writings' as='/writings'>
                  <a className='internalPassage'>Writings</a>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </Main>
    </MainWrapper>
  </Motion>
)

export default Home
