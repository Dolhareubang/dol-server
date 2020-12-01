import {IsNotEmpty, IsString} from "class-validator";

export default class CreateImageDto {
  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}
