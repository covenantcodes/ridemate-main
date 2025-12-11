// ============= AUTH TYPES =============
export interface LoginRequest {
  email: string;
  password: string;
  userType: "rider" | "driver";
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  userType: "rider" | "driver";
  referralCode?: string;
  vehicleType?: "car" | "keke" | "bus";
  vehicleNumber?: string;
  licenseNumber?: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: IUser;
    tokens: {
      accessToken: string;
      refreshToken: string;
    };
  };
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: {
    user: IUser;
  };
}

// ============= USER TYPES =============
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  fullname: string;
  email: string;
  phone: string;
  mateTag: string;
  userType: "rider" | "driver";
  avatar: string | null;
  emailVerified: boolean;
  phoneVerified: boolean;
  walletBalance: number;
  rating: number;
  totalRatings: number;
  completedTrips: number;
  cancelledTrips: number;
  isOnline?: boolean;
  // Driver specific
  vehicleType?: "car" | "keke" | "bus";
  vehicleMake?: string;
  vehicleModel?: string;
  vehicleNumber?: string;
  vehicleColor?: string;
  licenseNumber?: string;
  isVerified?: boolean;
  currentLocation?: {
    latitude: number;
    longitude: number;
    updatedAt: string;
  };
}

export interface UpdateProfileRequest {
  firstName?: string;
  lastName?: string;
  phone?: string;
  gender?: string;
  dateOfBirth?: string;
}

// ============= RIDE TYPES =============
export interface Location {
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface CreateRideRequest {
  pickupLocation: Location;
  dropoffLocation: Location;
  vehicleType: "car" | "keke" | "bus";
  rideType: "solo" | "share" | "palshare";
  paymentMethod: "wallet" | "cash" | "card";
  numberOfPassengers?: number;
  maxPassengers?: number;
  notes?: string;
}

export interface Ride {
  id: string;
  riderId: string;
  driverId?: string;
  vehicleType: "car" | "keke" | "bus";
  rideType: "solo" | "share" | "palshare";
  pickupLocation: Location;
  dropoffLocation: Location;
  status:
    | "searching"
    | "pending"
    | "accepted"
    | "picked"
    | "ongoing"
    | "completed"
    | "cancelled";
  distance: number;
  duration: number;
  baseFare: number;
  finalAmount: number;
  totalFare: number;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  palShareCode?: string;
  sharedRiders?: SharedRider[];
}

export interface SharedRider {
  riderId: string;
  pickupLocation: Location;
  dropoffLocation: Location;
  fare: number;
  status: string;
  joinedAt: string;
}

export interface CreateRideResponse {
  success: boolean;
  message: string;
  data: {
    ride: Ride;
  };
}

// ============= WALLET TYPES =============
export interface WalletBalance {
  balance: number;
  currency: string;
}

export interface FundWalletRequest {
  amount: number;
}

export interface FundWalletResponse {
  success: boolean;
  message: string;
  data: {
    transactionId: string;
    amount: number;
    paymentUrl: string;
    reference: string;
  };
}

export interface Transaction {
  id: string;
  userId: string;
  type:
    | "wallet_topup"
    | "ride_payment"
    | "withdrawal"
    | "refund"
    | "promo"
    | "subscription";
  amount: number;
  currency: string;
  status: "pending" | "completed" | "failed";
  description: string;
  balanceBefore: number;
  balanceAfter: number;
  createdAt: string;
}

export interface TransactionHistoryResponse {
  success: boolean;
  data: {
    transactions: Transaction[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      pages: number;
    };
  };
}

// ============= RATING TYPES =============
export interface SubmitRatingRequest {
  rideId: string;
  rating: number;
  review?: string;
  tags?: string[];
}

export interface Rating {
  id: string;
  rideId: string;
  reviewerId: string;
  revieweeId: string;
  rating: number;
  review: string;
  tags: string[];
  createdAt: string;
}

export interface SubmitRatingResponse {
  success: boolean;
  message: string;
  data: {
    rating: Rating;
  };
}

// ============= RIDE SHARING TYPES =============
export interface FindMatchesRequest {
  pickupLocation: Location;
  dropoffLocation: Location;
  vehicleType: "car" | "keke" | "bus";
  rideType: "share" | "palshare";
  palShareCode?: string;
}

export interface MatchedRide {
  rideId: string;
  matchScore: number;
  detourDistance: number;
  estimatedPickupTime: number;
  farePerPerson: number;
  currentPassengers: number;
  availableSeats: number;
  driver?: {
    id: string;
    name: string;
    rating: number;
    vehicleInfo: string;
  };
}

export interface FindMatchesResponse {
  success: boolean;
  data: {
    matches: MatchedRide[];
    count: number;
  };
}

// ============= API RESPONSE TYPES =============
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: {
    items: T[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      pages: number;
    };
  };
}
