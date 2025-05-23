var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var startX = GetInputConstructorValue("startX", loader);
if(startX["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Start") + " " + tr("coordinate") + " X" + "\" " + tr("not specified."));
  return;
}
var startY = GetInputConstructorValue("startY", loader);
if(startY["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Start") + " " + tr("coordinate") + " Y" + "\" " + tr("not specified."));
  return;
}
var endX = GetInputConstructorValue("endX", loader);
if(endX["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("End") + " " + tr("coordinate") + " X" + "\" " + tr("not specified."));
  return;
}
var endY = GetInputConstructorValue("endY", loader);
if(endY["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("End") + " " + tr("coordinate") + " Y" + "\" " + tr("not specified."));
  return;
}
var steps = GetInputConstructorValue("steps", loader);
if(steps["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Duration, ms") + "\" " + tr("not specified."));
  return;
}
try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_swipeByCoordinates_code").html())({
    "serial": serial["updated"],
    "startX": startX["updated"],
    "startY": startY["updated"],
    "endX": endX["updated"],
    "endY": endY["updated"],
    "steps": steps["updated"]
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}