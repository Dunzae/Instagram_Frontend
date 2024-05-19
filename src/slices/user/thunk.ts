import TypedCreateAsyncThunk from "@/utils/hooks/TypedCreateAsyncThunk";
import { loginApi, registerApi } from "./api";
import { ILoginData, IRegisterData } from "@/utils/types/user";
import { AxiosError } from "axios";

export const loginThunk = TypedCreateAsyncThunk(
	"user/loginThunk",
	async (data: ILoginData, thunkAPI) => {
		try {
			const result = await loginApi(data);
			return result;
		} catch (e: unknown) {
			if (e instanceof AxiosError) {
				return thunkAPI.rejectWithValue(
					e.response?.data.message ?? "unknown error"
				);
			}
			return thunkAPI.rejectWithValue("unknown error");
		}
	}
);

export const registerThunk = TypedCreateAsyncThunk(
	"user/registerThunk",
	async (data: IRegisterData, thunkAPI) => {
		try {
			const result = await registerApi(data);
			return result;
		} catch (e: unknown) {
			if (e instanceof AxiosError) {
				return thunkAPI.rejectWithValue(
					e.response?.data.message ?? "unknown error"
				);
			}
			return thunkAPI.rejectWithValue("unknown error");
		}
	}
);
