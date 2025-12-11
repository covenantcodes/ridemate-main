import {globalApi} from "../globalApi";
import {
  WalletBalance,
  FundWalletRequest,
  FundWalletResponse,
  TransactionHistoryResponse,
  ApiResponse,
} from "types/apiTypes";

export const walletApi = globalApi.injectEndpoints({
  endpoints: builder => ({
    // Get Wallet Balance
    getWalletBalance: builder.query<
      {success: boolean; data: WalletBalance},
      void
    >({
      query: () => "/wallet/balance",
      providesTags: ["Wallet"],
    }),

    // Initialize Wallet Funding
    fundWallet: builder.mutation<FundWalletResponse, FundWalletRequest>({
      query: data => ({
        url: "/wallet/fund",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Wallet"],
    }),

    // Verify Funding
    verifyFunding: builder.mutation<ApiResponse, {reference: string}>({
      query: data => ({
        url: "/wallet/verify",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Wallet", "Transaction"],
    }),

    // Transfer Funds
    transferFunds: builder.mutation<
      ApiResponse,
      {recipientMateTag: string; amount: number; note?: string}
    >({
      query: data => ({
        url: "/wallet/transfer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Wallet", "Transaction"],
    }),

    // Withdraw Funds
    withdrawFunds: builder.mutation<
      ApiResponse,
      {
        amount: number;
        bankDetails: {
          accountNumber: string;
          bankCode: string;
          bankName: string;
        };
      }
    >({
      query: data => ({
        url: "/wallet/withdraw",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Wallet", "Transaction"],
    }),

    // Get Transaction History
    getTransactionHistory: builder.query<
      TransactionHistoryResponse,
      {
        page?: number;
        limit?: number;
        type?: string;
        status?: string;
        startDate?: string;
        endDate?: string;
      }
    >({
      query: params => ({
        url: "/wallet/transactions",
        params,
      }),
      providesTags: ["Transaction"],
    }),

    // Get Transaction Details
    getTransactionDetails: builder.query<
      {success: boolean; data: {transaction: any}},
      string
    >({
      query: transactionId => `/wallet/transactions/${transactionId}`,
      providesTags: (result, error, id) => [{type: "Transaction", id}],
    }),

    // Get Wallet Stats
    getWalletStats: builder.query<
      {
        success: boolean;
        data: {
          currentBalance: number;
          totalEarnings: number;
          totalTrips: number;
          transactionStats: any[];
          monthlySpending: any[];
        };
      },
      void
    >({
      query: () => "/wallet/stats",
      providesTags: ["Wallet"],
    }),
  }),
});

export const {
  useGetWalletBalanceQuery,
  useFundWalletMutation,
  useVerifyFundingMutation,
  useTransferFundsMutation,
  useWithdrawFundsMutation,
  useGetTransactionHistoryQuery,
  useGetTransactionDetailsQuery,
  useGetWalletStatsQuery,
} = walletApi;
