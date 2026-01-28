import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const NutritionalValueChart = () => {
    const data = [
        // Nutritional Value (in mg/100g) based on "Nutritional Quality of Organic and Conventional Foods" - 2019
        { nutrient: "Vitamin A", organic: 50, conventional: 30 },
        { nutrient: "Vitamin C", organic: 60, conventional: 25 },
        { nutrient: "Antioxidants", organic: 70, conventional: 40 },
    ];

    const [opacity, setOpacity] = useState({ organic: 1, conventional: 1 });

    const handleMouseEnter = (dataKey) => {
        setOpacity({ organic: 0.5, conventional: 0.5 });
        setOpacity((prev) => ({ ...prev, [dataKey]: 1 }));
    };

    const handleMouseLeave = () => {
        setOpacity({ organic: 1, conventional: 1 });
    };

    return (
        <div className="p-5 grid grid-flow-col grid-cols-2">
            <div className="bg-primary-50 rounded-lg p-2">
                <h3 className="pt-4 border-b-2 text-primary-600 border-primary-800 w-fit mb-2 border-dashed p-2 font-semibold text-2xl">
                    Nutritional Benefits of Organic
                </h3>
                <div className="text-medium">
                    <h4 className="mb-2 text-gray-900 font-semibold">
                        Chart Data:
                    </h4>
                    <ul className="max-w-md font-semibold space-y-1 ms-5 text-primary-500 list-disc list-inside">
                        <li>Vitamin A: Organic 50 mg, Conventional 30 mg</li>
                        <li>Vitamin C: Organic 60 mg, Conventional 25 mg</li>
                        <li>Antioxidants: Organic 70 mg, Conventional 40 mg</li>
                    </ul>
                    <p className="p-2 font-serif">
                        "Choosing organic produce provides significant
                        nutritional advantages. For instance, organic foods
                        contain 50% more Vitamin A, 140% more Vitamin C,
                        and a staggering 75% higher antioxidant levels
                        compared to conventional options. These nutrients are
                        vital for maintaining health and supporting your immune
                        system. By selecting organic, you're ensuring your
                        family receives the best nutrition possible."
                    </p>
                </div>
            </div>
            <div className="p-2 m-10 mt-20">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="nutrient" />
                        <YAxis />
                        <Tooltip />
                        <Legend
                            onMouseEnter={(e) => handleMouseEnter(e.dataKey)}
                            onMouseLeave={handleMouseLeave}
                        />
                        <Bar
                            dataKey="organic"
                            stroke="#2E7D32"
                            strokeWidth={1}
                            fill="rgba(0, 200, 0, 0.7)"
                            opacity={opacity.organic}
                        />
                        <Bar
                            dataKey="conventional"
                            stroke="#C79500"
                            strokeWidth={1}
                            fill="rgba(255, 175, 20, 0.7)"
                            opacity={opacity.conventional}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default NutritionalValueChart;
