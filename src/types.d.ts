export interface User {
    id: string;
    username: string;
    name: string;
  }
  
  export interface ImageUrls {
    small: string;
    regular: string;
  }
  
  export interface Image {
    id: string;
    alt_description: string | null;
    urls: ImageUrls;
    user: User;
  }
  
  export interface FetchImagesResponse {
    total: number;
    results: Image[];
  }
  