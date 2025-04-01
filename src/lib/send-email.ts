import { FormData } from "@/app/api/email/param";



export async function sendEmail(data : FormData) {
  const apiEndpoint = '/api/email';
  let result = '';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    result = responseData.message;
  } catch (err) {
   
    result = 'error';
  }

  return result;
}