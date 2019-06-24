import { IsNotEmpty, IsBoolean } from 'class-validator';

export class DeathListItem {
    id: number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    reason: string;

    @IsBoolean()
    isDeath: boolean;
}
