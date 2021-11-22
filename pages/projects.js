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

      <Main display>
        <Link href="/">
          <a className="backButton">Back</a>
        </Link>
        <h1 className="heading2Xl">Projects</h1>
        <section>
          <img src="/carbon.png" />
        </section>
        <p>
          Welcome to my projects page, where I try to explain everything that I
          do. Feel free to browse through the projects and experiment with them.
        </p>

        <div className="contentWrapper">
          <Card
            link="https://github.com/HenriPett/MNIST-project-with-save"
            className="external mainCard"
            title="MNIST Project"
            description="MNIST project is a model with hand-written letters recognition."
            type="Repository"
            target="_blank"
          />

          <Card
            link="https://github.com/HenriPett/Trafficsignreco"
            className="external mainCard"
            title="Traffic Sign Recognition"
            description="Traffic Sign Recognition with convolutional neural networks. They are trained with images of traffic signs."
            type="Repository"
            target="_blank"
          />

          <Card
            link="https://github.com/HenriPett/SVMmodel"
            className="external mainCard"
            title="Explained SVM Model"
            description="SVM model explained with steps in Google Colab."
            type="Repository"
            target="_blank"
          />

          <Card
            link="https://github.com/HenriPett/CNNmodel"
            className="external mainCard"
            title="Explained CNN Model"
            description="CNN model explained with steps in Google Colab."
            type="Repository"
            target="_blank"
          />

          <Card
            link="https://github.com/HenriPett/Linkedin_Crawler"
            className="external mainCard"
            title="LinkedIn Crawler"
            description="LinkedIn Crawler to extract data from LinkedIn. With Python/Selenium."
            type="Repository"
            target="_blank"
          />

          <Card
            link="https://github.com/HenriPett/RemoteSensing_Study"
            className="external mainCard"
            title="Remote Sensing Study"
            description="Remote Sensing Study for college research. I have made it at Google Colab."
            type="Repository"
            target="_blank"
          />

          <Card
            link="https://github.com/HenriPett/MachineLearning_Study"
            className="external mainCard"
            title="Machine Learning Study"
            description="Machine Learning Study for college research. I have made it at Google Colab."
            type="Repository"
            target="_blank"
          />

          <Card
            link="https://github.com/HenriPett/GolangBot"
            className="external mainCard"
            title="Discord Go Bot"
            description="Simple Bot made at Codecon 2021 event, Golang Workshop."
            type="Repository"
            target="_blank"
          />

          <Card
            link="https://github.com/HenriPett/the-traveller-bot"
            className="external mainCard"
            title="The Traveller Discord Bot"
            description="Discord Bot was made to send messages at 7:30 AM/PM. Created with Serverless, cron, Lambda AWS."
            type="Repository"
            target="_blank"
          />
        </div>
      </Main>
    </MainWrapper>
  </Motion>
);

export default Playground;
