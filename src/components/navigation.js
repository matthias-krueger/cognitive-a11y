import React from 'react';
import { Link } from 'react-scroll';

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link
              activeClass="link-active"
              to="link-claim"
              spy={true}
              smooth={true}
              offset={-69}
              duration={500}
            >
              Start
            </Link>
          </li>
          <li>
            <Link
              activeClass="link-active"
              to="link-intro"
              spy={true}
              smooth={true}
              offset={-69}
              duration={500}
            >
              Intro
            </Link>
          </li>
          <li>
            <Link
              activeClass="link-active"
              to="link-para"
              spy={true}
              smooth={true}
              offset={-69}
              duration={500}
            >
              Parallax
            </Link>
          </li>
          <li>
            <Link
              activeClass="link-active"
              to="link-def"
              spy={true}
              smooth={true}
              offset={-69}
              duration={500}
            >
              Definition
            </Link>
          </li>
          <li>
            <Link
              activeClass="link-active"
              to="link-image"
              spy={true}
              smooth={true}
              offset={-69}
              duration={500}
            >
              Duoton
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
