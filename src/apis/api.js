import axios from "axios";
import { useState } from "react";
const REST_API_KEY = "a62f8adfb182625e79bba243fd847be3";

const instance = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
      Authorization: `KakaoAK ${REST_API_KEY}`,
    },
    params: {
      query: "아이유",
      sort: "accuracy",
      size: 3,
    },
});
export default instance;

  // api를 불러오는 과정에서 헷갈린다. 404error 어째서인지 파악해보자 
  // 1) 비동기가 아닌것이 원인이 아닐까? => 현재 promise then 형태로 구현 되어있음
  // 2) promise.then 에서 async로 바꾸어보자 XXX 이문제가 아님
  // 해결방법 : 데이터 요청의 필수요소가 빠져있어서 그랬음 query는 필수요소이기 때문에 꼭 써줘야한다. + base url 구분을 잘 하자
