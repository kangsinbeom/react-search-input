import axios from "axios";

const KAKAO_KEY = "a62f8adfb182625e79bba243fd847be3";
const Data = axios.create({
  baseURL: "https://dapi.kakao.com/v2/search/web",
  headers: {
    Authorization: `KakaoAK ${KAKAO_KEY}`,
  },
});

export default Data;