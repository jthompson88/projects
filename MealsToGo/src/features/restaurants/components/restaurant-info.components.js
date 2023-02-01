import React from "react";
import { Text } from "react-native";

export const RestaurantInfo =
  () =>
  ({ restaurant = {} }) => {
    const {
      name = "Some Restaurant",
      icon,
      photos = [
        "https://lh3.googleusercontent.com/p/AF1QipN1-_wNOu8PQxdrL1XDjuGIkH-uYbaDYU9tuokw=s680-w680-h510"
      ],
      address = "100 some random street",
      openingHours = true,
      rating = 4,
      isClosedTemporarily,
    } = restaurant;
    return <Text>{name}</Text>;
  };
