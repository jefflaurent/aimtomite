import NavBar from "../../component/NavBar/NavBar";
import SlideView from "../../component/SlideView/SlideView";
import LSeparator from "../../component/Separator/LSeparator";
import RSeparator from "../../component/Separator/RSeparator";
import Separator from "../../component/Separator/Separator";
import ProfileCard from "../../component/ProfileCard/ProfileCard";
import NewGameCard from "../../component/NewGameCard/NewGameCard";
import Footer from "../../component/Footer/Footer";

import './HomePage.css'
import { Fade, Slide } from "react-reveal";

function HomePage() {
    const featuredGame = [
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

    const topProfileData = [
        {
            id: 'member-1',
            image: process.env.PUBLIC_URL + '/assets/member/Livander.png',
            name: 'Livander', 
            position: 'CEO' 
        },
        {
            id: 'member-2',
            image: process.env.PUBLIC_URL + '/assets/member/Renata.png',
            name: 'Renata', 
            position: 'COO' 
        },
        {
            id: 'member-3',
            image: process.env.PUBLIC_URL + '/assets/member/Andi.jpg',
            name: 'Andi', 
            position: 'Game Programmer' 
        },
        {
            id: 'member-4',
            image: process.env.PUBLIC_URL + '/assets/member/Pandu.png',
            name: 'Pandu', 
            position: '3D Animator' 
        },
        {
            id: 'member-5',
            image: process.env.PUBLIC_URL + '/assets/member/Praduta.jpg',
            name: 'Praduta', 
            position: '3D Artist' 
        }
    ]

    const botProfileData = [
        {
            id: 'member-6',
            image: process.env.PUBLIC_URL + '/assets/member/Nissa.jpg',
            name: 'Nissa', 
            position: '2D Artist' 
        },
        {
            id: 'member-7',
            image: process.env.PUBLIC_URL + '/assets/member/Widya.png',
            name: 'Widya', 
            position: '2D Artist' 
        },
        {
            id: 'member-8',
            image: process.env.PUBLIC_URL + '/assets/member/Jonathan.jpg',
            name: 'Jonathan', 
            position: 'Quality Assurance' 
        },
        {
            id: 'member-9',
            image: process.env.PUBLIC_URL + '/assets/member/Philip.jpeg',
            name: 'Philip', 
            position: 'QA, BA' 
        },
        {
            id: 'member-10',
            image: process.env.PUBLIC_URL + '/assets/member/Wilson.jpeg',
            name: 'Wilson', 
            position: 'QA, PR' 
        }
    ];

    return (
        <div className="bg-custom">
            <NavBar /> 
            <SlideView />
                
            <div className="bg-custom p-2">
                <div className="container big-title color-primary">
                    <Fade>
                        <div className="pt-3 bigger-title text-center"> 
                            WELCOME TO AIM TO MITE STUDIO
                        </div>
                    
                        <RSeparator />

                        <div className="d-flex w-100">
                            <div className="col-5"></div>
                            <div className="col-2">
                                <img className="w-100" src={process.env.PUBLIC_URL + '/assets/home/logo.png'} alt="logo" />
                            </div>
                            <div className="col-5"></div>
                        </div>
                    </Fade>

                    <div className="py-5">
                        <h1 className="d-flex justify-content-center big-title text-center">
                            WE CRAFT GAMES RIGOROUSLY
                        </h1>
                        <div id="our-games" className="pt-2 text-center" style={{fontStyle: 'normal'}}>
                            We are dedicated to perfecting every detail, crafting experiences that are both immersive and unforgettable. Work with us and let your dream game come to life.
                        </div>
                    </div>

                    <div className="pt-3 bigger-title text-center"> 
                        FEATURED
                    </div>

                    <LSeparator />

                    <div className="d-flex justify-content-center col-12 flex-wrap">
                        {   
                            featuredGame.map((game, index) => (
                                <div className="col-10 col-md-4 d-flex justify-content-center align-items-stretch" key={index}>
                                    <Slide right>
                                        <div className="col-7 col-md-10">
                                            <NewGameCard
                                                id={game.id}
                                                imgUrl={game.image}
                                                gameTitle={game.title}
                                                gameDesc={game.description}
                                                gameUrl={game.url} />
                                        </div>
                                        
                                    </Slide>
                                </div>
                                
                            ))
                        }
                    </div>

                    <div className="pt-3" id="about"></div>

                    <div className="bigger-title text-center"> 
                        THE TEAM
                    </div>
                    <RSeparator />

                    <div className="d-flex justify-content-evenly col-12 flex-wrap">
                        {   
                            topProfileData.map((profile, index) => (
                                <div key={index} className="col-12 col-md-4 col-lg-2 p-2">
                                    <ProfileCard
                                        id={profile.id}
                                        image={profile.image}
                                        name={profile.name}
                                        position={profile.position} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="d-flex justify-content-evenly col-12 flex-wrap">
                        {   
                            botProfileData.map((profile, index) => (
                                <div key={index} className="col-12 col-md-4 col-lg-2 p-2">
                                    <ProfileCard
                                        id={profile.id}
                                        image={profile.image}
                                        name={profile.name}
                                        position={profile.position} />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

            <Separator />

            <div className="container">
                <Footer />
            </div>
            
        </div>
    );
}

export default HomePage;