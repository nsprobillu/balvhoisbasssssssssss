var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var coordX = GetInputConstructorValue("coordX", loader);
if(coordX["original"].length == 0) {
  Invalid(tr("Parameter") + " \"X " + tr("coordinate") + "\" " + tr("not specified."));
  return;
}
var coordY = GetInputConstructorValue("coordY", loader);
if(coordY["original"].length == 0) {
  Invalid(tr("Parameter") + " \"Y " + tr("coordinate") + "\" " + tr("not specified."));
  return;
}
try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_clickByCoordinates_code").html())({
    "serial": serial["updated"],
    "coordX": coordX["updated"],
    "coordY": coordY["updated"]
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}