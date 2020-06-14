import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Card from '../card/card.component';
import Loader from '../loader/loader.component';

const List = () => {
  const [page, setPage] = useState(1);
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://randomuser.me/api/?${page}=3&results=10`)
        .then((response) => response.json())
        .then((res) => {
          setListItems((prevList) => {
            return [...prevList, ...res.results];
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchData();
  }, [page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  return (
    <InfiniteScroll
      dataLength={listItems.length}
      next={fetchMoreData}
      hasMore={true}
      loader={<Loader />}
    >
      {listItems.map((element) => {
        return <Card key={element.login.uuid} profileInfo={element} />;
      })}
    </InfiniteScroll>
  );
};

export default List;
