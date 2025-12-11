import {globalApi} from "../globalApi";
import {
  FindMatchesRequest,
  FindMatchesResponse,
  CreateRideRequest,
  CreateRideResponse,
  ApiResponse,
  Location,
} from "types/apiTypes";

export const rideSharingApi = globalApi.injectEndpoints({
  endpoints: builder => ({
    // Find Matching Rides
    findMatches: builder.mutation<FindMatchesResponse, FindMatchesRequest>({
      query: data => ({
        url: "/ride-sharing/find-matches",
        method: "POST",
        body: data,
      }),
    }),

    // Create Shared Ride
    createSharedRide: builder.mutation<CreateRideResponse, CreateRideRequest>({
      query: data => ({
        url: "/ride-sharing/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Ride"],
    }),

    // Join Shared Ride
    joinSharedRide: builder.mutation<
      ApiResponse,
      {
        rideId: string;
        pickupLocation: Location;
        dropoffLocation: Location;
      }
    >({
      query: ({rideId, ...body}) => ({
        url: `/ride-sharing/join/${rideId}`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Ride"],
    }),

    // Join PalShare with Code
    joinPalShare: builder.mutation<
      ApiResponse,
      {
        palShareCode: string;
        pickupLocation: Location;
        dropoffLocation: Location;
      }
    >({
      query: data => ({
        url: "/ride-sharing/join-palshare",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Ride"],
    }),

    // Leave Shared Ride
    leaveSharedRide: builder.mutation<ApiResponse, string>({
      query: rideId => ({
        url: `/ride-sharing/leave/${rideId}`,
        method: "PUT",
      }),
      invalidatesTags: ["Ride"],
    }),

    // Get Shared Ride Details
    getSharedRideDetails: builder.query<
      {success: boolean; data: {ride: any}},
      string
    >({
      query: rideId => `/ride-sharing/${rideId}`,
      providesTags: (result, error, id) => [{type: "Ride", id}],
    }),

    // Get Sharing Stats
    getSharingStats: builder.query<
      {
        success: boolean;
        data: {
          totalSharedRides: number;
          totalSaved: number;
          averageSavings: number;
        };
      },
      void
    >({
      query: () => "/ride-sharing/user/stats",
    }),
  }),
});

export const {
  useFindMatchesMutation,
  useCreateSharedRideMutation,
  useJoinSharedRideMutation,
  useJoinPalShareMutation,
  useLeaveSharedRideMutation,
  useGetSharedRideDetailsQuery,
  useGetSharingStatsQuery,
} = rideSharingApi;
