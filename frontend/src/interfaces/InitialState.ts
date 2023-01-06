export interface InitialState {
  userData: UserData | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  errorMessage: string | unknown;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  coffeeshop_owned: number;
}
