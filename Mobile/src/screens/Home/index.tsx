import { Button } from "@/components/Button";
import { HeaderContainer, HeaderTitle } from "./style";
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

  return (
    <FlatList
      ListHeaderComponent={
        <HeaderContainer>
          <HeaderTitle
            style={{ padding: 8, textAlign: "center", marginBottom: 10 }}
          >
            Fotos
          </HeaderTitle>
        </HeaderContainer>
      }
      showsVerticalScrollIndicator={false}
      data={images}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Image
            source={{ uri: item.url }}
            style={{
              width: "100%",
              height: 300,
              marginBottom: 15,
              borderRadius: 10,
            }}
          />
        </View>
      )}
      ListFooterComponent={() =>
        !showloading ? (
          <Button onPress={fetchImages} text="Mostrar mais fotos" />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )
      }
    />
  );
}
