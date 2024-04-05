import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    // console.log(news)
    const { title, author, image_url, details,_id } = news
    return (
        <div className="card  bg-base-100 shadow-xl mt-5 border border-b-2">
            <figure><img className="w-full" src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {
                    details.length > 200 ?
                        <p className="">{details.slice(0, 200)} <Link to={`/news/${_id}`} className="ml-5 font-semibold text-blue-600">Read More....</Link></p> : <p>{details}</p>

                }
            </div>
        </div>
    );
};

export default NewsCard;