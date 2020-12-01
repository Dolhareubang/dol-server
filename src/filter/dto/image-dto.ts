import {IsNotEmpty, IsString} from "class-validator";

class CreateImageDto {
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @IsNotEmpty()
  image: string;
}

export default CreateImageDto;
