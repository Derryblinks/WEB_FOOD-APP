import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [{
          name: "Juan Carlos",
          img: "/Images/img_11.jpg",
          recipesCount: "10,",
          cuisine: "Mexican",
    },
    {
        name: "Michael Boateng",
        img: "/Images/img_12.jpg",
        recipesCount: "10,",
        cuisine: "Ghanaian",
  },
  {
    name: "Kelvin Darko",
    img: "/Images/img_11.jpg",
    recipesCount: "10,",
    cuisine: "Canadian",
},
{
    name: "Juan Carlos",
    img: "/Images/img_14.jpg",
    recipesCount: "10,",
    cuisine: "German",
},
{
    name: "Rahina kayor Abubakar",
    img: "/Images/img_13.jpg",
    recipesCount: "10,",
    cuisine: "American",
},
{
    name: "Bridget Combey",
    img: "/Images/img_15.jpg",
    recipesCount: "10,",
    cuisine: "American",
}
    ]

    
    return(<div className="section-chief">
        <h1 className="title">Our Top Chiefs</h1>
        <div className="top-chiefs-container">
            {/* <ChiefCard/>
            <ChiefCard/>
            <ChiefCard/>
            <ChiefCard/>
            <ChiefCard/>
            <ChiefCard/> */}

            {chiefs.map(chief=> <ChiefCard key={chief.name} chief={chief}/>)}
             </div>


    </div>)
}