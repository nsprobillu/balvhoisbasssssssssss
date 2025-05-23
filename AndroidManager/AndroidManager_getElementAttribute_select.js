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
var attribute = GetInputConstructorValue("attribute", loader);
var matches = /^[\{|\[]{2}[0-9a-zA-Z_]+[\}|\]]{2}$/.test(attribute["original"]);
var values = ["bounds", "checkable", "checked", "class", "clickable", "content-desc", "enabled",
              "focusable", "focused", "index", "long-clickable", "package", "resource-id",
              "scrollable", "selected", "text"];
if(values.indexOf(attribute["original"]) < 0 && !matches) {
  Invalid(tr("Parameter") + " \"" + tr("Attribute name") + "\" " + tr("is invalid."));
  return;
}
var elementIndex = GetInputConstructorValue("elementIndex", loader);
if(elementIndex["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Element index") + "\" " + tr("not specified."));
  return;
}
var Save = this.$el.find("#Save").val().toUpperCase();
try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_getElementAttribute_code").html())({
    "serial": serial["updated"],
    "xpath": xpath["updated"],
    "attribute": attribute["updated"],
    "elementIndex": elementIndex["updated"],
    "variable": "VAR_" + Save
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}