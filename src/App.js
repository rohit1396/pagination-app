import React, { useEffect, useState } from "react";
import "./App.css";
import { useFetch } from "./useFetch";
import Follower from "./components/Follower";

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

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <main className="App">
      <section className="title">
        <h1>{loading ? "Loading..." : "Pagination App"}</h1>
      </section>
      <section className="followers">
        <div>
          {followers?.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
      </section>
      {!loading && (
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>
            Prev
          </button>
          {data?.map((item, index) => {
            return (
              <button
                className={`page-btn ${index === page ? "active-btn" : null}`}
                key={index}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextPage}>
            Next
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
