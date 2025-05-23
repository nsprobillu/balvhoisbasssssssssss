var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var responseAsJSON = GetInputConstructorValue("responseAsJSON", loader);
var matches = /^[\{|\[]{2}[0-9a-zA-Z_]+[\}|\]]{2}$/.test(responseAsJSON["original"]);
if([tr("JSON object"), tr("JSON string")].indexOf(responseAsJSON["original"]) < 0 && !matches) {
  Invalid(tr("Parameter") + " \"" + tr("Result format") + "\" " + tr("is invalid."));
  return;
}
var Save = this.$el.find("#Save").val().toUpperCase();
try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_getDeviceInfo_code").html())({
    "serial": serial["updated"],
    "responseAsJSON": responseAsJSON["updated"],
    "variable": "VAR_" + Save
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}