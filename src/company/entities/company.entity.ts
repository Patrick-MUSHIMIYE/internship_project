import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
    @PrimaryGeneratedColumn()
    comp_id: number;
  
    @Column()
    comp_name: string;
  
    @Column()
    Address: string;
  
    @Column({ default: true })
    isActive: boolean;
}
