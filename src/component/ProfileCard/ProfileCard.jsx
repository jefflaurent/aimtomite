import './ProfileCard.css';

function ProfileCard({id, image, name, position}) {
    return (
        <div className="col-12">
            <div className="img-container d-flex justify-content-center">
                <img src={image} alt="" className="card-image" />
            </div>
            <div className="description-sect p-1">
                <div className="mini-card-title py-2 text-center" style={{fontStyle: 'normal'}}>
                    {name} - {position}
                </div>
            </div>
        </div>

    );
}

export default ProfileCard;