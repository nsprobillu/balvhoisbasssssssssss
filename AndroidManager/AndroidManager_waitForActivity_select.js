var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var activity = GetInputConstructorValue("activity", loader);
if(activity["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Activity name") + "\" " + tr("not specified."));
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
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_waitForActivity_code").html())({
    "serial": serial["updated"],
    "activity": activity["updated"],
    "delay": delay["updated"],
    "maxDuration": maxDuration["updated"],
    "variable": "VAR_" + Save
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}