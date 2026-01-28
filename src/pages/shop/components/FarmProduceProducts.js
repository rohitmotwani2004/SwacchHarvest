import React from "react";
import { FilterDrawer } from "./FilterDrawer";
import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";

export const FarmProduceProducts = () => {
    const fruits = [
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
            id: 4,
            name: "Mangoes",
            image_url: "/fruits-images/product_5.jpg",
            price: 200,
            rating: 4,
            description:
                "Organic mangoes contain more Vitamin A, Vitamin C, and antioxidants, which are important for skin health and immunity.",
        },

        {
            id: 5,
            name: "Grapes",
            image_url: "/fruits-images/product_6.jpg",
            price: 100,
            rating: 4.1,
            weight: "1 kg",
            description:
                "Organic grapes have higher antioxidant content, such as resveratrol, which is beneficial for heart health.",
        },

        {
            id: 6,
            name: "Pomegranates",
            image_url: "/fruits-images/product_7.jpg",
            price: 150,
            rating: 4.1,
            description:
                "Organic pomegranates are rich in Vitamin C, potassium, and antioxidants, which support heart health and reduce inflammation.",
        },

        {
            id: 7,
            name: "Oranges",
            image_url: "/fruits-images/product_8.jpg",
            price: 90,
            rating: 4,
            weight: "1 Kg",
            description:
                "Organic oranges have higher levels of Vitamin C and antioxidants, which improve skin and immune health.",
        },

        {
            id: 8,
            name: "Strawberries",
            image_url: "/fruits-images/product_9.jpg",
            price: 300,
            weight: "1 box",
            rating: 4,
            description:
                "Organic strawberries contain more Vitamin C, flavonoids, and antioxidants, without the high pesticide residue found in conventionally grown ones.",
        },

        {
            id: 9,
            name: "Lychee",
            image_url: "/fruits-images/product_10.jpg",
            price: 200,
            weight: "1 kg",
            rating: 4,
            description:
                "Organic lychees are high in Vitamin C and antioxidants and have fewer chemical residues than conventionally grown lychees.",
        },

        {
            id: 10,
            name: "Watermelon",
            image_url: "/fruits-images/product_11.jpg",
            price: 30,
            rating: 4.3,
            weight: "1 piece",
            description:
                "Organic watermelons are rich in Vitamin C, lycopene, and antioxidants, with better flavor and nutrition.",
        },

        {
            id: 11,
            name: "Pear",
            image_url: "/fruits-images/product_12.jpg",
            price: 150,
            rating: 4.1,
            weight: "1 kg",
            description:
                "Organic pears have higher concentrations of Vitamin C and fiber, promoting better digestive and immune health.",
        },

        {
            id: 12,
            name: "Guava",
            image_url: "/fruits-images/product_13.jpg",
            price: 70,
            rating: 4.3,
            weight: "1 kg",
            description:
                "Organic guavas have higher levels of Vitamin C and dietary fiber, which aid digestion and improve immune health.",
        },

        {
            id: 13,
            name: "Plums",
            image_url: "/fruits-images/product_14.jpg",
            price: 180,
            rating: 4.3,
            weight: "1 kg",
            description:
                "Organic plums are packed with Vitamin C, fiber, and antioxidants, aiding digestion and reducing inflammation.",
        },

        {
            id: 14,
            name: "Pineapples",
            image_url: "/fruits-images/product_15.jpg",
            price: 80,
            rating: 4.3,
            weight: "1 piece",
            description:
                "Organic pineapples are rich in Vitamin C, manganese, and bromelain (an anti-inflammatory enzyme), and contain fewer pesticides.",
        },
    ];

    const vegetables = [
        {
            id: 2,
            name: "Tomatoes",
            image_url: "/vegetables-images/product_2.jpg",
            price: 50,
            rating: 4.2,
            weight: "1 kg",
            description:
                "Higher levels of Vitamin C and lycopene (an antioxidant) in organic tomatoes, which help fight free radicals.",
        },

        {
            id: 3,
            name: "Palak",
            image_url: "/vegetables-images/product_3.jpg",
            price: 40,
            rating: "4",
            description:
                "Organic spinach is rich in iron, magnesium, and folate, and has higher levels of Vitamin C and beta-carotene than conventional spinach.",
        },

        {
            id: 4,
            name: "Carrot",
            image_url: "/vegetables-images/product_4.jpg",
            price: 60,
            rating: 4,
            weight: "1 Kg",
            description:
                "Organic carrots tend to have more beta-carotene and antioxidants, which are vital for eye health and immune function.",
        },

        {
            id: 5,
            name: "Cauliflower",
            image_url: "/vegetables-images/product_5.jpg",
            price: 70,
            rating: 4,
            weight: "1 kg",
            description:
                "Organic cauliflower contains more Vitamin C and glucosinolates, which may help in cancer prevention.",
        },

        {
            id: 6,
            name: "Brinjal",
            image_url: "/vegetables-images/product_6.jpg",
            price: 45,
            rating: 4.1,
            weight: "1 kg",
            description:
                "Organic brinjal is higher in polyphenols and antioxidants, which help protect cells from damage.",
        },

        {
            id: 7,
            name: "Cabbage",
            image_url: "/vegetables-images/product_7.jpg",
            price: 50,
            rating: 4,
            weight: "1 Kg",
            description:
                "Organic cabbage has higher levels of Vitamins K and C, promoting bone health and immune function.",
        },

        {
            id: 8,
            name: "Ladyfinger",
            image_url: "/vegetables-images/product_8.jpg",
            price: 55,
            rating: 4,
            weight: "1 Kg",
            description:
                "Organic okra has more fiber, Vitamin C, and magnesium, supporting digestive and immune health.",
        },

        {
            id: 9,
            name: "Onion",
            image_url: "/vegetables-images/product_9.jpg",
            price: 30,
            weight: "1 kg",
            rating: 4,
            description:
                "Organic onions often contain more flavonoids and sulfur compounds, which have anti-inflammatory properties.",
        },

        {
            id: 10,
            name: "Potato",
            image_url: "/vegetables-images/product_10.jpg",
            price: 35,
            weight: "1 kg",
            rating: 4,
            description:
                "Organic potatoes have more Vitamin C, potassium, and magnesium, while having fewer nitrates due to the lack of synthetic fertilizers.",
        },

        {
            id: 11,
            name: "Cucumber",
            image_url: "/vegetables-images/product_11.jpg",
            price: 40,
            rating: 4.3,
            weight: "1 kg",
            description:
                "Organic cucumbers contain more Vitamin K and antioxidants, important for skin health and wound healing.",
        },

        {
            id: 12,
            name: "Beans",
            image_url: "/vegetables-images/product_12.jpg",
            price: 70,
            rating: 4.1,
            weight: "1 kg",
            description:
                "Organic beans have higher levels of fiber and protein, along with essential minerals like magnesium and iron.",
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

        {
            id: 14,
            name: "Bitter Gourd (Karela)",
            image_url: "/vegetables-images/product_15.jpg",
            price: 50,
            rating: 4.3,
            weight: "1 kg",
            description:
                "Organic bitter gourd contains more antioxidants, Vitamin C, and iron, which are beneficial for blood sugar regulation and immune health.",
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
            <div>
                <h2 className="m-3 mt-[5%] mb-5 p-2 text-center text-2xl text-gray-900 md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-primary-800 from-primary-400">
                    Fresh Organic Fruits
                </h2>
                <div className="flex justify-center">
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-3 w-[82%] justify-items-center">
                        {fruits.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <h2 className="m-3 mt-[5%] mb-5 p-2 text-center text-2xl text-gray-900 md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-primary-800 from-primary-400">
                    Nutrient-Packed Organic Vegetables
                </h2>
                <div className="flex justify-center">
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-3 w-[82%] justify-items-center">
                        {vegetables.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};
