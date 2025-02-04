"use client";

import { useState } from 'react';

type Panel = {
  title: string;
  content: string;
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const togglePanel = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const panels: Panel[] = [
    { title: 'How do I track my order?', content: 'When your order is dispatched, we will send you an email that contains a tracking link. This link will take you to the unique tracking page for your order and is your first port of call to find out information such as where you order is coming from, which carrier it will arrive with, when it was picked up, how many items it contains and its current status. There should be helpful prompts on the carriers website to let you know what the current status of your order is.' },
    { title: 'Do you accept PayPal?', content: 'We currently only accept PayPal in Europe. For all other regions, we do not currently accepting PayPal just yet, due to their high merchant fees (compared to our current credit card payment provider). Ultimately, we want to keep our fees as low as possible so the donations to our non-profit partners can be greater! And that is why we are all here, right?' },
    { title: 'Are you FSC® certified?', content: 'In July 2023 we gained full FSC Chain-of-Custody certification, meaning that our entire supply chain - from farm to warehouse - is FSC certified! All our tissue products, across all our markets, come straight from FSC-certified sources. It is a big win for supporting environmentally-friendly practices and helping keep the planet and its forests thriving.' },
    { title: 'Are your products vegan?', content: 'Yes! Not only do we not use virgin trees to make our products, we also do not use any animal derived ingredients. Even our glue is just starch and water. We do not use any animal testing. Our TP is also gluten free, but no one ever asks about that.' },
    { title: 'What are you doing about PFAs?', content: 'Per- and Polyfluoroalkyl Substances (PFAS) are a group of human made chemicals. They are highly resistant to degradation, so are often used for things like waterproof clothing. And they are used often. PFAS are found at low levels almost everywhere — in clothes, furniture, packaging, makeup and even in food and water.' },
    { title: 'When will I receive my personalised offers?', content: 'You won’t always have offers in your Sparks account, but keep checking back as new ones will appear. We’ll let you know when new offers are available by sending you emails and/or messages through the M&S app, check your marketing preferences in your M&S account to choose how you would like to hear from us.' },
    { title: 'How do I exchange something I received for free?', content: 'Any clothing item can be exchanged for a different size of the same product and, in line with your statutory rights, any faulty item will be replaced.' },
    { title: 'Do I qualify for the delivery offer?', content: 'Some customers have access to free deliveries when shopping online. There are different versions so please check which offer you have been assigned in your account. View the Terms & Conditions to find out which type of free delivery you have been given, the products which are included and how long you have to use it.' }
  ];

  return (
    <>
        <header className="my-10">
            <h1 className="text-center">Frequently Asked Questions</h1>
        </header>
        <div className="space-y-2 max-w-5xl mx-auto mt-12 mb-8">
            {panels.map((panel, index) => (
                <div key={index} className="border rounded-lg">
                    <button onClick={() => togglePanel(index)} className="w-full p-4 text-left bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center">
                        <span>{panel.title}</span>
                        <span className="text-lg">
                            {openIndex === index ? '-' : '+'}
                        </span>
                    </button>
                    {openIndex === index && (
                        <div className="p-4 bg-white">
                            <p>{panel.content}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </>
  );
};

export default Accordion;