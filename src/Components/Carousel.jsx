import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Car() {
return (
	<div>
	
        <Carousel>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider20.jpg"
                    alt="Image One"
                />
                <Carousel.Caption>

                    <h3 style={{ backgroundColor: 'orange', width: 400, marginLeft: 300, paddingLeft: 10, paddingRight: 10 }}>SIMPLE INVESTING PROSPEROUS FUTURE</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider10.jpg"
                    alt="Image Two"
                />
                <Carousel.Caption>
                    <h3 style={{ backgroundColor: 'orange', width: 400, marginLeft: 300, paddingLeft: 10, paddingRight: 10 }}>WE MEET YOUR FINANCIAL INVESTMENT NEEDS</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-slider30.jpg"
                    alt="Image Two"
                />
                <Carousel.Caption>
                    <h3 style={{ backgroundColor: 'orange', width: 400, marginLeft: 300, paddingLeft: 10, paddingRight: 10 }}>WE WILL HELP TO CREATE YOUR HEALTH </h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
    </div>
);
}