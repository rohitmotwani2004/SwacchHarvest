import React, { useState } from "react";
import { Link } from "react-router-dom";

const subsidies = [
    {
        id: 1,
        title: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
        description: "Direct income support to farmers for investment in agriculture.",
        eligibility: "Small and marginal farmers.",
        applicationProcess: "Register through the PM-KISAN portal.",
        link: "https://pmkisan.gov.in",
        eligibilityType: "Small and Marginal Farmers",
        type: "Central",
        image: "/scheme-images/scheme_1.jpg"
    },
    {
        id: 2,
        title: "Soil Health Card Scheme",
        description: "Provides farmers with soil health cards to promote sustainable soil management.",
        eligibility: "All farmers in India.",
        applicationProcess: "Visit the local agriculture office for a health card.",
        link: "https://www.soilhealth.dac.gov.in",
        eligibilityType: "All Farmers",
        type: "Central",
        image: "/scheme-images/scheme_1.jpg"
    },
    {
        id: 3,
        title: "National Agricultural Market (eNAM)",
        description: "Online platform for farmers to sell agricultural products directly to buyers.",
        eligibility: "Farmers, traders, and processors of agricultural products.",
        applicationProcess: "Register on the eNAM portal.",
        link: "https://enam.gov.in",
        eligibilityType: "All Agricultural Producers",
        type: "Central",
        image: "/scheme-images/scheme_1.jpg"
    },
    {
        id: 4,
        title: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
        description: "Crop insurance scheme that provides financial support in case of crop loss.",
        eligibility: "All farmers growing notified crops.",
        applicationProcess: "Apply through participating insurance companies or the state government.",
        link: "https://pmfby.gov.in",
        eligibilityType: "All Farmers",
        type: "Central",
        image: "/scheme-images/scheme_1.jpg"
    },
    {
        id: 5,
        title: "Rashtriya Krishi Vikas Yojana (RKVY)",
        description: "Supports states in enhancing agricultural production and sustainability.",
        eligibility: "State governments and local farmers.",
        applicationProcess: "Apply via state agriculture departments.",
        link: "https://rkvy.nic.in",
        eligibilityType: "State Governments",
        type: "State",
        image: "/scheme-images/scheme_1.jpg"
    },
    {
        id: 6,
        title: "Kisan Credit Card (KCC) Scheme",
        description: "Provides farmers with credit to meet their short-term financial needs.",
        eligibility: "Farmers involved in agricultural activities.",
        applicationProcess: "Apply through nationalized banks or cooperative societies.",
        link: "https://www.nabard.org/content.aspx?id=149",
        eligibilityType: "All Farmers",
        type: "Central",
        image: "/scheme-images/scheme_1.jpg"
    },
    {
        id: 7,
        title: "Sub-Mission on Agroforestry",
        description: "Promotes agroforestry for sustainability and additional income.",
        eligibility: "Farmers integrating trees with crops.",
        applicationProcess: "Apply through the forestry department.",
        link: "https://www.agricoop.nic.in/sub-mission-agroforestry",
        eligibilityType: "Agroforestry Farmers",
        type: "Central",
        image: "/scheme-images/scheme_1.jpg"
    },
    {
        id: 8,
        title: "Fisheries and Aquaculture Infrastructure Development Fund (FIDF)",
        description: "Provides financial assistance for infrastructure development in fisheries and aquaculture.",
        eligibility: "State governments, NGOs, and private sector players in fisheries.",
        applicationProcess: "Apply through the Department of Fisheries.",
        link: "https://dof.gov.in",
        eligibilityType: "Fisheries and Aquaculture Farmers",
        type: "Central",
        image: "/scheme-images/scheme_1.jpg"
    },
    {
        id: 9,
        title: "National Mission for Clean Ganga (NMCG)",
        description: "Encourages farmers to adopt waste management practices to protect water resources.",
        eligibility: "Farmers near the Ganga basin or involved in agriculture waste management.",
        applicationProcess: "Apply through NMCG portal.",
        link: "https://nmcg.nic.in",
        eligibilityType: "Farmers in Ganga Basin",
        type: "Central",
        image: "/scheme-images/scheme_1.jpg"
    },
    {
        id: 10,
        title: "National Food Security Mission (NFSM)",
        description: "Focuses on increasing the production of food grains (rice, wheat, pulses) for food security.",
        eligibility: "Farmers growing food crops.",
        applicationProcess: "Apply through state agriculture departments.",
        link: "https://nfsm.gov.in",
        eligibilityType: "Food Grains Farmers",
        type: "Central",
        image: "/scheme-images/scheme_1.jpg"
    },
    {
        id: 11,
        title: "Integrated Development of Horticulture (IDH)",
        description: "Promotes the development of horticulture across India.",
        eligibility: "Farmers involved in horticultural activities.",
        applicationProcess: "Apply via state horticulture departments.",
        link: "https://www.agricoop.nic.in",
        eligibilityType: "Horticulture Farmers",
        type: "Central",
        image: "/scheme-images/scheme_1.jpg"
    }
];

