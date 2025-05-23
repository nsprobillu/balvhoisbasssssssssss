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
		id: "inputPath",
		description: tr("Path to a folder or file on a computer"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: ""}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "outputPath",
		description: tr("Path to the folder on the device"),
		default_selector: "string",
		disable_int: true,
		value_string: "/data/data/",
		help: {description: tr("Path to the folder on the device. For example:<br><code>/data/data/</code><br>or<br><code>/sdcard/</code>.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Upload a local file or folder to the device. If the file or folder is not found, the thread will be finished with an error. You can handle it with the <strong>"Ignore Errors"</strong> action.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>