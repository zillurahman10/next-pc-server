const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

//middlware
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://zillurhero40:GnhL7Qbi6RArPlxQ@cluster0.kn41lpl.mongodb.net/?retryWrites=true&w=majority";

// const uri = "mongodb+srv://zillurhero40:GnhL7Qbi6RArPlx@cluster0.kn41lpl.mongodb.net/?retryWrites=true&w=majority";


const cpu = [
    {
        img: 'https://www.startech.com.bd/image/cache/catalog/processor/Intel/i3-10100/i3-10100-500x500.jpg',
        name: 'Intel 10th Gen Core i3 10100 Processor',
        category: 'CPU/Processor',
        status: 'In Stock',
        price: '11,800৳',
        spec: [
            basicInfo = [
                {
                    infoName: 'Base Frequency',
                    infoDetails: '3.60 GHz'
                },
                {
                    infoName: 'Maximum Turbo Frequency',
                    infoDetails: '4.30 GHz'
                },
                {
                    infoName: 'Cache',
                    infoDetails: '6 MB SmartCache'
                },
                {
                    infoName: 'Cores',
                    infoDetails: '4'
                },
                {
                    infoName: 'Threads',
                    infoDetails: '8'
                },
                {
                    infoName: 'Default TDP',
                    infoDetails: '65 W'
                }
            ],
            memorySpec = [
                {
                    infoName: 'Maximum Size',
                    infoDetails: '128 GB'
                },
                {
                    infoName: 'Maximum Speed',
                    infoDetails: '41.6 GB/s'
                },
                {
                    infoName: 'Type',
                    infoDetails: 'DDR4-2666'
                },
                {
                    infoName: 'Max Number of Channels',
                    infoDetails: '2'
                }
            ],
            graphicsSpecifications = [
                {
                    infoName: 'Processor Graphics',
                    infoDetails: 'Intel UHD Graphics 630'
                },
                {
                    infoName: 'Base Frequency',
                    infoDetails: '350 MHz'
                },
                {
                    infoName: 'Max Dynamic Frequency',
                    infoDetails: '1.10 GHz'
                },
                {
                    infoName: 'Max Video Memory',
                    infoDetails: '64 GB'
                },
                {
                    infoName: 'Max Resolution',
                    infoDetails: 'Max Resolution (HDMI 1.4): 4096 x 2160 @30Hz'
                },
            ],
            warrantyInfo = [
                {
                    infoName: 'Manufacturing Warranty',
                    infoDetails: '03 Years (No Warranty for Fan or Cooler)'
                }
            ]
        ],
        description: [
            {
                title: 'Intel 10th Gen Core i3 10100 Processor',
                details: 'This processor comes with a new breed that come with an enabled integrated GPU, so a separate graphics card is not required for its functionality. This new 10th gen Comet Lake microarchitecture is manufactured with the 14nm process that comes with four cores but lacks in HyperThreading. As this chip is updated to the latest BIOS revision, it nicely fits into any Intel 300-series motherboard. Focusing on this, all the major motherboard manufacturers have already started BIOS updates for their 300-series lineup'
            },
            {
                title: 'Core Benefits of the Processor',
                details: 'Intel 9th Generation Core i3-10100 Processor having the base frequency of 3.60 GHz that can be reached as max turbo frequency at 4.30 GHz. It has the L3 SmartCache of 6 MB containing 4 cores and 8 threads. With a bus speed of 8 GT/s, it has thermal design power (TDP) rating of 65W. This latest microchip has few expansion options such 3.0 PCI express revision having configured up to 1x16, 2x8, 1x8+2x4 and maximum 16 lanes. Considering the memory this processor has dual channel of max 128GB of size that supports up to DDR4-2666 bus speed.'
            },
            {
                title: 'Advanced Facilities',
                details: 'On the process of advance technology this processor has 2.0 Intel turbo boost and Intel virtualization that is directed to I/O (VT-d). This Optane Memory supported chip also has Intel VT-x with extended page tables (EPT). Furthermore, Enhanced Intel SpeedStep and Intel Identity Protection Technology are integrated to increase its efficiency. Enjoy this latest processor at best price with 03 years of warranty facility (No Warranty for Fan or Cooler).'
            },
        ],
        keyFeatures: [
            {
                title: 'Brand',
                details: 'Intel'
            },
            {
                title: 'Model',
                details: 'Intel Core i3 10100'
            }
        ],
        individualRating: '4 out of 5',
        AvarageRating: '3.5 out of 5',
        review: [
            {
                name: 'John Smith',
                review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
            },
            {
                name: 'Alex Kalvin',
                review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
            },
            {
                name: 'Jonny English',
                review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
            },
        ]
    },
    {
        img: 'https://www.startech.com.bd/image/cache/catalog/processor/Intel/i3-10100/i3-10100-500x500.jpg',
        name: 'Intel 10th Gen Core i3 10100 Processor',
        category: 'CPU/Processor',
        status: 'In Stock',
        price: '11,800৳',
        spec: [
            basicInfo = [
                {
                    infoName: 'Base Frequency',
                    infoDetails: '3.60 GHz'
                },
                {
                    infoName: 'Maximum Turbo Frequency',
                    infoDetails: '4.30 GHz'
                },
                {
                    infoName: 'Cache',
                    infoDetails: '6 MB SmartCache'
                },
                {
                    infoName: 'Cores',
                    infoDetails: '4'
                },
                {
                    infoName: 'Threads',
                    infoDetails: '8'
                },
                {
                    infoName: 'Default TDP',
                    infoDetails: '65 W'
                }
            ],
            memorySpec = [
                {
                    infoName: 'Maximum Size',
                    infoDetails: '128 GB'
                },
                {
                    infoName: 'Maximum Speed',
                    infoDetails: '41.6 GB/s'
                },
                {
                    infoName: 'Type',
                    infoDetails: 'DDR4-2666'
                },
                {
                    infoName: 'Max Number of Channels',
                    infoDetails: '2'
                }
            ],
            graphicsSpecifications = [
                {
                    infoName: 'Processor Graphics',
                    infoDetails: 'Intel UHD Graphics 630'
                },
                {
                    infoName: 'Base Frequency',
                    infoDetails: '350 MHz'
                },
                {
                    infoName: 'Max Dynamic Frequency',
                    infoDetails: '1.10 GHz'
                },
                {
                    infoName: 'Max Video Memory',
                    infoDetails: '64 GB'
                },
                {
                    infoName: 'Max Resolution',
                    infoDetails: 'Max Resolution (HDMI 1.4): 4096 x 2160 @30Hz'
                },
            ],
            warrantyInfo = [
                {
                    infoName: 'Manufacturing Warranty',
                    infoDetails: '03 Years (No Warranty for Fan or Cooler)'
                }
            ]
        ],
        description: [
            {
                title: 'Intel 10th Gen Core i3 10100 Processor',
                details: 'This processor comes with a new breed that come with an enabled integrated GPU, so a separate graphics card is not required for its functionality. This new 10th gen Comet Lake microarchitecture is manufactured with the 14nm process that comes with four cores but lacks in HyperThreading. As this chip is updated to the latest BIOS revision, it nicely fits into any Intel 300-series motherboard. Focusing on this, all the major motherboard manufacturers have already started BIOS updates for their 300-series lineup'
            },
            {
                title: 'Core Benefits of the Processor',
                details: 'Intel 9th Generation Core i3-10100 Processor having the base frequency of 3.60 GHz that can be reached as max turbo frequency at 4.30 GHz. It has the L3 SmartCache of 6 MB containing 4 cores and 8 threads. With a bus speed of 8 GT/s, it has thermal design power (TDP) rating of 65W. This latest microchip has few expansion options such 3.0 PCI express revision having configured up to 1x16, 2x8, 1x8+2x4 and maximum 16 lanes. Considering the memory this processor has dual channel of max 128GB of size that supports up to DDR4-2666 bus speed.'
            },
            {
                title: 'Advanced Facilities',
                details: 'On the process of advance technology this processor has 2.0 Intel turbo boost and Intel virtualization that is directed to I/O (VT-d). This Optane Memory supported chip also has Intel VT-x with extended page tables (EPT). Furthermore, Enhanced Intel SpeedStep and Intel Identity Protection Technology are integrated to increase its efficiency. Enjoy this latest processor at best price with 03 years of warranty facility (No Warranty for Fan or Cooler).'
            },
        ],
        keyFeatures: [
            {
                title: 'Brand',
                details: 'Intel'
            },
            {
                title: 'Model',
                details: 'Intel Core i3 10100'
            }
        ],
        individualRating: '4 out of 5',
        AvarageRating: '3.5 out of 5',
        review: [
            {
                name: 'John Smith',
                review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
            },
            {
                name: 'Alex Kalvin',
                review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
            },
            {
                name: 'Jonny English',
                review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
            },
        ]
    },
    {
        img: 'https://www.startech.com.bd/image/cache/catalog/processor/Intel/i3-10100/i3-10100-500x500.jpg',
        name: 'Intel 10th Gen Core i3 10100 Processor',
        category: 'CPU/Processor',
        status: 'In Stock',
        price: '11,800৳',
        spec: [
            basicInfo = [
                {
                    infoName: 'Base Frequency',
                    infoDetails: '3.60 GHz'
                },
                {
                    infoName: 'Maximum Turbo Frequency',
                    infoDetails: '4.30 GHz'
                },
                {
                    infoName: 'Cache',
                    infoDetails: '6 MB SmartCache'
                },
                {
                    infoName: 'Cores',
                    infoDetails: '4'
                },
                {
                    infoName: 'Threads',
                    infoDetails: '8'
                },
                {
                    infoName: 'Default TDP',
                    infoDetails: '65 W'
                }
            ],
            memorySpec = [
                {
                    infoName: 'Maximum Size',
                    infoDetails: '128 GB'
                },
                {
                    infoName: 'Maximum Speed',
                    infoDetails: '41.6 GB/s'
                },
                {
                    infoName: 'Type',
                    infoDetails: 'DDR4-2666'
                },
                {
                    infoName: 'Max Number of Channels',
                    infoDetails: '2'
                }
            ],
            graphicsSpecifications = [
                {
                    infoName: 'Processor Graphics',
                    infoDetails: 'Intel UHD Graphics 630'
                },
                {
                    infoName: 'Base Frequency',
                    infoDetails: '350 MHz'
                },
                {
                    infoName: 'Max Dynamic Frequency',
                    infoDetails: '1.10 GHz'
                },
                {
                    infoName: 'Max Video Memory',
                    infoDetails: '64 GB'
                },
                {
                    infoName: 'Max Resolution',
                    infoDetails: 'Max Resolution (HDMI 1.4): 4096 x 2160 @30Hz'
                },
            ],
            warrantyInfo = [
                {
                    infoName: 'Manufacturing Warranty',
                    infoDetails: '03 Years (No Warranty for Fan or Cooler)'
                }
            ]
        ],
        description: [
            {
                title: 'Intel 10th Gen Core i3 10100 Processor',
                details: 'This processor comes with a new breed that come with an enabled integrated GPU, so a separate graphics card is not required for its functionality. This new 10th gen Comet Lake microarchitecture is manufactured with the 14nm process that comes with four cores but lacks in HyperThreading. As this chip is updated to the latest BIOS revision, it nicely fits into any Intel 300-series motherboard. Focusing on this, all the major motherboard manufacturers have already started BIOS updates for their 300-series lineup'
            },
            {
                title: 'Core Benefits of the Processor',
                details: 'Intel 9th Generation Core i3-10100 Processor having the base frequency of 3.60 GHz that can be reached as max turbo frequency at 4.30 GHz. It has the L3 SmartCache of 6 MB containing 4 cores and 8 threads. With a bus speed of 8 GT/s, it has thermal design power (TDP) rating of 65W. This latest microchip has few expansion options such 3.0 PCI express revision having configured up to 1x16, 2x8, 1x8+2x4 and maximum 16 lanes. Considering the memory this processor has dual channel of max 128GB of size that supports up to DDR4-2666 bus speed.'
            },
            {
                title: 'Advanced Facilities',
                details: 'On the process of advance technology this processor has 2.0 Intel turbo boost and Intel virtualization that is directed to I/O (VT-d). This Optane Memory supported chip also has Intel VT-x with extended page tables (EPT). Furthermore, Enhanced Intel SpeedStep and Intel Identity Protection Technology are integrated to increase its efficiency. Enjoy this latest processor at best price with 03 years of warranty facility (No Warranty for Fan or Cooler).'
            },
        ],
        keyFeatures: [
            {
                title: 'Brand',
                details: 'Intel'
            },
            {
                title: 'Model',
                details: 'Intel Core i3 10100'
            }
        ],
        individualRating: '4 out of 5',
        AvarageRating: '3.5 out of 5',
        review: [
            {
                name: 'John Smith',
                review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
            },
            {
                name: 'Alex Kalvin',
                review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
            },
            {
                name: 'Jonny English',
                review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
            },
        ]
    },
]

