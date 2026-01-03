
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            MERCEDES
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Mercedes cars generally known for luxury and class. But these <strong>AMG </strong>
                             series are now changing the perception. 
                        </p>
                        <p className="mt-4 text-gray-600">
                            Generally BMW cars are known for performance and driving pleasures, but nowadays MERCEDES 
                            also providing some high-performance cars. Specially these AMG series is dope.
                        </p>
                        <p className="mt-4 text-gray-600">
                            But as a driving enhusiast, BMW cars are still more performance oriented and <br /> fun-to-drive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Creating about component  