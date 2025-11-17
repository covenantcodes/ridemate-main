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

  type: string;
  status: null | string;
  token: string;
  //   kyc: userKyc | null | undefined;
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
  tagLastChangedAt: string;
  hasUpdatedUser: boolean;
}

export type IToken = {
  accessToken: string;
  refreshToken: string;
};
