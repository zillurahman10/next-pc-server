const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

//middlware
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://zillurhero40:GnhL7Qbi6RArPlxQ@cluster0.kn41lpl.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        await client.connect();
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        const componentsCollection = client.db('next-pc').collection('components')
        const cpuCollection = client.db('next-pc').collection('CPU')
        const ramCollection = client.db('next-pc').collection('ram')
        const storageCollection = client.db('next-pc').collection('storage-device')
        const powerSupplyCollection = client.db('next-pc').collection('power-supply')
        const motherboardCollection = client.db('next-pc').collection('motherboard')
        const monitorCollection = client.db('next-pc').collection('monitor')
        const featuredCollection = client.db('next-pc').collection('featured')

        // app.get('/components', async (req, res) => {
        //     const cursor = componentsCollection.find({})
        //     const result = await cursor.toArray()
        //     res.send({
        //         success: true,
        //         message: 'Data retrived done',
        //         data: result
        //     })
        // })

        app.get('/components', async (req, res) => {
            const cursor = componentsCollection.find({})
            const result = await cursor.toArray()
            res.send({
                success: true,
                message: 'Data retrived done',
                data: result
            })
        })

        // app.get('/components/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const result = await componentsCollection.find({ id: '1' }); // Replace 'known_id' with an actual ID from the collection
        //     res.send(result);
        // });

        app.get('/cpu', async (req, res) => {
            const cursor = cpuCollection.find({})
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/cpu/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await cpuCollection.findOne(query)
            res.send(result)
        })

        app.get('/ram', async (req, res) => {
            const cursor = ramCollection.find({})
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/ram/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await ramCollection.findOne(query)
            res.send(result)
        })

        app.get('/motherboard', async (req, res) => {
            const cursor = motherboardCollection.find({})
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/motherboard/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await motherboardCollection.findOne(query)
            res.send(result)
        })

        app.get('/monitor', async (req, res) => {
            const cursor = monitorCollection.find({})
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/monitor/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await monitorCollection.findOne(query)
            res.send(result)
        })

        app.get('/power-supply', async (req, res) => {
            const cursor = powerSupplyCollection.find({})
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/power-supply/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await powerSupplyCollection.findOne(query)
            res.send(result)
        })

        app.get('/storage', async (req, res) => {
            const cursor = storageCollection.find({})
            const result = await cursor.toArray()
            res.send(result)
        })

        app.get('/storage/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await storageCollection.findOne(query)
            res.send(result)
        })

        app.get('/featured', async (req, res) => {
            const cursor = featuredCollection.find({})
            const result = await cursor.toArray()
            res.send(result)
        })


    } finally {
        // You may want to close the MongoDB client connection after each request
        // await client.close();
    }
}

run()

app.get('/', (req, res) => {
    res.send('Welcome to our NEXT-PC server. Lets dip dive into the tech world with NEXT-PC')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})