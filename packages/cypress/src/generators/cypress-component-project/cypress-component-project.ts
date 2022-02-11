import { CypressComponentProjectSchema } from './schema';
import {
  addDependenciesToPackageJson,
  formatFiles,
  generateFiles,
  joinPathFragments,
  readProjectConfiguration,
  Tree,
  addProjectConfiguration,
} from '@nrwl/devkit';
import { join } from 'path';

export async function cypressComponentProject(
  tree: Tree,
  options: CypressComponentProjectSchema
) {
  // TODO what validation needs to be in place?
  //  make sure they are using > 10 for cypress component tests
  //  can't add to e2e project?
  //

  // TODO: normalize options

  // create cypress files
  // TODO(caleb): prevent creating compile ts files. oops
  const projectConfig = readProjectConfiguration(tree, options.project);
  generateFiles(tree, join(__dirname, 'files'), projectConfig.root, {
    ...options,
    ext: '',
  }); // TODO what substitutions need to be made?

  // add target to project

  projectConfig.targets['test-cmp'] = {
    executor: '@nrwl/cypress:cypress',
    options: {
      cypressConfig: joinPathFragments(projectConfig.root, 'cypress.config.ts'),
      testingType: 'component',
    },
  };

  addProjectConfiguration(tree, options.project, projectConfig);

  // install cypress component-test stuff
  const installDeps = addDependenciesToPackageJson(
    tree,
    {},
    {
      // TODO: make versions const
      '@cypress/react': '^5.12.1',
      '@cypress/webpack-dev-server': '^1.8.0',
    }
  );

  return () => {
    formatFiles(tree);
    installDeps?.();
  };
}
