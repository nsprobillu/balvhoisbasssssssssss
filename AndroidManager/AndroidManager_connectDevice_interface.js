<div class="container-fluid">
	<%= _.template($('#input_constructor').html())({
		id: "serial",
		description: tr("Serial number"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("Device serial number. Can be obtained from the list returned by the function <strong>\"Get Devices List\"</strong> or by entering the command <code>adb devices</code>.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "configConnection",
		description: tr("Set up device"),
		default_selector: "string",
		variants: ["true", "false", "auto"],
		disable_int: true,
		value_string: "auto",
		help: {description: tr("<code>true</code> - the device will be checked for readiness to launch, the applications required to interact with the emulator will be installed on it;<br><code>false</code> - the device check will be skipped (should be selected only if this device was previously launched), takes less time than with the check enabled;<br><code>auto</code> - if the device is connected for the first time (as part of the template launch), then it will be prepared for connection, upon repeated launches verification will be skipped.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "newCommandTimeout",
		description: tr("Time to wait for the next command, sec"),
		default_selector: "int",
		disable_string: true,
		value_number: 60,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("The maximum time the appium server waits for the next command, in seconds. After this timeout, the current device session will be deleted.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Connect to device. This action is required for the script to interact with the emulator (except for sending commands directly via <code>adb</code>). Thus, it is better to run it from the beginning of the script and after starting the server.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>