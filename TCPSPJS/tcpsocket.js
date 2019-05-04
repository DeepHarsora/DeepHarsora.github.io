console.log("Attempting to connect...");

    ws = new WebSocket('ws://10.150.134.19:13000/');

    ws.onopen = function(msg) {
        console.log('Connection successfully opened');
    };

    ws.onmessage = function(msg) {
        console.log(msg);
    };

    ws.onclose = function(msg) {
        console.log("Closed.");
    }

    ws.error = function(err){
        console.log(err);
    }
