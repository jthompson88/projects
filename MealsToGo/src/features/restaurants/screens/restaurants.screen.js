import { React } from "react";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { Spacer } from "../../../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  /*const [searchQuery, setSearchQuery] = useState("");*/
  /*const onChangeSearch = (query) => setSearchQuery(query);*/

  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantList
      data={[
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 },
        { name: 5 },
        { name: 6 },
        { name: 7 },
        { name: 8 },
        { name: 9 },
        { name: 10 },
      ]}
      renderItem={() => (
        <>
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        </>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);
