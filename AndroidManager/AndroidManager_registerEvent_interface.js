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
        id: "triggerName",
        description: tr("Event type"),
        default_selector: "string",
        variants: [tr("Xpath selector"), tr("App activity")],
        disable_int: true,
        value_string: tr("Xpath selector"),
        help: {description: tr("Event type for watching.")}})
    %>
    <%= _.template($('#input_constructor').html())({
        id: "trigger",
        description: tr("String for watching"),
        default_selector: "string",
        disable_expression: true,
        disable_int: true,
        value_string: "",
        help: {description: tr("Xpath string or activity name, that call your function.")}})
    %>
    <%= _.template($('#input_constructor').html())({
        id: "basFuncName",
        description: tr("BAS function"),
        default_selector: "string",
        disable_int: true,
        value_string: "",
        help: {description: tr("Name of the BAS function, that called when string for watching appears.")}})
    %>
    <%= _.template($('#input_constructor').html())({
        id: "basFuncArgs",
        description: tr("BAS function arguments"),
        default_selector: "expression",
        disable_int: true,
        disable_string: true,
        value_string: "",
        help: {description: tr("An object with function arguments and their values as in following example:") + "<br><code>{\"foo\": \"buzz\", \"foo2\": 42}</code><br>" + tr("If a function has no arguments, leave this field empty.")}})
    %>
    <span data-preserve="true" data-preserve-type="check" data-preserve-id="isOnce">
		<input type="checkbox" id="isOnce" checked="checked"/>
		<label for="isOnce" class="tr">Call once</label>
	</span>
</div>
<div class="tooltipinternal"></div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>