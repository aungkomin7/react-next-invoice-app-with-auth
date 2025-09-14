"use client";

import { productsApiUrl, productsFetcher } from "@/services/product";
import debounce from "lodash.debounce";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const useProduct = () => {
  const [fetchUrl, setFetchUrl] = useState(`${productsApiUrl}`);
  const router = useRouter();
  const searchRef = useRef();
  const lastPageRef = useRef(null); // ✅ store last page before searching
  const limitRef = useRef();

  const {
    data: products,
    isLoading: productLoading,
    error: productError,
  } = useSWR(fetchUrl, productsFetcher);
  const searchParams = useSearchParams();

  useEffect(() => {
    setFetchUrl(`${productsApiUrl}?${searchParams.toString()}`);
    if (searchParams.get("q")) {
     searchRef.current.value = searchParams.get("q");
    }
  }, [searchParams]);

  // ✅ Search → reset to page 1, save old page
  const handleSearch = debounce((e) => {
    const q = e.target.value;
    const params = new URLSearchParams(searchParams.toString());

    if (!searchParams.get("q")) {
      // only save last page if search wasn't active yet
      lastPageRef.current = searchParams.get("page") || "1";
    }

    params.set("q", q);
    params.set("page", "1"); // reset page on new search

    router.push(`?${params}`);
    // setFetchUrl(`${productsApiUrl}?${params}`);
  }, 500);

  // ✅ Clear search → restore last page
  const handleClearSearch = () => {
    searchRef.current.value = "";
    const params = new URLSearchParams(searchParams.toString());

    params.delete("q"); // remove search
    if (lastPageRef.current) {
      params.set("page", lastPageRef.current); // restore previous page
    }

    router.push(`?${params}`);
    // setFetchUrl(`${productsApiUrl}?${params}`);
  };

  const handlePaginate = (link) => {
    const url = new URL(link);
    // console.log(url); 
    router.push(`${url.search}`);
    // setFetchUrl(`${productsApiUrl}${url.search}`);
  };

  //   const handlePrev = () => {
  //     const url = new URL(products?.links?.prev);
  //     router.push(`${url.search}`);
  //     setFetchUrl(`${productsApiUrl}${url.search}`);
  //   };

  const handleLimit = () => {
    const paramsObj = Object.fromEntries(searchParams.entries());

    const params = new URLSearchParams({
      ...paramsObj,
      limit: limitRef.current.value,
      page: 1,
    });
    router.push(`?${params.toString()}`);
    setFetchUrl(`${productsApiUrl}?${params.toString()}`);
  };
  return {
    fetchUrl,
    setFetchUrl,
    products,
    productLoading,
    productError,
    searchParams,
    router,
    searchRef,
    lastPageRef,
    handleClearSearch,
    handleSearch,
    debounce,
    handleLimit,
    limitRef,
    handlePaginate,
  };
};

export default useProduct;
