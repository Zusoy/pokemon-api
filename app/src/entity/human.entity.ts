import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";
import { Box } from "./box.entity";

@Entity()
export class Human
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type => Box, box => box.id)
    boxes: Box[];
}
