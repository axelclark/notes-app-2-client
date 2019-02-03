export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-axel"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ppca9cif34.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_bEKY8Q9iR",
    APP_CLIENT_ID: "32fcl0hjutbtmpf1c2ln2msaar",
    IDENTITY_POOL_ID: "us-east-1:b361f319-a108-428b-8e5f-65fec61d986a"
  },
  MAX_ATTACHMENT_SIZE: 5000000
};
