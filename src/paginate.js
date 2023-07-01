const paginate = (followers) => {
  const followersPerPage = 10;

  const numOfPages = Math.ceil(followers.length / followersPerPage);

  const newFollowers = Array.from({ length: numOfPages }, (_, index) => {
    const start = index * followersPerPage;
    return followers.slice(start, start + followersPerPage);
  });

  return newFollowers;
};

export default paginate;
