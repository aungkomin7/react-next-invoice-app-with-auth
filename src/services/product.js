import { useAccountStore } from "@/stores/useAccountStore";

export const productsApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const productsFetcher = (...args) =>
  fetch(...args, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  }).then((res) => res.json());

export const storeProduct = (payload) => {
  return fetch(`${productsApiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
    body: JSON.stringify(payload),
  });
};

export const destroyProduct = (id) => {
  return fetch(`${productsApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};

export const updateProduct = (payload,id) => {
  return fetch(`${productsApiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
    body: JSON.stringify(payload),
  });
};
