import { App, Stack, StackProps, Aws } from 'aws-cdk-lib';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    // define resources here...
    new Table(this, 'TestTable', {
      tableName: `${Aws.REGION}_${Aws.ACCOUNT_ID}_TestTable`,
      partitionKey: {
        name: 'pk',
        type: AttributeType.STRING,
      },
    });
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'cdk-integ-testing-dev', { env: devEnv });
// new MyStack(app, 'cdk-integ-testing-prod', { env: prodEnv });

app.synth();