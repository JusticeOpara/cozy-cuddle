
const image1 = '/shirt01.png'
const image2 = '/shirt02.png'
const fabric01 = '/fabric01.png'
const fabric02 = '/fabric02.png'


interface Product {
    id: string;
    title: string;
    text:string;
    imgUrl: string,
    price: number;
   
}
interface Fabric {
    id: string,
    title: string,
    text:string,
    imgUrl: string,
    price: number,
    offprice: string
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
    {
        id: "02",
        title: "Cotton",
        text:"Sullivan Red Melange Easy Care",
        imgUrl:  image2,
        price: 180,
        
    },
    {
        id: "02",
        title: "Cotton",
        text:"Sullivan Red Melange Easy Care",
        imgUrl:  image2,
        price: 180,
        
    },
    {
        id: "02",
        title: "Cotton",
        text:"Sullivan Red Melange Easy Care",
        imgUrl:  image2,
        price: 180,
        
    },
    {
        id: "02",
        title: "Cotton",
        text:"Sullivan Red Melange Easy Care",
        imgUrl:  image2,
        price: 180,
        
    },
]



export const Fabrics:Fabric[] =[
    {
        id: "01",
        title: "Linen",
        text:"Red and Brown Blanket Stripe",
        imgUrl:  fabric01,
        price: 80,
        offprice:''
    },
    {
        id: "02",
        title: "Linen",
        text:"Satoyama Charcoal & Plaid Flannel",
        imgUrl:  fabric02,
        price: 80,
        offprice:''
    },
    {
        id: "02",
        title: "Linen",
        text:"Satoyama Charcoal & Plaid Flannel",
        imgUrl:  fabric02,
        price: 80,
        offprice:''
    },
    {
        id: "02",
        title: "Linen",
        text:"Satoyama Charcoal & Plaid Flannel",
        imgUrl:  fabric02,
        price: 80,
        offprice:''
    },
    {
        id: "02",
        title: "Linen",
        text:"Satoyama Charcoal & Plaid Flannel",
        imgUrl:  fabric02,
        price: 80,
        offprice:''
        
    },
    {
        id: "02",
        title: "Linen",
        text:"Satoyama Charcoal & Plaid Flannel",
        imgUrl:  fabric02,
        price: 80,
        offprice:"$60",
        
    },
]

