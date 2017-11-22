// @flow
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

pluginTester({
  title: 'transform console.log',
  plugin,
  snapshot: true,
  tests: [
    {
      title: 'single console.log',
      code: `
    console.log('hello world')
    `,
    },
    {
      title: 'no console.log',
      code: `
    log('hello world')
    `,
    },
  ],
})
