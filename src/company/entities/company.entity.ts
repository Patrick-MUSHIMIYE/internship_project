import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Company extends BaseEntity {
    @PrimaryGeneratedColumn()
    comp_id: number;
  
    @Column()
    Comp_name: string;
  
    @Column()
    Address: string;
  
    @Column({ default: true })
    isActive: boolean;
}
