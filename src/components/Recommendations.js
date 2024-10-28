import React, { useEffect, useState } from 'react';
import rating from '../assests/Rating.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import profile from '../assests/Profile.png'


const Recommendations = () => {
  const [recomendations, setRecommendation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // SLIDER SETTING
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    appendDots: dots => (
      <div className="rounded-full p-2">
        <ul className="m-0">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="mt-4 w-2.5 h-2.5 bg-yellow rounded-full"></div>
    ),
  };

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const response = await fetch('http://localhost:3000/recommendations');
        if (!response.ok) {
          throw new Error('Failed to fetch Recommendation');
        }
        const data = await response.json();
        setRecommendation(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendation();
  }, []);

  return (
    <div className="bg-background-gray md:flex flex-col items-center text-center xl:py-8 lg:mt-4 lg:h-[20rem]] space-y-2 overflow-x-hidden overflow-y-hidden hidden">
      <h1 className="lg:text-4xl font-bold text-word-gray md:text-3xl">Recommendations</h1>
      <p className="text-gray lg:w-[32rem] md:text-sm md:w-[32rem] capitalize">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>

      {/* LOADING MESSAGE */}
      {loading && <p>Loading projects...</p>}

      {/* ERROR MESSAGE */}
      {error && (
        <p className="text-red-500">
          OOPS!... There is an error fetching recommendations
        </p>
      )}

      {/* SLIDER  https://react-slick.neostack.com/docs/get-started */}
      <Slider
        className="h-96 w-full py-8 px-20 "
        {...settings}
      >
        {recomendations.map((recommendation) => {
          return (
            <div key={recommendation.id} className="box-border bg-base-white min-h-[21rem] md:max-h-[20rem] max-w-[21rem] md:max-w-[20rem] mx-4 text-left px-6 py-6 flex flex-col justify-between space-y-4">
              <img className="w-32 h-[1.4rem]" src={rating} alt="rating" />
              <h2 className="text-lg font-semibold md:text-[1.2rem]">{ recommendation.title }</h2>
              <p className="text-gray md:text-[0.9rem]">
                { recommendation.content }
              </p>

              {/* PROFILE IMAGE AND NAME  */}
              <div className="relative top-8 left-4 flex items-center space-x-5 lg:my-5">
                <img
                  className="inline-block h-20 w-[5.4rem] md:w-[4.5rem] rounded-full"
                  src={profile}
                  alt="not found"
                />
                <div className='relative top-2 left-3'>
                  <h1 className="text-lg font-semibold md:text-[1rem]">{ recommendation.user.name }</h1>
                  <p className="text-gray md:text-[0.9rem]">{ recommendation.user.role }</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Recommendations;
