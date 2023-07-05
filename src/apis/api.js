import axios from "axios";



const instance = axios.create({
  baseURL: "https://dapi.kakao.com/v2/search",
  headers: {
      Authorization: `KakaoAK a62f8adfb182625e79bba243fd847be3`,
    }
});

export const kakaoSearch = (query) => {
  return instance.get("/web", {
    params: {
      query: query,
      size: 3,
      sort: "accuracy",
    },
  });
};



  instance.interceptors.request.use(
    // 요청을 보내기 전 수행되는 함수
    function (config) {
      console.log("인터셉터요청 성공")
      return config;
    },
    // 오류요청을 보내기 전 수행되는 함수
    function (error) {
      console.log("인터셉터요청 오류")
      return Promise.reject(error);
      // 오류처리를 할 때에는 꼭 Promise.reject(error)를 사용해야한다
    }
  )
  
  instance.interceptors.response.use(
    // 요청을 보내기 전 수행되는 함수
    function (response) {
      console.log("인터셉터응답 성공")
      return response;
    },
    // 오류요청을 보내기 전 수행되는 함수
    function (error) {
      console.log("인터셉터응답 오류")
      return Promise.reject(error);
    }
  
  )








export default instance;

  // api를 불러오는 과정에서 헷갈린다. 404error 어째서인지 파악해보자 
  // 1) 비동기가 아닌것이 원인이 아닐까? => 현재 promise then 형태로 구현 되어있음
  // 2) promise.then 에서 async로 바꾸어보자 XXX 이문제가 아님
  // 해결방법 : 데이터 요청의 필수요소가 빠져있어서 그랬음 query는 필수요소이기 때문에 꼭 써줘야한다. + base url 구분을 잘 하자

  // 핸들러를 만들때 params의 값을 수정해야하는데 그러면 craete를 핸들러 안에 넣어야하나? 다른방법은 없나?
  // get 요청시에도 params를 인자로 받을 수 있다 그러니 get요청시 2번째인자로 params를 넣어보자

  // 401에러가 났는데 어떻게 해결해야하는지 찾아보자
  // 401은 Authorization 인증부분이 잘못되어서 고쳤음  ${process.env.REST_API_KEY} => `KakaoAK ${process.env.REST_API_KEY}`

  // process.env.REST_API_KEY 값이 undifined 일단 걍 키 값 넣어서 해보자
  // 이제 성공 이제까지 키값이 에러의 원인인것이 밝혀짐