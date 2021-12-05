# Web socket server 

## What Socket.IO is
Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. It consists of:

a Node.js server: Source | API
a Javascript client library for the browser (which can be also run from Node.js): Source | API

## How does that work?
The client will try to establish a WebSocket connection if possible, and will fall back on HTTP long polling if not.

WebSocket is a communication protocol which provides a full-duplex and low-latency channel between the server and the browser. More information can be found [here](https://en.wikipedia.org/wiki/WebSocket).

So, in the best-case scenario, provided that:

the browser supports WebSocket (97% of all browsers in 2020)
there is no element (proxy, firewall, ...) preventing WebSocket connections between the client and the server
you can consider the Socket.IO client as a "slight" wrapper around the WebSocket API. Instead of writing: