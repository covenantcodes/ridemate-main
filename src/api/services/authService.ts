import {globalApi} from "../globalApi";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ApiResponse,
  IUser,
} from "types/apiTypes";

export const authApi = globalApi.injectEndpoints({
  endpoints: builder => ({
    // Login
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: credentials => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Auth"],
    }),

    // Register
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: userData => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),

    // Verify Email
    verifyEmail: builder.mutation<ApiResponse, {email: string; code: string}>({
      query: data => ({
        url: "/auth/verify-email",
        method: "POST",
        body: data,
      }),
    }),

    // Upload Registration Documents (No Auth Required)
    uploadRegistrationDocuments: builder.mutation<
      {success: boolean; message: string; data?: any},
      {
        email: string;
        driverLicense: string;
        vehicleDocuments: string[];
        profilePhoto: string;
        vehicleType?: string;
        vehicleMake?: string;
        vehicleModel?: string;
        vehicleNumber?: string;
        vehicleColor?: string;
        vehicleYear?: string;
      }
    >({
      query: data => ({
        url: "/auth/upload-registration-documents",
        method: "POST",
        body: data,
      }),
    }),

    // Resend Verification Code
    resendVerificationCode: builder.mutation<ApiResponse, {email: string}>({
      query: data => ({
        url: "/auth/resend-verification",
        method: "POST",
        body: data,
      }),
    }),

    // Forgot Password
    forgotPassword: builder.mutation<ApiResponse, {email: string}>({
      query: data => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: data,
      }),
    }),

    // Reset Password
    resetPassword: builder.mutation<
      ApiResponse,
      {email: string; resetCode: string; newPassword: string}
    >({
      query: data => ({
        url: "/auth/reset-password",
        method: "POST",
        body: data,
      }),
    }),

    // Refresh Token
    refreshToken: builder.mutation<
      {accessToken: string; refreshToken: string},
      {refreshToken: string}
    >({
      query: data => ({
        url: "/auth/refresh-token",
        method: "POST",
        body: data,
      }),
    }),

    // Logout
    logout: builder.mutation<ApiResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),

    // Get Current User
    getCurrentUser: builder.query<
      {success: boolean; data: {user: IUser}},
      void
    >({
      query: () => "/auth/me",
      providesTags: ["Auth", "User"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyEmailMutation,
  useUploadRegistrationDocumentsMutation,
  useResendVerificationCodeMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
} = authApi;
