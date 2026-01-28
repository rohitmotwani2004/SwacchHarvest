import React, { useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const FarmersConvertedChart = () => {
    const data = [
        // Number of Farmers (in millions) based on "Status of Organic Farming in India" - 2021
        { name: "Converted Farmers", value: 1.5 }, // in millions
        { name: "Non-Converted Farmers", value: 3.5 }, // in millions
    ];

    const COLORS = ["#4CAF50", "#FFCA28"];
    const [activeIndex, setActiveIndex] = useState(null);

    const onMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const onMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <div className="p-5 grid grid-flow-col grid-cols-2">
            <div className="bg-primary-50 rounded-lg p-2">
                <h3 className="pt-4 border-b-2 text-primary-600 border-primary-800 w-fit mb-2 border-dashed p-2 font-semibold text-2xl">
                    Growth of Organic Farming
                </h3>
                <div className="text-medium">
                    <h4 className="mb-2 text-gray-900 font-semibold">
                        Chart Data:
                    </h4>
                    <ul className="max-w-md font-semibold space-y-1 ms-5 text-primary-500 list-disc list-inside">
                        <li>Converted Farmers: 1.5 million</li>
                        <li>Non-Converted Farmers: 3.5 million</li>
                    </ul>
                    <p className="p-2 font-serif">
                        "As of 2021, there are 1.5 million farmers in India who
                        have transitioned to organic farming. This growth
                        reflects a strong recognition of the benefits of
                        sustainable practices. In contrast,3.5 million
                        farmersare still using conventional methods. By
                        shifting to organic, you can join a thriving community
                        committed to economic viability and environmental
                        sustainability."
                    </p>
                </div>
            </div>

            <div>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={100}
                            fill="#8884d8"
                            label
                            onMouseEnter={(_, index) => onMouseEnter(index)}
                            onMouseLeave={onMouseLeave}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                    opacity={
                                        activeIndex === null
                                            ? 1
                                            : activeIndex === index
                                            ? 1
                                            : 0.6
                                    } // Keep opacity to 1 if none is active
                                />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default FarmersConvertedChart;
