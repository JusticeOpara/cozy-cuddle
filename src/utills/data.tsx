
const image1 = '/shirt01.png'
const image2 = '/shirt02.png'
const fabric01 = '/fabric01.png'
const fabric02 = '/fabric02.png'
const blogImag01 = '/blog-img01.png'


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
interface Blog {
id: string,
title: string,
text:string,
imgUrl:string,
data: string
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

export const BlogPost =[

        {
            id: "02",
            title: "Fashion Trends in 2021",
            text:"A new year means new trends. Fashion experts are predicting that statement sleeves, earthy colors, and tracksuits will be all the rage ...",
            imgUrl:  blogImag01,
            date: "17 JAN 2021"
            
        },
        {
            id: "02",
            title: "Fashion Trends in 2021",
            text:"A new year means new trends. Fashion experts are predicting that statement sleeves, earthy colors, and tracksuits will be all the rage ...",
            imgUrl:  blogImag01,
            date: "17 JAN 2021"
            
        },
        {
            id: "02",
            title: "Fashion Trends in 2021",
            text:"A new year means new trends. Fashion experts are predicting that statement sleeves, earthy colors, and tracksuits will be all the rage ...",
            imgUrl:  blogImag01,
            date: "17 JAN 2021"
            
        },
        {
            id: "02",
            title: "Fashion Trends in 2021",
            text:"A new year means new trends. Fashion experts are predicting that statement sleeves, earthy colors, and tracksuits will be all the rage ...",
            imgUrl:  blogImag01,
            date: "17 JAN 2021"
            
        },
        {
            id: "02",
            title: "Fashion Trends in 2021",
            text:"A new year means new trends. Fashion experts are predicting that statement sleeves, earthy colors, and tracksuits will be all the rage ...",
            imgUrl:  blogImag01,
            date: "17 JAN 2021"
            
        },




]
