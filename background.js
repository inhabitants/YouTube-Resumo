"use strict";

console.log("connected...");
const onInstallURL = "https:/youtube.com";

// On Chrome Install
chrome.runtime.onInstalled.addListener(function (details) {
    if (details.reason === "install") {
        // uncomment to redirect on install
        // chrome.tabs.create({ url: onInstallURL });
    }
});