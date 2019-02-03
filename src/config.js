const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-5xl29pscqy4d"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://622ig5znga.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_qtuPsnrVr",
    APP_CLIENT_ID: "5m5p0fd71f2t0u424flulhl9lq",
    IDENTITY_POOL_ID: "us-east-1:30fafd66-3762-478d-a268-afb97ad699cd"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-ca9v0q5zbtx8"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://9c0iugtsvi.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_6Dn3rR5W9",
    APP_CLIENT_ID: "1jfto12015vbqod2ccmqebkroh",
    IDENTITY_POOL_ID: "us-east-1:cf067345-57b7-4691-b548-153b9724068f"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
