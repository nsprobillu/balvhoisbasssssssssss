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
		id: "event",
		description: tr("Event"),
		default_selector: "string",
		value_string: "",
		disable_int: true,
		variants: ["home", "back", "volume up", "volume down", "volume mute", "power", "sleep", "wake up", "camera"],
		help: {description: tr("Event ID or a string from the drop-down menu. For example, you can manually enter the code <code>3</code> or select <code>home</code> from the list.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tooltip-paragraph-first-fold"><span class="tr">Execute keyEvent command</span>:</div>
	<div class="tooltip-paragraph-fold"><code>adb shell input keyevent YOUR_COMMAND</code></div>
	<div class="tooltip-paragraph-last-fold"><a href="https://gist.github.com/arjunv/2bbcca9a1a1c127749f8dcb6d36fb0bc" target="_blank"><span class="tr">Command list</span></a>.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>