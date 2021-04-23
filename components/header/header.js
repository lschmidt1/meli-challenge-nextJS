import { React, useState, useEffect } from "react";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  /* GET SEARCH VALUE FROM URL */
  const searchQuery = router.query.search;
  /* SET VALUE IF FOUND IN URL, ELSE START EMPTY*/
  const [searchValue, setSearchValue] = useState(searchQuery || "");

  function handleSearchProducts(e) {
    e.preventDefault();
    if (searchValue) {
      router.push(`/items?search=${searchValue}`);
    }
  }

  return (
    <div id="header">
      <img src="/Logo_ML@2x.png" alt="Mercado Libre" />
      <form onSubmit={(e) => handleSearchProducts(e)}>
        <input
          data-testid="searchInput"
          role="button"
          placeholder="Nunca dejes de buscar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        <button
          title="Busqueda"
          role="button"
          onClick={(e) => handleSearchProducts(e)}
        >
          <img src="/ic_Search@2x.png" alt="Busqueda" />
        </button>
      </form>
    </div>
  );
}

export default Header;
