import {globalApi} from "../globalApi";
import {
  CreateRideRequest,
  CreateRideResponse,
  Ride,
  ApiResponse,
} from "types/apiTypes";

export const rideApi = globalApi.injectEndpoints({
  endpoints: builder => ({
    // Create Ride
    createRide: builder.mutation<CreateRideResponse, CreateRideRequest>({
      query: rideData => ({
        url: "/rides",
        method: "POST",
        body: rideData,
      }),
      invalidatesTags: ["Ride"],
    }),

    // Get Active Ride
    getActiveRide: builder.query<{success: boolean; data: {ride: Ride}}, void>({
      query: () => "/rides/active",
      providesTags: ["Ride"],
    }),

    // Get Ride Details
    getRideDetails: builder.query<
      {success: boolean; data: {ride: Ride}},
      string
    >({
      query: rideId => `/rides/${rideId}`,
      providesTags: (result, error, rideId) => [{type: "Ride", id: rideId}],
    }),

    // Get Ride History
    getRideHistory: builder.query<
      {
        success: boolean;
        data: {
          rides: Ride[];
          pagination: {
            page: number;
            limit: number;
            total: number;
            pages: number;
          };
        };
      },
      {page?: number; limit?: number; status?: string}
    >({
      query: params => ({
        url: "/rides/history",
        params,
      }),
      providesTags: ["Ride"],
    }),

    // Cancel Ride
    cancelRide: builder.mutation<ApiResponse, {rideId: string; reason: string}>(
      {
        query: ({rideId, reason}) => ({
          url: `/rides/${rideId}/cancel`,
          method: "PUT",
          body: {reason},
        }),
        invalidatesTags: ["Ride"],
      },
    ),

    // Get Available Drivers
    getAvailableDrivers: builder.query<
      {
        success: boolean;
        data: {
          drivers: Array<{
            driverId: string;
            distance: number;
            estimatedArrival: number;
            driver: any;
          }>;
        };
      },
      {
        pickupLat: number;
        pickupLng: number;
        vehicleType: string;
        maxDistance?: number;
      }
    >({
      query: params => ({
        url: "/rides/available-drivers",
        params,
      }),
    }),

    // Driver: Accept Ride
    acceptRide: builder.mutation<ApiResponse, string>({
      query: rideId => ({
        url: `/rides/${rideId}/accept`,
        method: "PUT",
      }),
      invalidatesTags: ["Ride"],
    }),

    // Driver: Arrive at Pickup
    arriveAtPickup: builder.mutation<ApiResponse, string>({
      query: rideId => ({
        url: `/rides/${rideId}/arrive`,
        method: "PUT",
      }),
      invalidatesTags: ["Ride"],
    }),

    // Driver: Start Ride
    startRide: builder.mutation<ApiResponse, string>({
      query: rideId => ({
        url: `/rides/${rideId}/start`,
        method: "PUT",
      }),
      invalidatesTags: ["Ride"],
    }),

    // Driver: Complete Ride
    completeRide: builder.mutation<
      ApiResponse,
      {rideId: string; actualDistance: number; actualDuration: number}
    >({
      query: ({rideId, ...body}) => ({
        url: `/rides/${rideId}/complete`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Ride", "Wallet"],
    }),
  }),
});

export const {
  useCreateRideMutation,
  useGetActiveRideQuery,
  useLazyGetActiveRideQuery,
  useGetRideDetailsQuery,
  useGetRideHistoryQuery,
  useCancelRideMutation,
  useGetAvailableDriversQuery,
  useLazyGetAvailableDriversQuery,
  useAcceptRideMutation,
  useArriveAtPickupMutation,
  useStartRideMutation,
  useCompleteRideMutation,
} = rideApi;
