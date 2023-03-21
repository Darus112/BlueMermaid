import React from "react";
import "./Footer.css";
import LogoImg from "../assets/Img/logo.png";

export default function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="container-footer">
          <div className="footer__wrapper">
            <div className="footer__col1">
              <div className="footer__logo">
                <img src={LogoImg} height={100} />
              </div>
              <p className="footer__desc">
                Proaspat si bun pentru toata lumea.
              </p>
            </div>

            <div className="footer__col2">
              <h3 className="footer__text__title">Links</h3>
              <ol className="footer__text">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/menu">Meniu</a>
                </li>
                <li>
                  <a href="/booktable">Rezervare</a>
                </li>
                <li>
                  <a href="/about">Despre</a>
                </li>
              </ol>
            </div>

            <div className="footer__col3">
              <h3 className="footer__text__title">Support</h3>
              <ol className="footer__text">
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ol>
            </div>

            <div className="footer__col4">
              <h3 className="footer__text__title">Contact</h3>
              <ol className="footer__text">
                <li>
                  <a href="#">+40748240226</a>
                </li>
                <li>
                  <a href="#">
                    Calea Bucuresti Nr 141, Bl N17, sc.1, Craiova 200640
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div id="copyright">
        <div className="container-footer">
          <p className="copyright__text">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}
