import PreviousSearch from "../Components/PreviousSearch"
import RecipeCard from "../Components/RecipeCard"

export default function Recipes(){
    const recipes =[
        {
            title: "Chicken Pan Pizza",
            image: "/Images/img_1.jpg",
            authorImg: "/Images/img_11.jpg",
        },

        {
            title: "Spaghetti and  Meatballs",
            image: "/Images/img_2.jpg",
            authorImg: "/Images/img_12.jpg",
        },

        {
            title: "American Cheese Burger",
            image: "/Images/img_3.jpg",
            authorImg: "/Images/img_13.jpg",
        },

        {
            title: "Mutton Biriyani",
            image: "/Images/img_4.jpg",
            authorImg: "/Images/img_14.jpg",
        },

        {
            title: "Chiken Pan Pizza",
            image: "/Images/img_5.jpg",
            authorImg: "/Images/img_15.jpg",
        },

        {
            title: "Fried Rice and Chicken",
            image: "/Images/img_6.jpg",
            authorImg: "/Images/img_11.jpg",
        },

        {
            title: "Plain Rice With Stew",
            image: "/Images/img_7.jpg",
            authorImg: "/Images/img_12.jpg",
        },

        {
            title: "Jollof Rice and Chicken",
            image: "/Images/img_8.jpg",
            authorImg: "/Images/img_11.jpg",
        }


    ].sort(()=> Math.random() - 0.5);

        return(
        <div>
           <PreviousSearch/>
           <div className="recipes-container">
            {recipes.map((recipe, index)=>(<RecipeCard key={index} recipe={recipe}/>))}
            {/* <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
              */}
           </div>
        </div>
        
    )
}