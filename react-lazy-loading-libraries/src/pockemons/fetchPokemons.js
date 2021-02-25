export const fetchPokemons = async () => {
  return await Array.apply(null, { length: 150 }).map((item, index) => {
    return {
      id: index + 1,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    };
  });
};
