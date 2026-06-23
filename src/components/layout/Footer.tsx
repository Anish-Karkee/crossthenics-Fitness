import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo/ct-logo01.png";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Brand */}
                    <div className="md:col-span-2 md:pl-18" >
                       <Link href="/">
                        <Image
                            src={logo}
                            alt="Crossthenics Fitness Logo"
                            width={100}
                            height={100}
                        />
                       </Link>
                        <h2 className="text-2xl font-bold text-white">
                           Crossthenics Fitness
                        </h2>
                        <p className="mt-3 text-sm text-gray-400">
                            Your trusted partner in fitness and wellness.
                        </p>
                    </div>

                    

                    {/* Resources */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Legals
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/shipping" className="hover:text-white">
                                    shipping policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/refund" className="hover:text-white">
                                   Refund policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-white">
                            Follow Us
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://www.facebook.com/crossthenicsfitness" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/crossthenicsfitness" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/9779804165664" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                                    whatsapp
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>  

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                    © {currentYear} YourBrand. All rights reserved.
                </div>
            </div>
        </footer>
    );
}