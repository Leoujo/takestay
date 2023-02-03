export interface User {
  id: string;
  name: string;
  email: string;
  coffeeShop: null | CoffeeShop;
  isLoggedIn: boolean;
}

export interface CoffeeShop {
  name: string;
  owner: string;
}
