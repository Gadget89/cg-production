import React, { useEffect, useState } from "react"
// import PropTypes from "prop-types"
// import { Link } from "gatsby"
// import { GatsbyImage } from "gatsby-plugin-image"
import "./carousel.css"

export const CarouselItem = ({ children, width, heading, subHeading, heroImg, anchor, cta }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            <div className="overlay">
                <h2  className="sub-heading">{heading}</h2>
                <p className="sub-heading short-content">{subHeading}</p>
                <a 
                    href={anchor} 
                    className="sub-heading cta btn-padding btn-width">
                        {cta}
                </a>
                <img className="hero-img" src={heroImg} alt="Whatever"/>
            </div>
        </div>
    )
}

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 6000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    return (
        <div 
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="carousel" style={{ marginTop: "3rem"}}>
            <div 
                className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%"})
                })}
            </div>  
            <div className="indicators">
                <button
                    className="btn-padding"
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    {"<"}
                </button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={`${index === activeIndex ? "active" : ""}`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                        >
                            {index + 1}
                        </button>
                    );
                })}
                <button
                    className="btn-padding"
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    {">"}
                </button>
            </div>        
        </div>
    )
}

export default Carousel