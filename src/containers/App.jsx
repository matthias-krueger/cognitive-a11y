import React, { useState } from 'react';
import { CogaText, CogaMotion } from '../plugins/index';
import sl from '../data/simpleLanguage';
import motion from '../data/particles';
import para from '../data/parallax';
import Header from '../components/header';
import Footer from '../components/footer';
import imageBrain from '../assets/images/brain.svg';
import imageArrow from '../assets/images/arrow.svg';

function App() {
  const [toggleState, setToggleState] = useState(false);

  // Replace class 'none-coga-mode' with 'avtive-coga-mode' in the html tag on mode change.
  toggleState
    ? document.documentElement.classList.replace(
        'none-coga-mode',
        'active-coga-mode'
      )
    : document.documentElement.classList.replace(
        'active-coga-mode',
        'none-coga-mode'
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
            <h1>
              Kognitive Web-Barrierefreiheit
              <br />
              (cognitive-a11y)
            </h1>
          </div>
          <ModeMotion content={motion['particles']}></ModeMotion>
        </section>
        <section className="sec-intro plain-sec" name="link-intro">
          <div className="wrapper">
            <h2>a11y = Accessibility</h2>
            <p className="definition">
              a11y ist die Abkürzung für den englischen Begriff accessibility,
              welcher mit Barrierefreiheit übersetzt wird.
            </p>
            <ModeText
              content={sl['introduction']}
              useFont
              useDefaultLink
            ></ModeText>
          </div>
        </section>
        <section className="sec-para effect-sec" name="link-para">
          <ModeMotion content={para['parallax']}></ModeMotion>
        </section>
        <section className="sec-def plain-sec" name="link-def">
          <div className="wrapper">
            <h2>Kognitive Web-Barrierefreiheit</h2>
            <p className="definition">
              Kognitive kommt von Kognition, der Fähigkeit des Gehirns,
              Informationen zu verarbeiten.
            </p>
            <div className="brain-box">
              <img
                src={imageBrain}
                className="brain"
                alt="brain"
                width="100%"
              />
              <ModeText
                content={sl['definition']}
                useFont
                useDefaultLink
              ></ModeText>
            </div>
          </div>
        </section>
        <section className="sec-image effect-sec" name="link-image">
          <div className="back-color" />
          <div className="wrapper">
            <h2>Konzept</h2>
            <p>
              Als Lösung könnte eine Webseite eine alternative Ansicht anbieten.
              Diese richtet sich nach den bekannten Maßnahmen für kognitive
              Barrierefreiheit. Leider können damit nicht alle Bedürfnisse
              erfüllt werden, aber der Zugang ist dennoch vereinfacht.
              <br />
              Dabei wird der Inhalt der Webseite ohne ablenkende Elemente wie
              beispielsweise Animationen dargestellt. Das Problem der
              überladenen Menüs und unübersichtlichen Navigationsstrukturen,
              könnte Teil der alternativen Ansicht werden wenn sich diese
              bewehrt.
            </p>
          </div>
        </section>
        <section className="sec-modus plain-sec" name="link-modus">
          <div className="wrapper">
            <h2>Ansichtswechsel</h2>
            <div className="arrow-box">
              <ModeText content={sl['modus']}></ModeText>
              <img
                src={imageArrow}
                alt="arrow"
                width="100%"
                className="image-arrow"
              />
            </div>
            <p>
              Das Konzept wurde als Bestandteil einer Bachelorarbeit im Bereich
              Mensch-Computer-Interaktion erarbeitet und umgesetzt.
            </p>
          </div>
        </section>
      </main>
      <Footer toggleState={toggleState} setToggleState={setToggleState} />
    </React.Fragment>
  );
}

export default App;
