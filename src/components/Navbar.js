
// Navbar components

function Navbar() {
    return (
        <>
            <nav className="bg-black text-gray-300 text-sm sticky top-0 z-10  shadow-xl">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-12">
                        <div className="flex items-center space-x-12">
                            <a href="#" className="text-white text-xl font-semibold"><i className="fa-brands fa-apple"></i></a>
                            <a href="#" className="text-white text-xl font-semibold"></a>
                            <a href="#" className="hover:text-white transition">Store</a>
                            <a href="#" className="hover:text-white transition">Mac</a>
                            <a href="#" className="hover:text-white transition">iPad</a>
                            <a href="#" className="hover:text-white transition">iPhone</a>
                            <a href="#" className="hover:text-white transition">Watch</a>
                            <a href="#" className="hover:text-white transition">AirPods</a>
                            <a href="#" className="hover:text-white transition">TV & Home</a>
                            <a href="#" className="hover:text-white transition">Entertainment</a>
                            <a href="#" className="hover:text-white transition">Accessories</a>
                            <a href="#" className="hover:text-white transition">Support</a>
                        </div>

                        {/* Right: Icons */}


                        <div className="flex items-center space-x-6 text-white">
                            <a href="#" className="hover:text-gray-400">
                                <i className="fas fa-search"></i>
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                <i className="fas fa-shopping-bag"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </nav>
            <div className="text-center bg-gray-700 text-white p-2 text-sm">
                <p>Last chance to get AirPods or an eligible accessory of your choice when you buy Mac or iPad with education savings.* Offer ends on 30 Sep.◊ Shop
                    <a href="#" className="text-blue-500 hover:underline">now</a>.</p>
            </div>
        </>
    );
}



export default Navbar
