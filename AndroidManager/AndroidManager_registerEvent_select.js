var serial = GetInputConstructorValue("serial", loader);
if (serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}

var triggerName = GetInputConstructorValue("triggerName", loader);
var matches = /^[\{|\[]{2}[0-9a-zA-Z_]+[\}|\]]{2}$/.test(triggerName["original"]);
if([tr("Xpath selector"), tr("App activity")].indexOf(triggerName["original"]) < 0 && !matches) {
  Invalid(tr("Parameter") + " \"" + tr("Event type") + "\" " + tr("is invalid."));
  return;
}

var trigger = GetInputConstructorValue("trigger", loader);
if (trigger["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("String for watching") + "\" " + tr("not specified."));
  return;
}

var basFuncName = GetInputConstructorValue("basFuncName", loader);
if (basFuncName["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("BAS function") + "\" " + tr("not specified."));
  return;
}

try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_registerEvent_code").html())({
    "serial": serial["updated"],
    "triggerName": triggerName["updated"],
    "trigger": trigger["updated"],
    "basFuncName": basFuncName["updated"],
    "basFuncArgs": basFuncArgs["updated"],
    "isOnce": isOnce["updated"]
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}