import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'otp' })
export class Otp {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: string

    @Column()
    expired: boolean

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}