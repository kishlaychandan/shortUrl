import { set, connect } from 'mongoose';

const connectDB = async () => {
    console.log("Connecting to MongoDB...");

    // Disable strict query mode
    set("strictQuery", false);

    try {
        // Directly use the MongoDB URI instead of an environment variable
        const conn = await connect("mongodb://127.0.0.1:27017/shortUrl");


        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process on failure
    }
};

export default connectDB;
