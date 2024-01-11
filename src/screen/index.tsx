import React from "react";
import useLogic from "./countries.logic";
import Dropdown from "../component/dropdown";
import Table from "../component/table";
import { columns } from "./constants";

function CountriesInfo() {
  const {
    error,
    loading,
    getData,
    showTable,
    categories,
    searchTerm,
    filteredData,
    selectedFilter,
    setSelectedFilter,
    setSearchTerm,
    handleClear,
  } = useLogic();

  return (
    <div className="container">
      <h6>Countries Info</h6>
      <br />
      <div className="flexbox flexbox-btw">
        <div className="flexbox">
          <input
            placeholder="Country Name"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-box"
            type="text"
            value={searchTerm}
          />
          <Dropdown
            options={categories}
            onSelect={setSelectedFilter}
            value={selectedFilter}
          />
          <div className="clear-btn" onClick={handleClear}>
            Clear
          </div>
        </div>
        <button className="btn" onClick={getData}>
          Show all Countries
        </button>
      </div>
      <br />
      {error ? (
        <div className="flexbox red">
          <p>{error}</p>
        </div>
      ) : (
        <>
          {!filteredData?.length && showTable && (
            <div className="flexbox">
              <p>No data found!</p>
            </div>
          )}
          {loading && (
            <div className="flexbox">
              <p>Loading...</p>
            </div>
          )}
          {showTable && !!filteredData?.length && (
            <Table data={filteredData} columns={columns} />
          )}
        </>
      )}
    </div>
  );
}

export default CountriesInfo;
