import { BASE_URL } from './helpers';

// Generalized function for making calls to the API.
export default async resource => {
  const options = {
    method: 'GET'
  };

  try {
    const response = await fetch(BASE_URL + resource, options);
    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      throw new Error('STILL IN TRY. Something went wrong.');
    }
  } catch (error) {
    throw new Error('CATCH. Something went wrong.' + error);
  }
};
