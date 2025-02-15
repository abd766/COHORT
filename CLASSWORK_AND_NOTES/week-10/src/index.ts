import { Client } from 'pg'

const client = new Client({
    connectionString: "postgresql://Abd766_owner:71FUuMeGiasA@ep-blue-lab-a55efqa2.us-east-2.aws.neon.tech/Abd766?sslmode=require"
})

async function insertData() {
    try {
        await client.connect(); // Ensure client connection is established
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('Abd', 'abd@gmail.com', '123456');";
        const res = await client.query(insertQuery);
        console.log('Insertion success:', res); // Output insertion result
      } catch (err) {
        console.error('Error during the insertion:', err);
      } finally {
        await client.end(); // Close the client connection
      }
    }
    


insertData();
