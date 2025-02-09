import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;


    const slideForward = () => {  
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const slideBackward = () => {    
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return (
        <div className="testimonials">
            <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
            <img src={back_icon} alt="Back" className="back-btn" onClickCapture={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="User 1" />
                                <div>
                                    <h3>Jane Doe</h3>
                                    <span>Edusity, Canada</span>
                                </div>
                            </div>
                            <p>
                                Enrolling at Edusity has been a transformative experience. The
                                faculty's dedication and the vibrant campus life have greatly
                                enriched my academic journey.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="User 2" />
                                <div>
                                    <h3>John Smith</h3>
                                    <span>Edusity, UK</span>
                                </div>
                            </div>
                            <p>
                                Edusity's innovative approach to education has provided me with
                                the skills and knowledge needed to excel in my career. The
                                learning environment is truly inspiring.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="User 3" />
                                <div>
                                    <h3>Emily Johnson</h3>
                                    <span>Edusity, Australia</span>
                                </div>
                            </div>
                            <p>
                                The community at Edusity is incredibly supportive. The
                                friendships and connections I've made here are invaluable, and
                                the academic programs are top-notch.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="User 4" />
                                <div>
                                    <h3>Michael Brown</h3>
                                    <span>Edusity, India</span>
                                </div>
                            </div>
                            <p>
                                Edusity has exceeded my expectations in every way. The resources
                                available to students are exceptional, and the faculty's
                                commitment to our success is evident in everything they do.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
