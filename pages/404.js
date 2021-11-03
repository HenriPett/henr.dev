import React from "react";

import Motion from "../components/motion";
import Metadata from "../components/metadata";
import Link from "next/link";
import MainWrapper from "../components/mainWrapper";
import Main from "../components/innerWrapper";
import Image from 'next/image'

const Error = () => (
  <Motion>
    <MainWrapper>
      <Metadata title="404" />
      <Main>
        <Link href="/projects">
          <a className="backButton">Back</a>
        </Link>

        <div className="notReadyWrapper">
          <Image src='/404error.png' width='800px' height='600'/>
          <p>
            Sorry, this page does not exists, but you can check my{" "}
            <Link href="/projects" as="/projects">
              <a className="internalPassage">Projects</a>
            </Link>{" "}
          </p>
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default Error;
