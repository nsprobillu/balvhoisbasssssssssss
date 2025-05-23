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
		description: tr("Path to a folder or file on the device"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("Path to a folder or file on the device, for example:<br><code>/sdcard/myfile.txt</code><br>or<br><code>/sdcard/mydir</code>.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "outputPath",
		description: tr("Path to a folder on the computer"),
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: ""}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Download a file or folder from your device to your computer. If the file or folder is not found, the thread will br finished with an error. You can handle it with the <strong>"Ignore Errors"</strong> action.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>