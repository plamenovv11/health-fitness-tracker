import { AppDataSource } from "../config/data-source";
import { UserActivity } from "../entities/UserActivity";

export const resolvers = {
    Query: {
        getUserActivities: async (_: any, { userId }: { userId: string }) => {
            return AppDataSource.getRepository(UserActivity).find({ where: { userId } });
        },
    },
};
