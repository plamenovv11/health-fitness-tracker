import express from "express";
import { ApolloServer } from "apollo-server-express";
import { AppDataSource } from "./config/data-source";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers/userActivityResolver";

const startServer = async () => {
    try {
        await AppDataSource.initialize();
        console.log("🚀 Database connected successfully");

        const app = express();

        const server = new ApolloServer({
            typeDefs,
            resolvers,
        });

        await server.start();
        server.applyMiddleware({ app });

        const PORT = 4000;
        app.listen(PORT, () => {
            console.log(`🚀 Server is running at http://localhost:${PORT}/graphql`);
        });
    } catch (error) {
        console.error("❌ Error starting the server:", error);
        process.exit(1);
    }
};

(async () => {
    await startServer();
})();
