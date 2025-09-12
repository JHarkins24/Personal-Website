import './navbar.css'
import React from 'react'
import {Link} from 'react-scroll'

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="about" spy={true} smooth={true} activeClass="active">
            About
          </Link>
        </li>
        <li>
          <Link to="projects" spy={true} smooth={true} activeClass="active">
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} activeClass="active">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;











//<header>
//        <nav>
//          <ul>
//            <li>
//              <Link activeClass="active" smooth spy to="about">
//                ABOUT
//              </Link>
//            </li>
//            <li>
//              <Link activeClass="active" smooth spy to="projects">
//                PROJECTS
//              </Link>
//            </li>
//            <li>
//              <Link activeClass="active" smooth spy to="blog">
//                BLOG
//              </Link>
//            </li>
//            <li>
//              <Link activeClass="active" smooth spy to="contact">
//                CONTACT ME
//              </Link>
//            </li>
//          </ul>
//            <section id="about">ABOUT</section>
//            <section id="projects">PROJECTS</section>
//            <section id="blog">BLOG</section>
//            <section id="contact">CONTACT ME</section>
//        </nav>
//   </header>