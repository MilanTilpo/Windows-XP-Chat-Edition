// ===================================================================================
//	Server Environment Handler.
//	Options: development, production (anything else will use production)
var server_env = "development";
// ===================================================================================



// Account stuff
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");

// Filesystem reading functions
const fs = require("fs-extra", "fs");

const path = require('path');


// Load settings
try {
  stats = fs.lstatSync(__dirname + "/json/settings.json");
} catch (err) {
  // If settings do not yet exist
  if (err.code == "ENOENT") {
    try {
      fs.copySync(__dirname + "/json/settings.example.json", __dirname + "/json/settings.json");
      console.log("Created new settings file.");
    } catch (err) {
      console.log(err);
      throw "Could not create new settings file.";
    }
    // Else, there was a misc error (permissions?)
  } else {
    console.log(err);
    throw "Could not read 'settings.json'.";
  }
}

// Load settings into memory
const settings = require(__dirname + "/json/settings.json");

// Setup basic express server
var express = require("express");
var app = express();
if (settings.express.serveStatic) app.use(express.static(__dirname + "/web/www"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());
app.get('/readme.html', function(req, res) {
  res.sendFile(__dirname + '/web/www/readme/index.html');
});
app.get('/rules.html', function(req, res) {
  res.sendFile(__dirname + '/web/www/rules/index.html');
});
app.get('/discord.html', function(req, res) {
  res.sendFile(__dirname + '/web/www/discord/index.html');
});
app.get('/arcade.html', function(req, res) {
  res.sendFile(__dirname + '/web/www/arcade/index.html');
});
app.use('/robots.txt', function(req, res, next) {
  res.type('text/plain')
  res.send("User-agent: *\nDisallow: /chat\nSitemap: /sitemap.xml");
});
var server = require("http").createServer(app);
const https = require("https");

app.get('/ivona-eric', function(req, res) {
	if (req.query.text) {
					const body = new URLSearchParams({
						but1: req.query.text,
						butS: "0",
						butP: "0",
						butPauses: "0",
						butt0: "Submit",
					}).toString();
					const rq = https.request(
						{
							hostname: "readloud.net",
							path: "/english/american/3-male-voice-eric.html",
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
							}
						},
						(r) => {
							let buffers = [];
							r.on("error", (e) => console.error(e));
							r.on("data", (b) => buffers.push(b));
							r.on("end", () => {
								const html = Buffer.concat(buffers);
								const beg = html.indexOf("/tmp/");
								const end = html.indexOf("mp3", beg) + 3;
								const sub = html.subarray(beg, end).toString();
	
								https.get(`https://readloud.net${sub}`, async (r2) => {
									r2.pipe(res);
									return res.writeHead(200, {
									'Content-Type': 'audio/mp3'
									});
								});
							});
						}
					).on("error", (e) => console.error(e));
					rq.end(body);
	} else {
	  res.send("Hello World")
	}
  })
app.get('/ivona-eric', function(req, res) {
	if (req.query.text) {
					const body = new URLSearchParams({
						but1: req.query.text,
						butS: "0",
						butP: "0",
						butPauses: "0",
						butt0: "Submit",
					}).toString();
					const rq = https.request(
						{
							hostname: "readloud.net",
							path: "/english/american/3-male-voice-eric.html",
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
							}
						},
						(r) => {
							let buffers = [];
							r.on("error", (e) => console.error(e));
							r.on("data", (b) => buffers.push(b));
							r.on("end", () => {
								const html = Buffer.concat(buffers);
								const beg = html.indexOf("/tmp/");
								const end = html.indexOf("mp3", beg) + 3;
								const sub = html.subarray(beg, end).toString();
	
								https.get(`https://readloud.net${sub}`, async (r2) => {
									r2.pipe(res);
									return res.writeHead(200, {
									'Content-Type': 'audio/mp3'
									});
								});
							});
						}
					).on("error", (e) => console.error(e));
					rq.end(body);
	} else {
	  res.send("Hello World")
	}
  })
app.get('/ivona-jennifer', function(req, res) {
	if (req.query.text) {
					const body = new URLSearchParams({
						but1: req.query.text,
						butS: "0",
						butP: "0",
						butPauses: "0",
						butt0: "Submit",
					}).toString();
					const rq = https.request(
						{
							hostname: "readloud.net",
							path: "/english/american/28-male-voice-jennifer.html",
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
							}
						},
						(r) => {
							let buffers = [];
							r.on("error", (e) => console.error(e));
							r.on("data", (b) => buffers.push(b));
							r.on("end", () => {
								const html = Buffer.concat(buffers);
								const beg = html.indexOf("/tmp/");
								const end = html.indexOf("mp3", beg) + 3;
								const sub = html.subarray(beg, end).toString();
	
								https.get(`https://readloud.net${sub}`, async (r2) => {
									r2.pipe(res);
									return res.writeHead(200, {
									'Content-Type': 'audio/mp3'
									});
								});
							});
						}
					).on("error", (e) => console.error(e));
					rq.end(body);
	} else {
	  res.send("Hello World")
	}
  })
app.get('/ivona-jennifer', function(req, res) {
	if (req.query.text) {
					const body = new URLSearchParams({
						but1: req.query.text,
						butS: "0",
						butP: "0",
						butPauses: "0",
						butt0: "Submit",
					}).toString();
					const rq = https.request(
						{
							hostname: "readloud.net",
							path: "/english/american/28-male-voice-jennifer.html",
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
							}
						},
						(r) => {
							let buffers = [];
							r.on("error", (e) => console.error(e));
							r.on("data", (b) => buffers.push(b));
							r.on("end", () => {
								const html = Buffer.concat(buffers);
								const beg = html.indexOf("/tmp/");
								const end = html.indexOf("mp3", beg) + 3;
								const sub = html.subarray(beg, end).toString();
	
								https.get(`https://readloud.net${sub}`, async (r2) => {
									r2.pipe(res);
									return res.writeHead(200, {
									'Content-Type': 'audio/mp3'
									});
								});
							});
						}
					).on("error", (e) => console.error(e));
					rq.end(body);
	} else {
	  res.send("Hello World")
	}
  })
// Init socket.io
var io = require('socket.io')(server, {
    allowEIO3: true
});


// Variable for toggling Replit mode
const isReplit = settings.isReplit;

if (isReplit === false) {
	var port = 80;
} else {
	var port = process.env.port || settings.port;
}
exports.io = io;


// Init sanitize-html
var sanitize = require("sanitize-html");

// Init winston loggers (hi there)
const Log = require("./log.js");
Log.init();
const log = Log.log;

// Load ban list
const Ban = require("./ban.js");
Ban.init();
// Start actually listening
server.listen(port, function() {
  console.log(" Welcome to Microsoft Windows XP Chat Edition!\n", "HTTP Express Server listening on port " + port + "\n", "=+.----------------*-<|{ Logs }|>-*----------------.+=\n");
});
app.use(express.static(__dirname + "/public"));

// ========================================================================
// Helper functions
// ========================================================================

const Utils = require("./utils.js");

// ========================================================================
// The Beef(TM)
// ========================================================================

const Meat = require("./meat.js");
Meat.beat();

// ========================================================================
// Console commands
// ========================================================================

const Console = require("./console.js");
Console.listen();
