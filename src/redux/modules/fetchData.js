const INPUT_DATA = "INPUT_DATA";


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






const fetchData = () => {
  switch (action.type) {
    case INPUT_DATA:
      

  }
}








export default fetchData;
