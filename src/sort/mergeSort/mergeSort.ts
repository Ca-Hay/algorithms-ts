import { SortAlgorithm } from "../common";

const mergeSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {

    const mergeSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {
        return mergeSortRecurse(items, 0, items.length - 1);
    }
    
    const mergeSortRecurse = <T> (items: T[], leftpointer: number, rightpointer: number) => {
            //exit if list is one item or less
            if (leftpointer == rightpointer){
                return [items[leftpointer]];
            }
            //if less or equal to one then return
            if (items.length <= 1) {
                return items;
            }
            //splits the list into two.
            let listA = items.slice(0, Math.ceil(items.length /2));
            let listB = items.slice(listA.length, items.length);
    
            //merge both halfs into a sorted list
            let	output_list = [];
            while (listA.length > 0 && listB.length > 0){
                if (listA[0] > listB[0]){
                    output_list.push(listB.shift());
                }
                else if (listA[0] < listB[0]){
                    output_list.push(listA.shift());
                }
            //any numbers left add onto the end of the list
            output_list.push(listA)
           output_list.push(listB)
            }
            return items;
    }
}

export default mergeSort;