const Testimonial = () => {
    return ( 
        <div>
            <section className="text-gray-600 body-font mb-10">
                {/* main */}
                <div className="container px-5 py-10 mx-auto">
                    {/* heading */}
                    <h1 className="text-center text-3xl font-bold text-customStone">Testimonial</h1>
                    {/* paragraph */}
                    <h2 className="text-center text-2xl font-semibold mb-10">What our <span className="text-black">Customers are saying</span></h2>

                    <div className="flex flex-wrap -m-4">
                        {/* testimonials */}
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img src="./collection2.png" alt="Shaybah💦" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
                            <p className="leading-relaxed">Shaybah hsiejsjai iw diaea iend  iejdkj a grie a ija djgrki airei</p>
                            <span className="inline-block h-1 w-10 rounded bg-customStone mt-6 mb-4"/>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                                ABC
                            </h2>
                            <p className="text-gray-500">CEO</p>
                        </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img src="./collection2.png" alt="Shaybah💦" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
                            <p className="leading-relaxed">Shaybah hsiejsjai iw diaea iend  iejdkj a grie a ija djgrki airei</p>
                            <span className="inline-block h-1 w-10 rounded bg-customStone mt-6 mb-4"/>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                                ABC
                            </h2>
                            <p className="text-gray-500">CEO</p>
                        </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                        <div className="h-full text-center">
                            <img src="./collection2.png" alt="Shaybah💦" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
                            <p className="leading-relaxed">Shaybah hsiejsjai iw diaea iend  iejdkj a grie a ija djgrki airei</p>
                            <span className="inline-block h-1 w-10 rounded bg-customStone mt-6 mb-4"/>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">
                                ABC
                            </h2>
                            <p className="text-gray-500">CEO</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Testimonial;