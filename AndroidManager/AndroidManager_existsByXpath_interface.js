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
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "ELEMENT_FOUND",
		help: {description: tr("<code>true</code> - element found;<br><code>false</code> - element not found.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Check the existence of an element by xpath.</div>
	<div class="tr tooltip-paragraph-fold">If the element was not found, then the action will return <code>false</code>.</div>
	<div class="tooltip-paragraph-fold"><span class="tr">When performing this action, the thread may be terminated with an error. You can handle errors with the <strong>"Ignore errors"</strong> action.</span><br><br></div>
	<div class="tr tooltip-paragraph-last-fold">You can use <strong>uiautomatorviewer.bat</strong>, which is included with <strong>Android Studio SDK tools</strong>, to search for items.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>