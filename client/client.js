const grpc = require('grpc')
const PROTO_PATH = 'proto/config.proto'
const ConfigService = grpc.load(PROTO_PATH).ConfigService
const client = new ConfigService('localhost:50051',
  grpc.credentials.createInsecure())
module.exports = client
