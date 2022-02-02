window.weatherWidgetConfig = window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
  selector: ".weatherWidget",
  apiKey: "QED3FC7NRFDX6TQVK3MHY77LA", //Sign up for your personal key
  location: "Las Condes, Chile", //Enter an address
  unitGroup: "metric", //"us" or "metric"
  forecastDays: 1, //how many days forecast to show
  title: "Las Condes, Chile", //optional title to show in the
  showTitle: true,
  showConditions: true,
});

(function () {
  var d = document,
    s = d.createElement("script");
  s.src =
    "https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
})();
