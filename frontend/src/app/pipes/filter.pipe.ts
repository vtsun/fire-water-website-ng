import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAndSort'
})
export class FilterPipe implements PipeTransform {
    transform(
        items: any[], 
        searchText: string,
        sortBy: string = '',
        sortOrder: 'asc' | 'desc' = 'asc'
    ): any[] {
        if (!items) return [];
        if (!searchText) return items;

        searchText = searchText.toLowerCase();

        let filteredItems = items.filter((item) =>
            Object.keys(item).some((key) =>
                item[key].toString().toLowerCase().includes(searchText)
            )
        );

        if (sortBy) {
            filteredItems = this.sortItems(filteredItems, sortBy, sortOrder);
        }

        return filteredItems;
    }

    private sortItems(items: any[], sortBy: string, sortOrder: 'asc' | 'desc'): any[] {
        return items.sort((a, b) => {
            const aValue = a[sortBy];
            const bValue = b[sortBy];

            if (aValue < bValue) {
                return sortOrder === 'asc' ? -1 : 1;
            } else if (aValue > bValue) {
                return sortOrder === 'asc' ? 1 : -1;
            } else {
                return 0;
            }
        });
    }
}





