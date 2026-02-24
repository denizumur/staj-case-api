import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { MembershipType } from '../enums/membership-type.enum';
import { Status } from '../enums/status.enum';

@Entity('gym_members')
export class User {
  @PrimaryGeneratedColumn()
  id!: number; // Ünlem eklendi

  @Column()
  name!: string; // Ünlem eklendi

  @Column({ unique: true })
  email!: string; // Ünlem eklendi

  @Column({ type: 'varchar', default: MembershipType.MONTHLY })
  membershipType!: MembershipType; // Ünlem eklendi

  @Column({ type: 'varchar', default: Status.ACTIVE })
  status!: Status; // Ünlem eklendi

  @Column({ type: 'datetime', nullable: true })
  subscriptionEndDate!: Date; // Ünlem eklendi
}
