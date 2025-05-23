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
		default_variable: "ELEMENT_DISAPPEAR",
		help: {description: tr("<code>true</code> - the element is gone;<br><code>false</code> - timeout elapsed, but the element is still available.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Waits a specified length of time for an element to become undetectable. This method waits until an element is no longer matchable, or until the timeout has elapsed.</div>
	<div class="tr tooltip-paragraph-fold">An element becomes undetectable when passed xpath does not match selector on screen, because the element has either changed its state or is no longer displayed.</div>
	<div class="tr tooltip-paragraph-last-fold">You can use this action when attempting to wait for some long operation to complete, such as downloading a large file or connecting to a remote server.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>