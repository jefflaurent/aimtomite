import './NewGameCard.css';

function NewGameCard({ id, imgUrl, gameTitle, gameDesc, gameUrl }) {

    const redirect = () => {
        console.log(gameUrl)
        window.open(gameUrl, '_blank');
    }
    
    return (
        <div>
            <div className="img-container d-flex justify-content-center">
                <img src={imgUrl} alt="" onClick={redirect} />
            </div>
            <div className="description-sect p-1">
                <div className="card-title py-2" style={{fontStyle: 'normal'}}>
                    {gameTitle}
                </div>
                <div className="card-subtitle" style={{fontStyle: 'normal'}}>
                    {gameDesc}
                </div>
                <div className="py-4">
                    <button type="button" className="btn btn-outline-primary"
                    onClick={redirect}>More Info</button>
                </div>
            </div>
        </div>
    );
}

export default NewGameCard;