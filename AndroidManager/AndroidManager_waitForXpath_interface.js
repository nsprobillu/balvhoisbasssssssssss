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
		id: "xpath",
		description: "Xpath",
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("Xpath expression") + ".<br><br><strong>" + tr("Example") + ":</strong><br><code>//*[contains(@text, \"Авторизоваться\") and @class=\"android.widget.Button\"]</code>."}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "delay",
		description: tr("Delay"),
		default_selector: "int",
		disable_string: true,
		value_number: 200,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("Delay between element searches, ms.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "maxDuration",
		description: tr("Maximum execution time"),
		default_selector: "int",
		disable_string: true,
		value_number: 60000,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("Maximum element wait time, ms.")}})
	%>
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "ELEMENT_FOUND",
		help: {description: tr("<code>true</code> - element found;<br><code>false</code> - element not found.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Wait for the element to appear on the screen.</div>
	<div class="tr tooltip-paragraph-fold">If the element was not found, then the action will return <code>false</code>.</div>
	<div class="tr tooltip-paragraph-fold">When performing this action, the thread may be terminated with an error. You can handle errors with the <strong>"Ignore errors"</strong> action.</div>
	<div class="tr tooltip-paragraph-fold">You can use <strong>uiautomatorviewer.bat</strong>, which is included with <strong>Android Studio SDK tools</strong>, to search for items.</div>
	<div class="tooltip-paragraph-fold"><span class="tr">If you need to wait for several elements at once, you can concatenate xpath expressions using the separator <code>|</code>.</span><br><br></div>
	<div class="tooltip-paragraph-last-fold"><strong><span class="tr">Get one of the elements</span>:</strong> <pre>//*[@text="Text 1"] | //*[@text="Text 2"] | //*[@content-desc="Text 3"]</pre></div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>