import {
  playwrightStringifyChromeRecording,
  stringifyParsedStep
} from 'playwright-chrome-recorder'

class RecorderPlugin {
  async stringify(recording) {
    return await playwrightStringifyChromeRecording(JSON.stringify(recording))
  }

  async stringifyStep(step) {
    return await stringifyParsedStep(step)
  }
}

/* eslint-disable no-undef */
chrome.devtools.recorder.registerRecorderExtensionPlugin(
  new RecorderPlugin(),
  /* name=*/ 'Playwright Test',
  /* mediaType=*/ 'application/javascript'
)
