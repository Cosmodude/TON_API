import { Entity, Column } from "typeorm"

@Entity()
export class User {
    @Column()
    name: string;

    @Column()
    address: string;
    
    @Column()
    profitShare: number;

}
