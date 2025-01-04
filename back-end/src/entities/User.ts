import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserActivity } from "./UserActivity";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ unique: true })
    username!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @OneToMany(() => UserActivity, (activity: UserActivity) => activity.userId)
    activities!: UserActivity[];
}
