import { StyleSheet } from "react-native";
import { Card, Text } from "@rneui/themed";

const checkValue = (value) => (value ? value : "-");

const HeroItem = ({ hero }) => {
  return (
    <Card containerStyle={styles.card}>
      <Card.Title h1={true}>{checkValue(hero.name)}</Card.Title>
      <Card.Divider width={1} />

      <Text h4={true} h4Style={styles.text}>
        Creating date: {checkValue(new Date(hero.created).toLocaleDateString())}
      </Text>
      <Text h4={true} h4Style={styles.text}>
        Birth year: {checkValue(hero.birthYear)}
      </Text>
      <Text h4={true} h4Style={styles.text}>
        Skin color: {checkValue(hero.skinColor)}
      </Text>
      <Text h4={true} h4Style={styles.text}>
        Gender: {checkValue(hero.gender)}
      </Text>
      <Text h4={true} h4Style={styles.text}>
        Height: {checkValue(hero.height)}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eee",
    width: "100%",
  },
  text: {
    fontSize: 15,
    marginTop: 10,
  },
});

export default HeroItem;
