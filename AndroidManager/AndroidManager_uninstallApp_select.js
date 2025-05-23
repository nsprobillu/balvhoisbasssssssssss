var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var appName = GetInputConstructorValue("appName", loader);
if(appName["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Application name") + "\" " + tr("not specified."));
  return;
}
var Save = this.$el.find("#Save").val().toUpperCase();
try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_uninstallApp_code").html())({
    "serial": serial["updated"],
    "appName": appName["updated"],
    "variable": "VAR_" + Save
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}