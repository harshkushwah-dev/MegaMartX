import React from 'react';


const services3 = [
    {
        title: 'Best Prices & Offers',
        description: 'We prepared special discounts you on grocery products.',
        icon: (
            // Paste your SVG code for the first icon here
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="white" />
                <path d="M55.7029 25.2971C51.642..." fill="#629D23" />
                <path d="M41.8494 39.2402H39.1506C37.6131..." fill="#629D23" />
            </svg>
        ),
    },
    {
        title: '100% Return Policy',
        description: 'We prepared special discounts you on grocery products.',
        icon: (
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="white" />
                <path d="M55.5564 24.4436C51.4012..." fill="#629D23" />
                <path d="M42.4009 34.7622H35.0294L36.295..." fill="#629D23" />
            </svg>
        ),
    },
    {
        title: 'Support 24/7',
        description: 'We prepared special discounts you on grocery products.',
        icon: (
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="white" />
                <path d="M26.2667 26.2667C29.935..." fill="#629D23" />
                <path d="M58.2564 27.72L56.1184..." fill="#629D23" />
                <path d="M28.7407 42.7057L30.4096..." fill="#629D23" />
                <path d="M40.1076 42.9965H41.4224..." fill="#629D23" />
                <path d="M43.6986 45.955L47.8708..." fill="#629D23" />
                <path d="M49.995 39.1908V37.8254..." fill="#629D23" />
            </svg>
        ),
    },
    {
        title: 'Great Offer Daily Deal',
        description: 'We prepared special discounts you on grocery products.',
        icon: (
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="white" />
                <path d="M57.0347 37.5029C54.0518..." fill="#629D23" />
                <path d="M38.6089 40C38.6089..." fill="#629D23" />
                <path d="M44.9578 46.4453C42.8573..." fill="#629D23" />
                <path d="M32.5466 52.0632L45.2407..." fill="#629D23" />
            </svg>
        ),
    },
];
const feedbacks = [
    {
        name: 'Andrew D. Smith',
        role: 'Manager',
        message:
            '“According to the council of supply chain professionals the council of logistics management logistics is the process of planning, implementing and controlling procedures”',
        leftImage: 'https://ekomart-nextjs.vercel.app/assets/images/testimonial/01.png',
        rightImage: 'https://ekomart-nextjs.vercel.app/assets/images/testimonial/02.png',
    },
    {
        name: 'Sarah Johnson',
        role: 'Sales Executive',
        message:
            '“Amazing experience! Product quality is top-notch, and delivery was super fast. Highly recommend MegaMartX to everyone.”',
        leftImage: 'https://ekomart-nextjs.vercel.app/assets/images/testimonial/01.png',
        rightImage: 'https://ekomart-nextjs.vercel.app/assets/images/testimonial/02.png',
    },
    {
        name: 'Michael Brown',
        role: 'Retailer',
        message:
            '“The platform is very easy to use and customer service is excellent. I’ll keep shopping from here.”',
        leftImage: 'https://ekomart-nextjs.vercel.app/assets/images/testimonial/01.png',
        rightImage: 'https://ekomart-nextjs.vercel.app/assets/images/testimonial/02.png',
    },
    {
        name: 'Emily Davis',
        role: 'Customer',
        message:
            '“Great variety and affordable prices. The grocery section is my favorite!”',
        leftImage: 'https://ekomart-nextjs.vercel.app/assets/images/testimonial/01.png',
        rightImage: 'https://ekomart-nextjs.vercel.app/assets/images/testimonial/02.png',
    },
];
const services = [
    {
        id: '01',
        title: 'Organic Food Services',
        desc: 'When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.',
        icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/01.svg',
    },
    {
        id: '02',
        title: 'Fast Delivery System',
        desc: 'When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.',
        icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/01.svg',
    },
    {
        id: '03',
        title: 'Fresh Grocery Everyday',
        desc: 'When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.',
        icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/03.svg',
    },
];
const AboutPage = () => {
    return (
        <>
            <div className="about-page">
                {/* Hero Section */}
                <div
                    className="about-banner-area-bg rts-section-gap bg_image"
                    style={{
                        backgroundImage: `url("https://ekomart-nextjs.vercel.app/assets/images/about/01.jpg")`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        textAlign: 'center'
                    }}
                >

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner-content-about-area text-center">
                                    <h1 className="title">Do You Want To Know Us?</h1>
                                    <p className="disc">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit sagittis.
                                    </p>
                                    <a href="/contact" className="rts-btn btn-primary">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Counter Section */}
                <div className="rts-counter-area">
                    <div className="container-3">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="counter-area-main-wrapper">
                                    {[
                                        { count: "10M+", label: "Happy Customers" },
                                        { count: "100M+", label: "Grocery Products" },
                                        { count: "100K+", label: "Active Salesman" },
                                        { count: "50K+", label: "Store Worldwide" }
                                    ].map((item, index) => (
                                        <div className="single-counter-area" key={index}>
                                            <h2 className="title"><span>{item.count}</span></h2>
                                            <p dangerouslySetInnerHTML={{ __html: item.label.replace(" ", "<br>") }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section with Image */}
                <div className="rts-about-area rts-section-gap2">
                    <div className="container-3">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="thumbnail-left">
                                    <img src="https://ekomart-nextjs.vercel.app/assets/images/about/02.jpg" alt="About" />
                                </div>
                            </div>
                            <div className="col-lg-8 pl--60 pt_md--30 pl_md--10 pl_sm--10 pt_sm--30">
                                <div className="about-content-area-1">
                                    <h2 className="title">
                                        Your Destination for Quality Produce <br /> and Pantry Essentials
                                    </h2>
                                    <p className="disc">
                                        Venenatis augue consequat class magnis sed purus, euismod ligula nibh congue quis vestibulum nostra, cubilia varius velit vitae rhoncus.
                                    </p>
                                    <div className="check-main-wrapper">
                                        {[
                                            "Elementum sociis rhoncus aptent auctor urna justo",
                                            "Habitasse venenatis gravida nisl, sollicitudin posuere",
                                            "Uisque cum convallis nostra in sapien nascetur, netus",
                                            "Class nunc aliquet nulla dis senectus lputate porta",
                                            "Aenean gravida a est ante nisl nostra dui hendrerit",
                                            "Bibendum venenatis dignissim non himenaeos eget"
                                        ].map((text, i) => (
                                            <div className="single-check-area" key={i}>{text}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="section-seperator">
                    <div className="container-3">
                        <hr className="section-seperator" />
                    </div>
                </div>

                <div className="meet-our-expart-team rts-section-gap2">
                    <div className="container-3">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="title">Meet Our Expert Team</h2>
                                <p className="disc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet.
                                </p>
                            </div>
                        </div>

                        <div className="row g-5 mt--40">
                            {[
                                { name: "Samuel Alexander", role: "Design Director", img: "https://ekomart-nextjs.vercel.app/assets/images/team/01.jpg" },
                                { name: "Isabella Charlotte", role: "Design Director", img: "https://ekomart-nextjs.vercel.app/assets/images/team/02.jpg" },
                                { name: "William Ethan", role: "Design Director", img: "https://ekomart-nextjs.vercel.app/assets/images/team/03.jpg" },
                                { name: "Sophia Amelia", role: "Design Director", img: "https://ekomart-nextjs.vercel.app/assets/images/team/04.jpg" }
                            ].map((member, idx) => (
                                <div className="col-lg-3 col-md-6 col-sm-12" key={idx}>
                                    <div className="single-team-style-one">
                                        <a href="#" className="thumbnail">
                                            <img src={member.img} alt="team_single" />
                                        </a>
                                        <div className="bottom-content-area">
                                            <div className="top">
                                                <h3 className="title">{member.name}</h3>
                                                <span className="designation">{member.role}</span>
                                            </div>
                                            <div className="bottom">
                                                <a href="#" className="number">
                                                    <i className="fa-solid fa-phone-rotary"></i> +25896 3158 3228
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div >
            <div className="rts-service-area rts-section-gap2 bg_light-1">
                <div className="container-3">
                    {/* Title Area */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-center-area-main text-center">
                                <h2 className="title">Why You Choose Us?</h2>
                                <p className="disc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit...
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="row mt--30 g-5">
                        {services.map((service, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={index}>
                                <div className="single-service-area-style-one">
                                    <div className="icon-area">
                                        <span className="bg-text">{service.id}</span>
                                        <img src={service.icon} alt="service" />
                                    </div>
                                    <div className="bottom-content">
                                        <h3 className="title">{service.title}</h3>
                                        <p className="disc">{service.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="rts-cuystomers-feedback-area rts-section-gap2">
                <div className="container-3">
                    {/* Section Heading */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-area-left pl--0">
                                <h2 className="title-left mb--0">Customer Feedbacks</h2>
                            </div>
                        </div>
                    </div>

                    {/* Feedback List */}
                    <div className="row mt--50">
                        {feedbacks.map((fb, index) => (
                            <div className="col-lg-6 col-md-6 col-sm-12 mb-4" key={index}>
                                <div className="single-customers-feedback-area">
                                    <div className="top-thumbnail-area">
                                        <div className="left d-flex align-items-center">
                                            <img src={fb.leftImage} alt="user" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                                            <div className="information ms-3">
                                                <h4 className="title mb-0">{fb.name}</h4>
                                                <span>{fb.role}</span>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <img src={fb.rightImage} alt="quote" style={{ width: '40px' }} />
                                        </div>
                                    </div>
                                    <div className="body-content mt-3">
                                        <p className="disc">{fb.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="rts-shorts-service-area rts-section-gap bg_primary">
                <div className="container">
                    <div className="row g-5">
                        {services3.map((service, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                                <div className="single-short-service-area-start text-center">
                                    <div className="icon-area mb-3">{service.icon}</div>
                                    <div className="information">
                                        <h4 className="title">{service.title}</h4>
                                        <p className="disc">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>

    );
};

export default AboutPage;
