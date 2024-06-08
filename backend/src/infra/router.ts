import express, { Request, Response } from 'express';
import ImageService from '../service/image.service';

export const router = express.Router();

router.get('/images', async (req: Request, res: Response) => {
    try {
        
        const imageService = new ImageService();
        const imageListOutput = await imageService.list();
        
        
        res.json(imageListOutput);
    } catch (error) {
        
        res.status(500).json({ message: 'Erro ao buscar imagens' });
    }
})
