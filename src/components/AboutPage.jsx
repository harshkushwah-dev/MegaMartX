import React from 'react';
import CounterSection from './CounterSection';


const services3 = [
    {
        title: 'Best Prices & Offers',
        description: 'We prepared special discounts you on grocery products.',

    },
    {
        title: '100% Return Policy',
        description: 'We prepared special discounts you on grocery products.',

    },
    {
        title: 'Support 24/7',
        description: 'We prepared special discounts you on grocery products.',

    },
    {
        title: 'Great Offer Daily Deal',
        description: 'We prepared special discounts you on grocery products.',

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
        desc: 'Fresh, organic produce sourced directly from ',
        icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/01.svg',
    },
    {
        id: '02',
        title: 'Fast Delivery System',
        desc: 'Reliable and fast delivery to your doorstep within hours.',
        icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/02.svg',
    },
    {
        id: '03',
        title: 'Fresh Grocery Everyday',
        desc: 'A daily restock of premium grocery items just for you.',
        icon: 'https://ekomart-nextjs.vercel.app/assets/images/service/03.svg',
    },
    {
        id: '04',
        title: '24/7 Customer Support',
        desc: 'Our team is here for you anytime you need help ',
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
                <CounterSection />

                {/* About Section with Image */}
                <div className="rts-about-area rts-section-gap2 bg-light position-relative py-5">
                    <div className="container-3">
                        <div className="row align-items-center">
                            {/* Left Image with Badge */}
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <div className="thumbnail-left position-relative">
                                    <img
                                        src="https://ekomart-nextjs.vercel.app/assets/images/about/02.jpg"
                                        alt="About"
                                        className="img-fluid rounded-4 shadow-lg"
                                    />
                                    <span
                                        className="position-absolute top-0 start-0 m-3 px-4 py-2 text-white"
                                        style={{
                                            background: 'linear-gradient(135deg, #629D23, #9ddc59)',
                                            borderRadius: '0.75rem',
                                            fontWeight: '600',
                                            fontSize: '1rem',
                                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                        }}
                                    >
                                        Since 1999
                                    </span>
                                </div>
                            </div>

                            {/* Right Text & Checklist */}
                            <div className="col-lg-7 ps-lg-5">
                                <div className="about-content-area-1">
                                    <h2
                                        className="title mb-4"
                                        style={{
                                            fontSize: '4rem',
                                            fontWeight: '700',
                                            lineHeight: '1.3',
                                            color: '#333',
                                        }}
                                    >
                                        Your Destination for Quality Produce <br /> and Pantry Essentials
                                    </h2>
                                    <p
                                        className="disc mb-4"
                                        style={{ fontSize: '2rem', color: '#555', lineHeight: '1.8' }}
                                    >
                                        We deliver fresh groceries with love and care. From pantry staples to seasonal produce,
                                        MegaMartX ensures quality at your doorstep—every single day.
                                    </p>

                                    <div className="row g-3">
                                        {[
                                            "Fresh, locally-sourced fruits ",
                                            "Trusted supply chain with quality checks",
                                            "Fast, safe delivery across major cities",
                                            "Affordable pricing with daily deals",
                                            "Customer-first return and refund policy",
                                            "Dedicated 24/7 support team"
                                        ].map((text, i) => (
                                            <div className="col-md-6 d-flex align-items-start" key={i}>
                                                <i
                                                    className="fa-solid fa-circle-check text-success me-2 mt-1"
                                                    style={{ fontSize: '18px' }}
                                                ></i>
                                                <span style={{ fontSize: '18px', color: '#333' }}>{text}</span>
                                            </div>
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
                            <div className="col-lg-3 col-md-6 col-sm-12" key={index}>

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
                        <div className="col-lg-12 text-center mb-5">
                            <h2 style={{ fontSize: '3rem', fontWeight: '700' }}>What Our Customers Say</h2>
                            <p style={{ fontSize: '1.2rem', color: '#555' }}>
                                Real feedback from our happy customers across the globe.
                            </p>
                        </div>
                    </div>

                    {/* Feedback List */}
                    <div className="row g-5">
                        {feedbacks.map((fb, index) => (
                            <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
                                <div
                                    className="feedback-card p-5 rounded-4 bg-white position-relative"
                                    style={{
                                        transition: 'all 0.4s ease',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                                        border: '1px solid #eee',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-10px)';
                                        e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)';
                                    }}
                                >
                                    {/* Header */}
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={fb.leftImage}
                                                alt="user"
                                                style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    borderRadius: '50%',
                                                    objectFit: 'cover',
                                                    border: '3px solid #00B894',
                                                }}
                                            />
                                            <div className="ms-3">
                                                <h4 style={{ fontSize: '1.5rem', fontWeight: '600' }}>{fb.name}</h4>
                                                <span style={{ color: '#888', fontSize: '1rem' }}>{fb.role}</span>
                                            </div>
                                        </div>
                                        <img src={fb.rightImage} alt="quote" style={{ width: '45px', opacity: 0.5 }} />
                                    </div>

                                    {/* Body */}
                                    <p style={{ fontSize: '1.3rem', lineHeight: '2', color: '#333' }}>
                                        <i className="fa-solid fa-quote-left text-success me-2"></i>
                                        {fb.message}
                                    </p>
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
