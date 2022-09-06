import React from "react";
import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Card from "../components/card";
import Footer from "../components/footer";

export default function Writings() {
  return (
    <Motion>
      <MainWrapper>
        <Metadata
          title="Writings"
          description="Where I try to think and explain about software and technology."
          name="Henrique Pett"
        />
        <Main>
          <Link href="/">
            <a className="backButton">Back</a>
          </Link>
          <h1 className="heading2Xl">WRITINGS</h1>
          <p>
            This is the space where I try to explain about software, technology
            and economy. I thing that's the best way to learn.
          </p>
          <div className="contentWrapper">
            <Card
              link={`https://henriquepett.medium.com/how-to-learn-about-the-market-with-the-three-greatest-economists-in-the-world-and-their-theories-53866083500f`}
              className="mainCard"
              title={
                "How to learn about the market with the three greatest economists in the world and their theories."
              }
              description={
                "In this article, I’ll be discussing BBC’s documentary “Masters Of Money”, which examines how three extraordinary thinkers, John M. Keynes, Friedrich Hayek, and Karl Marx, helped shape the 20th century. In this context, I’ll add some of my experiences and examples in the financial market to make their ideas more understandable."
              }
              type={"Blog"}
              target=""
            />
            <Card
              link={`https://henriquepett.medium.com/why-you-should-use-data-science-ccf1eac76d76`}
              className="mainCard"
              title={"Why you should use Data Science?"}
              description={
                "This article will tell you the price and the benefits of using Data in your life and your company. Let me previously say, It’s worth it! I will try to show the company and the data scientist’s view, also attach relevant examples."
              }
              type={"Blog"}
              target=""
            />
            <Card
              link={`https://henriquepett.medium.com/why-its-essential-to-make-decisions-with-multiple-individuals-5a5b43e88496`}
              className="mainCard"
              title={"Why It's essential to make decisions with multiple individuals?"}
              description={
                "A prediction, when taken together, has a much higher accuracy rate compared to a prediction taken by a single individual!"
              }
              type={"Blog"}
              target=""
            />
          </div>
        </Main>
      </MainWrapper>
      <Footer />
    </Motion>
  );
}
