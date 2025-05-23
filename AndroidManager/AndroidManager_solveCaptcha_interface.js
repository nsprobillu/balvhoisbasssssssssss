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
		id: "service",
		description: tr("Captcha solving service"),
		default_selector: "string",
		variants: ["2captcha", "captcha.guru", "rucaptcha"],
		disable_int: true,
		value_string: "captcha.guru",
		help: {description: tr("The service with which the captcha will be solved.<br><code>captcha.guru</code> - the fastest, due to the use of neural networks, but has a lower success rate<br><code>2captcha</code> and <code>rucaptcha</code> solve captcha with the help of workers, due to which the success rate increases, but the solution process takes more time.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "apiKey",
		description: tr("Service API key"),
		default_selector: "string",
		disable_expression: true,
		disable_int: true,
		value_string: "",
		help: {description: ""}})
	%>

	<%= _.template($('#block_start').html())({
		id: "Additional",
		name: tr("Additional settings"),
		description: ""})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "attempts",
		description: tr("Maximum captchas"),
		default_selector: "int",
		disable_string: true,
		value_number: 5,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("The maximum number of captchas that will be sent to the service for recognition. If the captcha is not solved when this limit is reached, then the process will be interrupted with an unsuccessful result.<br><strong>Note:</strong> ReCaptcha v2 is solved by clicks, each screen with captcha is sent for recognition separately, and for each such action there will be debit money from your balance.<br>This parameter allows you to limit the number of captchas shown and the balance wasted.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "waitDuration",
		description: tr("Captcha waiting timeout, ms"),
		default_selector: "int",
		disable_string: true,
		value_number: 60000,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("How long to wait for the appearance of the selector with captcha, ms.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "solvingDuration",
		description: tr("Captcha solving timeout, ms"),
		default_selector: "int",
		disable_string: true,
		value_number: 60000,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("Maximum captcha solving time, ms.<br>This parameter is responsible for the time taken to solve each captcha by the recognition service, and not for the duration of the entire action.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "screenDelay",
		description: tr("Delay between captchas, ms"),
		default_selector: "int",
		disable_string: true,
		value_number: 7000,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("Delay between clicking on the received coordinates and sending a request to solve the next captcha, ms. This parameter is needed because It takes time to load the captcha.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "mainSelector",
		description: tr("Xpath of the main selector") + " (" + tr("can be empty") + ")",
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("Xpath of the main frame with captcha. It determines whether the captcha appeared on the first load and whether it disappeared when it is checked whether the captcha is solved or not.<br>If empty, the default xpath will be applied.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "textSelector",
		description: tr("Xpath with description") + " (" + tr("can be empty") + ")",
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("Xpath selector with text instructions for captcha. Contains multiple lines of text.<br>If empty, the default xpath will be applied.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "imageSelector",
		description: tr("Xpath with image") + " (" + tr("can be empty") + ")",
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("Xpath of the selector that contains the image.<br>If empty, the default xpath will be applied.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "buttonSelector",
		description: tr("Xpath of button") + " (" + tr("can be empty") + ")",
		default_selector: "string",
		disable_int: true,
		value_string: "",
		help: {description: tr("Xpath of the button to submit the result. Xpath request must not contain <code>@text</code> attribute.<br>If empty, the default xpath will be applied.")}})
	%>
	<%= _.template($('#block_end').html())() %>

	<%= _.template($('#variable_constructor').html())({
		id: "Save",
		description: tr("Result"),
		default_variable: "IS_CAPTCHA_SOLVED",
		help: {description: tr("<code>true</code> - captcha solved successfully;<br><code>false</code> - captcha was not solved.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Solve captcha ReCaptcha v2 with clicks.</div>
	<div class="tr tooltip-paragraph-last-fold">When performing this action, the thread may be terminated with an error. You can handle errors with the <strong>"Ignore errors"</strong> action.</div>
</div>
<%= _.template($('#back').html())({action: "executeandadd", visible: true}) %>