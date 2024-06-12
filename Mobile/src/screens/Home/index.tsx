import { Button } from "@/components/Button";
import { HeaderContainer, HeaderTitle, EmpetyList, Photos } from "./style";
import axios from "axios";
import { useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

interface ImageProps {
  id: string;
  url: string;
  width: number;
  height: number;
}

export function Home() {
  const [showloading, setShowLoading] = useState(false);
  const [images, setImages] = useState<ImageProps[]>([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    try {
      setShowLoading(true);
      const response = await axios.get(`${process.env.EXPO_PUBLIC_MY_IP}`);
      setImages((prevImages) => [...prevImages, ...response.data.images]);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setShowLoading(false);
    }
  };

  const textImageComponent =
    images.length !== 0 ? "Mostar mais fotos" : "Mostrar fotos";

  return (
    <FlatList
      ListHeaderComponent={
        <HeaderContainer>
          <HeaderTitle>Fotos</HeaderTitle>
        </HeaderContainer>
      }
      ListEmptyComponent={() =>
        images ? (
          <EmpetyList>Clique no botão abixo para carregar as fotos!</EmpetyList>
        ) : null
      }
      showsVerticalScrollIndicator={false}
      data={images}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Photos source={{ uri: item.url }} />
        </View>
      )}
      ListFooterComponent={() =>
        !showloading ? (
          <Button onPress={fetchImages} text={textImageComponent} />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )
      }
    />
  );
}
