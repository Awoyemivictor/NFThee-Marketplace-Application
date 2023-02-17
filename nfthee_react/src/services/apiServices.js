// const BASE_URL = 'https://theemarketplace.onrender.com/api/';

const BASE_URL = process.env.REACT_APP_BASE_URL+'/api';

export const getBlogData = async () => {
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    let response = await fetch(BASE_URL + 'blog/fetch', requestOptions);
    const isJson = response.headers
      .get('content-type')
      ?.includes('application/json');
    const result = isJson && (await response.json());
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

export const getSearchResult = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(BASE_URL + '/search', requestOptions);
    const isJson = response.headers
      .get('content-type')
      ?.includes('applicatio/json');
    const result = isJson && (await response.json());
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

export const getSearchCollection = async () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(BASE_URL + '/searchUser', requestOptions);
    const isJson = response.headers
      .get('content-type')
      ?.includes('application/json');
    const result = isJson && (await response.json());
    return result;
  } catch (error) {
    return error;
  }
};
