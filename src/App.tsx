import * as React from "react";
import "./styles/css/App.css";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Red", "Green", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div id="h">
          <div className="logo" />
          <div className="container centered">
            <div className="row">
              <div className="col">
                <h1>
                  Hallo, ich bin <b>Krystof Beuerman</b>.<br />Ich entwickle
                  Software und braue Bier.
                </h1>
              </div>
            </div>

            <div className="row mt">
              <div className="col-sm-4">
                <i className="ion-ios-bookmarks-outline" />
                <h3>Autor</h3>
              </div>

              <div className="col-sm-4">
                <i className="ion-ios-browsers-outline" />
                <h3>Entwickler</h3>
              </div>

              <div className="col-sm-4">
                <i className="ion-ios-mic-outline" />
                <h3>Speaker</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="container ptb">
          <h2 className="centered mb">Begeisterungsfähig und neugierig.</h2>
          <div className="row">
            <div className="col-md-6">
              <p>
                Als IT-Architekt und Software Engineer habe ich jahrelange
                Erfahrung im Gepäck - im Enterprise- als auch im Startup-Umfeld.
                Meine fachlichen Spezialgebiete sind derzeit Mobile und Web
                Development. Für Zeitschriften wie das Entwickler Magazin
                schreibe ich Tech-Artikel und stehe bei regionalen Meetups auf
                der Bühne.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Von Hunger angetrieben bin ich stets auf der Suche nach
                interessanten Projekten und ambitionierten Menschen. Schreiben
                Sie mir eine <a href="mailto:krystof@gmx.biz">E-Mail</a> oder
                bei{" "}
                <a
                  href="https://www.xing.com/profile/Krystof_Beuermann"
                  target="_blank"
                >
                  Xing{" "}
                </a>!<br />Selbst, wenn es um das{" "}
                <a
                  target="_blank "
                  href="https://untappd.com/w/krystofff/252582 "
                >
                  Bierbrauen{" "}
                </a>
                geht.
              </p>
            </div>
          </div>
        </div>
        <div className="container pb">
          <h2 className="centered">Mein Tech-Skills Radar.</h2>
          <div className="centered mbcol-md-offset-2">
            <p>Mit diesen Technologien beschäftige ich mich derzeit.</p>
          </div>
          <div className="centered">
            <Doughnut data={data} />
          </div>
        </div>

        <div id="g">
          <div className="container">
            <div className="row centered">
              <h2>Meine Projekte.</h2>
              <div className="col-md-8 col-md-offset-2">
                <p>
                  Hier finden Sie einen Überblick über Artikel, Talks und
                  Projekte der letzten Zeit.
                </p>
              </div>
            </div>
          </div>

          <div className="portfolio-centered mt mr-3">
            <div className="recentitems portfolio">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-0">
                  <div className="portfolio-item graphic-design">
                    <div className="he-wrap tpl6">
                      <img
                        src="assets/img/portfolio/pf_01.png"
                        srcSet="assets/img/portfolio/hr_pf_01.png 2x"
                        className="img-responsive w-100 h-100"
                        alt=""
                      />
                      <div className="he-view">
                        <div className="bg a0" data-animate="fadeIn">
                          <h3 className="a1" data-animate="fadeInDown">
                            "Swift − the next big thing?"
                          </h3>
                          <h4 className="a1" data-animate="fadeInDown">
                            Artikel in Java Aktuell<br />Ausgabe 2/2017
                          </h4>
                          <a
                            target="_blank"
                            href="assets/pdf/Krystof-Beuermann-Swift-the-next-big-thing.pdf"
                            className="dmbutton a2"
                            data-animate="fadeInUp"
                          >
                            <i className="ion-link" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-0">
                  <div className="portfolio-item graphic-design">
                    <div className="he-wrap tpl6">
                      <img
                        src="assets/img/portfolio/pf_02.png"
                        srcSet="assets/img/portfolio/hr_pf_02.png 2x"
                        className="img-responsive w-100 h-100"
                        alt=""
                      />
                      <div className="he-view">
                        <div className="bg a0" data-animate="fadeIn">
                          <h3 className="a1" data-animate="fadeInDown">
                            "Full-Stack Swift"
                          </h3>
                          <h4 className="a1" data-animate="fadeInDown">
                            Leitartikel im Entwickler Magazin<br />Ausgabe
                            4/2017
                          </h4>
                          <a
                            target="_blank"
                            href="https://entwickler.de/entwickler-magazin/entwickler-magazin-4-17-579801944.html"
                            className="dmbutton a2"
                            data-animate="fadeInUp"
                          >
                            <i className="ion-link" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-0">
                  <div className="portfolio-item graphic-design">
                    <div className="he-wrap tpl6">
                      <img
                        src="assets/img/portfolio/pf_03.png"
                        srcSet="assets/img/portfolio/hr_pf_03.png 2x"
                        className="img-responsive w-100 h-100"
                        alt=""
                      />
                      <div className="he-view">
                        <div className="bg a0" data-animate="fadeIn">
                          <h3 className="a1" data-animate="fadeInDown">
                            iOS App Wischmopp
                          </h3>
                          <a
                            target="_blank"
                            href="https://itunes.apple.com/de/app/wischmopp/id1075304998?mt=8"
                            className="dmbutton a2"
                            data-animate="fadeInUp"
                          >
                            <i className="ion-link" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-0">
                  <div className="portfolio-item graphic-design">
                    <div className="he-wrap tpl6">
                      <img
                        src="assets/img/portfolio/pf_04.png"
                        srcSet="assets/img/portfolio/hr_pf_04.png 2x"
                        className="img-responsive w-100 h-100"
                        alt=""
                      />
                      <div className="he-view">
                        <div className="bg a0" data-animate="fadeIn">
                          <h3 className="a1" data-animate="fadeInDown">
                            macOS App IkonFabrikant
                          </h3>
                          <a
                            target="_blank"
                            href="https://itunes.apple.com/de/app/ikonfabrikant/id1071693767?mt=12"
                            className="dmbutton a2"
                            data-animate="fadeInUp"
                          >
                            <i className="ion-link" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt">
          <div className="row clients centered">
            <h2>Meine Brötchenzahler.</h2>
            <div className="col-sm-2 col-sm-offset-5">
              <a target="_blank" href="https://www.lab25.de">
                <img src="assets/img/client1.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div id="sep">
          <div className="container">
            <div className="row centered">
              <div className="col-md-8 col-md-offset-2">
                <h1 className="force-select-all">
                  <span className="">Ich wohne in Münster,</span>
                </h1>
                <h3 className="mb">
                  <span className="">der lebenswertesten Stadt der Welt.</span>
                </h3>
                <a
                  href="mailto:krystof@gmx.biz"
                  className="btn btn-conf btn-primary"
                >
                  Schreiben Sie mir!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="f">
          <div className="container">
            <div className="row centered">
              <div className="col-md-8 col-md-offset-2">
                <b>Impressum</b>
                <br /> Angaben gemäß § 5 TMG<br /> Krystof Beuermann,
                Warendorfer Str. 91,48145 Münster Vertreten durch: Krystof
                Beuermann Kontakt: Telefon: 0151- 27529426 E-Mail:
                krystof@gmx.biz<br /> Verantwortlich für den Inhalt nach § 55
                Abs. 2 RStV: Krystof Beuermann, Warendorfer Str. 91, 48145
                Münster<br /> Foto: Wladyslaw Sojka (www.sojka.photo)<br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
