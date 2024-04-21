import React from "react";

import BenefitSection from "../Competitions/Benefits";
import CompCarousel from "../Competitions/CompCarousel";
import Timeline from "../Competitions/Timeline";

export default function Competition() {
    return (
        <section className="bg-orange-200 ">
            <h1 className="text-4xl font-bold text-center mx-auto">
                Competition
            </h1>
            <CompCarousel />
						<BenefitSection />
						<Timeline />
        </section>
    )
}
