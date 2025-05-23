var serial = GetInputConstructorValue("serial", loader);
if(serial["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Serial number") + "\" " + tr("not specified."));
  return;
}
var service = GetInputConstructorValue("service", loader);
var matches = /^[\{|\[]{2}[0-9a-zA-Z_]+[\}|\]]{2}$/.test(service["original"]);
if(["2captcha", "captcha.guru", "rucaptcha"].indexOf(service["original"]) < 0 && !matches) {
  Invalid(tr("Parameter") + " \"" + tr("Captcha solving service") + "\" " + tr("is invalid."));
  return;
}
var apiKey = GetInputConstructorValue("apiKey", loader);
if(apiKey["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Service API key") + "\" " + tr("not specified."));
  return;
}
var attempts = GetInputConstructorValue("attempts", loader);
if(attempts["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Maximum captchas") + "\" " + tr("not specified."));
  return;
}
var waitDuration = GetInputConstructorValue("waitDuration", loader);
if(waitDuration["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Captcha waiting timeout, ms") + "\" " + tr("not specified."));
  return;
}
var solvingDuration = GetInputConstructorValue("solvingDuration", loader);
if(solvingDuration["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Captcha solving timeout, ms") + "\" " + tr("not specified."));
  return;
}
var screenDelay = GetInputConstructorValue("screenDelay", loader);
if(screenDelay["original"].length == 0) {
  Invalid(tr("Parameter") + " \"" + tr("Delay between captchas") + "\" " + tr("not specified."));
  return;
}
var mainSelector = GetInputConstructorValue("mainSelector", loader);
var textSelector = GetInputConstructorValue("textSelector", loader);
var imageSelector = GetInputConstructorValue("imageSelector", loader);
var buttonSelector = GetInputConstructorValue("buttonSelector", loader);
var Save = this.$el.find("#Save").val().toUpperCase();
try {
  var code = loader.GetAdditionalData() + _.template($("#AndroidManager_solveCaptcha_code").html())({
    "apiKey": apiKey["updated"],
    "attempts": attempts["updated"],
    "buttonSelector": buttonSelector["updated"],
    "imageSelector": imageSelector["updated"],
    "mainSelector": mainSelector["updated"],
    "screenDelay": screenDelay["updated"],
    "serial": serial["updated"],
    "service": service["updated"],
    "solvingDuration": solvingDuration["updated"],
    "textSelector": textSelector["updated"],
    "waitDuration": waitDuration["updated"],
    "variable": "VAR_" + Save
  });
  code = Normalize(code, 0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch(e) {}