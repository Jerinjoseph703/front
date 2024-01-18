import React, { useState } from 'react'
import {useQuery} from 'react-query'
import {useLocation} from 'react-router-dom'
import { getProperty } from '../../utils/api'
import {PuffLoader} from 'react-spinners'
import {AiFillHeart, AiTwotoneCar} from 'react-icons/ai'
import {FaShower} from "React-icons/fa"
import { MdLocationPin, MdMeetingRoom} from "react-icons/md"
import './Property.css'
const Property = () => {
    const {pathname} = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    
    const {data, isLoading, isError} = useQuery(["resd", id], ()=>getProperty(id));

    const [modelOpened, setModelopened]= useState(false)
    
    
    if(isLoading){
        return (
            <div className='wrapper'>
                <div className='flexCenter paddings'>
                    <PuffLoader />
                </div>
            </div>
        )
    }


    if(isError) {
        <div className="wrapper">
            <div className="flexCenter paddings">
                <span>Error while fetching the property details</span>
            </div>
        </div>
    }
  return (
    <div className='wrapper'>
        {/* like button */}
        <div className="flexColStart paddiings innerWidth property-container">
            <div className="like">
                <AiFillHeart size={24} color="white"/>
            </div>

            <img src={data.image} alt='home image' />

            <div className="flexCenter property-details">

                {/* left */}
                <div className="flexColStart left">

                    {/* head */}
                    <div className="flexStart head">
                        <span className='primaryTest'>{data?.title}</span>
                        <span className='orangeText' style={{fontSize:'1.5rem'}}>{data?.price}</span>
                    </div>


                    {/* facilities */}
                    <div className="flexStart facilities">
                        <div className="flexStart facility">
                            <FaShower size={20} color="#1F3E72" />
                            <span>{data?.facilities?.bathrooms} Bathrooms</span>
                        </div>
                        <div className="flexStart facility">
                        <AiTwotoneCar size={20} color="#1F3E72" />
                            <span>{data?.facilities?.parkings} Parkng</span>
                        </div>
                        <div className="flexStart facility">
                        <MdMeetingRoom size={20} color="#1F3E72" />
                            <span>{data?.facilities?.bedrooms} Room</span>
                        </div>
                    </div>

                    {/* description */}
                    <span className='secoundaryText' style={{textAlign: "justify"}}>{data?.description}</span>


                    {/* address */}
                    <div className="flexStart" style={{gap: "1rem"}}>
                        <MdLocationPin size={25}/>
                        <span className='secoundaryText'>
                            {
                                data?.address
                            }
                            {
                                data?.city
                            }
                            {
                                data?.country
                            }
                        </span>
                    </div>

                    {/* booking button */}
                    <button className="button">Book your Visit</button>
                </div>



                
            </div>


        </div>
    </div>
  )
}

export default Property