import { Info } from "@phosphor-icons/react";
import React, { useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
} from "recharts";

const allProducts = [
    {
        id: 1,
        name: "Organic Soil Conditioner",
        image_url: "/product-images/product_1.jpg",
        price: 350,
        rating: 4.3,
        weight: "5 kg",
        description:
            "This soil conditioner is made from organic matter and natural minerals, designed to improve soil structure and fertility. It helps retain moisture and provides essential nutrients to plants.",
        category: "Garden Supplies",
        stock: 50,
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
        category: "Garden Supplies",
        stock: 60,
    },
    {
        id: 3,
        name: "Organic Plant Food (Liquid Fertilizer)",
        image_url: "/product-images/product_3.jpg",
        price: 300,
        rating: 4.46,
        description:
            "A concentrated liquid fertilizer made from organic plant extracts and seaweed. Suitable for all types of plants, including vegetables, fruits, and flowers.",
        category: "Garden Supplies",
        stock: 40,
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
        category: "Garden Supplies",
        stock: 100,
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
        category: "Garden Supplies",
        stock: 25,
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
        category: "Garden Supplies",
        stock: 80,
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
        category: "Garden Supplies",
        stock: 35,
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
        category: "Garden Supplies",
        stock: 60,
    },
    {
        id: 9,
        name: "Insect-Repelling Plant Mix",
        image_url: "/product-images/product_9.jpg",
        price: 290,
        rating: 4,
        weight: "200 ml",
        description:
            "A collection of organic seeds for plants known to repel insects, such as marigold, basil, and lavender. Perfect for natural pest control in your garden.",
        category: "Garden Supplies",
        stock: 75,
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
        category: "Garden Supplies",
        stock: 90,
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
        category: "Garden Supplies",
        stock: 50,
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
        category: "Garden Supplies",
        stock: 40,
    },
    {
        id: 13,
        name: "Apple",
        image_url: "/fruits-images/product_2.jpg",
        price: 180,
        rating: 4.2,
        weight: "1 kg",
        description:
            "Organic apples tend to have higher concentrations of polyphenols and Vitamin C, promoting heart health and immunity.",
        category: "Fruits",
        stock: 70,
    },
    {
        id: 14,
        name: "Banana",
        image_url: "/fruits-images/product_3.jpg",
        price: 50,
        rating: 4,
        description:
            "Organic bananas are rich in potassium, Vitamin C, and fiber, without the residue of synthetic chemicals used in conventional banana farming.",
        category: "Fruits",
        stock: 120,
    },
    {
        id: 15,
        name: "Mangoes",
        image_url: "/fruits-images/product_5.jpg",
        price: 200,
        rating: 4,
        description:
            "Organic mangoes contain more Vitamin A, Vitamin C, and antioxidants, which are important for skin health and immunity.",
        category: "Fruits",
        stock: 40,
    },
    {
        id: 16,
        name: "Grapes",
        image_url: "/fruits-images/product_6.jpg",
        price: 100,
        rating: 4.1,
        weight: "1 kg",
        description:
            "Organic grapes have higher antioxidant content, such as resveratrol, which is beneficial for heart health.",
        category: "Fruits",
        stock: 80,
    },
    {
        id: 17,
        name: "Pomegranates",
        image_url: "/fruits-images/product_7.jpg",
        price: 150,
        rating: 4.1,
        description:
            "Organic pomegranates are rich in Vitamin C, potassium, and antioxidants, which support heart health and reduce inflammation.",
        category: "Fruits",
        stock: 55,
    },
    {
        id: 18,
        name: "Oranges",
        image_url: "/fruits-images/product_8.jpg",
        price: 90,
        rating: 4,
        weight: "1 Kg",
        description:
            "Organic oranges have higher levels of Vitamin C and antioxidants, which improve skin and immune health.",
        category: "Fruits",
        stock: 100,
    },
    {
        id: 19,
        name: "Strawberries",
        image_url: "/fruits-images/product_9.jpg",
        price: 300,
        weight: "1 box",
        rating: 4,
        description:
            "Organic strawberries contain more Vitamin C, flavonoids, and antioxidants, without the high pesticide residue found in conventionally grown ones.",
        category: "Fruits",
        stock: 60,
    },
    {
        id: 20,
        name: "Lychee",
        image_url: "/fruits-images/product_10.jpg",
        price: 200,
        weight: "1 kg",
        rating: 4,
        description:
            "Organic lychees are high in Vitamin C and antioxidants and have fewer chemical residues than conventionally grown lychees.",
        category: "Fruits",
        stock: 30,
    },
    {
        id: 21,
        name: "Tomatoes",
        image_url: "/vegetables-images/product_2.jpg",
        price: 50,
        rating: 4.2,
        weight: "1 kg",
        description:
            "Higher levels of Vitamin C and lycopene (an antioxidant) in organic tomatoes, which help fight free radicals.",
        category: "Vegetables",
        stock: 80,
    },
    {
        id: 22,
        name: "Palak",
        image_url: "/vegetables-images/product_3.jpg",
        price: 40,
        rating: 4,
        description:
            "Organic spinach is rich in iron, magnesium, and folate, and has higher levels of Vitamin C and beta-carotene than conventional spinach.",
        category: "Vegetables",
        stock: 110,
    },
    {
        id: 23,
        name: "Carrot",
        image_url: "/vegetables-images/product_4.jpg",
        price: 60,
        rating: 4,
        weight: "1 Kg",
        description:
            "Organic carrots tend to have more beta-carotene and antioxidants, which are vital for eye health and immune function.",
        category: "Vegetables",
        stock: 95,
    },
    {
        id: 24,
        name: "Cauliflower",
        image_url: "/vegetables-images/product_5.jpg",
        price: 70,
        rating: 4,
        weight: "1 kg",
        description:
            "Organic cauliflower contains more Vitamin C and glucosinolates, which may help in cancer prevention.",
        category: "Vegetables",
        stock: 50,
    },
    {
        id: 25,
        name: "Brinjal",
        image_url: "/vegetables-images/product_6.jpg",
        price: 45,
        rating: 4.1,
        weight: "1 kg",
        description:
            "Organic brinjal is higher in polyphenols and antioxidants, which help protect cells from damage.",
        category: "Vegetables",
        stock: 60,
    },
    {
        id: 26,
        name: "Cabbage",
        image_url: "/vegetables-images/product_7.jpg",
        price: 50,
        rating: 4,
        weight: "1 Kg",
        description:
            "Organic cabbage has higher levels of Vitamins K and C, promoting bone health and immune function.",
        category: "Vegetables",
        stock: 110,
    },
    {
        id: 27,
        name: "Ladyfinger",
        image_url: "/vegetables-images/product_8.jpg",
        price: 55,
        rating: 4,
        weight: "1 Kg",
        description:
            "Organic okra has more fiber, Vitamin C, and magnesium, supporting digestive and immune health.",
        category: "Vegetables",
        stock: 85,
    },
    {
        id: 28,
        name: "Onion",
        image_url: "/vegetables-images/product_9.jpg",
        price: 30,
        rating: 4,
        weight: "1 kg",
        description:
            "Organic onions often contain more flavonoids and sulfur compounds, which have anti-inflammatory properties.",
        category: "Vegetables",
        stock: 120,
    },
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const generateSalesData = (product, numMonths = 6) => {
    const data = [];

    // Generate random sales with increasing/decreasing trend
    let previousSales = Math.floor(Math.random() * 500) + 500; // Random starting value

    for (let i = 0; i < numMonths; i++) {
        const trend = Math.random() > 0.5 ? 1 : -1; // Randomly increase or decrease
        const salesChange = Math.floor(Math.random() * 200) * trend; // Random fluctuation

        previousSales = Math.max(0, previousSales + salesChange); // Prevent negative sales

        data.push({
            month: monthNames[i],
            sales: previousSales,
        });
    }

    return data;
};

export const InventoryManagement = () => {
    const [inventory, setInventory] = useState(allProducts);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAdjustStockModalOpen, setIsAdjustStockModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [newImage, setNewImage] = useState(null);
    const [newProductDetails, setNewProductDetails] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
    });

    const [isHovered, setIsHovered] = useState(false);

    const [newStock, setNewStock] = useState("");
    const categories = [
        "All",
        ...new Set(allProducts.map((product) => product.category)),
    ];
    const filteredProducts = inventory.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description
                .toLowerCase()
                .includes(searchQuery.toLowerCase());
        const matchesCategory =
            filterCategory === "All" || product.category === filterCategory;
        return matchesSearch && matchesCategory;
    });
    const getStockDistributionData = () => {
        const stockData = inventory.reduce((acc, product) => {
            acc[product.category] =
                (acc[product.category] || 0) + product.stock;
            return acc;
        }, {});
        return Object.entries(stockData).map(([category, stock]) => ({
            name: category,
            value: stock,
            unit: "items",
        }));
    };
    const salesData = selectedProduct ? generateSalesData(selectedProduct) : [];

    const groupedProducts = filteredProducts.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    const handleAddProduct = () => {
        const newProduct = {
            id: Date.now(),
            name: newProductDetails.name,
            description: newProductDetails.description,
            category: newProductDetails.category,
            price: parseFloat(newProductDetails.price),
            stock: parseInt(newProductDetails.stock),
            image_url: newImage ? URL.createObjectURL(newImage) : "",
        };
        setInventory((prevInventory) => [...prevInventory, newProduct]);
        setIsAddProductModalOpen(false);
        setNewProductDetails({
            name: "",
            description: "",
            category: "",
            price: "",
            stock: "",
        });
        setNewImage(null);
    };
    const handleSaveEdit = () => {
        if (!selectedProduct) return;
        const updatedProduct = {
            ...selectedProduct,
            image_url: newImage
                ? URL.createObjectURL(newImage)
                : selectedProduct.image_url,
            name: newProductDetails.name || selectedProduct.name,
            description:
                newProductDetails.description || selectedProduct.description,
            price: newProductDetails.price || selectedProduct.price,
            stock: newStock || selectedProduct.stock,
        };
        setInventory((prevInventory) =>
            prevInventory.map((product) =>
                product.id === selectedProduct.id ? updatedProduct : product
            )
        );
        setIsEditModalOpen(false);
        setSelectedProduct(null);
        setNewProductDetails({
            name: "",
            description: "",
            category: "",
            price: "",
            stock: "",
        });
        setNewImage(null);
    };
    const handleAdjustStock = () => {
        if (!selectedProduct) return;
        const updatedProduct = {
            ...selectedProduct,
            stock: parseInt(newStock),
        };
        setInventory((prevInventory) =>
            prevInventory.map((product) =>
                product.id === selectedProduct.id ? updatedProduct : product
            )
        );
        setIsAdjustStockModalOpen(false);
        setNewStock("");
    };
    const handleDeleteProduct = () => {
        setInventory(
            inventory.filter((product) => product.id !== selectedProduct.id)
        );
        setIsDeleteModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="bg-gray-100 min-h-screen font-sans">
            <div className="container mx-auto px-8 py-12 mt-16 max-w-screen-xl">
                <h1 className="text-4xl font-bold text-center text-primary-600 mb-8">
                    Inventory Management
                </h1>
                {/* Charts Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Stock Distribution Chart*/}
                    <div className="bg-white relative p-6 rounded-xl shadow-lg max-w-4xl w-full mx-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">
                                Stock Distribution by Category
                            </h3>
                            <div
                                className="relative"
                                onMouseEnter={() => setIsHovered(true)} // Show on hover
                                onMouseLeave={() => setIsHovered(false)} // Hide on hover out
                            >
                                <Info
                                    className="text-blue-500 text-2xl cursor-pointer"
                                    title="This chart illustrates how the stock is distributed across different categories. Hover over any section for more details on stock quantity and percentages."
                                />
                            </div>
                        </div>

                        {/* Tooltip for hover effect (floating outside chart) */}
                        {isHovered && (
                            <div className="absolute top-0 right-32 bg-blue-50 opacity-90 transform translate-x-1/4 translate-y-1/4 p-4 shadow-lg rounded-md z-10 w-72">
                                <p className="text-gray-600 text-sm">
                                    The chart visually represents the
                                    distribution of stock across various
                                    categories. Each segment shows a percentage
                                    of the total stock, with corresponding
                                    quantities displayed. Hover over the
                                    segments for detailed insights about each
                                    category.
                                </p>
                            </div>
                        )}

                        {/* Stock Distribution Pie Chart */}
                        <div className="relative">
                            <ResponsiveContainer width="100%" height={350}>
                                <PieChart>
                                    <Pie
                                        data={getStockDistributionData()}
                                        dataKey="value"
                                        nameKey="name"
                                        outerRadius={100}
                                        fill="#8884d8"
                                        labelLine={false}
                                        label={({ name, value, percent }) =>
                                            `${name}: ${value} units`
                                        }
                                    >
                                        {getStockDistributionData().map(
                                            (entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={
                                                        [
                                                            "#34D399", // Green: Healthy stock
                                                            "#F87171", // Red: Low stock
                                                            "#60A5FA", // Blue: Moderate stock
                                                            "#FDBA74", // Orange: Replenishing stock
                                                        ][index % 4]
                                                    } // Cycle through the colors
                                                />
                                            )
                                        )}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value, name) => [
                                            `${value} units`,
                                            name,
                                        ]}
                                    />
                                    <Legend
                                        verticalAlign="top"
                                        height={36}
                                        layout="horizontal"
                                        align="center"
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    {/* Sales Trend Area Chart */}
                    <div className="bg-white p-5 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">
                            Sales Trend (Last 6 Months)
                        </h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={salesData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis unit="₹" />

                                {/* Tooltip to show sales and percentage change */}
                                <Tooltip
                                    content={({ active, payload }) => {
                                        if (
                                            active &&
                                            payload &&
                                            payload.length
                                        ) {
                                            const data = payload[0].payload;
                                            const prevIndex =
                                                monthNames.indexOf(data.month) -
                                                1;
                                            const prevSales =
                                                prevIndex >= 0
                                                    ? salesData[prevIndex].sales
                                                    : 0;
                                            const change =
                                                data.sales - prevSales;
                                            const percentageChange =
                                                prevSales === 0
                                                    ? 0
                                                    : (
                                                          (change / prevSales) *
                                                          100
                                                      ).toFixed(2);

                                            return (
                                                <div className="bg-white p-2 rounded shadow-lg">
                                                    <p>
                                                        <strong>
                                                            {data.month}
                                                        </strong>
                                                    </p>
                                                    <p>
                                                        Sales: ₹
                                                        {data.sales.toLocaleString()}
                                                    </p>
                                                    <p
                                                        className={
                                                            change >= 0
                                                                ? "text-green-500"
                                                                : "text-red-500"
                                                        }
                                                    >
                                                        {change >= 0
                                                            ? "▲"
                                                            : "▼"}{" "}
                                                        {change >= 0
                                                            ? "Increase"
                                                            : "Decrease"}{" "}
                                                        (
                                                        {Math.abs(
                                                            percentageChange
                                                        )}
                                                        %)
                                                    </p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />

                                {/* Calculate the sales difference between the last and second-last month */}
                                {salesData.length >= 2 && (
                                    <Area
                                        type="monotone"
                                        dataKey="sales"
                                        stroke="#000" // Stroke color for the line
                                        fillOpacity={0.4}
                                        fill={
                                            salesData[salesData.length - 1]
                                                .sales -
                                                salesData[salesData.length - 2]
                                                    .sales >=
                                            0
                                                ? "#4CAF50"
                                                : "#F44336"
                                        } // Green or Red based on the sales difference
                                    />
                                )}
                            </AreaChart>
                        </ResponsiveContainer>

                        {/* Product selection dropdown */}
                        <select
                            value={selectedProduct ? selectedProduct.id : ""}
                            onChange={(e) => {
                                const product = inventory.find(
                                    (prod) =>
                                        prod.id === parseInt(e.target.value)
                                );
                                setSelectedProduct(product);
                            }}
                            className="mt-4 px-4 py-2 border border-gray-300 rounded-md shadow-md w-full"
                        >
                            <option value="">
                                Select a product for graphs
                            </option>
                            {inventory.map((product) => (
                                <option key={product.id} value={product.id}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* Search and Filter Section */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex space-x-4 items-center">
                        <div className="flex flex-col">
                            <label
                                htmlFor="search"
                                className="text-sm font-semibold text-gray-700 mb-1"
                            >
                                Search Products
                            </label>
                            <input
                                id="search"
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products"
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-md w-72 focus:outline-none"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label
                                htmlFor="category"
                                className="text-sm font-semibold text-gray-700 mb-1"
                            >
                                Filter by Category
                            </label>
                            <select
                                id="category"
                                value={filterCategory}
                                onChange={(e) =>
                                    setFilterCategory(e.target.value)
                                }
                                className="px-4 py-2 border border-gray-300 rounded-md shadow-md"
                            >
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button
                        className="bg-primary-600 text-white px-6 py-2 rounded-md shadow-md"
                        onClick={() => setIsAddProductModalOpen(true)}
                    >
                        Add New Product
                    </button>
                </div>
                {/* Products Table */}
                <div className="overflow-x-auto mb-8 bg-white p-6 rounded-lg shadow-lg">
                    {/* Loop through categories */}
                    {Object.keys(groupedProducts).map((category) => (
                        <div key={category} className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                {category}
                            </h2>

                            <table className="min-w-full border-collapse border border-gray-300 table-fixed">
                                <thead className="bg-gray-50">
                                    <tr className="text-sm text-gray-600">
                                        <th className="px-4 py-3 text-left w-1/7">
                                            Image
                                        </th>
                                        <th className="px-4 py-3 text-left w-2/7">
                                            Product Name
                                        </th>
                                        <th className="px-4 py-3 text-left w-1/7">
                                            Price (₹)
                                        </th>
                                        <th className="px-4 py-3 text-left w-1/7">
                                            Stock
                                        </th>
                                        <th className="px-4 py-3 text-left w-2/7">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {groupedProducts[category].map(
                                        (product) => (
                                            <tr
                                                key={product.id}
                                                className={`hover:bg-gray-100 cursor-pointer ${
                                                    selectedProduct?.id ===
                                                    product.id
                                                        ? "bg-blue-100"
                                                        : ""
                                                }`} // Change bg if selected
                                                onClick={() =>
                                                    setSelectedProduct(product)
                                                } // Select product on row click
                                            >
                                                <td className="px-5 py-4">
                                                    <img
                                                        src={
                                                            product.image_url ||
                                                            "https://via.placeholder.com/50"
                                                        }
                                                        alt={product.name}
                                                        className="w-12 h-12 rounded-full object-cover"
                                                    />
                                                </td>
                                                <td className="px-4 py-3 text-gray-800">
                                                    {product.name}
                                                </td>
                                                <td className="px-4 py-3 text-gray-800">
                                                    {product.price}
                                                </td>
                                                <td className="px-4 py-3 text-gray-600">
                                                    {product.stock}
                                                </td>
                                                <td className="px-4 py-3 space-x-3 flex items-center justify-start">
                                                    {/* Edit Button */}
                                                    <button
                                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm transition duration-150 ease-in-out"
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // Prevent the row click event from firing
                                                            setSelectedProduct(
                                                                product
                                                            );
                                                            setIsEditModalOpen(
                                                                true
                                                            );
                                                        }}
                                                    >
                                                        Edit
                                                    </button>

                                                    {/* Delete Button */}
                                                    <button
                                                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-sm transition duration-150 ease-in-out"
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // Prevent the row click event from firing
                                                            setSelectedProduct(
                                                                product
                                                            );
                                                            setIsDeleteModalOpen(
                                                                true
                                                            );
                                                        }}
                                                    >
                                                        Delete
                                                    </button>

                                                    {/* Adjust Stock Button */}
                                                    <button
                                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md shadow-sm transition duration-150 ease-in-out"
                                                        onClick={(e) => {
                                                            e.stopPropagation(); // Prevent the row click event from firing
                                                            setSelectedProduct(
                                                                product
                                                            );
                                                            setIsAdjustStockModalOpen(
                                                                true
                                                            );
                                                        }}
                                                    >
                                                        Adjust Stock
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>

                {/* Add Product Modal */}
                {isAddProductModalOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center mt-10">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-96 max-w-full h-auto max-h-[85vh] overflow-y-auto">
                            <h2 className="text-2xl font-semibold text-center mb-4">
                                Add New Product
                            </h2>

                            {/* Product Name */}
                            <div className="mb-4">
                                <label
                                    htmlFor="product-name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Product Name
                                </label>
                                <input
                                    id="product-name"
                                    type="text"
                                    placeholder="Enter product name"
                                    value={newProductDetails.name}
                                    onChange={(e) =>
                                        setNewProductDetails({
                                            ...newProductDetails,
                                            name: e.target.value,
                                        })
                                    }
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>

                            {/* Description */}
                            <div className="mb-4">
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    placeholder="Enter product description"
                                    value={newProductDetails.description}
                                    onChange={(e) =>
                                        setNewProductDetails({
                                            ...newProductDetails,
                                            description: e.target.value,
                                        })
                                    }
                                    rows="4"
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>

                            {/* Category */}
                            <div className="mb-4">
                                <label
                                    htmlFor="category"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Category
                                </label>
                                <select
                                    id="category"
                                    value={newProductDetails.category}
                                    onChange={(e) =>
                                        setNewProductDetails({
                                            ...newProductDetails,
                                            category: e.target.value,
                                        })
                                    }
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                >
                                    <option value="">Select Category</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Price */}
                            <div className="mb-4">
                                <label
                                    htmlFor="price"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Price (₹)
                                </label>
                                <input
                                    id="price"
                                    type="number"
                                    placeholder="Enter product price"
                                    value={newProductDetails.price}
                                    onChange={(e) =>
                                        setNewProductDetails({
                                            ...newProductDetails,
                                            price: e.target.value,
                                        })
                                    }
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>

                            {/* Stock */}
                            <div className="mb-4">
                                <label
                                    htmlFor="stock"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Stock Quantity
                                </label>
                                <input
                                    id="stock"
                                    type="number"
                                    placeholder="Enter stock quantity"
                                    value={newProductDetails.stock}
                                    onChange={(e) =>
                                        setNewProductDetails({
                                            ...newProductDetails,
                                            stock: e.target.value,
                                        })
                                    }
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>

                            {/* Image Upload */}
                            <div className="mb-4">
                                <label
                                    htmlFor="image"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Product Image
                                </label>
                                <input
                                    id="image"
                                    type="file"
                                    onChange={(e) =>
                                        setNewImage(e.target.files[0])
                                    }
                                    className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-between space-x-4">
                                <button
                                    onClick={() =>
                                        setIsAddProductModalOpen(false)
                                    }
                                    className="w-full bg-red-500 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddProduct}
                                    className="w-full bg-primary-600 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                                >
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Edit Product Modal */}
                {isEditModalOpen && selectedProduct && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                            <h2 className="text-2xl font-semibold mb-4">
                                Edit Product
                            </h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    value={
                                        newProductDetails.name ||
                                        selectedProduct.name
                                    }
                                    onChange={(e) =>
                                        setNewProductDetails({
                                            ...newProductDetails,
                                            name: e.target.value,
                                        })
                                    }
                                    className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    value={
                                        newProductDetails.description ||
                                        selectedProduct.description
                                    }
                                    onChange={(e) =>
                                        setNewProductDetails({
                                            ...newProductDetails,
                                            description: e.target.value,
                                        })
                                    }
                                    className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Price (₹)
                                </label>
                                <input
                                    type="number"
                                    value={
                                        newProductDetails.price ||
                                        selectedProduct.price
                                    }
                                    onChange={(e) =>
                                        setNewProductDetails({
                                            ...newProductDetails,
                                            price: e.target.value,
                                        })
                                    }
                                    className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Stock
                                </label>
                                <input
                                    type="number"
                                    value={newStock || selectedProduct.stock}
                                    onChange={(e) =>
                                        setNewStock(e.target.value)
                                    }
                                    className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    className="bg-red-500 text-white px-6 py-2 rounded-md"
                                    onClick={() => setIsEditModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-primary-600 text-white px-6 py-2 rounded-md"
                                    onClick={handleSaveEdit}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {/* Adjust Stock Modal */}
                {isAdjustStockModalOpen && selectedProduct && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                            <h2 className="text-2xl font-semibold mb-4">
                                Adjust Stock for {selectedProduct.name}
                            </h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    New Stock Quantity
                                </label>
                                <input
                                    type="number"
                                    value={newStock || selectedProduct.stock}
                                    onChange={(e) =>
                                        setNewStock(e.target.value)
                                    }
                                    className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    className="bg-red-500 text-white px-6 py-2 rounded-md"
                                    onClick={() =>
                                        setIsAdjustStockModalOpen(false)
                                    }
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-primary-600 text-white px-6 py-2 rounded-md"
                                    onClick={handleAdjustStock}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {/* Delete Product Modal */}
                {isDeleteModalOpen && selectedProduct && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                            <h2 className="text-2xl font-semibold mb-4">
                                Delete Product
                            </h2>
                            <p className="text-sm mb-4">
                                Are you sure you want to delete
                                <strong>{selectedProduct.name}</strong> from the
                                inventory?
                            </p>
                            <div className="flex justify-between">
                                <button
                                    className="bg-red-500 text-white px-6 py-2 rounded-md"
                                    onClick={() => setIsDeleteModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-red-600 text-white px-6 py-2 rounded-md"
                                    onClick={handleDeleteProduct}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
