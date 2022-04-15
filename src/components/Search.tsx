import { createEffect } from "solid-js";

declare const algoliasearchNetlify: any;

const Search = () => {
  createEffect(() => {
    algoliasearchNetlify({
      appId: "VWEL8IG60D",
      apiKey: "51ba7a4db92dd1677ccdc61c5ea61e52",
      siteId: "c21cc5f9-37fe-4a72-be35-dd0dd5b26d18",
      branch: "main",
      selector: "div#search",
    });
  });

  return <div id="search"></div>;
};

export default Search;
