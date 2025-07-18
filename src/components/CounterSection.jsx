
import React from 'react';
import CountUp from 'react-countup';

const counterData = [
  { count: 10000, suffix: '+', label: 'Happy Customers' },
  { count: 60000, suffix: '+', label: 'Grocery Products' },
  { count: 1000, suffix: '+', label: 'Active Salesman' },
  { count: 50000, suffix: '+', label: 'Store Worldwide' }
];

const CounterSection = () => {
  return (
    <div className="rts-counter-area py-5" >
      <div className="container"> 
        <div className="row">
          <div className="col-lg-12">
            <div className="counter-area-main-wrapper d-flex flex-wrap justify-content-between text-white">
              {counterData.map((item, index) => (
                <div className="single-counter-area text-center mb-4" key={index} style={{ flex: '1 1 22%' }}>
                  <h2 className="title">
                    <CountUp end={item.count} duration={3} separator="," />
                    {item.suffix}
                  </h2>
                  <p dangerouslySetInnerHTML={{ __html: item.label.replace(' ', '<br>') }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
