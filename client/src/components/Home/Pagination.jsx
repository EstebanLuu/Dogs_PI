import React, { useState } from "react";
import styled from "styled-components";

function Pagination({
  dogsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
}) {
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pageNumbers = [];

  let totalPerros = totalPosts / 8;

  for (let i = 1; i <= Math.ceil(totalPosts / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleNext() {
    if (currentPage !== totalPerros) {
      setCurrentPage(currentPage + 1);
    }

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  }

  function handlePrev() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);

      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }

      if (currentPage - 1 === 20) {
        setMaxPageNumberLimit(20);
        setMinPageNumberLimit(15);
      }
    }
  }

  return (
    <PaginationContainer>
      <ul className="pagination">
        <button
          className={`${currentPage !== 1 ? "page__PN" : "arrow__DN"} `}
          onClick={handlePrev}
        >
          ‹
        </button>
        {pageNumbers &&
          pageNumbers.map((page, i) => {
            if (page < maxPageNumberLimit + 1 && page > minPageNumberLimit) {
              return (
                <li key={i} className="pagination_item">
                  <span
                    className={currentPage === page ? "page active" : "page"}
                    onClick={() => paginate(page)}
                  >
                    {page}
                  </span>
                </li>
              );
            } else {
              return null;
            }
          })}
        <button
          className={`${currentPage < totalPerros ? "page__PN" : "arrow__DN"} `}
          onClick={handleNext}
        >
          ›
        </button>
      </ul>
    </PaginationContainer>
  );
}

export default Pagination;

const PaginationContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  user-select: none;
  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 11px;
  }
  .pagination_item {
    border-radius: 5px;
    /* overflow: hidden; */
  }
  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    color: var(--black-color);
    height: 50px;
    width: 50px;
    background-color: var(--light-color);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: var(--main-color-hover);
      color: var(--light-color);
    }
  }

  .page__PN {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 500;
    height: 50px;
    width: 50px;
    border: none;
    background: #fff;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: var(--main-color);
    }
  }

  .arrow__DN {
    visibility: hidden;
    height: 50px;
    width: 50px;
  }

  .page.active {
    background-color: var(--main-color);
    color: var(--light-color);
  }

  @media screen and (max-width: 576px) {
    .pagination {
      display: flex;
      justify-content: center;
      list-style: none;
      gap: 5px;
    }
    .page {
      font-size: 12px;
      font-weight: 300;
      height: 28px;
      width: 28px;
    }
    .page__PN {
      font-size: 20px;
      font-weight: 300;
      color: var(--black-color);
      height: 28px;
      width: 28px;
      border-radius: 5px;
    }
    .arrow__DN {
      height: 28px;
      width: 28px;
    }
  }
`;
