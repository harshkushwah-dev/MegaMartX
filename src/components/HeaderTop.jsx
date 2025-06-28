import React, { useState, useEffect } from 'react';

const HeaderTop = () => {
    const targetDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeValues = [
        timeLeft.days,
        timeLeft.hours,
        timeLeft.minutes,
        timeLeft.seconds,
    ];

    return (
        <div className="header-top-area">
            <div className="">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bwtween-area-header-top">
                            <div className="discount-area" style={{ width: '60%' }}>
                                <marquee
                                    className="disc"
                                    style={{ color: 'white', whiteSpace: 'nowrap', fontSize: '15px' }}
                                    scrollamount="3"
                                    behavior="scroll"
                                    direction="left"
                                    loop="infinite"
                                >
                                    FREE delivery & 40% Discount for next 3 orders! &nbsp;|&nbsp; Hurry up! Limited time offer on your 2nd order. &nbsp;|&nbsp; Grab an extra 10% off on your 3rd purchase!&nbsp;&nbsp;
                                </marquee>
                                <div className="countdown">
                                    <div className="countDown">
                                        {timeValues.map((value, index) => (
                                            <div className="container" key={index}>
                                                <div className="a">
                                                    <div style={{ display: 'inline-block', width: '30px', textAlign: 'center' }}>
                                                        {value.toString().padStart(2, '0')}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="contact-number-area">
                                <p>
                                    Need help? Call Us: <a href="tel:+4733378901">+258 3268 21485</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
    