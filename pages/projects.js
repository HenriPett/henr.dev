import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Card from "../components/card";
import Image from "next/image";

const Playground = () => (
  <Motion>
    <MainWrapper>
      <Metadata
        title="Projects"
        description="My projects portfolio."
        name="Henrique Pett"
      />

      <Main>
        <Link href="/">
          <a className="backButton">Back</a>
        </Link>
        <h1 className="heading2Xl">Projects</h1>
		<Image src="/carbon.svg" width="1110px" height="768"/>
        <p>
          Welcome to my projects page, where I try to explain 
		  everything that I do. Feel free to browse through
          the projects and experiment with them.
        </p>

        <div className="contentWrapper">
          <Card
            link="https://github.com/HenriPett/MNIST-project-with-save"
            className="external mainCard"
            title="MNIST project"
            description="MNIST project is a model with hand-written letters recognition."
            type="Repository"
            target="_blank"
          />

		<Card
            link="https://github.com/HenriPett/Trafficsignreco"
            className="external mainCard"
            title="Traffic sign recognition."
            description="MNIST project is a model with hand-written letters recognition."
            type="Repository"
            target="_blank"
          />

        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default Playground;
