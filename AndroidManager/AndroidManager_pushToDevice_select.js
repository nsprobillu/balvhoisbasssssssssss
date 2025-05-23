var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var inputPath = GetInputConstructorValue("inputPath", loader);
if(inputPath["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Path to a folder or file on a computer") + "\" " + tr("not specified."));
  return;
}
var outputPath = GetInputConstructorValue("outputPath", loader);
if(outputPath["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Path to the folder on the device") + "\" " + tr("not specified."));
  return;
}
try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_pushToDevice_code").html())({
    "serial": serial["updated"],
    "inputPath": inputPath["updated"],
    "outputPath": outputPath["updated"]
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}