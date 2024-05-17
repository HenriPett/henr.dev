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
        description='Product Manager'
        name='Henrique Pett'
      />
      <Main>
        <h1 className='heading2Xl'>Hey, I'm Henrique! </h1>
        <p>
          I'm a Product Manager working at {''}
          <Link href='https://www.loopt.com.br/' as='https://www.loopt.com.br/'>
            <a className='internalPassage'>Loopt</a>
          </Link>
         
        </p>
        <div className='contentWrapper'>
          <section>
            <ul>
              <li className='blog'>
                <Link href='/about' as='/about'>
                  <a className='internalPassage'>About</a>
                </Link>
              <li className='blog'>
                <Link href='/writings' as='/writings'>
                  <a className='internalPassage'>Writings</a>
                </Link>
              </li>
              </li>
              <li className='blog'>
                <Link href='/projects' as='/projects'>
                  <a className='internalPassage'>Software Projects</a>
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
