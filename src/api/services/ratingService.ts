import {globalApi} from "../globalApi";
import {
  SubmitRatingRequest,
  SubmitRatingResponse,
  ApiResponse,
} from "types/apiTypes";

export const ratingApi = globalApi.injectEndpoints({
  endpoints: builder => ({
    // Submit Rating
    submitRating: builder.mutation<SubmitRatingResponse, SubmitRatingRequest>({
      query: data => ({
        url: "/ratings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Rating", "Ride"],
    }),

    // Get Pending Ratings
    getPendingRatings: builder.query<
      {
        success: boolean;
        data: {
          pendingRatings: Array<{
            ride: any;
            rateUser: any;
          }>;
          count: number;
        };
      },
      void
    >({
      query: () => "/ratings/pending",
      providesTags: ["Rating"],
    }),

    // Get User Ratings
    getUserRatings: builder.query<
      {
        success: boolean;
        data: {
          ratings: any[];
          summary: any;
          pagination: any;
        };
      },
      {userId: string; page?: number; limit?: number}
    >({
      query: ({userId, ...params}) => ({
        url: `/ratings/user/${userId}`,
        params,
      }),
      providesTags: ["Rating"],
    }),

    // Get Rating Stats
    getRatingStats: builder.query<
      {
        success: boolean;
        data: {
          stats: {
            averageRating: number;
            totalRatings: number;
            fiveStars: number;
            fourStars: number;
            threeStars: number;
            twoStars: number;
            oneStar: number;
          };
          topTags: any[];
        };
      },
      string
    >({
      query: userId => `/ratings/stats/${userId}`,
      providesTags: ["Rating"],
    }),

    // Update Rating
    updateRating: builder.mutation<
      ApiResponse,
      {ratingId: string; rating?: number; review?: string; tags?: string[]}
    >({
      query: ({ratingId, ...body}) => ({
        url: `/ratings/${ratingId}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Rating"],
    }),

    // Delete Rating
    deleteRating: builder.mutation<ApiResponse, string>({
      query: ratingId => ({
        url: `/ratings/${ratingId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Rating"],
    }),
  }),
});

export const {
  useSubmitRatingMutation,
  useGetPendingRatingsQuery,
  useGetUserRatingsQuery,
  useGetRatingStatsQuery,
  useUpdateRatingMutation,
  useDeleteRatingMutation,
} = ratingApi;
