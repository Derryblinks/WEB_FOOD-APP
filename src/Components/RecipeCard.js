import CustomImage from "./CustomImage.js";


export default function RecipeCard({recipe}){

    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%"/>

            <div className="recipe-card-info">
                <img className="author-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">An awesome meal with a great taste. 
                Please your soul and body with this delicious meal</p>
                <a className="view-btn" href="#!">VIEW RECIPE</a>
            </div>
        </div>
    )
}