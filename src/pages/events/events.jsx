import React, { useEffect, useState } from "react";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import './events.css'

const Events = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                    src={port.image}
                                    className="portfolio-image"
                                    alt="portfolio"
                                />
                                <div className="content">
                                    <h3 className="title">{port.name}</h3>
                                    <h4 className="description">{port.description}</h4>
                                    <h4 className="description">{port.url}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }

    return (
        <div>
            <div className="eventsPart1">
                <h3>Upcoming Events</h3>
                <h5 style={{marginTop: -30, fontFamily:'sans-serif'}}> Find below details of our upcoming events/programmes. Kindly contact us using the details below</h5>
            </div>

            <div className="eventsPart2">
                <div>{renderPortfolio(portfolio)}</div>
            </div>
        </div>
    );
}

export default Events;
