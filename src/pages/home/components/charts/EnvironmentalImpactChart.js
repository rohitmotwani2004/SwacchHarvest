import React, { useState } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const EnvironmentalImpactChart = () => {
    const data = [
        // Environmental Impact (percentage) based on "Impact of Organic Farming on Environmental Sustainability" - 2021
        { name: "Reduced Pesticides", value: 40 }, // in percentage
        { name: "Improved Soil Health", value: 30 }, // in percentage
        { name: "Increased Biodiversity", value: 30 }, // in percentage
    ];

    const COLORS = ["#4CAF50", "#FFCA28", "#FF5733"];
    const [activeIndex, setActiveIndex] = useState(null);

    const onMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const onMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <div className="p-5 grid grid-flow-col grid-cols-2">
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
            <div className="bg-primary-50 rounded-lg p-2">
                <h3 className="pt-4 border-b-2 text-primary-600 border-primary-800 w-fit mb-2 border-dashed p-2 font-semibold text-2xl">
                    Environmental Impact
                </h3>
                <div className="text-medium">
                    <h4 className="mb-2 text-gray-900 font-semibold">
                        Chart Data:
                    </h4>
                    <ul className="max-w-md font-semibold space-y-1 ms-5 text-primary-500 list-disc list-inside">
                        <li>
                        Reduced Pesticides: 40%
                        </li>
                        <li>Improved Soil Health:
                        30%</li>
                        <li>
                        Increased Biodiversity: 30% Explanatio
                        </li>
                    </ul>
                    <p className="p-2 font-serif ">"Organicfarming offers significant environmental benefits: 40%reduction in pesticide use means fewer harmful chemicals,leading to cleaner ecosystems. With 30% improvement in soilhealth, your land becomes more fertile and resilient,enhancing crop yields over time. Finally, 30% increase inbiodiversity supports a balanced ecosystem, benefitingnatural pest control and pollination. By going organic,you’re making a positive impact on the environment and ensuring a sustainable future."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EnvironmentalImpactChart;
