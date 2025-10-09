import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'departments' })
export class Department {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    department: string

    @Column({ default: '' })
    description: string

    @Column({ default: true })
    isActive: boolean

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}
