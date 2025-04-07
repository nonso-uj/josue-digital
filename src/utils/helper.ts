import {
  GetObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";


const s3Client = new S3Client({
  region: import.meta.env.VITE_S3_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_ACCESS_KEY,
    secretAccessKey: import.meta.env.VITE_SECRET_KEY,
  },
});


export const getAndCacheJsonFromS3 = async (): Promise<any> => {
  const storageKey = 's3-cached-data'; // Key for localStorage
  const cacheExpiryMinutes = 60; // Cache for 1 hour

  try {
    // First check if we have fresh cached data
    const cachedData = localStorage.getItem(storageKey);
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      
      // Return cached data if not expired
      if (Date.now() - timestamp < cacheExpiryMinutes * 60 * 1000) {
        console.log('Returning cached data');
        return data as any;
      }
    }

    // If no valid cache, fetch from S3
    const command = new GetObjectCommand({
      Bucket: import.meta.env.VITE_BUCKET_NAME as string,
      Key: import.meta.env.VITE_FILE_KEY as string,
    });

    const response = await s3Client.send(command);
    
    if (!response.Body) {
      throw new Error('Empty response body from S3');
    }

    const jsonString = await response.Body.transformToString();
    console.log('data=== ', jsonString)
    const parsedData = JSON.parse(jsonString) as any;
    console.log('data2=== ', parsedData)

    // Validate the parsed data
    // if (!parsedData.id || !parsedData.title) {
    //   throw new Error('Invalid JSON structure');
    // }

    // Save to localStorage with timestamp
    localStorage.setItem(storageKey, JSON.stringify({
      timestamp: Date.now(),
      data: parsedData
    }));

    return parsedData;
    
  } catch (error) {
    console.error("Data fetch error:", error);
    
    // Fallback to cache even if expired when S3 fails
    const cachedData = localStorage.getItem(storageKey);
    if (cachedData) {
      console.warn('Using expired cache due to error');
      return JSON.parse(cachedData).data as any;
    }
    
    throw new Error(`Failed to load data: ${error instanceof Error ? error.message : String(error)}`);
  }
};


export const getCachedData = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return null;
    
    const parsed = JSON.parse(item) as any;
    return parsed.data;
  } catch (error) {
    console.error('Failed to parse cached data:', error);
    return null;
  }
};

export const isCacheValid = (key: string, expiryMinutes: number): boolean => {
  const item = localStorage.getItem(key);
  if (!item) return false;
  
  try {
    const { timestamp } = JSON.parse(item) as any;
    return Date.now() - timestamp < expiryMinutes * 60 * 1000;
  } catch {
    return false;
  }
};


export const getExcerpt = (
  text: string,
  maxLength: number = 150,
  options: {
    appendEllipsis?: boolean;
    completeWords?: boolean;
    truncateAtSpace?: boolean;
  } = {}
): string => {
  const {
    appendEllipsis = true,
    completeWords = true,
    truncateAtSpace = true,
  } = options;

  if (!text || text.length <= maxLength) return text;

  let excerpt = text.substring(0, maxLength);

  if (completeWords || truncateAtSpace) {
    const lastSpaceIndex = excerpt.lastIndexOf(' ');
    if (lastSpaceIndex > 0) {
      excerpt = excerpt.substring(0, lastSpaceIndex);
    }
  }

  return appendEllipsis ? `${excerpt}...` : excerpt;
};