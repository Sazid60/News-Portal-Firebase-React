
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className='text-3xl font-bold text-center'>Login With</h2>
                <button className="btn btn-outline w-full"> <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full"> <FaGithub />
                    Login With GitHub
                </button>
            </div>
            <div className="p-4 space-y-0 mb-6">
                <h2 className='text-3xl font-bold mb-3 text-center'>Find Us On </h2>
                <a href="" className="p-4 flex items-center gap-2 text-sm border  rounded-t-lg">
                    <FaFacebook className="text-blue-600" />
                    <span>Facebook</span>
                </a>
                <a href="" className="p-4 flex items-center gap-2 text-sm border border-t-0  ">
                    <FaTwitter className="text-blue-300" />
                    <span>Twitter</span>
                </a>
                <a href="" className="p-4 flex items-center gap-2 text-sm border border-t-0 rounded-b-lg">
                    <FaInstagram  className="text-pink-700" />
                    <span>Instagram</span>
                </a>
            </div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className='text-3xl font-bold mb-3 text-center'>Q-Zone </h2>
                <img className="w-full" src={qZone1} alt="" />
                <img className="w-full" src={qZone2} alt="" />
                <img className="w-full" src={qZone3} alt="" />

            </div>
        </div>
    );
};

export default RightSideNav;