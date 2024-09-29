const blockedDomains = [
  "facebook.com",
  "google-analytics.com",
  "instagram.com",
  "amazon-adsystem.com",
  // Add more domains as needed
];

chrome.runtime.onInstalled.addListener(() => {
  console.log("Cookie Blocker extension installed.");

  // Clear existing dynamic rules
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: blockedDomains.map((_, index) => index + 1),
    addRules: blockedDomains.map((domain, index) => ({
      id: index + 1,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: `||${domain}^`,
        resourceTypes: ["script", "xmlhttprequest", "image", "media", "object", "other"]
      }
    }))
  }, () => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log("Dynamic rules added successfully.");
    }
  });
});