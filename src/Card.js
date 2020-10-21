import React, { useState } from "react";
import people from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

const Card = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[
    index
  ];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    } else return number;
  };
  const prevPerson = () => {
    setIndex((index) => {
      let num = index - 1;
      return checkNumber(num);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      let num = index + 1;
      return checkNumber(num);
    });
  };
  const randomPerson = () => {
    let random = Math.floor(
      Math.random() * people.length
    );
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkNumber(random));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img
          src={image}
          alt={name}
          className='person-img'
        />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <h4 className='job'>{job}</h4>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button
          className='prev-btn'
          onClick={prevPerson}
        >
          <FaChevronLeft />
        </button>
        <button
          className='next-btn'
          onClick={nextPerson}
        >
          <FaChevronRight />
        </button>
        <button
          className='random-btn'
          onClick={randomPerson}
        >
          suprise me
        </button>
      </div>
    </article>
  );
};
export default Card;
