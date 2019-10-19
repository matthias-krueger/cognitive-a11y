import React, { useState } from 'react';
// import 'bulma/css/bulma.css';
import { CogaText, CogaMotion } from '../plugins/index';
import sl from '../data/simpleLanguage';
import motion from '../data/particles';
import para from '../data/parallax';
import Header from '../components/header';
import Footer from '../components/footer';

function App() {
  // just put that in the root container; App
  const [toggleState, setToggleState] = useState(false);

  // Replace class 'default-mode' with 'avtive-coga-mode' on mode change.
  toggleState
    ? document.documentElement.classList.replace(
        'default-mode',
        'active-coga-mode'
      )
    : document.documentElement.classList.replace(
        'active-coga-mode',
        'default-mode'
      );

  const ModeText = props => (
    <CogaText isAccessibility={toggleState} {...props}></CogaText>
  );
  const ModeMotion = props => (
    <CogaMotion isAccessibility={toggleState} {...props}></CogaMotion>
  );

  return (
    <React.Fragment>
      <Header
        toggleState={toggleState}
        setToggleState={setToggleState}
      ></Header>
      <main className="site-main">
        <section className="sec-claim" name="link-claim">
          <div className="claim">
            <h2>
              Kognitive Web-Barrierefreiheit
              <br />
              (cognitive-a11y)
            </h2>
          </div>
          <ModeMotion content={motion['particles']}></ModeMotion>
        </section>
        <section className="sec-intro plain-sec" name="link-intro">
          <div className="wrapper">
            <h3>Web-Barrierefreiheit</h3>
            <ModeText content={sl['introduction']} useFont></ModeText>
          </div>
        </section>
        <section className="sec-para effect-sec" name="link-para">
          <ModeMotion content={para['parallax']}></ModeMotion>
        </section>
        <section className="sec-def plain-sec" name="link-def">
          <div className="wrapper">
            <h3>Kognitive Beeinrächtigung</h3>
            <ModeText content={sl['definition']} useFont></ModeText>
          </div>
        </section>
        <section className="sec-image effect-sec" name="link-image">
          <div className="back-color" />
          <div className="wrapper">
            <h3>Visuelle Effekte</h3>
            <p>Duotone-Effekt</p>
          </div>
        </section>
      </main>
      <Footer toggleState={toggleState} setToggleState={setToggleState} />
    </React.Fragment>
  );
}

export default App;

/* <video controls autoplay>
            <source
              src="https://www.youtube-nocookie.com/embed/EsocEfMtDdo"
              // type="video/mp4"
            />
          </video> */

/* <iframe
              title="ADHS"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/EsocEfMtDdo"
              // src="https://www.youtube-nocookie.com/embed/EsocEfMtDdo?autoplay=1"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */
