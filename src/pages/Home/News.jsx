import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";


const News = () => {
    const { id } = useParams
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h3 className="text-4xl font-bold">News Details </h3>
                    {id}
                </div>
                <div className="col-span-1">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default News;