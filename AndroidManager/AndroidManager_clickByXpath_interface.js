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
	<span data-preserve="true" data-preserve-type="check" data-preserve-id="waitForElement">
		<input type="checkbox" id="waitForElement" checked="checked"/>
		<label for="waitForElement" class="tr">Wait for the element to appear</label>
	</span>
	<%= _.template($('#input_constructor').html())({
		id: "delay",
		description: tr("Delay"),
		default_selector: "int",
		disable_string: true,
		value_number: 200,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("Delay between element searches, ms.<br><br>Can be empty if parameter") + " <strong>\"" + tr("Wait for the element to appear") + "\"</strong> " + tr("is not activated") + "."}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "maxDuration",
		description: tr("Maximum execution time"),
		default_selector: "int",
		disable_string: true,
		value_number: 60000,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("Maximum element wait time, ms.<br><br>Can be empty if parameter") + " <strong>\"" + tr("Wait for the element to appear") + "\"</strong> " + tr("is not activated") + "."}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "elementIndex",
		description: tr("Element index"),
		default_selector: "int",
		disable_string: true,
		value_number: 0,
		min_number: 0,
		max_number: 999999,
		help: {description: tr("The index of the expected element.<br>The first element is <code>0</code>.<br>If the number of elements is not known in advance and the last element is needed, then you can explicitly specify it in the xpath query") + ":<br><code>(//*[@text=\"OK\"])[last()]</code>."}})
	%>
	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "ELEMENT_FOUND",
		help: {description: tr("<code>true</code> - element found;<br><code>false</code> - element not found.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Find element by xpath and click on it.</div>
	<div class="tr tooltip-paragraph-fold">This action gets the element's xpath coordinates and clicks on a random point in the element's area.</div>
	<div class="tr tooltip-paragraph-fold">If the element was not found, then the action will return <code>false</code>.</div>
	<div class="tooltip-paragraph-fold"><span class="tr">When performing this action, the thread may be terminated with an error. You can handle errors with the <strong>"Ignore errors"</strong> action.</span><br><br></div>
	<div class="tr tooltip-paragraph-last-fold">You can use <strong>uiautomatorviewer.bat</strong>, which is included with <strong>Android Studio SDK tools</strong>, to search for items.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>
