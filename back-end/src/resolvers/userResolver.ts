import jwt from "jsonwebtoken";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";
import { hashPassword, verifyPassword } from "../utils/helpers";

const JWT_SECRET = "your_secret_key";

export const resolvers = {
    Query: {
        login: async (
            _: unknown,
            { username, password }: { username: string; password: string }
        ) => {
            const userRepo = AppDataSource.getRepository(User);
            const user = await userRepo.findOne({ where: { username } });

            if (!user || !(await verifyPassword(password, user.password))) {
                throw new Error("Invalid username or password");
            }

            const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
            return { user, token };
        },
    },

    Mutation: {
        register: async (
            _: unknown,
            { username, email, password }: { username: string; email: string; password: string }
        ) => {
            const userRepo = AppDataSource.getRepository(User);
            const hashedPassword = await hashPassword(password);

            const newUser = userRepo.create({
                username,
                email,
                password: hashedPassword,
            });

            await userRepo.save(newUser);
            return newUser;
        },
    },
};
