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

const PricePremiumChart = () => {
    const data = [
        // Price Premium (in %) based on data from "The Economics of Organic Farming in India" - 2020
        { crop: "Rice", organic: 55, conventional: 30 },
        { crop: "Wheat", organic: 45, conventional: 28 },
        { crop: "Vegetables", organic: 80, conventional: 40 },
        { crop: "Fruits", organic: 95, conventional: 50 },
        { crop: "Pulses", organic: 70, conventional: 35 },
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
            <div className="p-2 m-10 mt-20">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="crop" />
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
                            fill="rgba(0, 200, 0, 0.7)" // Brighter green with less opacity
                            opacity={opacity.organic}
                        />
                        <Bar
                            dataKey="conventional"
                            stroke="#C79500" // Darker shade of #FFCA28
                            strokeWidth={1}
                            fill="rgba(255, 175, 20, 0.7)" // Brighter yellow with less opacity
                            opacity={opacity.conventional}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-primary-50 rounded-lg p-2">
                <h3 className="pt-4 border-b-2 text-primary-600 border-primary-800 w-fit mb-2 border-dashed p-2 font-semibold text-2xl">
                    Understanding Price Premiums
                </h3>
                <div className="text-medium">
                    <h4 className="mb-2 text-gray-900 font-semibold">
                        Chart Data:
                    </h4>
                    <ul className="max-w-md font-semibold space-y-1 ms-5 text-primary-500 list-disc list-inside">
                        <li>Rice: Organic 55%, Conventional 30%</li>
                        <li>Wheat: Organic 45%, Conventional 28%</li>
                        <li>Vegetables: Organic 80%, Conventional 40%</li>
                        <li>Fruits: Organic 95%, Conventional 50%</li>
                        <li>Pulses: Organic 70%, Conventional 35%</li>
                    </ul>
                    <p className="p-2 font-serif">
                        "This comparison reveals why organic produce often
                        commands a higher price. For example, organic fruits can
                        be priced up to 95% higher than their conventional
                        counterparts. Overall, organic crops can yield a premium
                        of 20-40% compared to conventional varieties,
                        reflecting their higher quality and consumer demand. By
                        investing in organic farming, you not only enhance your
                        income potential but also support sustainable
                        agricultural practices that benefit your community."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricePremiumChart;
