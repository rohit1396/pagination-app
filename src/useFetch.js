import { useState, useEffect } from "react";
import paginate from "./paginate";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";
// const url = "https://jsonplaceholder.typicode.com/posts";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // setLoading(true);
    setData(paginate(data));
    setLoading(false);
  };

  //   console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return { loading, data };
};
