import { FlatList, View } from "react-native";
import ListItem from "./ListItem";
import Spinner from "../ui/Spinner";

const List = ({ list, navigate, addToFavorite }) => {
  if (list.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Spinner />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, marginBottom: 20 }}>
      <FlatList
        data={list}
        renderItem={(item) => (
          <ListItem
            item={item}
            navigate={navigate}
            addToFavorite={addToFavorite}
          />
        )}
        keyExtractor={(hero) => hero.id}
      />
    </View>
  );
};

export default List;
