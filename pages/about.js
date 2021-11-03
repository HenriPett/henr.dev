import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Footer from "../components/footer";

const About = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="About"
        description="Full Stack developer, tech enthusiast."
        name="Henrique Pett"
      />
      <Main>
        <Link href="/">
          <a className="backButton">Back</a>
        </Link>
        <h1 className="heading2Xl">Hey,</h1>
        <div className="contentWrapper">
          <section>
            <img src="/me.jpg" />
          </section>
          <section>
            <p>
              <span className="dropCap">M</span>y name is Henrique. I'm a Brazilian Software Engineer. 
			  My passion for technology made me a self-taught programmer. 
			  At the beginning of 2020, my best friend Richard asked me what area I 
			  would like to start in the Tech field. Like many of the new developers my age, 
			  I've chosen AI. So Richard recommended me Python. After that day, 
			  I challenged myself to learn Python till the end of the year. 
			  But guess what, I was so excited that I learned in two months!
            </p>
            <p>
			After learning the main concepts about programming with Python, 
			I started to go beyond that and learn about Data Science and Back-end development.
			A few months after, I joined research at my college about Machine Learning 
			algorithms and learned a lot about statistics, data, and Neural networks. 
			The research idea was to test machine learning algorithms in embedded 
			systems and calculate their efficiency.
            </p>
            <p>
			After about half a year, I quit the research 
			to enter one of the world's most prestigious Software Engineer courses at{' '}
			<a href="https://42.fr/en/homepage/">École 42</a>. The course selection process 
			is arduous. My class started with 12.000 candidates and passed only 120 due to 
			the high demand of time and effort at the process.
            </p>
            <p>
            Nowadays, I'm working as a Full-stack developer at{' '}
			<a href="https://bom.capital/">Bom</a> and learning a 
			lot about the infrastructure of a tech company. Our 
			stack consists of React, Elixir, Python, and AWS services.
            </p>
			<p>
			My future goals consist of finishing my graduation by 
			the middle of 2022 and specializing in a 42 campus 
			somewhere in the world. Here you can see all of the campuses (
			<a href="https://42.fr/en/network-42/">42 Network</a>). Besides, learn all 
			that I can at work and in my projects.
			</p>
          </section>
        </div>
      </Main>
    </MainWrapper>
    <Footer />
  </Motion>
);

export default About;
