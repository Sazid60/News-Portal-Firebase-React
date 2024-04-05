import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import {useParams} from "react-router-dom"

const News = () => {
    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                <div className="col-span-1 md:col-span-3  p-4">
                    <h1 className="text-3xl">News Details</h1>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNav ></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;