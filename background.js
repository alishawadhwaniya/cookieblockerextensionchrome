const blockedDomains = [
    "*://*.facebook.com/*",
    "*://*.google-analytics.com/*",
    "*://*.instagram.com/*",
    "*://*.amazon-adsystem.com/*",
    // Add more domains as needed
  ];
  
  chrome.webRequest.onBeforeSendHeaders.addListener(
    (details) => {
      // Remove cookies from outgoing requests to blocked domains
      const headers = details.requestHeaders.filter(
        (header) => !/^cookie$/i.test(header.name)
      );
      return { requestHeaders: headers };
    },
    { urls: blockedDomains },
    ["blocking", "requestHeaders"]
  );
  
  chrome.webRequest.onHeadersReceived.addListener(
    (details) => {
      // Remove Set-Cookie headers from responses from blocked domains
      const headers = details.responseHeaders.filter(
        (header) => !/^set-cookie$/i.test(header.name)
      );
      return { responseHeaders: headers };
    },
    { urls: blockedDomains },
    ["blocking", "responseHeaders"]
  );
  
  // Optionally, block requests to blocked domains entirely
  // chrome.webRequest.onBeforeRequest.addListener(
  //   () => ({ cancel: true }),
  //   { urls: blockedDomains },
  //   ["blocking"]
  // );