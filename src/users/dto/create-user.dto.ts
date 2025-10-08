import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    user: string

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    surname: string

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    department: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsBoolean()
    status: boolean
}
