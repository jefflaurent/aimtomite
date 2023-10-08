import { React } from 'react';
import NewGameCard from '../NewGameCard/NewGameCard';
import './GameView.css';


function GameView() {

    const gameData = [
        {
            id: 'berandal-sekolah',
            image: process.env.PUBLIC_URL + '/assets/icons/berandal-sekolah.png',
            title: 'Berandal Sekolah',
            description: 'Are you ready to experience the thrill of ruling your very own high school as a delinquent?',
            url: "https://play.google.com/store/apps/details?id=com.AimToMite.BerandalSekolah&hl=en&gl=US"
        },
        {
            id: 'mata-dukun',
            image: process.env.PUBLIC_URL + '/assets/icons/mata-dukun.png',
            title: 'Mata Dukun',
            description: 'Every Satan has their own dark story while they were still alive. Read all their stories.',
            url: "https://play.google.com/store/apps/details?id=com.AimToMite.MataDukun"
        },
        {
            id: 'gamedev-lituber',
            image: process.env.PUBLIC_URL + '/assets/icons/gamedev.png',
            title: 'Gamedev LiTuber Simulator',
            description: '3D Simulation game where you play as a Game Developer as well as a Youtuber.',
            url: "https://play.google.com/store/apps/details?id=com.LivanderGamedev.GamedevYoutuberSimulator"
        },
        {
            id: 'scarlet-kuntilanak',
            image: process.env.PUBLIC_URL + '/assets/icons/kuntilanak.png',
            title: 'Scarlet Kuntilanak',
            description: 'Scarlet Kuntilanak is a survival horror game where you need to escape from the terrifying Kuntilanak.',
            url: "https://play.google.com/store/apps/details?id=com.LivanderGamedev.ScarletKuntilanak"
        },
        {
            id: 'mixsuwe',
            image: process.env.PUBLIC_URL + '/assets/icons/mixsuwe.png',
            title: 'MixSuwe',
            description: 'MixSuwe is a City Building game where you need to TURN ALL EMPTY BUILDING INTO MIXSUWE ICE CREAM SHOP!',
            url: "https://play.google.com/store/apps/details?id=com.LivanderGamedev.MixSuwe"
        },
        {
            id: 'epic-space-ship',
            image: process.env.PUBLIC_URL + '/assets/icons/space.png',
            title: 'Epic Space Ship',
            description: '2D Arcade Space-Shooter Game where you can upgrade your ship with a bunch of Unlockable and Upgradeable Abilities.',
            url: "https://play.google.com/store/apps/details?id=com.LivanderGamedev.EpicSpaceShip"
        }
    ];

    return (
        <div className="col-12 d-flex w-100">
            <div className="d-flex justify-content-evenly flex-wrap w-100 align-items-center col-12">
                {   
                    gameData.map((card, index) => (
                        
                        <div key={index} className="d-flex flex-column justify-content-center p-2 col-lg-4">
                            <NewGameCard
                                id={card.id}
                                imgUrl={card.image}
                                gameTitle={card.title}
                                gameDesc={card.description}
                                gameUrl={card.url} />
                        </div>
                        
                    ))
                }
            </div>
        </div>
    );
}

export default GameView