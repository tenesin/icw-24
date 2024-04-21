import React from 'react';
import Image from 'next/image';

export default function BenefitSection() {
    return (
        <section className="bg-[#F5FEDF] py-16 px-4 sm:px-8 lg:px-16 xl:px-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8">Benefits of Participating</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
                    <div className="flex items-center justify-center flex-col space-y-4">
                        <Image 
                            src="/Assets/Benefits/star.png" 
                            alt="Prize Icon"
                            width={70}
                            height={70} 
                            className="h-20 w-20 object-contain" />
                        <h3 className="text-xl font-semibold">Exciting Prizes</h3>
                        <p className="text-center">Stand a chance to win amazing prizes and rewards.</p>
                    </div>
                    <div className="flex items-center justify-center flex-col space-y-4">
                        <Image src="/Assets/Benefits/star.png"  
                        alt="Certificate Icon"
                        width={70}
                        height={70} 
                        className="h-20 w-20 object-contain" />
                        <h3 className="text-xl font-semibold">Recognition</h3>
                        <p className="text-center">Get recognized for your talent and efforts with certificates.</p>
                    </div>
                    <div className="flex items-center justify-center flex-col space-y-4">
                        <Image 
                            src="/Assets/Benefits/star.png"  
                            alt="Networking Icon"
                            width={70}
                            height={70} 
                            className="h-20 w-20 object-contain" />
                        <h3 className="text-xl font-semibold">Networking Opportunities</h3>
                        <p className="text-center">Connect with industry experts and fellow participants.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
