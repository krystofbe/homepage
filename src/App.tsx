import * as React from "react";
import "./styles/css/App.css";
import { Doughnut } from "react-chartjs-2";
import * as chartjs from "chart.js";

import * as Waypoint from "react-waypoint";

const data = {
  labels: [
    "Frontend-Entwicklung (React, Angular, Typescript)",
    "Backend-Entwicklung (Elixir/Phoenix, Java, Swift)",
    "Infrastruktur (Docker, Kubernetes, AWS)",
    "Mobile-Entwicklung (iOS, Swift)",
  ],
  datasets: [
    {
      data: [50, 50, 20, 20],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(61, 163, 231)",
      ],
      hoverBackgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(61, 163, 231)",
      ],
    },
  ],
};
const options: chartjs.ChartOptions = {
  legend: {
    position: "right",
    fullWidth: true,
    labels: {
      boxWidth: 50,
      padding: 30,
      fontSize: 15,
    },
  },
  tooltips: {
    enabled: false,
  },
};
type State = {
  redrawChart: boolean;
};
class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { redrawChart: false };
  }
  render() {
    const { redrawChart } = this.state;
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
                  href="https://untappd.com/w/krystofff/252582/beer"
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
          <div className="centered mbcol-md-offset-2 mb-5">
            <p>Mit diesen Technologien beschäftige ich mich derzeit.</p>
          </div>

          <div className="centered">
            <Doughnut
              height={100}
              data={data}
              options={options}
              redraw={redrawChart}
            />
          </div>
        </div>
        <Waypoint
          bottomOffset={"-200px"}
          onEnter={() => {
            this.setState({ redrawChart: true });
          }}
        />
        <div id="g">
          <div className="container centered">
            <h2>Meine Projekte.</h2>
            <div className="">
              <p>
                Hier finden Sie eine Auswahl von Artikeln, Talks und Projekten
                der letzten Zeit.
              </p>
            </div>
          </div>
          <div className="row m-5 centered">
            <div className="col-lg-4">
              <div className="d-flex align-items-center flex-column h-100">
                <div>
                  <img
                    className="rounded mb-3"
                    src="img/portfolio/pf_01.png"
                    alt="Generic placeholder image"
                    width="140"
                    height="140"
                  />
                  <h3>PHP-Magazin 6/17</h3>
                  <h4 className="text-muted">
                    Die nächste Stufe der App-Revolution
                  </h4>

                  <p className="text-justify">
                    Im Artikel erkläre ich, was progressive Web Apps sind und
                    wie man Sie mit React erstellt.
                  </p>
                </div>

                <div className="mt-auto p-2">
                  <a
                    className="btn btn-secondary"
                    href="https://entwickler.de/php-magazin/php-magazin-6-17-579810577.html"
                    role="button"
                  >
                    Mehr dazu »
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center flex-column h-100">
                <div>
                  <img
                    className="rounded mb-3"
                    src="img/portfolio/pf_02.png"
                    alt="entwickler magazin"
                    width="140"
                    height="140"
                  />
                  <h3>Entwickler Magazin Spezial: JavaScript</h3>
                  <h4 className="text-muted">PWAs mit React</h4>

                  <p className="text-justify">
                    Der Artikel beschäftigt sich intensiv mit der Erstellung von
                    Progrssive Web Apps mit React.
                  </p>
                </div>

                <div className="mt-auto p-2">
                  <a
                    className="btn btn-secondary"
                    href="https://entwickler.de/entwickler-magazin/entwickler-magazin-spezial-vol-15-javascript-579832677.html"
                    role="button"
                  >
                    Mehr dazu »
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex align-items-center flex-column h-100">
                <div>
                  <img
                    className="rounded mb-3"
                    src="img/portfolio/pf_03.png"
                    alt="wischmopp iphone app"
                    width="140"
                    height="140"
                  />
                  <h3>Wischmopp</h3>
                  <h4 className="text-muted">iOS Swift App</h4>

                  <p className="text-justify">
                    Wer hat schon die Zeit sich mühsam durch die iPhoto-App zu
                    klicken, um dort mal ordentlich aufzuräumen? Wischmopp hilft
                    dabei. Du bekommst ein zufälliges Foto angezeigt. Wische es
                    nach rechts, wenn du es behalten möchtest. Wische nach links
                    wenn es gelöscht werden soll.
                  </p>
                </div>

                <div className="mt-auto p-2">
                  <a
                    className="btn btn-secondary"
                    href="https://itunes.apple.com/de/app/wischmopp/id1075304998?mt=8"
                    role="button"
                  >
                    Mehr dazu »
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="centered">
            <h2>Meine Brötchenzahler.</h2>
            <div className="col">
              <a target="_blank" href="https://www.lab25.de">
                <img
                  src="/img/Lab25_logo_web.png"
                  className="w-10 m-4"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div id="sep">
          <div className="container centered">
            <h1 className="">
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

        <div id="f">
          <div className="container">
            <div className="row centered">
              <div className="col">
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
