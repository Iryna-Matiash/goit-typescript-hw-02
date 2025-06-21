

import type { FetchImagesResponse } from '../types';

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY; 

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse> => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      query
    )}&page=${page}&per_page=12&client_id=${ACCESS_KEY}`
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: FetchImagesResponse = await response.json();
  return data;
};