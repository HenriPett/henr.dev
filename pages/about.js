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
              <span className='dropCap'>A</span>s a Product Manager at Loopt, I bring a unique blend of technical understanding and market-driven focus to lead product strategies that resonate with customer needs and industry trends. My transition from a Machine Learning Engineer to a Product Manager reflects my ability to translate complex technical concepts into accessible and impactful user experiences.
            </p>
            <p>
              My journey began in the realm of AI/ML, where I acquired a fundamental grasp of technology and data science. This experience, though technical in nature, laid the groundwork for my deep appreciation of user-centric product development. As I transitioned through roles, my focus shifted from the intricacies of algorithm performance to the broader vision of how technology can solve real-world problems, particularly in the financial and logistics sectors.
            </p>
            <p>
              In my role as a Product Manager, my mission is to harmonize technical potential with market demands. Leveraging my background in AI/ML, I focus on developing products that are not only technologically sound but also strategically aligned with business goals and user expectations. My approach is characterized by a customer-first mindset, ensuring that every product decision is informed by user needs and market insights.
            </p>
            <p>
              Fluent in English and with a basic knowledge of French, I continually seek to enhance my communication skills, recognizing their vital role in effective product management and team leadership.
            </p>
          </section>
        </div>
      </Main>
    </MainWrapper>
    <Footer />
  </Motion>
)

export default About
