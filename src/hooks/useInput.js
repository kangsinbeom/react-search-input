import { useEffect, useState } from "react";
import { apiHandler } from "../apis/apiHandler";

const useInput = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDate = async () => {
      const response = await apiHandler;
      setData(response.data);
    }
    fetchDate();
  },[]);
  return [data, useInput];

};

export default useInput;