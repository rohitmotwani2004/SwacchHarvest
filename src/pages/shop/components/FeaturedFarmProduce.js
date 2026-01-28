import React from 'react'
import { ProductCard } from './ProductCard';

export const FeaturedFarmProduce = () => {
  const featuredProducts = [
    {
        id: 2,
        name: "Apple",
        image_url: "/fruits-images/product_2.jpg",
        price: 180,
        rating: 4.2,
        weight: "1 kg",
        description:
            "Organic apples tend to have higher concentrations of polyphenols and Vitamin C, promoting heart health and immunity.",
    },

    {
        id: 3,
        name: "Banana",
        image_url: "/fruits-images/product_3.jpg",
        price: 50,
        rating: "4",
        description:
            "Organic bananas are rich in potassium, Vitamin C, and fiber, without the residue of synthetic chemicals used in conventional banana farming.",
    },
    {
        id: 13,
        name: "Pumpkin",
        image_url: "/vegetables-images/product_13.jpg",
        price: 45,
        rating: 4.3,
        weight: "1 kg",
        description:
            "Organic pumpkins are rich in beta-carotene, Vitamin A, and potassium, supporting eye health and immune function.",
    },
]
return (
    <div>
        <h2 className="m-3 mt-[5%] mb-5 p-2 text-center text-2xl text-gray-900 md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-primary-800 from-primary-400">
        Fresh Picks from the Farm
        </h2>
        <div className="flex justify-center">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-3 w-[82%] justify-items-center">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </div>
);}
