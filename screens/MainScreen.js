import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import useStarWarsAPI from "../services/useStarWarsAPI";
import List from "../components/List";
import MainHeader from "../components/MainHeader";
import Pagination from "../components/Pagination";
import ResetButton from "../components/ResetButton";

export default function MainScreen({ navigation: { navigate } }) {
  const { getPeople } = useStarWarsAPI();
  const [list, setList] = useState([]);
  const [favorite, setFavorite] = useState({ male: 0, female: 0, "n/a": 0 });
  const [currentPage, setCurrentPage] = useState(1);

  // Для пагинации
  // 10 - сколько элементов должно отображаться на одной странице
  const lastHeroIndex = currentPage * 10;
  const firstHeroIndex = lastHeroIndex - 10;
  const currentHeroes = list.slice(firstHeroIndex, lastHeroIndex);
  const paginate = (index) => setCurrentPage(index);

  useEffect(() => {
    getPeople().then((data) => setList(data));
  }, []);

  // Методы
  const clearFavorites = () => {
    setList(
      list.map((hero) => {
        if (hero.favorite) {
          hero.favorite = false;
        }
        return hero;
      })
    );
    setFavorite({ male: 0, female: 0, "n/a": 0 });
  };

  const addToFavorite = (id) => {
    const updatedHero = list.find((item) => item.id === id);
    updatedHero.favorite = !updatedHero.favorite;
    setList((state) =>
      state.map((item) => {
        if (item.id !== id) return item;
        return updatedHero;
      })
    );
    switch (updatedHero.gender) {
      case "male": {
        setFavorite({
          ...favorite,
          male: updatedHero.favorite ? ++favorite.male : --favorite.male,
        });
        break;
      }
      case "female":
        setFavorite({
          ...favorite,
          female: updatedHero.favorite ? ++favorite.female : --favorite.female,
        });
        break;
      case "n/a":
        setFavorite({
          ...favorite,
          "n/a": updatedHero.favorite ? ++favorite["n/a"] : --favorite["n/a"],
        });
        break;
      default:
        return;
    }
  };

  return (
    <View style={styles.container}>
      <MainHeader favorite={favorite} />
      <ResetButton onReset={clearFavorites} />
      <Pagination totalLength={list.length} paginate={paginate} />

      <List
        list={currentHeroes}
        navigate={navigate}
        addToFavorite={addToFavorite}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
