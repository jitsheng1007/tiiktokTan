const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://jitsheng:Tjs10071007@atlascluster.aqf7tan.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {        //JS: must declare as asynchronous function, else we are not able to use the "await"
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect(); // JS: stay await until the connection made, ping successful ( erorr might occured due to ignore of this steps)
    
    // insert a document into the database (+++++++++++++)
    await client.db("Mybank2U").collection("Tan Jit Sheng").insertOne({ name: "Jitsheng", summary: "A smokey afternoon" });


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

// find a document in the database (+++++++++++++)
    //let result = await client.db("Mybank2U").collection("Tan Jit Sheng").findOne({ name: "Lovely Loft" }).toArray(); // it is possible to find by multiple filters
    //console.log(result)
    // *** findOne is take the first document that match the filter, if we want to find all the document that match the filter, we can use find() instead of findOne()

// update a document in the database (+++++++++++++)
    //let result = await client.db("Mybank2U").collection("Tan Jit Sheng").updateOne({_id: new ObjectId ('66051099b4f23704800f74b3') }, { $set: { name: "MY_NAME", summary: "A charming loft in Paris" } });
    //console.log(result);

// delete a document in the database (+++++++++++++)
    //let result = await client.db("Mybank2U").collection("Tan Jit Sheng").deleteOne({ name: "MY_NAME" });
    //console.log(result);    

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
