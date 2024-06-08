import axios from 'axios';
import { ImageListOutput, ImageOutput } from '../dto/image.dto';

export default class ImageService {

    async list(): Promise<ImageListOutput> {
        try {
            // Faz uma requisição GET para a API "The Cat API" para obter 5 imagens de gatos
            const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
                params: { limit: 5 },
                headers: {
                    'x-api-key': process.env.CAT_API_KEY, // Adiciona a chave da API no header
                },
            });

            
            const images: ImageOutput[] = response.data.map((image: any) => ({
                id: image.id,
                url: image.url,
                width: image.width,
                height: image.height,
            }));

            
            return { images };
        } catch (error) {
            
            throw new Error('Erro ao buscar imagens da API');
        }
    }

}