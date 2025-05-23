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
var text = GetInputConstructorValue("text", loader);
if(text["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Text") + "\" " + tr("not specified."));
  return;
}
var clearText = $("#clearText").is(":checked");
var wait = $("#waitForElement").is(":checked");
var delay = GetInputConstructorValue("delay", loader);
if(wait && delay["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Delay") + "\" " + tr("not specified."));
  return;
}
var maxDuration = GetInputConstructorValue("maxDuration", loader);
if(wait && maxDuration["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Maximum execution time") + "\" " + tr("not specified."));
  return;
}
var elementIndex = GetInputConstructorValue("elementIndex", loader);
if(elementIndex["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Element index") + "\" " + tr("not specified."));
  return;
}
var Save = this.$el.find("#Save").val().toUpperCase();
try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_setTextByXpath_code").html())({
    "serial": serial["updated"],
    "xpath": xpath["updated"],
    "text": text["updated"],
    "clearText": clearText,
    "waitForElement": wait,
    "delay": delay["updated"],
    "maxDuration": maxDuration["updated"],
    "elementIndex": elementIndex["updated"],
    "variable": "VAR_" + Save
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}