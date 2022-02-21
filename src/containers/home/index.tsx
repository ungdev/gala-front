import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import OwlCarousel from 'react-owl-carousel';

import axios from '../../utils/axios';
import TopFloatingActionButton from '../../components/TopFloatingActionButton';
import BookmarkedSection from '../../components/bookmarkedSection';
import IllustratedText from '../../components/illustratedText';

import 'owl.carousel/dist/assets/owl.carousel.css';
import placeholderImage from '../../assets/placeholder.jpg';
import './home.scss';

interface RawPartner {
  url: string;
  image: string;
  name: string;
}

function Home() {
  const [partners, setPartners] = useState<JSX.Element[] | null>(null);

  const carouselRef = React.createRef<OwlCarousel>();
  let carouselInterval: number | null = null;

  useEffect(() => {
    fetchPartners();
    return () => clearCarouselInterval();
  }, []);

  const clearCarouselInterval = () => {
    if (carouselInterval) {
      window.clearInterval(carouselInterval);
      carouselInterval = null;
    }
  };

  const setCarouselInterval = () => {
    if (!carouselInterval) {
      carouselInterval = window.setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.next(1200);
        }
      }, 2000);
    }
  };

  const carouselPrev = () => {
    carouselRef.current?.prev(300);

    // Reset carousel interval
    clearCarouselInterval();
    setCarouselInterval();
  };

  const carouselNext = () => {
    carouselRef.current?.next(300);

    // Reset carousel interval
    clearCarouselInterval();
    setCarouselInterval();
  };

  const fetchPartners = async () => {
    const apiPartners = await axios.get<RawPartner[]>('partners');

    const fetchedPartners = apiPartners.data.map((partner, i) => (
      <a href={partner.url} key={i}>
        <img src={`${import.meta.env.VITE_API_URL}${partner.image}`} alt={partner.name} />
      </a>
    ));

    setPartners(fetchedPartners);
  };

  return (
    <div id="home">
      <div className="poster-container">
        <Countdown
          date="14 May 2022 14:30:00"
          renderer={(props) => {
            if (!props.days && !props.hours && !props.minutes && !props.seconds) {
              return null;
            }

            return (
              <div className="countdown">
                <div className="countdown-item">
                  <div>{Math.floor(props.days / 10)}</div>
                  <div>{props.days % 10}</div>
                  <div>Jour{props.days > 1 ? 's' : ''}</div>
                </div>
                <span>:</span>
                <div className="countdown-item">
                  <div>{Math.floor(props.hours / 10)}</div>
                  <div>{props.hours % 10}</div>
                  <div>Heure{props.hours > 1 ? 's' : ''}</div>
                </div>
                <span>:</span>
                <div className="countdown-item">
                  <div>{Math.floor(props.minutes / 10)}</div>
                  <div>{props.minutes % 10}</div>
                  <div>Minute{props.minutes > 1 ? 's' : ''}</div>
                </div>
                <span>:</span>
                <div className="countdown-item">
                  <div>{Math.floor(props.seconds / 10)}</div>
                  <div>{props.seconds % 10}</div>
                  <div>Seconde{props.seconds > 1 ? 's' : ''}</div>
                </div>
              </div>
            );
          }}
        />
      </div>

      <TopFloatingActionButton />

      <div className="page-container">
        <IllustratedText
          title="Qu'est ce que le gala&nbsp;?"
          titleAlignment="center"
          imageSrc={placeholderImage}
          alignment="left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula a felis a mollis. Nunc
            hendrerit, eros fringilla efficitur dapibus, libero quam rutrum sem, ut pharetra augue mi at urna. Duis sit
            amet ligula eros. Nam commodo iaculis euismod. Nullam pulvinar, massa ultrices elementum pretium, risus
            dolor ultricies est, et tempus ex justo nec odio. Quisque ex nisl, iaculis id volutpat et, viverra at enim.
            Etiam tincidunt vulputate erat, nec malesuada velit mattis id. Proin tristique mauris est.
          </p>
          <p>
            Nunc venenatis fringilla dapibus. Vestibulum eros lacus, luctus a arcu eget, venenatis ultrices lorem. In
            gravida, sem sed laoreet ultricies, lacus diam aliquet dolor, ac tristique nunc metus eu mauris. Suspendisse
            risus nunc, lacinia eu lobortis eget, eleifend sed metus. Phasellus quis tortor nunc. Morbi porta tincidunt
            porttitor. Praesent ornare nisi vitae nisl maximus sollicitudin. Nulla scelerisque lorem ante, id accumsan
            enim malesuada in. Aliquam erat volutpat. In hac habitasse platea dictumst. In hac habitasse platea
            dictumst. Donec sed tempus sem, id euismod enim. Curabitur quis tortor et lectus euismod mattis. Nunc ut
            orci ut lacus aliquam tristique. Suspendisse sit amet ullamcorper urna, at porta elit. Duis malesuada libero
            ac dictum feugiat.
          </p>
          <p>
            In hac habitasse platea dictumst. Sed tristique imperdiet felis. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Praesent metus ante, egestas nec congue nec, semper eget nulla. Proin nulla nulla, gravida
            ac dapibus et, laoreet ut urna. Aliquam non est ultricies, cursus odio at, blandit turpis. In massa est,
            auctor eu est eget, tincidunt porta nulla. Aenean nisl lectus, maximus eu est id, pharetra imperdiet felis.
            In in arcu sit amet felis tempus posuere eget in enim. Pellentesque lobortis iaculis quam, vitae consequat
            nibh euismod laoreet.
          </p>
        </IllustratedText>
      </div>

      <BookmarkedSection title="Nos Partenaires">
        {partners && partners.length ? (
          <>
            <div className="partners-carousel-container">
              <i className="partners-carousel-arrow-left fas fa-chevron-left" onClick={carouselPrev} />
              <i className="partners-carousel-arrow-right fas fa-chevron-right" onClick={carouselNext} />

              <OwlCarousel
                responsive={{
                  0: { items: 2 },
                  400: { items: 3 },
                  550: { items: 4 },
                  800: { items: 5 },
                  1000: { items: 6 },
                }}
                loop
                smartSpeed={500}
                onLoad={setCarouselInterval}
                onDrag={clearCarouselInterval}
                onDragged={setCarouselInterval}
                className="partners-carousel"
                ref={carouselRef}>
                {partners}
              </OwlCarousel>
            </div>

            <div className="centered">
              <Link to="/partenaires" className="button">
                Tous les partenaires
              </Link>
            </div>
          </>
        ) : partners === null ? (
          <div className="partners-loader">
            <i className="fas fa-spinner fa-spin" />
          </div>
        ) : (
          <div className="no-partners">Les partenaires seront bientôt disponibles</div>
        )}
      </BookmarkedSection>
    </div>
  );
}

export default Home;
