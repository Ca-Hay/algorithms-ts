import { SortAlgorithm } from "../common";

const mergeSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {
    if (items.length <= 1) return items;
    let left = items.slice(0, items.length / 2);
    let right = items.slice(items.length / 2, items.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}

const merge = (left: any[], right: any[]) => {
    const sorted: any[] = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sorted.push(left.shift());
      } 
      else {
        sorted.push(right.shift());
      }
    }
    return [...sorted, ...left, ...right];
}
   
export default mergeSort;