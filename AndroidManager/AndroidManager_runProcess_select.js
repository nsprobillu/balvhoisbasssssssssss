var command = GetInputConstructorValue("command", loader);
if(command["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Command") + "\" " + tr("not specified."));
  return;
}
var resultAsList = GetInputConstructorValue("resultAsList", loader);
var matches = /^[\{|\[]{2}[0-9a-zA-Z_]+[\}|\]]{2}$/.test(resultAsList["original"]);
if([tr("list of the strings"), tr("string")].indexOf(resultAsList["original"]) < 0 && !matches) {
  Invalid(tr("Parameter") + " \"" + tr("Result format") + "\" " + tr("is invalid."));
  return;
}
var Save = this.$el.find("#Save").val().toUpperCase();
try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_runProcess_code").html())({
    "command": command["updated"],
    "resultAsList": resultAsList["updated"],
    "variable": "VAR_" + Save
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}