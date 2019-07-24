import "react-app-polyfill/ie9";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./styles/css/index.css";
import "ionicons/dist/css/ionicons.min.css";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();

// Matomo
// @ts-ignore
const _paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function() {
  const u = "//analytics.blackbox.ms/";
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", "1"]);
  const d = document,
    g = d.createElement("script"),
    s = d.getElementsByTagName("script")[0];
  g.type = "text/javascript";
  g.async = true;
  g.defer = true;
  g.src = u + "matomo.js";
  // @ts-ignore
  s.parentNode.insertBefore(g, s);
})();
