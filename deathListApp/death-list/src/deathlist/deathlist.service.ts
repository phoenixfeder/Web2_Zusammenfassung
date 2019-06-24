import { Injectable, NotFoundException } from '@nestjs/common';
import { DeathListItem } from './data/deathListItem';

@Injectable()
export class DeathlistService {
    private counter: number = 0;
    private deathList: DeathListItem[] = [];

    getAll(): DeathListItem[] {
        return this.deathList;
    }

    get(id: number): DeathListItem {
        const found = this.deathList.find(item => item.id === id);
        if (found) { // Thuthy
            return found;
        }

        throw new NotFoundException();
    }

    add(deathListItem: DeathListItem): DeathListItem {
        deathListItem.id = this.counter++;
        this.deathList.push(deathListItem);
        return deathListItem;
    }

    delete(id: number): void {
        const found = this.deathList.find(item => item.id === id);
        if (!found) {
            throw new NotFoundException();
        }
        this.deathList = this.deathList.filter(item => item.id !== id);
    }

    update(id: number, isDeath: boolean): DeathListItem {
        const deathListItem = this.deathList.find(item => item.id === id);
        deathListItem.isDeath = isDeath;
        return deathListItem;
    }

}
