import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: 'src/DevToolsPlugin.js',
  output: {
    file: 'build/DevToolsPlugin.js',
    format: 'iife'
  },
  plugins: [
    nodeResolve({
      resolveOnly: ['playwright-chrome-recorder', '@puppeteer/replay']
    })
  ]
}
