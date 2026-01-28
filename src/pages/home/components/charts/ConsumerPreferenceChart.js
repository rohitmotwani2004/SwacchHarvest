import React, { PureComponent } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    // Consumer Preference (in %) based on "Trends in Organic Consumption in India" - 2022
    { year: "2016", organic: 30 },
    { year: "2017", organic: 35 },
    { year: "2018", organic: 40 },
    { year: "2019", organic: 50 },
    { year: "2020", organic: 61 },
    { year: "2021", organic: 72 },
];

export default class ConsumerPreferenceAreaChart extends PureComponent {
    render() {
        return (
            <div className="p-5 grid grid-flow-col grid-cols-2">
                <div className="p-2 m-10 mt-20">
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="organic"
                                stroke="#2E7D32"
                                strokeWidth={2}
                                fill="rgba(0, 200, 0, 0.7)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-primary-50 rounded-lg p-2">
                    <h3 className="pt-4 border-b-2 text-primary-600 border-primary-800 w-fit mb-2 border-dashed p-2 font-semibold text-2xl">
                        Consumer Trends
                    </h3>
                    <div className="text-medium">
                        <h4 className="mb-2 text-gray-900 font-semibold">
                            Chart Data:
                        </h4>
                        <ul className="max-w-md font-semibold space-y-1 ms-5 text-primary-500 list-disc list-inside">
                            <li>2016: 30%</li>
                            <li>2017: 35%</li>
                            <li>2018: 40%</li>
                            <li>2019: 50%</li>
                            <li>2020: 61%</li>
                            <li>2021: 72%</li>
                        </ul>
                        <p className="p-2 font-serif">
                            "The trend of consumers choosing organic products is
                            on the rise, growing from 30% in 2016to an
                            impressive 72% in 2021. This shift reflects a
                            growing awareness of the health benefits associated
                            with organic consumption. As more people prioritize
                            sustainability and health, the demand for organic
                            products continues to grow, paving the way for a
                            healthier food system. By aligning with this trend,
                            you can not only meet consumer preferences but also
                            enhance your market opportunities."
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
