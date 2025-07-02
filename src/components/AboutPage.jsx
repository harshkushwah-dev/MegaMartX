import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const testimonials = [
  {
    id: 1,
    name: 'Harshit Yadav',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    feedback:
      'MegaMartX is a game changer. We love the convenience, freshness, and the amazing service!',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    image: 'https://cdn-icons-png.flaticon.com/512/219/219983.png',
    feedback:
      'Excellent quality products with fast delivery. The customer service is outstanding!',
  },
  {
    id: 3,
    name: 'Rohit Verma',
    image: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
    feedback:
      'Very easy to order and always on time. MegaMartX never disappoints!',
  },
  {
    id: 4,
    name: 'Anjali Rao',
    image: 'https://cdn-icons-png.flaticon.com/512/194/194938.png',
    feedback:
      'Affordable prices and top-notch service. Highly recommend to all grocery buyers.',
  },
];
const team = [
  {
    name: 'Samuel Alexander',
    role: 'Design Director',
    img: 'https://ekomart-nextjs.vercel.app/assets/images/team/01.jpg',
  },
  {
    name: 'Isabella Charlotte',
    role: 'Marketing Head',
    img: 'https://ekomart-nextjs.vercel.app/assets/images/team/02.jpg',
  },
  {
    name: 'James Miller',
    role: 'Product Manager',
    img: 'https://ekomart-nextjs.vercel.app/assets/images/team/03.jpg',
  },
  {
    name: 'Olivia Thompson',
    role: 'Operations Lead',
    img: 'https://ekomart-nextjs.vercel.app/assets/images/team/04.jpg',
  },
];

const stats = [
  { number: 50000, suffix: '+', label1: 'Retail', label2: 'Partners' },
  { number: 10000000, suffix: '+', label1: 'Happy', label2: 'Customers' },
  { number: 150, suffix: '+', label1: 'Global', label2: 'Cities' },
  { number: 99.9, suffix: '%', label1: 'On-Time', label2: 'Deliveries' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1046/1046857.png',
    title: 'Premium Quality',
    desc: 'Fresh and top-grade groceries sourced from trusted farms.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png',
    title: 'Best Prices',
    desc: 'Competitive pricing without compromising quality.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/3524/3524632.png',
    title: 'Super Fast Delivery',
    desc: 'Lightning-speed delivery to your doorstep, always on time.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828970.png',
    title: 'Customer-First Service',
    desc: '24/7 support and easy returns for complete peace of mind.',
  },
];

const items = [
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1650/1650123.png',
    title: 'Eco-Friendly Packaging',
    desc: 'We use biodegradable and recyclable materials to reduce environmental impact.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/2972/2972185.png',
    title: 'Empowering Farmers',
    desc: 'We partner directly with farmers to provide fair prices and sustainable farming support.',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/753/753345.png',
    title: 'Local Communities',
    desc: 'We invest in local programs to uplift small businesses and support rural employment.',
  },
];

