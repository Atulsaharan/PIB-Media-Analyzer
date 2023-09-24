const fs = require("fs");
const csv = require("csv-parser");
// const { MongoClient } = require("mongodb");
const bd = require("./utils/dbclient");
const sendEmail = require("./utils/mail");

// require("dotenv").config({ path: "./config.env" });
// // MongoDB connection settings
// const uri = process.env.DATABASE.replace("<password>", process.env.PASSWORD); // Replace with your MongoDB connection string

// const client = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// CSV file path
const csvFilePath = "./data/data.csv"; // Replace with your CSV file path

async function importCSV() {
    try {
        await bd.client.connect();
        console.log("Connected to MongoDB");

        const db = bd.client.db("PIB"); // Use your database name here
        const collection = db.collection("news"); // Replace with your collection name

        const csvStream = fs.createReadStream(csvFilePath).pipe(csv());

        csvStream.on("data", async (row) => {
            // Insert each row from the CSV file into the MongoDB collection
            await collection.insertOne({
                title: row.title,
                content: row.content,
                sentiment: row.sentiment,
                // Add more fields and mappings as needed
            });
            console.log(`Inserted: ${row.title}`);
            if (row.sentiment == -1) {
                //sendinng email
                sendEmail({
                    email: "idanurag567@gmail.com",
                    subject: `Neagtive-News:${row.title}`,
                    message: row.content,
                }).then(console.log("Email sent succesfully"));
            }
        });

        csvStream.on("end", () => {
            console.log("CSV import complete.");
            // client.close(); // Close the MongoDB connection
        });
    } catch (error) {
        console.error("Error:", error);
    }
    // finally {
    //     if (client.topology.isConnected()) {
    //         client.close(); // Close the MongoDB connection in the finally block
    //     }
    // }
}

// Run the CSV import script
importCSV();
