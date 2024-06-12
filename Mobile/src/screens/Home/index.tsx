import { Button } from "@/components/Button";
import { HeaderContainer, HeaderTitle } from "./style";
import axios from 'axios';
import { useState } from "react";
import { Image, ScrollView, View } from "react-native";

interface ImageProps {
  id: string;
  url: string;
  width: number;
  height: number;
}

export function Home() {
  const [images, setImages] = useState<ImageProps[]>([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    try {
      const response = await axios.get(`http://10.0.0.100:3000/api/images`);
      setImages((prevImages) => [...prevImages, ...response.data.images]);
      setPage(page + 1);

      console.log(response.data.images);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <ScrollView>
      <HeaderContainer>
        <HeaderTitle>Fotos</HeaderTitle>
        <View>
          {images.map((image) => (
            <Image
              key={image.id}
              source={{ uri: image.url }}
              style={{ width: 300, height: 300 }}
            />
          ))}
        </View>
        <Button onPress={fetchImages} text="Load more" />
      </HeaderContainer>
    </ScrollView>
  );
}