import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {
    id: number

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

    status: boolean

    created_at: Date

    updated_at: Date
}
