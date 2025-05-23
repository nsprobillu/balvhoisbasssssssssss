var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var event = GetInputConstructorValue("event", loader);
if(event["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Event") + "\" " + tr("not specified."));
  return;
}

try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_inputKeyEvent_code").html())({
    "serial": serial["updated"],
    "event": event["updated"]
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}