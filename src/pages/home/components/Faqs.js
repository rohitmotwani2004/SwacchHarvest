import React from "react";
import { Accordion } from "../components/Accordion";

export const Faqs = () => {
    const data =[
        {
            "id": 1,
            "question": "What is organic farming?",
            "answer": "Organic farming is a method of farming that avoids the use of synthetic fertilizers, pesticides, and genetically modified organisms (GMOs). Instead, it relies on natural processes, organic fertilizers, crop rotation, and biological pest control. Organic farming aims to create a sustainable ecosystem that enhances soil health and biodiversity while producing food that is safe for consumers."
        },
        {
            "id": 2,
            "question": "What are the benefits of organic farming?",
            "answer": "Organic farming promotes healthier soil, reduces pollution, conserves water, and enhances biodiversity. It helps to improve soil structure and fertility by using natural compost and crop rotation. The produce is often more nutritious and free from harmful chemicals, making it a healthier choice for consumers. Additionally, organic farming practices can lead to better environmental outcomes, such as reduced carbon footprint and enhanced wildlife habitats."
        },
        {
            "id": 3,
            "question": "How do I start organic farming at home?",
            "answer": "Start by selecting organic seeds, preparing compost from kitchen waste, and ensuring you have healthy, organic soil. You can grow in pots, raised beds, or a small garden plot. Begin with easy-to-grow vegetables and herbs. It's also important to learn about companion planting and natural pest control methods to maintain a healthy garden without chemicals."
        },
        {
            "id": 4,
            "question": "What are the challenges of organic farming?",
            "answer": "Challenges include pest control without chemicals, maintaining soil fertility, and finding organic seeds or seedlings. Organic farming can also be more labor-intensive, requiring more time and effort to manage weeds and pests. Additionally, organic products can sometimes be more expensive due to lower yields and higher production costs."
        },
        {
            "id": 5,
            "question": "How is organic farming different from conventional farming?",
            "answer": "Conventional farming relies on synthetic chemicals, GMOs, and intensive farming practices, while organic farming focuses on sustainability, natural inputs, and environmental balance. Organic farmers avoid harmful chemicals and prioritize practices that promote soil health, biodiversity, and ecosystem stability, resulting in more environmentally friendly food production."
        },
        {
            "id": 6,
            "question": "Can organic farming feed the world?",
            "answer": "This is debated, but many believe that with proper techniques, crop diversification, and sustainable practices, organic farming could play a significant role in global food security. While organic farming typically yields less than conventional methods, it can enhance the resilience of food systems and improve soil health, potentially supporting long-term food production."
        },
        {
            "id": 7,
            "question": "Is organic food more nutritious than conventional food?",
            "answer": "Some studies suggest that organic food contains higher levels of certain nutrients, antioxidants, and fewer pesticide residues than conventionally grown food. However, the nutritional differences can vary, and a balanced diet with a variety of foods is essential for overall health, regardless of whether they are organic or conventional."
        },
        {
            "id": 8,
            "question": "What are the certifications for organic farming?",
            "answer": "Certifications vary by country but often include USDA Organic (USA), EU Organic (Europe), and Jaivik Bharat (India). Certification ensures that farming practices meet organic standards, providing consumers with confidence that the products are produced without harmful chemicals and according to strict guidelines."
        }
    ]    

    return (
        <div className="mt-10 md:mb-20 mb-7 mx-16">
            <h2 className="m-3 text-center text-2xl text-gray-900 md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-primary-800 from-primary-400">
                FAQs
            </h2>
            {data && data.map((faq) => <Accordion key={faq.id} faq={faq} />)}
        </div>
    );
};
