import React from "react";
import { ShopByProduct } from "./components/ShopByProduct";
import { FeaturedFarmingEssentials } from "./components/FeaturedFarmingEssentials";
import { FeaturedFarmProduce } from "./components/FeaturedFarmProduce";

export const ShopPage = () => {
    return (
        <main className="bg-gray-50 py-10 mt-16">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">Shop the Best of Farming & Fresh Produce</h1>
                <p className="mt-3 text-lg text-gray-500">Discover top-quality farming tools and fresh farm produce to make your farming journey easier and more productive.</p>
            </header>

            <ShopByProduct />

            <FeaturedFarmingEssentials />

            <FeaturedFarmProduce />
        </main>
    );
}