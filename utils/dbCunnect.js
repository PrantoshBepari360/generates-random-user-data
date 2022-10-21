const { MongoClient } = require("mongodb");

function dbCunnect() {
  const uri = process.env.ATLAS_URI;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  async function run() {
    try {
      await client.connect();
      

      console.log("Cunnect db sarver");
    } finally {
      // await client.close();
    }
  }
  run().catch(console.dir);
}

module.exports = dbCunnect;