export const GovernmentSubsidies = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedEligibility, setSelectedEligibility] = useState("All");
    const [selectedType, setSelectedType] = useState("All");

    // Filter subsidies based on search and selection criteria
    const filteredSubsidies = subsidies.filter(subsidy => {
        const matchesSearch = subsidy.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesEligibility = selectedEligibility === "All" || subsidy.eligibilityType === selectedEligibility;
        const matchesType = selectedType === "All" || subsidy.type === selectedType;
        return matchesSearch && matchesEligibility && matchesType;
    });

    return (
        <main className="bg-gray-100 text-gray-900 min-h-screen py-12 mt-16">
            <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-semibold text-gray-800">Government Subsidies for Organic Farming</h1>
                    <p className="text-base text-gray-600 mt-2">Discover various subsidies and financial programs to support your farming needs.</p>
                </header>

                {/* Search and Filter Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 space-x-4 md:space-y-0">
                    {/* Search Field */}
                    <div className="w-full md:w-1/3">
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Subsidies</label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search subsidies..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>

                    {/* Eligibility Filter */}
                    <div className="w-full md:w-1/3">
                        <label htmlFor="eligibility" className="block text-sm font-medium text-gray-700 mb-1">Filter by Eligibility</label>
                        <select
                            id="eligibility"
                            value={selectedEligibility}
                            onChange={(e) => setSelectedEligibility(e.target.value)}
                            className="w-full p-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            <option value="All">All Eligibility Types</option>
                            <option value="Small and Marginal Farmers">Small and Marginal Farmers</option>
                            <option value="Agroforestry Farmers">Agroforestry Farmers</option>
                            <option value="All Farmers">All Farmers</option>
                        </select>
                    </div>

                    {/* Type Filter */}
                    <div className="w-full md:w-1/3">
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Filter by Type</label>
                        <select
                            id="type"
                            value={selectedType}
                            onChange={(e) => setSelectedType(e.target.value)}
                            className="w-full p-3 text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                        >
                            <option value="All">All Types</option>
                            <option value="Central">Central</option>
                            <option value="State">State</option>
                        </select>
                    </div>
                </div>

                {/* Subsidy Cards (Horizontal Layout) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {filteredSubsidies.length === 0 ? (
                        <div className="col-span-2 text-center p-6 bg-gray-200 rounded-lg shadow-md">
                            <p className="text-xl font-semibold text-gray-700">No subsidies found matching your criteria.</p>
                        </div>
                    ) : (
                        filteredSubsidies.map(subsidy => (
                            <div key={subsidy.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col lg:flex-row transition transform hover:scale-105">
                                <div className="lg:w-[43%] h-32 lg:h-auto">
                                    <img src={subsidy.image} alt={subsidy.title} className="w-full h-full p-1 rounded-lg"/>
                                </div>
                                <div className="flex-1 p-4 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{subsidy.title}</h3>
                                        <p className="mt-2 text-sm text-gray-600">{subsidy.description}</p>
                                        <div className="mt-3">
                                            <strong className="block text-sm text-gray-700">Eligibility:</strong>
                                            <p className="text-sm text-gray-600">{subsidy.eligibility}</p>
                                        </div>
                                        <div className="mt-2">
                                            <strong className="block text-sm text-gray-700">Application Process:</strong>
                                            <p className="text-sm text-gray-600">{subsidy.applicationProcess}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <Link
                                            to={subsidy.link}
                                            target="_blank"
                                            className="w-full p-2 text-center font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition"
                                        >
                                            Apply on the Government Portal
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <div className="mt-12 text-center text-sm">
                <h2 className="text-xl font-semibold">Courtesy</h2>
                <p>
                The data utilized here is sourced from the Ministry of Agriculture and Farmers Welfare, Government of India.
                </p>
            </div>
        </main>
    );
};

