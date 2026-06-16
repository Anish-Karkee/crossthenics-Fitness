import Image from "next/image";
import serviceImage from "../../../public/web images/bag.jpg";
import sidebag from "../../../public/web images/side.jpg";

export default function Service() {
    return (
        <section className="w-full  px-6 md:px-6 bg-white">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12 text-black">
                <div className="w-full md:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold text-black mt-3 mb-6">
                        Our Services
                    </h2>
                    <div className="mt-4 p-6 rounded-lg bg-black/10">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            At our fitness store,
                            we are dedicated to helping individuals across Nepal achieve healthier and more active lifestyles.
                            We offer a wide range of premium fitness equipment, high-quality supplements, and essential fitness accessories designed to support your wellness journey.
                            From home gym setups and strength-training gear to nutritional products and everyday fitness essentials, our carefully selected collection meets the needs of beginners, athletes, and fitness enthusiasts alike.
                            Committed to quality, affordability, and customer satisfaction.
                            We Provide the best to our customer and help them in their acheivment toward fitness.
                            Lift weight till you drop it......

                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-3/5 py-20">
                    <div className="grid grid-cols-2 gap-2 sm:gap-2">
                        <Image
                            src={serviceImage}
                            alt="Service Image"
                            width={400}
                            height={400}
                            className="rounded-3xl object-cover"
                        />
                        <Image
                            src={sidebag}
                            alt="Service Image"
                            width={400}
                            height={400}
                            className="rounded-3xl object-cover"
                        />

                    </div>

                </div>
            </div>
        </section>
    )
}