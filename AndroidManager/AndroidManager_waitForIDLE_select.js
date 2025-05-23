var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var xpath = GetInputConstructorValue("xpath", loader);
if(xpath["original"].length == 0) {
  Invalid(tr("Parameter") + " \"Xpath\" " + tr("not specified."));
  return;
}
var delay = GetInputConstructorValue("delay", loader);
if(delay["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Delay") + "\" " + tr("not specified."));
  return;
}
var maxDuration = GetInputConstructorValue("maxDuration", loader);
if(maxDuration["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Maximum execution time") + "\" " + tr("not specified."));
  return;
}
var Save = this.$el.find("#Save").val().toUpperCase();
try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_waitForIDLE_code").html())({
    "serial": serial["updated"],
    "xpath": xpath["updated"],
    "delay": delay["updated"],
    "maxDuration": maxDuration["updated"],
    "variable": "VAR_" + Save
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}