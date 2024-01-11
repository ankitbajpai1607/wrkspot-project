import { useMemo, useState } from "react";
import axios from "axios";

import { API_URL, FILTER } from "./constants";
import { CountriesItems, CountriesData, Options } from "../type-props";

const useLogic = () => {
  const [data, setData] = useState<CountriesData | CountriesItems[] | []>([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");

  const categories = Array.from(
    new Set(FILTER.map((item) => item))
  ) as Options[];

  const filteredData = useMemo(() => {
    let tempData = data;
    if (searchTerm) {
      tempData =
        tempData?.filter((country: CountriesItems) =>
          country?.name?.toLowerCase()?.startsWith(searchTerm?.toLowerCase())
        ) || [];
    }
    if (selectedFilter) {
      tempData = tempData?.filter(
        (item: CountriesItems) => +item?.population < +selectedFilter
      );
    }
    return tempData;
  }, [searchTerm, selectedFilter, data]);

  const getData = () => {
    if (showTable) {
      return;
    }
    setLoading(true);
    axios
      .get(API_URL)
      .then(function (response) {
        setData(response?.data);
        setLoading(false);
        setShowTable(true);
      })
      .catch(function (error) {
        setError(error);
      });
  };

  const handleClear = () => {
    setSearchTerm("");
    setSelectedFilter("");
  };

  return {
    data,
    error,
    loading,
    getData,
    showTable,
    categories,
    filteredData,
    searchTerm,
    setSelectedFilter,
    selectedFilter,
    setSearchTerm,
    handleClear,
  };
};

export default useLogic;
