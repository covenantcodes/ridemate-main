import {globalApi} from '../globalApi';
import {ApiResponse} from 'types/apiTypes';

export const documentApi = globalApi.injectEndpoints({
  endpoints: builder => ({
    // Upload Driver Documents
    uploadDriverDocuments: builder.mutation<
      ApiResponse,
      {
        userId: string;
        profileImage: any;
        vehicleInfo: {
          vehicleType: string;
          vehicleMake: string;
          vehicleModel: string;
          vehicleNumber: string;
          vehicleColor: string;
          vehicleYear: string;
        };
        documents: {
          driverLicense: any;
          vehicleRegistration: any;
          proofOfOwnership: any;
          insurance: any;
          roadworthiness: any;
        };
      }
    >({
      query: data => {
        const formData = new FormData();
        
        // Append profile image
        if (data.profileImage) {
          formData.append('profileImage', {
            uri: data.profileImage,
            type: 'image/jpeg',
            name: 'profile.jpg',
          } as any);
        }

        // Append vehicle info
        Object.entries(data.vehicleInfo).forEach(([key, value]) => {
          formData.append(key, value);
        });

        // Append documents
        Object.entries(data.documents).forEach(([key, value]) => {
          if (value) {
            formData.append(key, {
              uri: value,
              type: 'image/jpeg',
              name: `${key}.jpg`,
            } as any);
          }
        });

        return {
          url: '/drivers/upload-documents',
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
      },
      invalidatesTags: ['User'],
    }),
  }),
});

export const {useUploadDriverDocumentsMutation} = documentApi;