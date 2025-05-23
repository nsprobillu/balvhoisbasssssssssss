<div class="container-fluid">
	<%= _.template($('#input_constructor').html())({
		id: "serial",
		description: tr("Serial number"),
		default_selector: "string",
		disable_expression: true,
		disable_int: true,
		value_string: "",
		help: {description: tr("Device serial number. Can be obtained from the list returned by the function <strong>\"Get Devices List\"</strong> or by entering the command <code>adb devices</code>.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Disconnect from the device. Each device has its own session that consumes computer resources. Therefore, if you don't need to work with the device, you can disconnect from it with this action.<br>It is recommended to put this action at the end of <code>Main</code> function and before "Stop server" action.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>