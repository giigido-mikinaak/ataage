import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Supporters() {
  useEffect(() => {
    AOS.init({
      once: true,    // animation happens only once
    });
    AOS.refresh();   // Refresh to recalculate positions
  }, []);
  return (
    <>
      <main className="sections">
        <section className="section section-1">
          <div className="section-body" >
            <h2 className="support-primary-text" data-aos="zoom-out-right" data-aos-easing="ease-out-back" data-aos-offset="100"
              data-aos-duration="800" >Thanks to you we reached</h2>
            <p className="support-secondary-text" data-aos="fade-right" data-aos-easing="ease-out-back" data-aos-offset="200"
              data-aos-duration="750" data-aos-delay="700" >124% of our funding goal</p>
          </div>
        </section>

        <section className="section section-2" data-aos="fade-right">
          <div className="section-body">
            <h2 className="support-primary-text">This means we raised</h2>
            <p className="support-secondary-text" >$8000, xxxx over our funding goal!</p>
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
                <p>name</p>
              </div>
              <div className="cultural-impact-supporter">
                <img src="" alt="logo" />
                <p>name</p>
              </div>
              <h3>Educator Bundle</h3>
              <div className="row">
                <p></p>
              </div>
              <h3>community i think</h3>
              <div className="row">
                <p>filler</p>
                <p>filler</p>
                <p>filler</p>
                <p>filler</p>
                <p>filler</p>
                <p>riller</p>
              </div>

            </div>
          </div>
        </section>




      </main>
    </>
  );
}

export default Supporters;