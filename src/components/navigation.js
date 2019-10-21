import React from 'react';
import { Link } from 'react-scroll';

class Navigation extends React.Component {
  render() {
    const offset = -68;
    return (
      <nav>
        <ul>
          <li>
            <Link
              activeClass="link-active"
              to="link-claim"
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
              title="Start"
            >
              Start
            </Link>
          </li>
          <li className="none-display">
            <Link
              activeClass="link-active"
              to="link-intro"
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
              title="a11y"
            >
              a11y
            </Link>
          </li>
          <li className="none-display">
            <Link
              activeClass="link-active"
              to="link-para"
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
              title="Barrieren"
            >
              Barrieren
            </Link>
          </li>
          <li className="none-display">
            <Link
              activeClass="link-active"
              to="link-def"
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
              title="Kognitiv"
            >
              Kognitiv
            </Link>
          </li>
          <li className="none-display">
            <Link
              activeClass="link-active"
              to="link-image"
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
              title="Konzept"
            >
              Konzept
            </Link>
          </li>
          <li>
            <Link
              activeClass="link-active"
              to="link-modus"
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
              title="Modus"
            >
              Modus
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