const CounterPage = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', color: '#333' }}>
       <section style={{ backgroundColor: '#28a745', color: '#fff', padding: '80px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          className="fw-bold text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          style={{ fontSize: '42px', marginBottom: '20px' }}
        >
          Our Global Impact
        </motion.h2>

        <motion.p
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.9 }}
          style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto 15px' }}
        >
          From local shelves to global homes, MegaMartX is revolutionizing grocery shopping.
        </motion.p>

        <motion.p
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 1.1 }}
          style={{ fontSize: '16px', maxWidth: '800px', margin: '0 auto 50px' }}
        >
          With 50,000+ stores and a network of logistics partners, we ensure fresh groceries reach millions with speed and care.
        </motion.p>

        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4"
          style={{ margin: '0' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              className="col"
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.07 }}
            >
              <motion.div
                className="h-100 rounded shadow-sm p-4 text-center"
                style={{
                  backgroundColor: '#fff',
                  color: '#28a745',
                  borderRadius: '15px',
                  transition: '0.3s',
                }}
                whileHover={{
                  rotate: [0, 1, -1, 0],
                  transition: { duration: 0.4 },
                }}
              >
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{stat.number}</h2>
                <p className="fw-semibold mb-0">{stat.label1}</p>
                <p className="fw-semibold mb-0">{stat.label2}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


      <section style={{ padding: '80px 20px', backgroundColor: '#f9f9f9' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#2e7d32',
            }}
          >
            Innovation That Delivers
          </motion.h3>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            style={{
              fontSize: '18px',
              color: '#555',
              maxWidth: '750px',
              margin: '0 auto 50px',
              lineHeight: '1.6',
            }}
          >
            Our tech-driven platform ensures fast delivery, smart inventory, and a seamless user experience that’s built for modern convenience.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 1.1 }}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '30px',
            }}
          >
            {[
              {
                icon: 'https://cdn-icons-png.flaticon.com/512/2920/2920334.png',
                title: 'Smart Logistics',
                desc: 'AI-powered delivery ensures speed and accuracy at every step.',
              },
              {
                icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
                title: 'Real-Time Inventory',
                desc: 'Live stock updates for better decision making and customer trust.',
              },
              {
                icon: 'https://cdn-icons-png.flaticon.com/512/4206/4206277.png',
                title: 'User-Centric Design',
                desc: 'Every feature is built with simplicity and user comfort in mind.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                style={{
                  flex: '1 1 280px',
                  background: '#fff',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.07)',
                  transition: '0.3s ease-in-out',
                }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{ width: '60px', height: '60px', marginBottom: '20px' }}
                />
                <h5 style={{ fontSize: '20px', fontWeight: '600', color: '#2e7d32', marginBottom: '10px' }}>
                  {item.title}
                </h5>
                <p style={{ fontSize: '16px', color: '#666' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#2e7d32',
            }}
          >
            Sustainability & Community
          </motion.h3>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 1.1 }}
            style={{
              fontSize: '18px',
              color: '#555',
              maxWidth: '800px',
              margin: '0 auto 50px',
              lineHeight: '1.6',
            }}
          >
            MegaMartX supports eco-friendly practices, empowers farmers, and builds stronger communities.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 1.2 }}
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '30px',
            }}
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                style={{
                  flex: '1 1 280px',
                  background: '#fff',
                  padding: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  transition: '0.3s ease-in-out',
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{ width: '60px', height: '60px', marginBottom: '20px' }}
                />
                <h5 style={{ fontSize: '20px', fontWeight: '600', color: '#2e7d32', marginBottom: '10px' }}>
                  {item.title}
                </h5>
                <p style={{ fontSize: '16px', color: '#666' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#2e7d32',
            }}
          >
            Why You Choose Us?
          </motion.h3>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
            style={{
              fontSize: '18px',
              color: '#555',
              maxWidth: '800px',
              margin: '0 auto 50px',
              lineHeight: '1.6',
            }}
          >
            Quality groceries, unbeatable prices, fast delivery, and customer-first service—MegaMartX has it all.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px',
              marginTop: '30px',
            }}
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                style={{
                  padding: '30px',
                  borderRadius: '15px',
                  backgroundColor: '#f9f9f9',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                  transition: '0.3s ease',
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{ width: '60px', height: '60px', marginBottom: '20px' }}
                />
                <h5 style={{ fontSize: '20px', fontWeight: '600', color: '#2e7d32', marginBottom: '10px' }}>
                  {item.title}
                </h5>
                <p style={{ fontSize: '16px', color: '#666' }}>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          <motion.h3
            className="fw-bold mb-3 display-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Expert Team
          </motion.h3>

          <motion.p
            className="text-muted mx-auto mb-5"
            style={{ maxWidth: '800px' }}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
          >
            Passionate minds shaping the future of grocery shopping—from engineers to sales experts.
          </motion.p>

          <div className="row g-4">
            {team.map((member, index) => (
              <motion.div
                className="col-6 col-md-3"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="bg-white rounded shadow-sm p-3 h-100"
                  style={{
                    transition: 'box-shadow 0.3s ease-in-out',
                  }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="img-fluid rounded-circle mb-3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <h5 className="fw-bold mb-1">{member.name}</h5>
                  <p className="text-muted mb-0">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', backgroundColor: '#f5f5f5' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            style={{
              fontSize: '36px',
              fontWeight: '700',
              marginBottom: '20px',
              color: '#2e7d32',
            }}
          >
            Customer Feedback
          </motion.h3>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{
              fontSize: '18px',
              color: '#555',
              maxWidth: '800px',
              margin: '0 auto 40px',
              lineHeight: '1.6',
            }}
          >
            See what our happy customers have to say about MegaMartX.
          </motion.p>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                    padding: '30px',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
                    marginBottom: '20px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      marginBottom: '20px',
                      objectFit: 'cover',
                      border: '3px solid #2e7d32',
                      padding: '4px',
                      backgroundColor: '#fff',
                    }}
                  />
                  <p style={{ fontStyle: 'italic', color: '#444', fontSize: '16px', lineHeight: '1.6' }}>
                    "{item.feedback}"
                  </p>
                  <h5 style={{ marginTop: '15px', fontWeight: '600', color: '#2e7d32' }}>{item.name}</h5>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default CounterPage;