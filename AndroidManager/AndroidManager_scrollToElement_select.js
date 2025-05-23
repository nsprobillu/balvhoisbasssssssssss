var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var scrollableElement = GetInputConstructorValue("scrollableElement", loader);
if(scrollableElement["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Scrollable area") + "\" " + tr("not specified."));
  return;
}
var targetElement = GetInputConstructorValue("targetElement", loader);
var direction = GetInputConstructorValue("direction", loader);
var matches = /^[\{|\[]{2}[0-9a-zA-Z_]+[\}|\]]{2}$/.test(direction["original"]);
if([tr("up"), tr("down"), tr("to the left"), tr("to the right")].indexOf(direction["original"]) < 0 && !matches) {
  Invalid(tr("Parameter") + " \"" + tr("Scroll direction") + "\" " + tr("is invalid."));
  return;
}
var elementIndex = GetInputConstructorValue("elementIndex", loader);
if(elementIndex["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Element index") + "\" " + tr("not specified."));
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
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_scrollToElement_code").html())({
    "serial": serial["updated"],
    "scrollableElement": scrollableElement["updated"],
    "targetElement": targetElement["updated"],
    "direction": direction["updated"],
    "elementIndex": elementIndex["updated"],
    "delay": delay["updated"],
    "maxDuration": maxDuration["updated"],
    "variable": "VAR_" + Save
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}