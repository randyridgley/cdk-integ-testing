import { awscdk } from 'projen';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-integ-testing',
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    "@aws-cdk/integ-runner",
    "@aws-cdk/integ-tests-alpha",
  ],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  experimentalIntegRunner: true,
});
project.synth();