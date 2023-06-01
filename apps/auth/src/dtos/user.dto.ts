import { OmitType, PickType } from '@nestjs/swagger';

import { UserEntity } from '../user.entity';

export class NewUserDTO extends OmitType(UserEntity, ['id']) {}

export class ExistingUserDTO extends PickType(UserEntity, [
  'email',
  'password',
]) {}
