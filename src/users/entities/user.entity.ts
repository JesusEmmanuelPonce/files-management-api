import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user: string

    @Column()
    name: string

    @Column()
    surname: string

    @Column({ unique: true })
    email: string

    @Column()
    department: string

    @Column()
    password: string

    @Column({ default: true })
    status: boolean

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}
