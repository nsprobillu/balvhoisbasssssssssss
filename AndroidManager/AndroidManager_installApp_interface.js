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
		id: "appPath",
		description: tr("File path"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("The path to the application file on the computer.")}})
	%>
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "COMMAND_RESULT",
		help: {description: tr("<code>true</code> - the application was successfully installed;<br><code>false</code> - the application was not installed.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Install APK on the device.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>