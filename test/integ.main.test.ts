import { MyStack } from "../src/main";
import { App } from 'aws-cdk-lib';
import { IntegTest } from '@aws-cdk/integ-tests-alpha';

const app = new App();
const testCase = new MyStack(app, 'IntegStackTest');

new IntegTest(app, 'TestTableCreation', {
  testCases: [testCase],
});

app.synth();