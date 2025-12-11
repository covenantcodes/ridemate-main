import {globalApi} from "../globalApi";
import {ApiResponse, IUser, UpdateProfileRequest} from "types/apiTypes";

export const userApi = globalApi.injectEndpoints({
  endpoints: builder => ({
    uploadDriverDocuments: builder.mutation<
      {success: boolean; message: string; data: {user: IUser}},
      FormData
    >({
      query: formData => ({
        url: "/users/upload-documents",
        method: "POST",
        body: formData,

        headers: {},
      }),
      invalidatesTags: ["User"],
    }),

    getUserProfile: builder.query<
      {success: boolean; data: {user: IUser}},
      void
    >({
      query: () => "/users/profile",
      providesTags: ["User"],
    }),

    updateProfile: builder.mutation<
      {success: boolean; message: string; data: {user: IUser}},
      UpdateProfileRequest
    >({
      query: data => ({
        url: "/users/profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useUploadDriverDocumentsMutation,
  useGetUserProfileQuery,
  useUpdateProfileMutation,
} = userApi;
