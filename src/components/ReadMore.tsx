import Navbar from "./Navbar";

export default function ReadMore() {


    return (
        <>
            <div className="h-full">
                    <Navbar/>
                    <div className="m-14 flex flex-col rounded-xl border-solid border-4">
                    <img
                        src="bird.jpg"
                        width={1600}
                        height={480}
                        className="inline object-cover mb-4"
                    />
                    <div className="container mx-auto bg-gray-100 px-4 py-8">
                        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">Welcome to Avian - Learn More About Birds and Bird Sounds</h1>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-black">About Avian Project</h2>
                            <p>Avian is a cutting-edge project that combines the power of machine learning with React and Flask to recognize bird species based on their unique sounds. Utilizing Vite for rapid development and React for seamless user interaction, Avian provides an intuitive interface for users to submit bird sounds and receive accurate bird identifications.</p>
                            <h3 className="text-xl font-bold text-black mt-4">How Avian Works</h3>
                            <ol className="list-decimal pl-8 ">
                                <li ><strong>User Submission:</strong> Users upload recordings of bird sounds through the Avian interface.</li>
                                <li><strong>Machine Learning Model:</strong> Avian's backend, powered by Flask, processes the submitted sound files using a machine learning model trained to recognize bird species.</li>
                                <li><strong>Identification:</strong> The ML model identifies the bird species associated with the submitted sound and returns the results to the user.</li>
                            </ol>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-black">Why Learn About Bird Sounds?</h2>
                            <p>Birds communicate through various vocalizations, each unique to their species. Understanding bird sounds not only enriches our appreciation of nature but also contributes to conservation efforts by monitoring bird populations and habitats.</p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-black">General Information About Birds</h2>
                            <p>Birds are an incredibly diverse group of animals, with over 10,000 species worldwide. They inhabit a wide range of ecosystems, from forests to deserts to urban environments. Birds play crucial roles in ecosystems, including pollination, seed dispersal, and insect control.</p>
                            
                            <h3 className="text-xl font-bold text-black mt-4">Current Conditions of Birds</h3>
                            <p>Unfortunately, many bird species face threats such as habitat loss, climate change, pollution, and predation. Conservation efforts are vital to protect vulnerable bird populations and ensure their survival for future generations.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-black">Explore More</h2>
                            <p>Avian provides a unique opportunity to explore the fascinating world of birds and their sounds. Whether you're a bird enthusiast, nature lover, or conservationist, Avian offers valuable insights into the avian realm.</p>
                            
                            <h2 className="mt-4 text-xl font-bold text-green-500">Join us in our mission to learn, appreciate, and protect our feathered friends!</h2>
                        </div>
                    </div>
                    </div>

            </div>
        </>
      );
    }