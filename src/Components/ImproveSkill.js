export default function ImproveSkill(){

    const list =[
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]
    return (
        <div className="section improve-skills">
             <div className="col img">
            <img src="/Images/img_8.jpg" alt=""></img>
            </div>
        <div className="col typography">
           <h1 className="title">improve your culinary skills</h1>
           {/* <p className="info">
                       
           </p> */}
           {list.map((item, index)=>(
            <p className="skill-item" key={index}>{item}</p>
           ))}
           <button className="btn">signup Now</button>
        </div>

    </div>
    )
}