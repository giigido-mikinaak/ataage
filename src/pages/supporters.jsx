import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Supporters() {
  const [count, setCount] = useState(0);

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  // running timer when section is inview for the first time
  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = 8000;
    const duration = 1000;

    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView]);


  return (
    <>
      <main className="sections">
        <section className="section section-1">
          <div className="section-body" >
            <motion.h2 className="support-primary-text"
              initial={{ opacity: 0, scale: 1.3 }}
              transition={{ type: "spring", stiffness: 120, delay: .5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}>Thanks to you we reached</motion.h2>
            <motion.p className="support-secondary-text"
              initial={{ opacity: 0, x: -50 }}
              transition={{ type: "spring", stiffness: 150, delay: 1.3 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>124% of our funding goal</motion.p>
          </div>
        </section>

        <section className="section section-2" ref={ref}>
          <div className="section-body">
            <motion.h2 className="support-primary-text"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: .6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>${count.toLocaleString()}</motion.h2>
            <motion.p className="support-secondary-text"
              initial={{ opacity: 0 }}
              transition={{ duration: .6, delay: .3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}>$8000, xxxx over our funding goal!</motion.p>
          </div>
        </section>

        <section className="section section-3">
          <div className="section-body">
            <h2 className="support-primary-text">We had many supporters</h2>
            <p className="support-secondary-text">118 people backed this project</p>
          </div>
        </section>

        <section className="section section-4">
          <div className="section-body">
            <h2 className="support-primary-text">Thank you do all our supporters</h2>
            <h3>Cultural Impact Supporter</h3>
            <div className="row">
              <div className="cultural-impact-supporter">
                <img src="" alt="logo" />
                <p>RRC Polytech Corpororate Solutions</p>
              </div>
              <div className="cultural-impact-supporter">
                <img src="" alt="logo" />
                <p>Kevin Anderson Delivery Services</p>
              </div>
            </div>
            <h3>Educator Bundle</h3>
            <div className="row">
              <p>Winnipeg Trails</p>
            </div>
            <h3>Community Supporter</h3>
            <div className="row">
              <p>Ward Family</p>
              <p>Kelly Krakalovich</p>
              <p>Patrick Griffin</p>
              <p>Melanie LL</p>
              <p>Monias Consulting & Projects</p>
              <p>Matthew Cutler & Dr. Avery Miller</p>
              <p>Auntie Natalie</p>
              <p>Anders</p>
              <p>Red River College Polytechnic Library</p>
              <p>Patricia</p>

            </div>

          </div>
        </section>




      </main>
    </>
  );
}

export default Supporters;