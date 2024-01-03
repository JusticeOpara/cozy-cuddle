
const image1 = '../../public/shirt01.png'
const image2 = '../../public/shirt02.png'


interface Product {
    id: string;
    title: string;
    text:string;
    imgUrl: string,
    price: number;
   
}

export const Products: Product[] = [

    {
        id: "01",
        title: "Linen",
        text:"Hudson Jade Wrinkle-Resistant Twill Maximus",
        imgUrl:  image1,
        price: 200,
        
    },
    {
        id: "02",
        title: "Cotton",
        text:"Sullivan Red Melange Easy Care",
        imgUrl:  image2,
        price: 180,
        
    },
]