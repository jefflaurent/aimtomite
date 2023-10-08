import NavBar from "../../component/NavBar/NavBar";
import LSeparator from "../../component/Separator/LSeparator";
import Separator from "../../component/Separator/Separator";
import Footer from "../../component/Footer/Footer";

import './GamePage.css';
import GameView from "../../component/GameView/GameView";


function GamePage() {

    const gameData = [
        {
            id: 'game-1',
            image: process.env.PUBLIC_URL + '/assets/games/berandal-sekolah.png',
            imageOnHover: process.env.PUBLIC_URL + '/assets/games/discord_bg.png',
            title: 'Berandal Sekolah',
            description: '100k+',
        },
        {
            id: 'game-2',
            image: process.env.PUBLIC_URL + '/assets/games/mata-dukun.png',
            imageOnHover: process.env.PUBLIC_URL + '/assets/games/dark_blue.png',
            title: 'Mata Dukun',
            description: '50k+',
        },
        {
            id: 'game-3',
            image: process.env.PUBLIC_URL + '/assets/games/windah.png',
            imageOnHover: process.env.PUBLIC_URL + '/assets/games/mid-blue.png',
            title: 'Windah Horror Adventure',
            description: '250k+',
        },
        {
            id: 'game-3',
            image: process.env.PUBLIC_URL + '/assets/games/windah.png',
            imageOnHover: process.env.PUBLIC_URL + '/assets/games/mid-blue.png',
            title: 'Windah Horror Adventure',
            description: '250k+',
        },
        {
            id: 'game-3',
            image: process.env.PUBLIC_URL + '/assets/games/windah.png',
            imageOnHover: process.env.PUBLIC_URL + '/assets/games/mid-blue.png',
            title: 'Windah Horror Adventure',
            description: '250k+',
        },
        {
            id: 'game-3',
            image: process.env.PUBLIC_URL + '/assets/games/windah.png',
            imageOnHover: process.env.PUBLIC_URL + '/assets/games/mid-blue.png',
            title: 'Windah Horror Adventure',
            description: '250k+',
        },
        {
            id: 'game-3',
            image: process.env.PUBLIC_URL + '/assets/games/windah.png',
            imageOnHover: process.env.PUBLIC_URL + '/assets/games/mid-blue.png',
            title: 'Windah Horror Adventure',
            description: '250k+',
        },
        {
            id: 'game-3',
            image: process.env.PUBLIC_URL + '/assets/games/windah.png',
            imageOnHover: process.env.PUBLIC_URL + '/assets/games/mid-blue.png',
            title: 'Windah Horror Adventure',
            description: '250k+',
        }
    ];

    return (
        <div className="bg-custom">
            <NavBar />

            <div className="container">
                <div className="pt-3 bigger-title text-center"> 
                    OUR GAMES
                </div>

                <LSeparator />

                <GameView />


                {/* <div className="col-12 d-flex">
                    <div className="d-flex justify-content-evenly flex-wrap w-100 align-items-center col-12">
                        {   
                            gameData.map((card, index) => (
                                <Slide right key={index}>
                                    <div className="d-flex flex-column justify-content-center p-2 col-lg-3">
                                        <GameCard
                                            id={card.id}
                                            image={card.image}
                                            imageOnHover={card.imageOnHover}
                                            title={card.title}
                                            description={card.description} />
                                    </div>
                                </Slide>
                            ))
                        }
                    </div>
                </div>*/}
            </div> 

            <Separator />
            <div className="container">
                <Footer />
            </div>
        </div>
    );
}

export default GamePage;