# Playwright Chrome Recorder Extension

> 🔖 **Playwright Extension for Chrome DevTools Recorder.** <br/>



Add [this Chrome Extension](https://chrome.google.com/webstore/detail/playwright-chrome-recorde/bfnbgoehgplaehdceponclakmhlgjlpd) to export DevTools Recordings as Playwright Tests directly from the [DevTools Recorder Panel](https://goo.gle/devtools-recorder).

## Usage

1. [Create a new recording](https://goo.gle/devtools-recorder#record) via the Recorder panel
2. Hover over the [export](https://goo.gle/devtools-recorder-eference/#export-flows) icon
3. Click "Export as a Cypress Test"
4. Save file as {testName}.cy.{ts.js}

## Testing

1. Clone the repo, run `yarn` and run `yarn build`
2. Visit chrome://extensions
3. Enable "Developer mode" via toggle switch in upper right corner
4. Click "Load unpacked" button in upper left corner
5. Select the `build` directory produced by `yarn build`

## Publishing

After building and testing the extension locally, upload the build folder to Web Store.

# Export in bulk programmatically
Alternatively, use the [playwright-chrome-recorder](https://github.com/andrewusher/playwright-chrome-recorder) CLI to export DevTools Recordings as Playwright Tests in bulk programmatically.
