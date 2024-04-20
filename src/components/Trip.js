import "./TripStyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/hp1.jpg"
import Trip3 from "../assets/guj2.jpg"
import Trip2 from "../assets/pnb1.jpg"
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading = "Trip to Himachal"
                text=" Himachal Pradesh, nestled in the lap of the Himalayas, is a playground for adventure enthusiasts and nature lovers. The hill stations of Shimla, Manali, and Dharamshala provide respite from the summer heat with their cool climate and breathtaking vistas. Trekkers flock to destinations like Triund, Hampta Pass, and Beas Kund for exhilarating hikes amidst pristine landscapes. Himachal Pradesh also boasts ancient temples, gushing rivers for rafting, and opportunities for paragliding amidst majestic peaks."
                />
                <TripData
                image={Trip2}
                heading = "Trip to Punjab"
                text="Punjab, a vibrant state in northern India. Known for its rich Sikh heritage, Punjab is home to the sacred Golden Temple in Amritsar, a spiritual and cultural hub for millions of devotees worldwide. The state exudes a lively atmosphere with its colorful festivals, energetic bhangra music, and mouthwatering cuisine, including the iconic Punjabi dishes like butter chicken and sarson da saag.Vibrant culture, rich heritage, and mouthwatering cuisine define this 'Land of Five Rivers'."
                />
                <TripData
                image={Trip3}
                heading = "Trip to Gujrat"
                text="From the bustling streets of Ahmedabad, adorned with architectural marvels, to the serene beaches of Diu, Gujarat offers a kaleidoscope of experiences. Immerse yourself in the colorful festivals like Navratri and the International Kite Festival, or savor the delightful flavors of Gujarati cuisine. Explore UNESCO World Heritage Sites like the stepwells of Adalaj and the majestic Rani Ki Vav in Patan, and discover the warmth of Gujarat's hospitality as you journey through its picturesque landscapes and vibrant culture."
                />
            </div>
        </div>
    )
}
export default Trip;