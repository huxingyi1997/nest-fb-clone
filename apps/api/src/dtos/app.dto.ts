import { ApiProperty, PickType } from '@nestjs/swagger';

export class NewUserDTO {
  @ApiProperty({
    description: 'firstName',
  })
  firstName: string;

  @ApiProperty({
    description: 'lastName',
  })
  lastName: string;

  @ApiProperty({
    description: 'email',
  })
  email: string;

  @ApiProperty({
    description: 'password',
  })
  password: string;
}

export class ExistingUserDTO extends PickType(NewUserDTO, [
  'email',
  'password',
]) {}
