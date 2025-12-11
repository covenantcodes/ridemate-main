import {File} from "expo-file-system";

export const fileToBase64 = async (uri: string): Promise<string> => {
  try {
    // Use the new File API
    const file = new File(uri);
    const base64 = await file.base64();
    return base64;
  } catch (error) {
    console.error("Error converting file to base64:", error);
    throw new Error("Failed to process image");
  }
};

export const fileUtils = {
  fileToBase64,
};
