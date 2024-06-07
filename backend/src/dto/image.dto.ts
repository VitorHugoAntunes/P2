export interface ImageOutput {
    id: string
    url:	string
    width: number
    height: number
}

export interface ImageListOutput {
    images: ImageOutput[]
}