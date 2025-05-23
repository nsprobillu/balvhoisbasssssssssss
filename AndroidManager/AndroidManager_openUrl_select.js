var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var url = GetInputConstructorValue("url", loader);
if(url["original"].length == 0) {
  Invalid(tr("Parameter") + " \"URL\" " + tr("not specified."));
  return;
}
try{
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_openUrl_code").html())({
    "serial": serial["updated"],
    "url": url["updated"]
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}