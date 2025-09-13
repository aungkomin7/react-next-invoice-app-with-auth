export const authApiUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const loginUser = (payload) => {
  return fetch(`${authApiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

export const registerUser = (payload) => {
  return fetch(`${authApiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
};

