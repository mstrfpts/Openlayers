import React, { useEffect, useState } from "react";

export const SomeData = () => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState({ data: null, loading: true });

    fetch("http://numberapi.com/42/trivia")
      .then((x) => x.text())
      .then((y) => {
        setState({ data: y, loading: false });
      });
  }, []);
  console.log("derd, state", state);
  return state.data;
};

/*useEffect(() => {
    setSearchResult({ data: null, loading: true });
    fetch('http://numberapi.com/42/trivia')
      .then((x) => x.text())
      .then((y) => {
        setSearchResult({ data: y, loading: false });
      });
  }, [searchString]);*/

/*export const SearchApi = (searchString: string, projectId: string) => {
    const [searchResult, setSearchResult] = useState<{ data: any; loading: boolean }>({
      data: '',
      loading: true,
    });
    const proxy = new Client(baseUrl);
  
    useEffect(() => {
      setSearchResult({ data: null, loading: true });
  
      proxy.search(searchString, projectId).then((data) => {
        setSearchResult({ data: data, loading: false });
      });
    }, [searchString]);
  
    if (!searchResult.loading) {
      console.log('derd, state', searchResult);
      return searchResult.data;
    }
  };*/
