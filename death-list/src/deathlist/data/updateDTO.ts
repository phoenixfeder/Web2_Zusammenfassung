import {IsInt, IsBoolean, Min, IsNotEmpty} from 'class-validator';

export class UpdateDTO {
    @IsInt()
    @Min(0)
    id: number;

    @IsBoolean()
    @IsNotEmpty()
    isDeath: boolean;
}