const motherboard = [
    {
        img: 'https://www.startech.com.bd/image/cache/catalog/motherboard/gigabyte/ga-h81m-ds2/ga-h81m-ds2-1-500x500.jpg',
        name: 'Gigabyte GA-H81M-DS2 Micro ATX Motherboard',
        category: 'Motherboard',
        status: 'In Stock',
        price: '7,800৳',
        spec: [
            basicInfo = [
                {
                    infoName: 'Supported CPU',
                    infoDetails: 'Support for Intel® Core™ i7 processors/Intel® Core™ i5 processors/Intel® Core™ i3 processors/Intel® Pentium® processors/Intel® Celeron® processors in the LGA1150 package L3 cache varies with CPU'
                },
                {
                    infoName: 'Chipset',
                    infoDetails: 'Intel® H81 Express'
                },
                {
                    infoName: 'BIOS',
                    infoDetails: '2 x 64 Mbit flash Use of licensed AMI EFI BIOS Support for DualBIOS™ PnP 1.0a, DMI 2.7, WfM 2.0, SM BIOS 2.7, ACPI 5.0'
                },
                {
                    infoName: 'Form Factor',
                    infoDetails: 'Micro ATX Form Factor; 22.6cm x 17cm'
                }
            ]

        ],
        keyFeatures: [
            {
                title: 'Brand',
                details: 'GIGABYTE'
            },
            {
                title: 'Model',
                details: 'GA-H81M-DS2'
            },
            {
                title: 'CPU',
                details: '4th Generation Intel Processors'
            },
            {
                title: 'Chipset',
                details: 'Intel H81 Express'
            }
        ],
        individualRating: '4 out of 5',
        AvarageRating: '3.5 out of 5',
        review: [
            {
                name: 'John Smith',
                review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
            },
            {
                name: 'Alex Kalvin',
                review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
            },
            {
                name: 'Jonny English',
                review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
            },
        ]
    },
    {
        img: 'https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/h81m-vg4-r4-0/h81m-vg4-r4-0-01-500x500.jpg',
        name: 'ASRock H81M-VG4 R4.0 4th Gen Micro ATX Motherboard',
        category: 'Motherboard',
        status: 'In Stock',
        price: '8,000৳',
        spec: [
            basicInfo = [
                {
                    infoName: 'Supported CPU',
                    infoDetails: 'Supports New 4th and 4th Generation Intel Core i7/i5/i3/Xeon/Pentium/Celeron Processors (Socket 1150) Supports Intel Turbo Boost 2.0 Technology'
                },
                {
                    infoName: 'Chipset',
                    infoDetails: 'Intel H81'
                },
                {
                    infoName: 'BIOS',
                    infoDetails: '32Mb AMI UEFI Legal BIOS with multilingual GUI support ACPI 1.1 Compliant wake up events SMBIOS 2.3.1 support CPU, DRAM Voltage multi-adjustment'
                },
                {
                    infoName: 'Form Factor',
                    infoDetails: 'Micro ATX Form Factor: 7.5-in x 6.7-in, 19.1 cm x 17.0 cm Solid Capacitor design'
                },
                {
                    infoName: 'Audio',
                    infoDetails: '7.1 CH HD Audio (Realtek ALC887/897 Audio Codec) Supports Surge Protection'
                }
            ]

        ],
        keyFeatures: [
            {
                title: 'Brand',
                details: 'ASRock'
            },
            {
                title: 'Model',
                details: 'H81M-VG4 R4.0'
            },
            {
                title: 'Supports',
                details: '4th Generation Intel Core Processors (Socket 1150)'
            },
            {
                title: 'Supports',
                details: 'Dual Channel DDR3 1600'
            },
            {
                title: 'Graphic Output',
                details: 'D-Sub'
            }
        ],
        individualRating: '4 out of 5',
        AvarageRating: '3.5 out of 5',
        review: [
            {
                name: 'John Smith',
                review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
            },
            {
                name: 'Alex Kalvin',
                review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
            },
            {
                name: 'Jonny English',
                review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
            },
        ]
    },
    {
        img: 'https://www.startech.com.bd/image/cache/catalog/motherboard/asrock/h81m-vg4-r4-0/h81m-vg4-r4-0-01-500x500.jpg',
        name: 'ASRock H81M-VG4 R4.0 4th Gen Micro ATX Motherboard',
        category: 'Motherboard',
        status: 'In Stock',
        price: '8,000৳',
        spec: [
            basicInfo = [
                {
                    infoName: 'Supported CPU',
                    infoDetails: 'Supports New 4th and 4th Generation Intel Core i7/i5/i3/Xeon/Pentium/Celeron Processors (Socket 1150) Supports Intel Turbo Boost 2.0 Technology'
                },
                {
                    infoName: 'Chipset',
                    infoDetails: 'Intel H81'
                },
                {
                    infoName: 'BIOS',
                    infoDetails: '32Mb AMI UEFI Legal BIOS with multilingual GUI support ACPI 1.1 Compliant wake up events SMBIOS 2.3.1 support CPU, DRAM Voltage multi-adjustment'
                },
                {
                    infoName: 'Form Factor',
                    infoDetails: 'Micro ATX Form Factor: 7.5-in x 6.7-in, 19.1 cm x 17.0 cm Solid Capacitor design'
                },
                {
                    infoName: 'Audio',
                    infoDetails: '7.1 CH HD Audio (Realtek ALC887/897 Audio Codec) Supports Surge Protection'
                }
            ]

        ],
        keyFeatures: [
            {
                title: 'Brand',
                details: 'ASRock'
            },
            {
                title: 'Model',
                details: 'H81M-VG4 R4.0'
            },
            {
                title: 'Supports',
                details: '4th Generation Intel Core Processors (Socket 1150)'
            },
            {
                title: 'Supports',
                details: 'Dual Channel DDR3 1600'
            },
            {
                title: 'Graphic Output',
                details: 'D-Sub'
            }
        ],
        individualRating: '4 out of 5',
        AvarageRating: '3.5 out of 5',
        review: [
            {
                name: 'John Smith',
                review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
            },
            {
                name: 'Alex Kalvin',
                review: 'I cannot believe my eyes how outstanding perfomance it gives me. Just love it.'
            },
            {
                name: 'Jonny English',
                review: 'This product is just wow. I cannot believe my eyes how outstanding perfomance it gives me.'
            },
        ]
    },
]

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



        app.get('/components', async (req, res) => {
            const cursor = componentsCollection.find({})
            const result = await cursor.toArray()
            res.send({
                success: true,
                message: 'Data retrived done',
                data: result
            })
        })

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

    }
}

run()

app.get('/', (req, res) => {
    res.send('Welcome to our NEXT-PC server. Lets dip dive into the tech world with NEXT-PC')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})