export interface Owner {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface CoffeeShop {
  name: string;
  owner: string;
  categories: Category[];
}

export interface Category {
  name: string;
  id: number;
  items: Item[];
}

export interface Item {
  name: string;
  category: number;
}
