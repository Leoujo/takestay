export interface User {
  id: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
}

export interface CoffeeShop {
  logo_url: string;
  name: string;
  owner: string;
}
