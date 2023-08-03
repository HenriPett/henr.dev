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
              <span className='dropCap'>A</span>s a Machine Learning Engineer at Loopt, I leverage the transformative power
              of Artificial Intelligence (AI), data science, and advanced statistical techniques
              to create high-impact solutions for different companies to overcome their most 
              challenging logistic problems. I have developed an end-to-end solution that saves
              thousands of dollars annually by avoiding inappropriate movements and predicting future outcomes.
            </p>
            <p>
              My career began as an AI/ML researcher, focusing intensively on algorithm performance and 
              optimization across various embedded systems. Transitioning to a developer role, I garnered
              invaluable insights into technology product development while refining my Python, TensorFlow,
              PyTorch, Scikit-Learn, and SQL skills. This passion for AI/ML subsequently guided me back to the 
              data domain, where I played a pivotal role in founding a data department at my company.
            </p>
            <p>
              With a solid track record in the financial and logistics sectors, I specialize in wielding
              AI/ML tools, Deep Learning frameworks, and sophisticated statistical methods to drive innovation
              and achieve sustainable results. My comprehensive technical skill set encompasses proficiency in 
              Python programming, experience with Deep Learning/Machine Learning frameworks, expertise in SQL, 
              and familiarity with AWS Cloud services. My portfolio spans projects in predictive modeling, data analysis, production
              model deployment, and advanced statistical modeling.
            </p>
            <p>
              Fluent in English and with basic knowledge of French, I consistently endeavor to expand both my linguistic and technical abilities.
            </p>
            <p>
              Recently, I have ventured deeper into the exploration of Reinforcement Learning, a crucial frontier in Artificial Intelligence. 
              Specifically, I've concentrated on the use of actor-critic methods in my latest project. Actor-critic methods, which 
              constitute a vital component of modern Reinforcement Learning algorithms, provide an optimal balance between exploration and
              exploitation in complex decision-making processes. This deep dive into adaptive algorithms has not only expanded my
              expertise but also provided a fresh impetus to my commitment towards driving innovative solutions in AI.
            </p> 
          </section>
        </div>
      </Main>
    </MainWrapper>
    <Footer />
  </Motion>
)

export default About
