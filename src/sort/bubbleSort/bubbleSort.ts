import { SortAlgorithm } from "../common";
import swap from "../swap";

const bubbleSort: SortAlgorithm<any> = <T>(items: T[]): T[] => {
    //makes it easier to read also i dont have to type items.length every 2 seconds
    const arraySize: number = items.length;
    //loops for everything in the array
    for (let i = 0; i < (arraySize - 1); i++) {
        //sets up swap check var
        let swapMade: boolean = false;
        //swaps two items if one is larger than the other
        for (let j = 0; j < (arraySize - i - 1); j++) {
            if (items[j] > items[j + 1]) {
                swapMade = true;
                swap(items, j, j + 1);
            }
        }
        //if no swap is made, exit the sort (it is complete)
        if (!swapMade) {
            break;
        }
    }
    return items;
}

export default bubbleSort;
/*
def bubble_sort(input_list: List[StrOrInt]) -> List[StrOrInt]:
    """"
    Sorts the input list
    Returns a copy of the list sorted, makes no changes to input list
    """
    output_list: List[StrOrInt] = list(input_list)

    # The top points to the highest as yet unsorted position
    for top in range(len(input_list), 1, -1):
        # Use this variable to detect a pass requiring no swaps i.e. list sorted
        swap_made: bool = False

        # The current points to the position to evaluate in this sub iteration
        for current in range(top - 1):
            # Are they in the wrong order?
            if output_list[current] > output_list[current + 1]:
                swap_made = True
                # Temporary variable to prevent overwrites
                swap(output_list, current, current + 1)

        # early exit, list already sorted
        if not swap_made:
            break
    return output_list
*/