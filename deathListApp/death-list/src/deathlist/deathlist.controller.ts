import { Controller, Get, Param, ParseIntPipe, Post, Body, ValidationPipe, Put, Delete } from '@nestjs/common';
import { DeathlistService } from './deathlist.service';
import { DeathListItem } from './data/deathListItem';
import { UpdateDTO } from './data/updateDTO';

@Controller()
export class DeathlistController {
    constructor(private deathListService: DeathlistService) {}

    @Get()
    getList(): DeathListItem[] {
        return this.deathListService.getAll();
    }

    @Get('/:id')
    get(@Param('id', ParseIntPipe) id: number): DeathListItem {
        return this.deathListService.get(id);
    }

    @Post()
    add(@Body(ValidationPipe) deathListItem: DeathListItem): DeathListItem {
        return this.deathListService.add(deathListItem);
    }

    @Put()
    update(@Body(ValidationPipe) updateDTO: UpdateDTO): DeathListItem {
        return this.deathListService.update(updateDTO.id, updateDTO.isDeath);
    }

    @Delete('/:id')
    delete(@Param('id', ParseIntPipe) id: number): void {
        this.deathListService.delete(id);
    }
}
