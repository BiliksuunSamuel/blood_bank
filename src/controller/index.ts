import Axios from "axios";

interface IPost {
  isFile?: boolean;
  url: string;
  data: any;
}
function Post<T>({ isFile, url, data }: IPost) {
  return new Promise<T>(function (resolve, reject) {
    try {
      Axios({
        baseURL: "",
        url,
        data,
        method: "post",
        headers: {
          contentType: isFile ? "multipart/form-data" : "application/json",
        },
      })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error?.response?.data || error?.message));
    } catch (error) {
      reject(error);
    }
  });
}

interface IGet {
  url?: string;
}
function Get<T>({ url }: IGet) {
  return new Promise<T>(function (resolve, reject) {
    try {
      Axios({
        baseURL: "",
        url,
        method: "get",
        headers: {
          contentType: "application/json",
        },
      })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error?.response?.data || error?.message));
    } catch (error) {
      reject(error);
    }
  });
}

export default {
  Post,
  Get,
};
