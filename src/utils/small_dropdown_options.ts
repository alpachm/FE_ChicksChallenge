import {IDropdown, ISmallDropdownOptions} from "../interfaces/small_dropdown_options.interface";

export const price_options: ISmallDropdownOptions[] = [
    {
        id: 1,
        option: "20$"
    },
    {
        id: 2,
        option: "50$"
    },
    {
        id: 3,
        option: "100$"
    }
]

export const item_type_options: ISmallDropdownOptions[] = [
    {
        id: 1,
        option: "Type 1"
    },
    {
        id: 2,
        option: "Type 2"
    },
    {
        id: 3,
        option: "Type 3"
    }
]

export const dropdown_options: IDropdown[] = [
    {
        id: 1,
        ico: "fa-solid fa-sack-dollar",
        subtitle: "Price",
        title: "All",
        options: price_options
    },
    {
        id: 2,
        ico: "fa-solid fa-feather-pointed",
        subtitle: "Item type",
        title: "All",
        options: item_type_options
    }
]