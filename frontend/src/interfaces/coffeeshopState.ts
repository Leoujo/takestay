export interface CoffeeshopState {
  coffeeshopData: Coffeeshop | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string | unknown;
}

export interface Coffeeshop {
  name: string;
  file?: string;
  creatorId: string;
  id?: string;
  categories: Categories[];
}

export interface Categories {
  _id: string;
  name: string;
  items: CategoryItem[];
}

export interface CategoryItem {
  file?: HTMLImageElement;
  name: string;
  description: string;
}
