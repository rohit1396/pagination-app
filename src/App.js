import React, { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./useFetch";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  console.log(followers);
  // console.log(data);

  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <main className="App">
      <section>
        <h1>{loading ? "Loading..." : "Pagination App"}</h1>
      </section>
      <section>
        <div>
          {followers?.map((follower) => {
            return <span>Follower</span>;
          })}
        </div>
      </section>
      {!loading && (
        <div>
          <button>Prev</button>
          {data?.map((item, index) => {
            return (
              <button key={index} onClick={() => handlePage(index)}>
                {index + 1}
              </button>
            );
          })}
          <button>Next</button>
        </div>
      )}
    </main>
  );
}

export default App;
