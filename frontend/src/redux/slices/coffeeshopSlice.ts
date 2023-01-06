import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Coffeeshop, CoffeeshopState } from "../../interfaces/coffeeshopState";
import coffeeshopService from "../../services/coffeeshopService";

const initialState: CoffeeshopState = {
  coffeeshopData: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getUserCoffeeshop = createAsyncThunk("coffeeshop/getUserCoffeeshop", async (creatorId: number, thunkAPI) => {
  try {
    return await coffeeshopService.getOne(creatorId);
  } catch (error) {
    return thunkAPI.rejectWithValue("unable to get coffeeshop");
  }
});

export const createUserCoffeeshop = createAsyncThunk("coffeeshop/createUserCoffeeshop", async (coffeeshopRawData: any, thunkAPI) => {
  let userData = localStorage.getItem("userData") || "";
  let userDataJson = JSON.parse(userData);

  // Upload image to firebase and get its url.
  // uploapImgToFirebase(coffeeshopRawData.file)
  //   .then((imgUrl: string) => {
  //     const coffeeshopData: Coffeeshop = {
  //       name: coffeeshopRawData.name,
  //       file: imgUrl,
  //       creatorId: userDataJson._id,
  //       categories: [],
  //     };
  //     try {
  //       console.log(imgUrl)
  //       return coffeeshopService.register(coffeeshopData);
  //     } catch (error) {
  //       return thunkAPI.rejectWithValue("unable to get coffeeshop");
  //     }
  //   })
  //   .catch(() => {
  //     return thunkAPI.rejectWithValue("Unable to upload picture");
  //   });
  const coffeeshopData: Coffeeshop = {
    name: coffeeshopRawData.name,
    // file: imgUrl,
    creatorId: userDataJson._id,
    categories: [],
  };
  try {
    return coffeeshopService.register(coffeeshopData);
  } catch (error) {
    return thunkAPI.rejectWithValue("unable to get coffeeshop");
  }
});

export const createUserCoffeeshopCategory = createAsyncThunk("coffeeshop/createCategory", async (data: any, thunkAPI) => {
  const { name, coffeeshopId } = data;
  try {
    return await coffeeshopService.registerCategory(name, coffeeshopId);
  } catch (error) {
    return thunkAPI.rejectWithValue("unable to create coffeeshop category");
  }
});

export const deleteUserCoffeeshoCategory = createAsyncThunk("/coffeeshop/deleteCategory", async (data: any, thunkAPI) => {
  const { coffeeshopId, categoryId } = data;
  try {
    return await coffeeshopService.deleteCategory(coffeeshopId, categoryId);
  } catch (error) {
    return thunkAPI.rejectWithValue("unable to create coffeeshop category");
  }
});

export const createUserCoffeeshopCategoryItem = createAsyncThunk("coffeeshop/createItem", async (data: any, thunkAPI) => {
  const dataItem = {
    name: data.name,
    file: data.file,
    description: data.description,
  };
  const { coffeeshopId, categoryId } = data;
  try {
    return await coffeeshopService.registerItem(dataItem, coffeeshopId, categoryId);
  } catch (error) {
    return thunkAPI.rejectWithValue("unable to create coffeeshop category");
  }
});

const coffeeshopSlice = createSlice({
  name: "coffeeshop",
  initialState: initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCoffeeshop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCoffeeshop.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.coffeeshopData = action.payload;
      })
      .addCase(getUserCoffeeshop.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.coffeeshopData = null;
      });
    builder
      .addCase(createUserCoffeeshop.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUserCoffeeshop.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createUserCoffeeshop.rejected, (state) => {
        state.isLoading = false;
      });
    builder.addCase(createUserCoffeeshopCategoryItem.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUserCoffeeshopCategoryItem.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.coffeeshopData = action.payload;
    });
    builder.addCase(createUserCoffeeshopCategoryItem.rejected, (state) => {
      state.isLoading = false;
    });
    builder
      .addCase(deleteUserCoffeeshoCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserCoffeeshoCategory.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteUserCoffeeshoCategory.rejected, (state) => {
        state.isLoading = false;
      });

    // .addCase(createUserCoffeeshopCategory.pending, (state, action) => {
    //   state.isLoading = true;
    //   console.log(action.payload);
    // })
    // .addCase(createUserCoffeeshopCategory.fulfilled, (state) => {
    //   state.isLoading = false;
    // })
    // .addCase(createUserCoffeeshopCategory.rejected, (state) => {
    //   state.isLoading = false;
    // });
  },
});

export const { reset } = coffeeshopSlice.actions;

// Exportando o reducer para por na store
export default coffeeshopSlice.reducer;
