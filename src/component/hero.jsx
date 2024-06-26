// import Bg from "../../public/blurry-gradient-haikei.png";
import Me from "../../public/IMG_5291.jpg";
import "../css/style.css";
import "../css/animation.css";
import { useEffect } from "react"
import Content from "./content";
import Contact from "./contact";
import Tools from "./tools";
import Port from "./portfolio";
import About from "./about";
import { Link as ScrollLink } from "react-scroll";
import CustomCursor from './customCursor';
// import Svg from './../../public/blob-scene-haikei.svg'


function hero() {
    const handleMouseEnter = () => {
        document.documentElement.style.setProperty('--cursor-scale', 'scale(1.5)');
    };

    const handleMouseLeave = () => {
        document.documentElement.style.setProperty('--cursor-scale', 'scale(1)');
    };
    useEffect(() => {
        const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Fullstack Developer";
            }, 0);
            setTimeout(() => {
                text.textContent = "UI/UX Designer";
            }, 4000);
            setTimeout(() => {
                text.textContent = "Video Editor";
            }, 8000);
        }

        textLoad();
        setInterval(textLoad, 12000);
    })
    return (
        <>
            <CustomCursor />
            <div id="home" className="lg:px-36 hero z-10 min-h-screen bg-gray-100">
                <div className="hero-content flex-col lg:flex-row-reverse ">

                    <div className="w-5/5">
                        <div
                            className="hoverable-element"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex">
                                <h1
                                    data-aos="fade-right"
                                    data-aos-delay="200"
                                    className="hidden lg:block text-5xl font-bold text-gray-900 py-4 pr-6 blend-text"
                                >
                                    Hi !
                                </h1>
                            </div>
                        </div>
                        <div className="hidden max-sm:block py-4">
                            <h1 data-aos="fade-right" data-aos-delay="300" className=" text-5xl font-bold text-gray-900 ">Hello!</h1>
                            <h1 data-aos="fade-right" data-aos-delay="400" className=" text-5xl font-bold text-gray-900 ">I'm <span className="text-indigo-500">Ahmad Farrel</span></h1>
                        </div>

                        <h1 data-aos="fade-right" data-aos-delay="300" className="hidden lg:block text-5xl font-bold text-gray-900 py-4 lg:py-0">Welcome to Farrel's Log</h1>

                        <div data-aos="fade-right" data-aos-delay="400" className="container pb-4 hidden lg:block">
                            <span className="text first-text">a </span>
                            <span className="text sec-text"></span>
                        </div>
                        {/* <h1 className="text sec-text text-4xl font-bold text-gray-900 py-6"> </h1> */}
                        {/* <p className="py-4 font-medium text-gray-800">
                            I'm Ahmad Farrel, front-end enthusiast turning designs into web. Coding, gaming, and creating captivating experiences.
                            Currently a student at <a className="text-indigo-700 hover:text-indigo-400 duration-200" href="https://www.polinema.ac.id">State Polytechnic of Malang</a> and doing
                            internship at <a href="https://www.aio.co.id" className="text-indigo-700 hover:text-indigo-400 duration-200">PT. Amerta Indah Otsuka!</a> 
                        </p> */}
                        <ScrollLink data-aos="fade-right" data-aos-delay="500" to="about" smooth={true} className="relative inline-block px-4 py-2 font-medium group">
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                            <span className="cursor-pointer relative text-black group-hover:text-white">More about me</span>
                        </ScrollLink>
                    </div>
                </div>
            </div>
            <div className="h-screen" id="about">
                <About />
            </div>
            {/* <div className="h-screen" id="expert">
                <Content />
                <Tools />
            </div> */}
            <div id="project">
                {/* <Port /> */}
            </div>
            <div id="contact">
                <Contact />
            </div>
        </>
    );
}

export default hero;
