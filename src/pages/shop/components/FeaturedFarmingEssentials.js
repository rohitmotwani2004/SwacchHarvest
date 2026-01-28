import React from "react";
import { ProductCard } from "./ProductCard";

export const FeaturedFarmingEssentials = () => {
    const featuredProducts = [
        {
            id: 1,
            name: "Organic Soil Conditioner",
            image_url: "/product-images/product_1.jpg",
            price: 350,
            rating: 4.3,
            weight: "5 kg",
            description:
                "This soil conditioner is made from organic matter and natural minerals, designed to improve soil structure and fertility. It helps retain moisture and provides essential nutrients to plants.",
        },
        {
            id: 2,
            name: "Worm Composting Bin (Vermicompost Kit)",
            image_url: "/product-images/product_2.jpg",
            price: 300,
            rating: 4.2,
            weight: "5 kg",
            description:
                "A complete vermicomposting kit that includes a bin, red worms, and instructions. Ideal for turning organic waste into nutrient-rich compost using earthworms.",
        },
        {
            id: 3,
            name: "Organic Plant Food (Liquid Fertilizer)",
            image_url: "/product-images/product_3.jpg",
            price: 300,
            rating: 4.46,
            description:
                "A concentrated liquid fertilizer made from organic plant extracts and seaweed. Suitable for all types of plants, including vegetables, fruits, and flowers.",
        },
    ]
    return (
        <div>
            <h2 className="m-3 mt-[5%] mb-5 p-2 text-center text-2xl text-gray-900 md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-primary-800 from-primary-400">
            Top Tools for Every Farmer
            </h2>
            <div className="flex justify-center">
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-3 w-[82%] justify-items-center">
                    {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};
