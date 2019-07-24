import * as React from "react";
import { Doughnut } from "react-chartjs-2";
import * as chartjs from "chart.js";

import { Waypoint } from "react-waypoint";
import WeatherModal from "./WeatherModal";
const data = {
  datasets: [
    {
      data: [50, 50, 30, 20],
      backgroundColor: ["#00a8b5", "#774898", "#de4383", "#f3ae4b"],
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
interface State {
  redrawChart: boolean;
  weatherModalIsOpen: boolean;
}
class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { redrawChart: false, weatherModalIsOpen: false };
  }

  componentDidMount() {
    if (window.location.pathname.includes("/wetter")) {
      this.setState({ weatherModalIsOpen: true });
    }
  }
  render() {
    const { redrawChart, weatherModalIsOpen } = this.state;
    return (
      <div className="App">
        <WeatherModal modalIsOpen={weatherModalIsOpen} />
        <div id="h">
          <div className="logo" />
          <div className="container centered">
            <div className="row">
              <div className="col">
                <h1>
                  Hallo, ich bin <b>Krystof Beuerman</b>.<br />
                  Ich entwickle digitale Produkte und braue Bier.
                </h1>
              </div>
            </div>

            <div className="row mt">
              <div className="col-sm-4">
                <i className="icon ion-ios-bookmarks" />
                <h3>Autor</h3>
              </div>

              <div className="col-sm-4">
                <i className="icon ion-ios-apps" />
                <h3>Entwickler</h3>
              </div>

              <div className="col-sm-4 mb-4">
                <i className="ion-ios-mic" />
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
                Als IT-Architekt und Software Engineer bringe ich zehn Jahre
                Erfahrung mit - im Enterprise- als auch im Startup-Umfeld. Meine
                fachlichen Spezialgebiete sind Business Design, sowie Mobile und
                Web Development. In Zeitschriften wie dem Entwickler Magazin
                veröffentliche ich Artikel über technologische Trends. Darüber
                hinaus bin ich Speaker auf renommierten Konferenzen.
              </p>
            </div>
            <div className="col-md-6 d-flex justify-content-between flex-column">
              <p>
                Benötigen Sie einen erfahrenen und verlässlichen{" "}
                <strong>Business Designer</strong> oder{" "}
                <strong>Software Engineer</strong> für Ihr nächstes Projekt?
              </p>
              <p>
                <a
                  className="btn btn-primary"
                  href="mailto:krystof@gmx.biz"
                  role="button"
                >
                  Schreiben Sie mir!
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="container pb">
          <div className="card">
            <div className="card-header">Upcoming Talks</div>
            <div className="card-body">
              <div>
                <strong>Mittwoch, 26. Juni</strong>
              </div>
              <h5 className="mb-0">Status quo WebAssembly mit TypeScript</h5>
              <p className="text-muted my-0 ml-1">
                <small>
                  <i className="ion-ios-pin ml-1 mr-2" />
                  EnterJS, Darmstadt
                </small>
              </p>
              <p className="card-text my-3">
                TypeScript eignet sich aufgrund seiner Typisierung gut, um in
                WebAssembly kompiliert zu werden. Dadurch können Unternehmen
                bestehendes JavaScript-Know-how ihrer Mitarbeiterinnen und
                Mitarbeiter nutzen, um die Möglichkeiten von WebAssembly
                auszureizen. David und Krystof zeigen in ihrem Vortrag die
                Verwendung von WebAssembly mit TypeScript anhand von
                Codebeispielen.
              </p>
              <a
                href="https://www.enterjs.de/single?id=8214&status-quo-webassembly-mit-typescript"
                className="btn btn-primary"
                rel="noopener noreferrer"
              >
                Ansehen
              </a>
            </div>
          </div>
        </div>

        <div className="container pb">
          <h2 className="centered">Mein Tech-Skills Radar.</h2>
          <div className="centered mbcol-md-offset-2 mb-5">
            <p>Mit diesen Technologien beschäftige ich mich derzeit.</p>
          </div>

          <div className="row">
            <div className="col mt-4">
              <Doughnut
                height={100}
                data={data}
                options={options}
                redraw={redrawChart}
              />
            </div>
            <div className="col mt-4">
              <p className="">
                <span
                  className="mr-2"
                  style={{
                    backgroundColor: "#00a8b5",
                    width: 30,
                    height: 10,
                    display: "inline-block",
                  }}
                />
                Frontend-Entwicklung (React, Angular, Typescript)
              </p>
              <p className="">
                <span
                  className="mr-2"
                  style={{
                    backgroundColor: "#774898",
                    width: 30,
                    height: 10,
                    display: "inline-block",
                  }}
                />
                Backend-Entwicklung (Elixir/Phoenix, Java, Swift)
              </p>
              <p className="">
                <span
                  className="mr-2"
                  style={{
                    backgroundColor: "#de4383",
                    width: 30,
                    height: 10,

                    display: "inline-block",
                  }}
                />
                Mobile-Entwicklung (iOS, Android, React Native)
              </p>
              <p className="">
                <span
                  className="mr-2"
                  style={{
                    backgroundColor: "#f3ae4b",
                    width: 30,
                    height: 10,
                    display: "inline-block",
                  }}
                />
                Infrastruktur (Docker, Kubernetes, AWS)
              </p>
            </div>
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
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="d-flex align-items-center flex-column h-100">
                <div>
                  <img
                    className="rounded mb-3"
                    src="img/portfolio/pf_05.png"
                    alt="Generic placeholder image"
                    width="140"
                    height="140"
                  />
                  <h3>JavaScript Kompendium Bd. 10</h3>
                  <h4 className="text-muted">
                    React, Redux und globales State Management
                  </h4>

                  <p className="text-justify">
                    JavaScript stellt als oft missverstandene Sprache selbst
                    hartgesottene IT-Profis zuweilen vor Probleme. Trotzdem
                    setzen immer mehr Entwickler, Dienstleister und Consultants
                    auf JavaScript. Warum? Weil es unglaublich mächtig ist. Im
                    vierteljährlich erscheinenden JavaScript Kompendium verrate
                    ich die besten Tricks zu React und Redux.
                  </p>
                </div>

                <div className="mt-auto p-2">
                  <a
                    className="btn btn-secondary"
                    href="https://www.amazon.de/JavaScript-Kompendium-Bd-Krystof-Beuermann-ebook/dp/B07MYYJX39/ref=sr_1_1?ie=UTF8&qid=1553465104&sr=8-1"
                    role="button"
                    rel="noopener noreferrer"
                  >
                    Mehr dazu »
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="d-flex align-items-center flex-column h-100">
                <div>
                  <img
                    className="rounded mb-3"
                    src="img/portfolio/pf_06.png"
                    alt="entwickler magazin"
                    width="140"
                    height="140"
                  />
                  <h3>PHP-Magazin 2/19</h3>
                  <h4 className="text-muted">
                    Apps entwickeln mit React Native, Flutter und Co
                  </h4>

                  <p className="text-justify">
                    Die Gesamtzahl der weltweiten App-Downloads wird 2018 die
                    Marke von 200 Milliarden überschreiten. Apps sind aus dem
                    Alltag nicht mehr wegzudenken und die Werbung verspricht:
                    „Es gibt für fast alles eine App.“ Wer mit überschaubarem
                    Zeitaufwand eine Android und iOS App auf den Markt bringen
                    möchte, wird früher oder später auf Cross-Plattform
                    App-Entwicklung stoßen.
                  </p>
                </div>

                <div className="mt-auto p-2">
                  <a
                    className="btn btn-secondary"
                    href="https://entwickler.de/online/tools/cross-plattform-apps-579874358.html"
                    role="button"
                    rel="noopener noreferrer"
                  >
                    Mehr dazu »
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="d-flex align-items-center flex-column h-100">
                <div>
                  <img
                    className="rounded mb-3"
                    src="img/portfolio/pf_07.png"
                    alt="magazine"
                    width="140"
                    height="140"
                  />
                  <h3>PHP-Magazin 6/18</h3>
                  <h4 className="text-muted">
                    Globales State Management mit React, Redux und MobX
                  </h4>

                  <p className="text-justify">
                    React ist eine JavaScript-Bibliothek aus dem Hause Facebook,
                    die sich zunehmender Beliebtheit unter Frontend-Entwicklern
                    erfreut. Diese Beliebtheit führt u. a. dazu, dass
                    Webanwendungen mittlerweile den Stellenwert und die
                    Funktionsvielfalt von Desktopanwendungen besitzen. Immer
                    komplexere Zustandsautomaten bescheren manchen
                    Webentwicklern jedoch schlaflose Nächte. Grund genug, sich
                    React einmal näher anzuschauen.
                  </p>
                </div>

                <div className="mt-auto p-2">
                  <a
                    className="btn btn-secondary"
                    href="https://entwickler.de/leseproben/globales-state-management-mit-react-und-co-579858132.html"
                    role="button"
                    rel="noopener noreferrer"
                  >
                    Mehr dazu »
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row mx-5 mb-5 centered" style={{ marginTop: "5rem" }}>
            <div className="col-lg-4 mt-4 mt-lg-0">
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
                    rel="noopener noreferrer"
                  >
                    Mehr dazu »
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
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
                    rel="noopener noreferrer"
                  >
                    Mehr dazu »
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
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
                    rel="noopener noreferrer"
                  >
                    Mehr dazu »
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2>
                Sie suchen einen Entwickler, Speaker oder Autor auf
                Freelance-Basis?
              </h2>
              <p className="mt-2">
                Ich bin stets auf der Suche nach spannenden Projekten und
                Herausforderungen! Lassen Sie uns gerne über Ihre Vorstellungen
                und Erwartungen sprechen.
              </p>
              <a
                href="mailto:krystof@gmx.biz"
                className="btn btn-conf btn-primary mt-4"
                rel="noopener noreferrer"
              >
                Schreiben Sie mir!
              </a>
            </div>
          </div>
        </div>
        <div id="sep">
          <div className="container centered align-self-center">
            <h1 className="">
              <span className="">Ich wohne in Münster,</span>
            </h1>
            <h3 className="mb">
              <span className="">der lebenswertesten Stadt der Welt.</span>
            </h3>
          </div>
        </div>

        <div id="f">
          <div className="container">
            <div className="row centered">
              <div className="col">
                <b>Impressum</b>
                <a rel="noopener noreferrer" href="datenschutzerklaerung.html">
                  Datenschutzerklärung
                </a>
                <br /> Angaben gemäß § 5 TMG
                <br /> Krystof Beuermann, Warendorfer Str. 91,48145 Münster
                Vertreten durch: Krystof Beuermann Kontakt: Telefon: 0151-
                27529426 E-Mail: krystof@gmx.biz
                <br /> Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                Krystof Beuermann, Warendorfer Str. 91, 48145 Münster
                <br /> Foto: Wladyslaw Sojka (www.sojka.photo)
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
