import React from 'react';
import { Parallax } from 'react-parallax';
import image from '../assets/images/fence.jpg';

const contentHeading = <h2>Barrieren</h2>;
const contentParagraph = (
  <p>
    Neuentwicklungen im Web, zum Beispiel dynamische Inhalte oder interaktivere
    Schnittstellen durch Technologien wie JavaScript und Ajax, haben neue
    Barrieren hervorgebracht. Für Menschen mit Beeinträchtigungen der Motorik
    und der Sinne konnte mit dem Einführen neuer Web-Standards viel bewirkt
    werden.
    <br />
    Um auf die Bedürfnisse von Menschen mit kognitiven Beeinträchtigungen
    reagieren zu können, ist es unumgänglich, eine assistierende Technik
    anzubieten.
  </p>
);

export default {
  parallax: {
    motion: (
      <Parallax
        bgImage={require('../assets/images/fence.jpg')}
        bgImageAlt="background"
        strength={900}
      >
        <div className="parallax-height">
          <div className="wrapper">
            {contentHeading}
            {contentParagraph}
          </div>
        </div>
      </Parallax>
    ),
    static: (
      <React.Fragment>
        <div className="wrapper">
          {contentHeading}
          <img src={image} alt="office" width="100%" />
          {contentParagraph}
        </div>
      </React.Fragment>
    )
  }
};
