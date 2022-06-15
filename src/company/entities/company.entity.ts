import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Company extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    comp_name: string;
  
    @Column()
    Address: string;
  
    @Column({ default: true })
    isActive: boolean;
}
