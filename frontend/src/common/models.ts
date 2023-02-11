export interface Owner {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface CoffeeShop {
  name: string;
  owner_id: string;
  categories: Category[];
}

export interface Category {
  name: string;
  id: number | undefined;
  items: Item[];
}

export interface Item {
  name: string;
  description: string;
  price: number;
}
