try {
    var code = loader.GetAdditionalData() + _.template($("#AndroidManager_stopAppiumServer_code").html())({});
    code = Normalize(code, 0);
    BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch (e) {}