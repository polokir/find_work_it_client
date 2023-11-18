import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios-config";

const initialState = {
  recruiter: null,
  employee: null,
  status: "loading",
};
//------------------------Recrut-------------------------------------------------
export const fetchLoginRecrut = createAsyncThunk(
  "auth/LoginRectur",
  async (params) => {
    const { data } = await axios.post("/api/recrut/login", params);
    return data;
  }
);
// export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe',async () =>{
//     const {data} = await axios.get('/auth/me');
//     return data;
// })

export const registerRecrut = createAsyncThunk(
  "auth/RegisterRecrut",
  async (params) => {
    const { data } = await axios.post("/api/recrut/register", params);
    return data;
  }
);

export const logoutUser = createAsyncThunk(
  "auth/LogoutRecrut",
  async (params) => {
    const { data } = await axios.post("/api/recrut/logout", params);
    return data;
  }
);
//---------------------------------------------------------------------------------

//------------------------Employee-------------------------------------------------

export const fetchLoginEmployee = createAsyncThunk(
  "auth/LoginEmployee",
  async (params) => {
    const { data } = await axios.post("/api/employee/login", params);
    return data;
  }
);

export const registerEmployee = createAsyncThunk(
  "auth/RegisterEmployee",
  async (params) => {
    const { data } = await axios.post("/api/employee/register", params);
    return data;
  }
);

export const logoutEmployee = createAsyncThunk(
  "auth/LogoutEmployee",
  async (params) => {
    const { data } = await axios.post("/api/employee/logout", params);
    return data;
  }
);

//---------------------------------------------------------------------------------

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //-------- recrut login --------------------
      .addCase(fetchLoginRecrut.pending, (state, action) => {
        state.recruiter = null;
        state.employee = null;
        state.status = "loading";
      })

      .addCase(fetchLoginRecrut.fulfilled, (state, action) => {
        state.recruiter = action.payload.recruiter;
        state.status = "loaded";
        state.employee = null;
      })

      .addCase(fetchLoginRecrut.rejected, (state, action) => {
        state.recruiter = null;
        state.status = "failed";
        state.employee = null;
      })
      //--------------------------------

      //-------- rectut register --------------------
      .addCase(registerRecrut.pending, (state, action) => {
        state.recruiter = null;
        state.employee = null;
        state.status = "loading";
      })
      .addCase(registerRecrut.fulfilled, (state, action) => {
        state.recruiter = action.payload.recruiter;
        state.status = "loaded";
        state.employee = null;
      })

      .addCase(registerRecrut.rejected, (state, action) => {
        state.recruiter = null;
        state.status = "failed";
        state.employee = null;
      })
      //--------------------------------

      //-------- employee login --------------------
      .addCase(fetchLoginEmployee.pending, (state, action) => {
        state.recruiter = null;
        state.employee = null;
        state.status = "loading";
      })

      .addCase(fetchLoginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload.employee;
        state.status = "loaded";
        state.recruiter = null;
      })

      .addCase(fetchLoginEmployee.rejected, (state, action) => {
          state.recruiter = null;
          state.status = "failed";
          state.employee = null;
        })
      //--------------------------------

      //-------- employee register --------------------
      .addCase(registerEmployee.pending, (state, action) => {
        state.recruiter = null;
        state.employee = null;
        state.status = "loading";
      })
      .addCase(registerEmployee.fulfilled, (state, action) => {
        state.employee = action.payload.employee;
        state.status = "loaded";
        state.recruiter = null;
      })
      .addCase(registerEmployee.rejected, (state, action) => {
        state.recruiter = null;
        state.status = "failed";
        state.employee = null;
      })
      //--------------------------------
    }
  
});
export const isAuthUser = (state) => Boolean(state.auth.recruiter || state.auth.employee);
export const isSuccessRegister = (state) => Boolean(state.auth.user);
export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
