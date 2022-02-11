import { defineConfig } from 'cypress';

export default defineConfig({
  // TODO(caleb): this will be in the executor to configure
  // baseUrl: 'http://localhost:4200',
  // @ts-ignore
  component: {
    // devServer, // TODO(caleb): this will be in the executor to configure
    specPattern: 'src/app/**/*.cy.{js,jsx,ts,tsx}',
    // supportFile: 'cypress/support/component.ts', // optional
  },
});
