import { Amplify } from 'aws-amplify';

// Helper to parse comma-separated env values into arrays
function parseList(envValue: string | undefined, fallback: string[]): string[] {
  if (!envValue) return fallback;
  return envValue
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

// Helper to generate both www and non-www variants of URLs
function generateDomainVariants(url: string): string[] {
  const variants = [url];
  
  if (url.includes('://www.')) {
    // If URL has www, add non-www version
    variants.push(url.replace('://www.', '://'));
  } else if (url.includes('://')) {
    // If URL doesn't have www, add www version
    variants.push(url.replace('://', '://www.'));
  }
  
  return variants;
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
          redirectSignIn: (() => {
            const baseUrls = parseList(
              process.env.NEXT_PUBLIC_COGNITO_REDIRECT_SIGNIN,
              ['https://auspicesai.com/accounts/cognito/callback/']
            );
            return baseUrls.flatMap(generateDomainVariants);
          })(),
          redirectSignOut: (() => {
            const baseUrls = parseList(
              process.env.NEXT_PUBLIC_COGNITO_REDIRECT_SIGNOUT,
              ['https://auspicesai.com/']
            );
            return baseUrls.flatMap(generateDomainVariants);
          })(),
        },
      },
    },
  },
};

Amplify.configure(amplifyConfig);

export default amplifyConfig;
