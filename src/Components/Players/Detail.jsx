import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../../utils/BaseUrl'
import Cricket_img from '../../images/Cricket_img.jpg'
import Navbar from '../Navbar/Navbar_Main'
import moment from 'moment'

export default function Detail() {
    const { id } = useParams();
    const [players, setplayers] = useState([])
    const ApiCall = async () => {
        try {
            const res = await axios.get(`${baseUrl}/api/${id}`)
            setplayers(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        ApiCall();
    }, [])
    return (
        <>
            <div className="player_detail_main">
                <div className="relative bg-[#3BB072] w-[100%] h-[100vh] ">
                    <img src={Cricket_img} className=' brightness-50 bg-cover object-cover w-full h-[150vh] sm:h-[160vh] ' alt="" />

                    <div class=" absolute brightness-100  top-2 left-0 right-0 bottom-0 ">
                        <Navbar />

                        <div className='Jumbo_home_main mx-auto text-center  '>

                            <div className=" w-[85%] sm:w-[97%] mx-auto">
                                <div className=' my-5 mx-auto flex  sm:flex-col'>
                                    <div className="img">
                                        <img src={players.profilePhoto} className=' sm:w-full object-cover ' alt="error" />
                                    </div>

                                    <div className=" ml-20 sm:ml-0 sm:mt-5 text-justify sm:text-center ">
                                        <h1 className=' text-gray-200 text-3xl '>{players.name}</h1>
                                        <h1 className=' text-gray-200 text-3xl '>{players.Country}</h1>
                                    </div>
                                </div>

                                <div className="Info flex sm:flex-col justify-between ">
                                    <div className="personal_info w-[30%] sm:w-full text-white 	 p-4 text-justify ">
                                        <p className=' text-lg'>Personal Information</p>
                                        <div className=' mt-6 text-base'>
                                            <p>Born: {moment(players.DOB).format('MMMM Do YYYY')}</p>
                                            <p>Country: {players.Country}</p>
                                            <p>Role: {players.Role}</p>
                                        </div>
                                    </div>

                                    <div className="personal_info text-justify w-[65%] sm:w-full ">
                                        <p className=' text-lg text-white '>Player Reacord</p>

                                        <div className="batting text-white p-4 text-justify ">
                                            <p className=' text-lg text-white'>Batting Career Summary</p>
                                            <div class="table-responsive-sm">
                                                <table className="table text-white text-justify ">
                                                    <thead className=' text-white' >
                                                        <tr>
                                                            <th scope="col">Format</th>
                                                            <th scope="col">Matches</th>
                                                            <th scope="col">Innings</th>
                                                            <th scope="col">Runs</th>
                                                            <th scope="col">HighestScore</th>
                                                            <th scope="col">Average</th>
                                                            <th scope="col">StrikeRate</th>
                                                            <th scope="col">100's</th>
                                                            <th scope="col">50's</th>
                                                            <th scope="col">Sixes's</th>
                                                            <th scope="col">Fours's</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{players.BattingCurrierFormat}</td>
                                                            <td>{players.BattingCurrierMatches}</td>
                                                            <td>{players.BattingCurrierInnings}</td>
                                                            <td>{players.BattingCurrierRuns}</td>
                                                            <td>{players.BattingCurrierHighestScore}</td>
                                                            <td>{players.BattingCurrierAverage}</td>
                                                            <td>{players.BattingCurrierStrikeRate}</td>
                                                            <td>{players.BattingCurrierHundreds}</td>
                                                            <td>{players.BattingCurrierFiftees}</td>
                                                            <td>{players.BattingCurrierSixes}</td>
                                                            <td>{players.BattingCurrierFours}</td>

                                                        </tr>


                                                    </tbody>
                                                </table></div>
                                        </div>

                                        <div className="bowling text-white p-4 text-justify ">
                                            <p className=' text-lg text-white'>Bowling Career Summary</p>
                                            <div className="table-responsive-sm ">
                                                <table className="table text-white text-justify ">
                                                    <thead className=' text-white' >
                                                        <tr>
                                                            <th scope="col">Format</th>
                                                            <th scope="col">Matches</th>
                                                            <th scope="col">Innings</th>
                                                            <th scope="col">Overs</th>
                                                            <th scope="col">Runs</th>
                                                            <th scope="col">Wickets</th>
                                                            <th scope="col">BBI</th>
                                                            <th scope="col">BBM</th>
                                                            <th scope="col">Ecom</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{players.BowlingCurrierFormat}</td>
                                                            <td>{players.BowlingCurrierMatches}</td>
                                                            <td>{players.BowlingCurrierInnings}</td>
                                                            <td>{players.BowlingCurrierOvers}</td>
                                                            <td>{players.BowlingCurrierRuns}</td>
                                                            <td>{players.BowlingCurrierWickets}</td>
                                                            <td>{players.BowlingCurrierBBI}</td>
                                                            <td>{players.BowlingCurrierBBM}</td>
                                                            <td>{players.BowlingCurrierEcon}</td>


                                                        </tr>


                                                    </tbody>
                                                </table></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
