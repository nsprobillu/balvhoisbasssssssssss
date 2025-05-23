var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var configConnection = GetInputConstructorValue("configConnection", loader);
var matches = /^[\{|\[]{2}[0-9a-zA-Z_]+[\}|\]]{2}$/.test(configConnection["original"]);
if(["true", "false", "auto"].indexOf(configConnection["original"]) < 0 && !matches) {
  Invalid(tr("Parameter") + " \"" + tr("Set up device") + "\" " + tr("is invalid."));
  return;
}
var newCommandTimeout = GetInputConstructorValue("newCommandTimeout", loader);
if(newCommandTimeout["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Time to wait for the next command, sec") + "\" " + tr("not specified."));
  return;
}
try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_connectDevice_code").html())({
    "serial": serial["updated"],
    "configConnection": configConnection["updated"],
    "newCommandTimeout": newCommandTimeout["updated"]
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch (e) {}