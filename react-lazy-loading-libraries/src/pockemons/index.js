import React, { useEffect, useState } from "react";
import List from "./List";
import ListItem from "./ListItem";

import { fetchPokemons } from "./fetchPokemons";
import LazyLoadImageCallback, { config } from "./lazyLoad";

const Pockemons = () => {
  const [pokemons, setPokemons] = useState([]);
  console.log("🚀 ~ file: index.js ~ line 6 ~ Pockemons ~ pokemons", pokemons);

  let observer = new window.IntersectionObserver(LazyLoadImageCallback, config);

  useEffect(() => {
    const fetchPokemonsData = async () => {
      const pokemons = await fetchPokemons();
      setPokemons(pokemons);
    };

    fetchPokemonsData();
  }, []);

  return (
    <List>
      {pokemons.map(({ id, sprite }) => (
        <ListItem key={id} sprite={sprite} observer={observer} />
      ))}
    </List>
  );
};

export default Pockemons;
