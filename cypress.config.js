const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "42b1e47d-ca62-4525-b884-386086a7d533", // You'll replace this with your Cypress Cloud project ID once created
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
})