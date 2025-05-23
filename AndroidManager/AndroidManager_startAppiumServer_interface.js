<div class="container-fluid">
	<%= _.template($('#input_constructor').html())({
		id: "host",
		description: tr("Server host"),
		default_selector: "string",
		disable_int: true,
		value_string: "127.0.0.1",
		help: {description: tr("The IP address where the server will run. To run the server on the same machine where the script will run from, set <code>127.0.0.1</code>.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "port",
		description: tr("Server port"),
		default_selector: "int",
		disable_string: true,
		value_number: 4723,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("The port on which the server will run. If you are unsure, leave this setting as default.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "connectionsMaxTries",
		description: tr("Attempts to start the server"),
		default_selector: "int",
		disable_string: true,
		value_number: 3,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("The maximum number of attempts to start the server.")}})
	%>
	<%= _.template($('#input_constructor').html())({
		id: "maxDuration",
		description: tr("Maximum execution time"),
		default_selector: "int",
		disable_string: true,
		value_number: 60000,
		min_number: 1,
		max_number: 999999,
		help: {description: tr("Maximum time to connect to the server, ms. If the connection is not established after this time, this action will return an error.")}})
	%>
</div>
<div class="tooltipinternal">
	<div class="tr tooltip-paragraph-first-fold">Launch the Appium server at the address specified in the "Server host" and "Server port" parameters.</div>
	<div class="tr tooltip-paragraph-fold">When the server is started, it checks whether the connection is established at the specified address. If the connection is established, then the server is considered running. If you specify a port already occupied by another process, the server will be considered running and attempts to connect a device to this server will result in an error.</div>
	<div class="tr tooltip-paragraph-fold">You can check if a process is running on a port with the command: <code>netstat -a -o -n | find "4723"</code>, where <code>4723</code> is the port to check. If the result is empty, then the port is free.</div>
	<div class="tr tooltip-paragraph-fold">This action can either start the server process, or only pass the settings of the server <strong>you have already started</strong> to BAS. When starting the server with this action, device connection errors may occur. Therefore, it is highly recommended that you start appium yourself before running the script. You can do this with the command:</div>
	<div class="tooltip-paragraph-fold"><code>appium</code> - <span class="tr">the server will be started at the default address</span>: <code>0.0.0.0:4723</code>.</div>
	<div class="tr tooltip-paragraph-fold">To pass an address and/or port when starting the server, use the command: <code>appium -a 127.0.0.1 -p 4723</code>, where <code>127.0.0.1</code> - your host, <code>4723</code> - your port.</div>
	<div class="tr tooltip-paragraph-fold">If you started the server yourself, then don't forget to specify the same host and port as the running server in the settings for this action.</div>
	<div class="tr tooltip-paragraph-last-fold">This action must be called once at the beginning of the script before connecting to devices.</div>
</div>
<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>