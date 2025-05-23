function getAllSelectorsAttribute() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("xpath"),
      _function_argument("attribute")
   ];
   _embedded("getAllSelectorsAttribute", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function getXpathSelectorsCount() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("xpath")
   ];
   _embedded("getXpathSelectorsCount", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function getAllXpathSelectors() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("xpath")
   ];
   _embedded("getAllXpathSelectors", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function getXpathSelector() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("xpath"),
      _function_argument("elementIndex")
   ];
   _embedded("getXpathSelector", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function solveCaptcha() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("service"),
      _function_argument("apiKey"),
      _function_argument("attempts"),
      _function_argument("waitDuration"),
      _function_argument("solvingDuration"),
      _function_argument("screenDelay"),
      _function_argument("mainSelector"),
      _function_argument("textSelector"),
      _function_argument("imageSelector"),
      _function_argument("buttonSelector")
   ];
   _embedded("solveCaptcha", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 600000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function isAppRunning() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("appName")
   ];
   _embedded("isAppRunning", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function isAppInstalled() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("appName")
   ];
   _embedded("isAppInstalled", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}
   

function openNotifications() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial")
   ];
   _embedded("openNotifications", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function stopAppiumServer() {
   VAR_AM_NODE_PARAMS = _K;
   _embedded("stopAppiumServer", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function startAppiumServer() {
   var maxDuration = _function_argument("maxDuration");
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("host"),
      _function_argument("port"),
      maxDuration,
      _function_argument("connectionsMaxTries")
   ];
   _embedded("startAppiumServer", "Node", "18.10.0", "AM_NODE_PARAMS", maxDuration|| 60000 )!
}

function longClickByCoordinates() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("coordX"),
      _function_argument("coordY"),
      _function_argument("steps")
   ];
   _embedded("longClickByCoordinates", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function longClickByXpath() {
   var maxDuration = _function_argument("maxDuration");
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("waitForElement"),
      _function_argument("elementIndex"),
      _function_argument("xpath"),
      _function_argument("steps"),
      maxDuration,
      _function_argument("delay")
   ];
   _embedded("longClickByXpath", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", maxDuration || 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function waitForIDLE() {
   var maxDuration = _function_argument("maxDuration");
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("xpath"),
      maxDuration,
      _function_argument("delay")
   ];
   _embedded("waitForIDLE", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", maxDuration || 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}
   

function scrollToElement() {
   var maxDuration = _function_argument("maxDuration");
   var direction = _function_argument("direction");
   var directionVal;
   switch(true) {
      case direction == "up" || direction == "вверх":
         directionVal = "up";
         break;
      case direction == "down" || direction == "вниз":
         directionVal = "down";
         break;
      case direction == "to the left" || direction == "влево":
         directionVal = "left";
         break;
      case direction == "to the right" || direction == "вправо":
         directionVal = "right";
         break;
   }
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("scrollableElement"),
      _function_argument("targetElement") || null,
      _function_argument("elementIndex"),
      directionVal,
      maxDuration,
      _function_argument("delay")
   ];
   _embedded("scrollToElement", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", maxDuration || 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function getAllElementAttributes() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("xpath"),
      _function_argument("elementIndex")
   ];
   _embedded("getAllElementAttributes", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function getElementAttribute() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("xpath"),
      _function_argument("attribute"),
      _function_argument("elementIndex")
   ];
   _embedded("getElementAttribute", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function waitForActivity() {
   var maxDuration = _function_argument("maxDuration");
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      maxDuration,
      _function_argument("delay"),
      _function_argument("activity")
   ];
   _embedded("waitForActivity", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", maxDuration || 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function existsByXpath() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("xpath")
   ];
   _embedded("existsByXpath", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function waitForXpath() {
   var maxDuration = _function_argument("maxDuration");
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("xpath"),
      maxDuration,
      _function_argument("delay")
   ];
   _embedded("waitForXpath", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", maxDuration || 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function setTextByXpath() {
   var maxDuration = _function_argument("maxDuration");
   var projectDirectory = project_path()
      .split("/")
      .slice(0, -1)
      .join("/");
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("clearText"),
      _function_argument("waitForElement"),
      _function_argument("elementIndex"),
      _function_argument("xpath"),
      maxDuration,
      _function_argument("delay"),
      _function_argument("text"),
      projectDirectory
   ];
   _embedded("setTextByXpath", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", maxDuration || 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function clearTextByXpath() {
   var maxDuration = _function_argument("maxDuration");
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("waitForElement"),
      _function_argument("elementIndex"),
      _function_argument("xpath"),
      maxDuration,
      _function_argument("delay")
   ];
   _embedded("clearTextByXpath", "Node", "null", "AM_NODE_PARAMS,AM_NODE_RESULT", maxDuration || 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function clickByXpath() {
   var maxDuration = _function_argument("maxDuration");
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("waitForElement"),
      _function_argument("elementIndex"),
      _function_argument("xpath"),
      maxDuration,
      _function_argument("delay")
   ];
   _embedded("clickByXpath", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", maxDuration || 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function dragByCoordinates() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("startX"),
      _function_argument("startY"),
      _function_argument("endX"),
      _function_argument("endY")
   ];
   _embedded("dragByCoordinates", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function swipeByCoordinates() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("startX"),
      _function_argument("startY"),
      _function_argument("endX"),
      _function_argument("endY"),
      _function_argument("steps")
   ];
   _embedded("swipeByCoordinates", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function clickByCoordinates() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("coordX"),
      _function_argument("coordY")
   ];
   _embedded("clickByCoordinates", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function inputKeyEvent() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("event")
   ];
   _embedded("inputKeyEvent", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function getInstalledApps() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial")
   ];
   _embedded("getInstalledApps", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function openUrl() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("url")
   ];
   _embedded("openUrl", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function runProcess() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("command"),
      _function_argument("resultAsList")
   ];
   _embedded("runProcess", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function uninstallApp() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("appName")
   ];
   _embedded("uninstallApp", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function installApp() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("appPath")
   ];
   _embedded("installApp", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function clearAppCache() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("appName")
   ];
   _embedded("clearAppCache", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function closeApp() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("appName")
   ];
   _embedded("closeApp", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function getCurrentActivity() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial")
   ];
   _embedded("getCurrentActivity", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function openApp() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("appName")
   ];
   _embedded("openApp", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function pullFromDevice() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("inputPath"),
      _function_argument("outputPath")
   ];
   _embedded("pullFromDevice", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function pushToDevice() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("inputPath"),
      _function_argument("outputPath")
   ];
   _embedded("pushToDevice", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function takeScreenshot() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial")
   ];
   _embedded("takeScreenshot", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function dumpHierarchy() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial")
   ];
   _embedded("dumpHierarchy", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
   _function_return(VAR_AM_NODE_RESULT)
}

function stopDevice() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial")
   ];
   _embedded("stopDevice", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function connectDevice() {
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      _function_argument("configConnection"),
      _function_argument("newCommandTimeout")
   ];
   _embedded("connectDevice", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}

function getDevices() {
   VAR_AM_NODE_PARAMS = _K;
      _embedded("getDevices", "Node", "18.10.0", "AM_NODE_PARAMS,AM_NODE_RESULT", 60000 )!
      _function_return(VAR_AM_NODE_RESULT)
   }

function registerEvent() {
   var triggerName = _function_argument("triggerName");
   var triggerNameVal;
   switch(true) {
      case triggerName == "Xpath selector" || triggerName == "Xpath селектора":
         triggerNameVal = "selector";
         break;
      case triggerName == "App activity" || triggerName == "Активити приложения":
         triggerNameVal = "activity";
         break;
   }
   VAR_AM_NODE_PARAMS = [
      _K,
      _function_argument("serial"),
      triggerNameVal,
      _function_argument("trigger"),
      _function_argument("basFuncName"),
      _function_argument("basFuncArgs"),
      _function_argument("isOnce")
   ];
   _embedded("registerEvent", "Node", "18.10.0", "AM_NODE_PARAMS", 60000 )!
}