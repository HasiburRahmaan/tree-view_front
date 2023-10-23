import React from "react";
import axiosInstance from "./axios";

export interface apiInterface {
  (options: { api: string; body?: object; config?: object }): Promise<any>;
}

export default function useHTTP() {
  let errorHandler = (error: any) => {
    console.log({ error: error });

    toast(error?.response?.data?.error || 'Error Occured');
  };

  let GetData: apiInterface = async ({ api, config = {} }) => {
    try {
      let data = await axiosInstance.get(api, config);
      // toast("success");
      return data;
    } catch (error) {
      errorHandler(error);

      return false;
    }
  };

  let PostData: apiInterface = async ({ api = "", body = {}, config = {} }) => {
    try {
      let data = await axiosInstance.post(api, body, config);
      toast("success");

      return data;
    } catch (error) {
      errorHandler(error);
      return false;
    }
  };

  let UpdateData: apiInterface = async ({
    api = "",
    body = {},
    config = {},
  }) => {
    try {
      let data = await axiosInstance.put(api, body, config);
      toast("success");

      return data;
    } catch (error) {
      errorHandler(error);
      return false;
    }
  };

  let DeleteData: apiInterface = async ({ api, config = {} }) => {
    if (window.confirm("Do you want to procceed?")) {
      try {
        let res = await axiosInstance.delete(api, config);
        toast(res?.data?.message || 'Deleted Successfully');

        return res;
      } catch (error) {
        errorHandler(error);
        return false;
      }
    }
  };

  return { GetData, PostData, UpdateData, DeleteData };
}

function toast(msg: String) {
  window.alert(msg);
}
