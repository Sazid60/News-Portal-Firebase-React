import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border-2">
                    <LeftSideNav />
                </div>
                <div className="col-span-1 md:col-span-2 border-2">
                    <h2 className="text-4xl">News Coming Soon</h2>
                </div>
                <div className="border-2">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;