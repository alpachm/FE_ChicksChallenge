export interface ISmallDropdownOptions {
    id: number;
    option: string;
}

export interface IDropdown {
    id: number,
    ico: string;
    subtitle: string,
    title: string;
    options: ISmallDropdownOptions[]
}