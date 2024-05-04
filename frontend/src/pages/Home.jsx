import React, { useState } from "react";
import Loading from "../components/Loading";
import ErrorComp from "../components/ErrorComp";
import { useFetch } from "../hooks/useFetch";
import BookList from "../components/BookList";
import Search from "../components/Search";

const Home = () => {
  const baseUrl = import.meta.env.VITE_URL;
  const { data, loading, error } = useFetch(`${baseUrl}`);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = data.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (error) return <ErrorComp />;
  if (loading) return <Loading />;

  return (
    <div className="container mx-auto pt-3 font-Nunito">
      <h3 className="text-center font-semibold">
        Search books in our Collection
      </h3>
      <Search onSearch={handleSearch} />
      <BookList data={filteredData} />
    </div>
  );
};

export default Home;
