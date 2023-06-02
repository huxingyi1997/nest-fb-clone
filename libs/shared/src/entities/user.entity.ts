import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @ApiProperty({
    description: 'User id',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'firstName',
  })
  @Column()
  firstName: string;

  @ApiProperty({
    description: 'lastName',
  })
  @Column()
  lastName: string;

  @ApiProperty({
    description: 'email',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    description: 'password',
  })
  @Column({ select: false })
  password: string;
}
