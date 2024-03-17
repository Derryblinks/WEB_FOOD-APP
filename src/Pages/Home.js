
import QuoteSection from "../Components/QuoteSection.js";
import ImproveSkill from "../Components/ImproveSkill.js";
import ChiefsSection from "../Components/ChiefsSection.js";
import HeroSection from "../Components/HeroSection.js";


export default function Home(){

    return(
        <div>
            <HeroSection/>
          <ImproveSkill/>
          <QuoteSection/>
          <ChiefsSection/>
        </div>
    )
}