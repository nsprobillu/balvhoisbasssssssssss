var connectionsMaxTries = GetInputConstructorValue("connectionsMaxTries", loader);
var host = GetInputConstructorValue("host", loader);
if(host["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Server host") + "\" " + tr("not specified."));
  return;
}
var port = GetInputConstructorValue("port", loader);
if(port["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Server port") + "\" " + tr("not specified."));
  return;
}
if(connectionsMaxTries["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Attempts to start the server") + "\" " + tr("not specified."));
  return;
}
var maxDuration = GetInputConstructorValue("maxDuration", loader);
if(maxDuration["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Maximum execution time") + "\" " + tr("not specified."));
  return;
}
try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_startAppiumServer_code").html())({
    "host": host["updated"],
    "port": port["updated"],
    "connectionsMaxTries": connectionsMaxTries["updated"],
    "maxDuration": maxDuration["updated"],
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch (e) {}