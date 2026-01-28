import React from 'react'
import { ProductCard } from './ProductCard';
import { FilterDrawer } from './FilterDrawer';
import { useNavigate } from 'react-router-dom';

export const FarmingEssentialsProducts = () => {
    const products = [
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
        {
            id: 4,
            name: "Organic Seedling Starter Kit",
            image_url: "/product-images/product_4.jpg",
            price: 150,
            rating: 4,
            weight: "250 g",
            description:
                "A kit containing organic soil mix, biodegradable pots, and a variety of organic seeds. Perfect for starting seedlings indoors or in a greenhouse.",
        },
        {
            id: 5,
            name: "Drip Irrigation System for Organic Gardens",
            image_url: "/product-images/product_5.jpg",
            price: 1000,
            discounted_price: 750,
            rating: 4,
            description:
                "A customizable drip irrigation system designed for small to medium-sized organic gardens. It conserves water and delivers it directly to plant roots.",
        },
        {
            id: 6,
            name: "Organic Fruit & Vegetable Wash",
            image_url: "/product-images/product_6.jpg",
            price: 400,
            rating: 4.1,
            weight: "1000 ml",
            description:
                "A natural, non-toxic wash for cleaning fruits and vegetables, removing dirt, wax, and pesticide residues. Safe for all produce.",
        },
        {
            id: 7,
            name: "Eco Friendly Plant Pots",
            image_url: "/product-images/product_7.jpg",
            price: 2050,
            discounted_price: 1500,
            rating: 4.1,
            description:
                "Biodegradable plant pots made from recycled materials. These pots decompose naturally and can be planted directly in the ground, reducing transplant shock.",
        },
        {
            id: 8,
            name: "Organic Mulch (Coconut Coir)",
            image_url: "/product-images/product_8.jpg",
            price: 320,
            rating: 4,
            weight: "4 kg",
            description:
                "Organic mulch made from coconut coir, perfect for retaining moisture and suppressing weeds.",
        },
        {
            id: 9,
            name: "Insect-Repelling Plant Mix",
            image_url: "/product-images/product_9.jpg",
            price: 290,
            weight: "200 ml",
            rating: 4,
            description:
                "A collection of organic seeds for plants known to repel insects, such as marigold, basil, and lavender. Perfect for natural pest control in your garden.",
        },
        {
            id: 10,
            name: "Bee-Friendly Flower Seeds",
            image_url: "/product-images/product_10.jpg",
            price: 150,
            rating: 4.3,
            weight: "15 per packet",
            description:
                "A mix of flower seeds that attract bees and other pollinators, promoting biodiversity in your garden.",
        },
        {
            id: 11,
            name: "Organic Plant Disease Control",
            image_url: "/product-images/product_11.jpg",
            price: 290,
            rating: 4.1,
            weight: "400 gm",
            description:
                "A natural, organic fungicide and bactericide for controlling plant diseases like blight, mildew, and rust. Safe for edible plants.",
        },
        {
            id: 12,
            name: "Organic Plant Stakes with Ties",
            image_url: "/product-images/product_12.jpg",
            price: 200,
            rating: 4.3,
            weight: "Pack of 3",
            description:
                "Bamboo plant stakes paired with natural fiber ties, ideal for supporting growing plants without damaging them. Perfect for tomatoes, cucumbers, and other vine crops.",
        },
    ];

    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const searchValue = evt.target.searchBar.value;
        evt.target.searchBar.value = "";
        navigate(`/products?q=${searchValue}`);
    };

    return (
        <main className="w-full mt-[5%]">
            <div className="flex my-2 items-center justify-center justify-items-center">
                <form
                    onSubmit={handleSubmit}
                    className=" w-[90%] mx-2 md:w-[70%]"
                >
                    <div className="relative pt-2 w-full">
                        <input
                            type="q"
                            id="default-q"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#FFF]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Search Products..."
                            name="searchBar"
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-primary-500 hover:bg-primary-600  font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#FFF"
                                viewBox="0 0 256 256"
                            >
                                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                            </svg>
                        </button>
                    </div>
                </form>
                <FilterDrawer />
            </div>
            <div className="flex justify-center">
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-3 w-[82%] justify-items-center">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </main>
    );

}
