import { Amplify } from 'aws-amplify';

const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!,
      region: process.env.AWS_REGION || 'us-east-1',
      signUpVerificationMethod: 'link' as const,
    },
  },
};

Amplify.configure(amplifyConfig);

export default amplifyConfig;
