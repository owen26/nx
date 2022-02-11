import { startDevServer } from '@cypress/webpack-dev-server';

export function nxDevServer(cypressConfig: Cypress.DevServerConfig) {
  const webpackConfig = {};
  return startDevServer({
    webpackConfig,
    options: cypressConfig,
  });
}
