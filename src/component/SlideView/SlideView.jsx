import './SlideView.css';

function SlideView() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide bg-custom w-100" data-ride="carousel">   
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>            
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={process.env.PUBLIC_URL + '/assets/carousel/berandal.png'} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={process.env.PUBLIC_URL + '/assets/carousel/gamedev.png'} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={process.env.PUBLIC_URL + '/assets/carousel/matadukun.png'} alt="Third slide" />
                </div>
            </div>
                        
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    );
}


export default SlideView