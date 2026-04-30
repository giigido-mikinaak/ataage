import { useEffect, useState, useRef } from 'react';
import { anticipate, motion, useInView } from 'framer-motion';
import supporterLogo from "/img/KADS-logo.png"

function Supporters() {
  const [count, setCount] = useState(0);

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  // running timer when section is inview for the first time
  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = 8692;
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
            transition={{ type: "spring", stiffness: 120, damping: 10, delay: .5 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}>124%</motion.h2>
            <motion.p className="support-secondary-text"
              initial={{ opacity: 0, x: 30 }}
              transition={{ duration: 1, delay: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>of our funding goal was raised thanks to your help</motion.p>
          </div>
        </section>

        <section className="section section-2" ref={ref}>
          <div className="section-body">
            <motion.h2 className="support-primary-text"
              initial={{ opacity: 0 }}
              transition={{ duration: .3, delay: .4 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}>${count.toLocaleString()}</motion.h2>
            <motion.p className="support-secondary-text"
              initial={{ opacity: 0 }}
              transition={{ duration: .6, delay: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}>went towards supporting Indigenous language revitalization</motion.p>
          </div>
        </section>

        <section className="section section-3">
          <div className="section-body">
            <motion.h2 className="support-primary-text"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .6, delay: .4 }}
               viewport={{ once: true }}>118 people</motion.h2>
            <motion.p className="support-secondary-text"
              initial={{ opacity: 0 }}
              transition={{ duration: .6, delay: .8 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}>backed this project. And many more voiced their support!</motion.p>
          </div>
        </section>

        <section className="section section-4">
          <motion.div className="section-body" 
            initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: .2 }}
               viewport={{ once: true }}>
            <h2 className="support-primary-text">Thank you to all of our supporters</h2>
            <h3>Cultural Impact Supporter</h3>
            <div className="row">
              <div className="cultural-impact-supporter">
                <img src={supporterLogo} alt="logo" />
                <p>Kevin Anderson Delivery Services</p>
              </div>
              <div className="cultural-impact-supporter">
                <p>RRC Polytech Corpororate Solutions</p>
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

          </motion.div>
        </section>




      </main>
    </>
  );
}

export default Supporters;