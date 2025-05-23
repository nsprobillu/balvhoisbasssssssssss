var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var appName = GetInputConstructorValue("appName", loader);
if(appName["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Activity name") + "\" " + tr("not specified."));
  return;
}
try{
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_openApp_code").html())({
    "serial": serial["updated"],
    "appName": appName["updated"]
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}