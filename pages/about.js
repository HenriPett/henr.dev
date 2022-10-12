import React from 'react'
import Motion from '../components/motion'
import Metadata from '../components/metadata'
import Link from 'next/link'
import MainWrapper from '../components/mainWrapper'
import Main from '../components/innerWrapper'
import Footer from '../components/footer'

const About = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title='About'
        description='Full Stack developer, tech enthusiast.'
        name='Henrique Pett'
      />
      <Main>
        <Link href='/'>
          <a className='backButton'>Back</a>
        </Link>
        <h1 className='heading2Xl'>Hey,</h1>
        <div className='contentWrapper'>
          <section>
            <img src='/me2.jpg' style={{ 'border-radius': '20px' }} />
          </section>
          <section>
            <p>
              <span className='dropCap'>M</span>y name is Henrique. I'm a
              Brazilian Machine Learning Engineer. My passion for technology made me a
              self-taught programmer! I started my journey by studying basic
              programming logic in Python.
            </p>
            <p>
              After learning the main concepts of programming with Python, I
              started to go beyond that and learn about Data Science and
              Back-end development. A few months after, I joined research at my
              college about Machine Learning algorithms and learned a lot about
              statistics, data, and Neural networks. The research idea was to
              test machine learning algorithms in embedded systems and calculate
              their efficiency.
            </p>
            <p>
              After about half a year, I quit the research to enter one of the
              world's most prestigious Software Engineer courses at{' '}
              <a href='https://42.fr/en/homepage/'>École 42</a>. The course
              selection process is arduous. My class started with 12.000
              candidates and passed only 120 due to the high demand of time and
              effort in the process.
            </p>
            <p>
              Nowadays, I'm working as a Machine Learning Engineer at{' '}
              <a href='https://www.loopt.com.br/'>Loopt</a>
              .
            </p>
            <p>
              My future goals consist of being a requested Data
              Scientist/Machine learning Engineer and a professional problem
              solver. Also, be a part of an All-Star Machine Learning team.
            </p>
          </section>
        </div>
      </Main>
    </MainWrapper>
    <Footer />
  </Motion>
)

export default About
