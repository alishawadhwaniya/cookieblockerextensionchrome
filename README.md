# Cookie Blocker Extension

## Description

Cookie Blocker is a Chrome extension designed to prevent websites from sharing your cookies and other user data with specified third-party domains such as Facebook, Google, Instagram, Amazon, and more. By blocking these data transmissions, the extension aims to reduce targeted advertising and enhance user privacy.

## Features

- **Block Outgoing Cookies**: Removes `Cookie` headers from requests to specified domains.
- **Block Incoming Cookies**: Removes `Set-Cookie` headers from responses from specified domains.
- **Customizable**: Easily add or remove domains from the block list in `background.js`.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/cookie-blocker-extension.git
   ```

2. **Navigate to the Extension Directory**

   ```bash
   cd cookie-blocker-extension
   ```

3. **Load the Extension in Chrome**

   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** using the toggle switch in the top right corner.
   - Click on **Load unpacked** and select the `cookie-blocker-extension` directory.

## Usage

Once installed, the extension will automatically start blocking cookies and data sharing with the specified domains. To modify the list of blocked domains, edit the `blockedDomains` array in the `background.js` file and reload the extension.

## Permissions

The extension requires the following permissions:

- `webRequest` and `webRequestBlocking`: To intercept and modify network requests.
- `cookies`: To access and modify cookie headers.
- `storage`, `tabs`, `scripting`: Additional permissions for extension functionality.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

MIT License