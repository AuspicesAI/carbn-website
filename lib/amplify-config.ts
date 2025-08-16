import { Amplify } from 'aws-amplify';

// Helper to parse comma-separated env values into arrays
function parseList(envValue: string | undefined, fallback: string[]): string[] {
  if (!envValue) return fallback;
  return envValue
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
      userPoolClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!,
      region: process.env.AWS_REGION || 'us-east-1',
      signUpVerificationMethod: 'link' as const,
      // Hosted UI / OAuth configuration for production (auspicesai.com)
      loginWith: {
        oauth: {
          domain:
            process.env.NEXT_PUBLIC_COGNITO_DOMAIN ||
            'auspicesai.auth.us-east-1.amazoncognito.com',
          scopes: ['openid', 'email', 'profile'],
          responseType: 'code' as const,
          redirectSignIn: parseList(
            process.env.NEXT_PUBLIC_COGNITO_REDIRECT_SIGNIN,
            [
              'https://www.auspicesai.com/accounts/cognito/callback/',
            ],
          ),
          redirectSignOut: parseList(
            process.env.NEXT_PUBLIC_COGNITO_REDIRECT_SIGNOUT,
            [
              'https://www.auspicesai.com/',
            ],
          ),
        },
      },
    },
  },
};

Amplify.configure(amplifyConfig);

export default amplifyConfig;
