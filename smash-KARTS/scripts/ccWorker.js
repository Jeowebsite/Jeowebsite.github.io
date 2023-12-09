"use strict";

setInterval(() =>
{
    self.postMessage(Date.now());
    debugger;
}, self.checkTimeDelay);
