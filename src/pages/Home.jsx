import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "../components/CardItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getBooks, search, sort, toggleLoading } from "../features/books/books";
import ArrowDownDropdown from "../icon/ArrowDownDropdown";
import Search from "../icon/Search";
import SkeletonCard from "../components/SkeletonCard";
import Sort from "../icon/Sort";
import Bars from "../icon/Bars";
import Sort2 from "../icon/Sort2";
import { AnimatePresence, m } from "framer-motion";
import Layout from "../components/Layout";

function Home() {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.books);
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const ref = useRef();
  const [searchValue, setSearchValue] = useState("");
  const [dataCache, setDataCache] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (loading && !books?.items?.length) {
      dispatch(getBooks());
    }
  }, []);

  useEffect(() => {
    if (books && !dataCache?.length) {
      setDataCache(books?.items);
    }
  }, [books, dataCache]);

  useEffect(() => {
    window.addEventListener("click", handleCloseDropdown);

    return () => window.removeEventListener("click", handleCloseDropdown);
  }, [isOpen]);

  const handleCloseDropdown = (e) => {
    if (isOpen && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleChangeFilter = (filter) => {
    dispatch(sort(filter));
    setSortBy(filter);
    setTimeout(() => {
      dispatch(toggleLoading());
    }, 1000);
    setIsOpen(false);
  };

  useEffect(() => {
    let ref = true;

    let datas = dataCache.filter((item) => {
      return (
        item.volumeInfo.title
          .toLowerCase()
          .indexOf(searchValue.toLowerCase()) != -1
      );
    });
    if (searchValue.length > 0) {
      dispatch(toggleLoading(true));
      setTimeout(() => {
        if (ref) {
          dispatch(search(datas));
          dispatch(toggleLoading(false));
        }
      }, 1000);
    } else {
      if (isSearch) {
        dispatch(search(datas));
        dispatch(toggleLoading(false));
      }
    }

    return () => {
      ref = false;
    };
  }, [searchValue]);

  const handleChangeInputSearch = (e) => {
    setIsSearch(true);
    setSearchValue(e.target.value);
  };

  return (
    <Layout title="Home">
      <Navbar />
      <div className="mt-[56px] md:mt-[64px] py-8 px-4 sm:px-0 container mx-auto">
        <div className="box"></div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end space-y-3 sm:space-y-0 sm:space-x-4">
          <form className="flex max-w-xl w-full shadow">
            <input
              type="text"
              placeholder="Seacrh..."
              value={searchValue}
              onChange={handleChangeInputSearch}
              className="rounded-tl rounded-bl bg-gray-700/70 text-gray-200 border-gray-600 focus:border-blue-900 focus:ring-blue-500 w-full"
            />
            <div className="bg-blue-600 px-3 rounded-tr rounded-br text-gray-200 flex items-center">
              <Search />
            </div>
          </form>
          <div className="text-gray-300 flex-none flex-grow">
            <div className="relative sm:w-max" ref={ref}>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="py-3 px-8 bg-gray-700 w-full rounded shadow text-sm tracking-wide font-semibold focus:outline-none flex items-center justify-center space-x-2 border border-transparent focus:border focus:ring-1 focus:border-blue-900 focus:ring-blue-500"
              >
                <Bars />
                <span>
                  Sort By{" "}
                  {!sortBy.length
                    ? "Default"
                    : sortBy == "asc"
                    ? "Title A to Z"
                    : "Title Z to A"}
                </span>
                <ArrowDownDropdown />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <m.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 w-full z-20 mt-[50px]"
                  >
                    <div className="bg-zinc-600 rounded py-1 shadow-lg">
                      <button
                        type="button"
                        onClick={() => handleChangeFilter("asc")}
                        className="py-2 hover:bg-zinc-700 w-full tracking-wide px-3 text-sm focus:outline-none flex items-center space-x-1"
                      >
                        <Sort />
                        <span>Title A to Z</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleChangeFilter("desc")}
                        className="py-2 hover:bg-zinc-700 w-full tracking-wide px-3 text-sm focus:outline-none flex items-center space-x-1"
                      >
                        <Sort2 />
                        <span>Title Z to A</span>
                      </button>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {!loading ? (
            books?.items?.length > 0 ? (
              books.items.map((item) => <CardItem key={item.id} item={item} />)
            ) : (
              <span className="text-gray-200">
                Books{" "}
                {searchValue.length > 0 && (
                  <span className="font-bold">{searchValue}</span>
                )}{" "}
                is Empty!
              </span>
            )
          ) : (
            [...Array(4).keys()].map((item) => <SkeletonCard key={item} />)
          )}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}

export default Home;
