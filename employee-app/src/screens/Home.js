import { Text, StyleSheet, Image, View, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

const Home = () => {
  const data = [
    {
      id: 1,
      name: "Jane Doe",
      position: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 2,
      name: "John Smith",
      position: "Product Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    },
    {
      id: 3,
      name: "Alice Johnson",
      position: "UX Designer",
      image: "https://images.unsplash.com/photo-1502767089025-6572583495b0",
    },
    {
      id: 4,
      name: "Bob Brown",
      position: "Data Scientist",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    },
  ];

  const renderList = ({ item }) => {
    return (
      <Card style={styles.myCard} key={item.id}>
        <View style={styles.cardView}>
          <Image
            style={{ width: 150, height: 150, borderRadius: 16 }}
            source={{ uri: item.image }}
          />
          <View>
            <Text style={styles.text}>{item.name}</Text>
            <Text>{item.position}</Text>
          </View>
        </View>
      </Card>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return renderList({ item });
        }}
        keyExtractor={(item) => `${item.id}`}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        theme={{ colors: { accent: "#00aff" } }}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  myCard: {
    margin: 10,
    padding: 10,
  },
  cardView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Home;