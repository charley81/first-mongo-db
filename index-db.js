const { MongoClient, ServerApiVersion } = require('mongodb')
// connection string
const uri =
  'mongodb+srv://charley81:<password>@test-cluster0.n8gibu3.mongodb.net/?retryWrites=true&w=majority'
// get client
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})
// connect to client
client.connect(err => {
  const collection = client.db('test').collection('devices')
  // perform actions on the collection object
  client.close()
})
