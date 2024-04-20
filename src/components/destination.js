import Mountain1 from "../assets/raj1.jpg"
import Mountain2 from "../assets/raj2.jpg"
import DestinationData from "./DestinationData"
import Mountain3 from "../assets/ker1.jpg"
import Mountain4 from "../assets/ker2.jpg"
import "./destinationStyles.css"

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give your the opportunity to see a lot,within a time frame.</p>
            <DestinationData
                className="first-des"
                heading="Rajasthan"
                text="Rajasthan, the Land of Kings, boasts a rich tapestry of history, culture, and architecture. Its majestic forts like Amer Fort in Jaipur and Mehrangarh Fort in Jodhpur stand as testaments to its royal heritage. The vibrant cities of Jaipur, Udaipur, and Jaisalmer offer a glimpse into traditional Rajasthani culture through colorful markets, folk dances, and mouthwatering cuisine. Visitors can immerse themselves in the desert landscape of Rajasthan, the Land of Kings, boasts a rich tapestry of history, culture, and architecture. Its majestic forts like Amer Fort in Jaipur and Mehrangarh Fort in Jodhpur stand as testaments to its royal heritage. The vibrant cities of Jaipur, Udaipur, and Jaisalmer offer a glimpse into traditional Rajasthani culture through colorful markets, folk dances, and mouthwatering cuisine. Visitors can immerse themselves in the desert landscape of Thar Desert, witness the annual Pushkar Camel Fair."
                img1={Mountain1}
                img2={Mountain2}
            />
            <DestinationData
                className="first-des-reverse"
                heading="Kerala"
                text="Kerala, often referred to as God's Own Country, enchants visitors with its serene backwaters, lush greenery, and tranquil beaches. The network of interconnected canals in Alleppey and Kumarakom offers a unique experience of cruising on traditional houseboats. The misty hills of Munnar are adorned with tea plantations, while the idyllic beaches of Kovalam and Varkala beckon with their golden sands and azure waters. Ayurvedic treatments, Kathakali performances, and delectable seafood further add to Kerala's allure."
                img1={Mountain3}
                img2={Mountain4}
            />
            </div>
        

    )
}

export default Destination