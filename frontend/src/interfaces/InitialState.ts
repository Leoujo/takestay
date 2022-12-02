export interface InitialState {
    user: string | null;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    errorMessage: string | unknown
  }