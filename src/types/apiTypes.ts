export interface IUser {
  pinRetriesLeft: number;
  id: string;
  fullname: string;
  firstName: string;
  lastName: string;
  mateTag: string;
  email: string;
  emailVerified: null | boolean;
  emailVerificationCode: string;
  emailCodeExpiresAt: string;
  emailVerifiedAt: null | string;
  phone: string;
  referralCode: string;
  referred: null | boolean;
  userType: "user" | "driver";
  type: string;
  status: null | string;
  token: string;
  avatar: null | string;
  transactionPin: null | string;
  transactionPinCreated: boolean;
  dateJoined: string;
  gender: null | string;
  earnings: {
    id: string;
    title: string;
    description: string;
    redeemed: boolean;
    coins: string;
  }[];
  fcmToken: string;
  isVerifiedUser: boolean;
  isFirstLogin: null | boolean;
  tourCompleted: null | boolean;
  // Driver specific fields
  vehicleType?: "car" | "keke" | "bus";
  vehicleNumber?: string;
  licenseNumber?: string;
  isOnline?: boolean;
  rating?: number;
  totalTrips?: number;
}

export type IToken = {
  accessToken: string;
  refreshToken: string;
};
