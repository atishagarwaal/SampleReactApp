import "./Banner.css";

const Banner = ({ props, children }) => {  
    return (
        <div className="container">
            <div className="text-center"> 
                <h1>{props.headerText}</h1>
                <p>{children}</p>
            </div>
        </div>
    )
}
        
export default Banner;