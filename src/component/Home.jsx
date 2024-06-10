import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Home() {
    return (

        <div style={{overflow:'hidden'}}>
<Navbar/> 
            <div className="row" style={{ backgroundColor: "lavenderblush"}}>
                <div className="col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-10">
                    <div>
                        {/* Breadcrumbs */}
                        <div className="breadcrumbs">
                            <div className="container">
                                <div className="row mt-2">
                                    <div className="col">
                                        <p className="bread h3">
                                            <span>Home</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="container">
                            <div className="row mt-3">
                                <div className="col-lg-4">
                                    <div className="card w-100" style={{ height: "250px" }}>
                                        <div className="card-body mt-4">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card w-100 h-100">
                                        <div className="card-body mt-4">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card w-100 h-100">
                                        <div className="card-body mt-4">
                                            <h5 className="card-title">Card title</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="card-link">Card link</a>
                                            <a href="#" className="card-link">Another link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

           
        </div>

    )
}