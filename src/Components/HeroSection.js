import CustomImage from "./CustomImage"



export default function HeroSection(){
    const images = [
    "/Images/img_1.jpg",
    "/Images/img_2.jpg",
    "/Images/img_3.jpg",
    "/Images/img_4.jpg",
    "/Images/img_5.jpg",
    "/Images/img_6.jpg",
    "/Images/img_7.jpg",
    "/Images/img_8.jpg",
    "/Images/img_9.jpg",
]
    

    return(
    <div className="section hero">
        <div className="col typography">
           <h1 className="title">What are we about</h1>
           <p className="info">
            FoodiesHub is a place where you can please your souls and tummy with delicious food recepies of all cuisine 
            And our Service is absolutely free. So start exploring now.
           </p>
           <button className="btn">Explore Now</button>
        </div>

        <div className="col gallery">

            {images.map((src, index) =>
             (<CustomImage key={index} imgSrc={src} pt={"90%"}/>))}
            


            {/* <CustomImage  pt={"80%"}/>
            <CustomImage  pt={"80%"}/>
            <CustomImage  pt={"80%"}/>
            <CustomImage  pt={"80%"}/>                  
            <CustomImage  pt={"80%"}/>
            <CustomImage  pt={"80%"}/>
            <CustomImage  pt={"80%"}/>
            <CustomImage  pt={"80%"}/> */}
            
        </div>

    </div>)
}