import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "../../components/ui/button";
import bagData from "./packs/BagData";

const Backpack = () => {
    return (
        <section className="w-full py-36 px-4 md:px-6 flex   bg-white">
            <div className="max-w-6xl mx-auto  text-black">
                <div className="w-full flex grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {bagData.map((product) => (
                        <Card key={product.id} className="p-6 rounded-lg  ">
                            <div className="mt-4 p-6 rounded-lg ">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className="rounded-3xl object-cover mb-4 transition-transform duration-300 hover:scale-105"
                                />
                                <h2 className="text-xl md:text-xl  text-black mt-3 mb-6">
                                    {product.name}
                                </h2>
                                <p className="text-gray-800 text-lg leading-relaxed mb-4">
                                    {product.description}
                                </p>
                                <p className="text-xl font-semibold text-black mb-4">
                                    Rs {product.price}
                                </p>
                                <Button className="bg-black text-white hover:bg-red-300 hover:text-black">
                                    Add to Cart
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Backpack;