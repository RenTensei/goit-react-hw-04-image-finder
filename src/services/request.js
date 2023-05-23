import axios from 'axios';

export async function fetchImages(query, currentPage) {
  const baseURL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    q: query,
    page: currentPage,
    key: '35616043-ceede7c463ab26a514eff72f6',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: '12',
  });

  const requestURL = `${baseURL}?${params}`;
  const response = await axios.get(requestURL);

  return response.data;
}
