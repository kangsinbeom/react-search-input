import axios from "axios";
import { useState } from "react";

const apiHandler = (input)=> {
  const search = input;
  const KAKAO_KEY = "a62f8adfb182625e79bba243fd847be3";
  const Kakao = axios.create({
    baseURL: "https://dapi.kakao.com",
    headers: {
      Authorization: `KakaoAK ${KAKAO_KEY}`,
    },
  });
  const kakaoSearch = (params) => {
    return Kakao.get(`/v2/search/web`, { params });
  };
  try {
    if (search === "") {
      setData([]);
    } else {
      const params = {
        query: search,
        sort: "accuracy",
      };
      const result = await kakaoSearch(params);
      if (result) {
        setData(result.data.documents);
      } else {
        console.log("fail");
      }
    }
  } catch (error) {
    console.log(error);
  }
  console.log(data);

}




export default apiHandler;