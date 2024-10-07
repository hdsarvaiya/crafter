"use client";
import Navbar from "@/components/LandingNavbar";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import LandingNavbar from "@/components/LandingNavbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiDragDropLine } from "react-icons/ri";
import { MdWidgets } from "react-icons/md";
import { VscPreview } from "react-icons/vsc";
import { IoCodeSlash } from "react-icons/io5";
import LandingFooter from "@/components/LandingFooter";


const Home = () => {
  const outerCircleRef = useRef(null);
  const innerCircleRef = useRef(null);
  const ref = useRef();
  const rowRefs = useRef([]);
  const editorvid = useRef()
  

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.from(".animate", {
      y: 100,
      opacity: 0,
      duration: 2,
      delay: .75,
      ease: "power2.out",
    });
    //    tl.from(".hero-container", {
    //   y: 100,
    //   opacity: 0,
    //   duration: 0.5,
    //   scrollTrigger: {
    //     trigger: ".hero-container",
    //     start: "top center",
    //     end: "bottom center",
    //     scrub: true,
    //     // markers: true,
    //   },
    // });
    
        tl.from(".navanimate", {
      y: -50,
      opacity: 0,
      duration: 0.5,
    });
    })


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    



 



    const outerCircle = outerCircleRef.current;
    const innerCircle = innerCircleRef.current;

    gsap.to(outerCircle, {
      rotation: 360,
      duration: 1,
      scrollTrigger: {
        trigger: outerCircle,
        // start: "top center",
        // end: "bottom center",
        scrub: 5,
        // markers: true,
      },
    });

    gsap.to(innerCircle, {
      rotation: -360,

      duration: 1,
      scrollTrigger: {
        trigger: innerCircle,
        // start: "top center",
        // end: "bottom center",
        scrub: 5,
        // markers: true,
      },
    });

    // row animation

    rowRefs.current.forEach((row) => {
      let rotate = 0;

      // Reset opacity on mouse leave
      row.addEventListener("mouseleave", function () {
        gsap.to(row.querySelector("img"), {
          opacity: 0,
          ease: "power3.out",
          duration: 0.5,
        });
      });

      // Handle mouse move
      row.addEventListener("mousemove", function (dets) {
        const diff = dets.clientY - row.getBoundingClientRect().top;
        const diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(row.querySelector("img"), {
          opacity: 1,
          ease: "power3.out",
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
          duration: 0.3,
        });

        ScrollTrigger.create({
          trigger: editorvid.current,
          start: "top bottom", // When the top of the video container reaches the bottom of the viewport
          end: "bottom top",  // When the bottom of the video container reaches the top of the viewport
          scrub:true,
          onEnter: () => {
            if (editorvid.current) {
              editorvid.current.play();
            }
          },
          onLeave: () => {
            if (editorvid.current) {
              editorvid.current.pause();
            }
          },
          onEnterBack: () => {
            if (editorvid.current) {
              editorvid.current.play();
            }
          },
          onLeaveBack: () => {
            if (editorvid.current) {
              editorvid.current.pause();
            }
          },
        });
    
        // Cleanup
        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      });
    });
  });

  // }, [];

  return (
    <>
      <div id="main" className="w-full overflow-x-hidden">
        <div className="relative h-full w-full bg-black">
          <LandingNavbar />

          <div className="hero-container animate  bg-[url('/assets/hero-oscallite.svg')] bg-cover bg-center w-full h-full mt-2 ">
            <div className="heading w-full p-44 text-white flex flex-col items-center justify-center mt-4 relative gap-4 ">
              <h1 className="font-bold text-7xl hero-heading ">
                Build A Landing Page In Minutes
              </h1>
              <h4 className="font-mono text-lg">
                Create a website in just minutes. Unique, simple, and friendly.
                It's that easy.
              </h4>
              <Link href={"/Login"}>
                <button type="button" className="get-started-btn">
                  <strong>CREATE NOW</strong>
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>
                  <div id="glow">
                    <div className="circle"></div>
                    <div className="circle"></div>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full flex h-full flex-col items-center justify-center mt-32 p-16 relative overflow-hidden bg-[url('/assets/nnnoise.svg')]">
            <div className="p-4 w-[50%] h-full text-center">
              <h2 className="text-4xl text-white heading font-bold">
                Design beautiful responsive sites with an intuitive interface.
              </h2>
            </div>
            <div className="flex pt-8 items-center justify-center rounded-xl bg-black w-full h-full overflow-hidden">
              {/* <Image
                src="/assets/builder-ss.png"
                width={1200}
                height={50}
                className="rounded-lg shadow-lg pt-4"
              /> */}
              <video ref={editorvid} className="bg-black" src={'/assets/editor-laptop.mp4'}  autoPlay loop muted width={1200} height={50} />
            </div>
          </div>
        </div>

        {/* Why Choose Us section */}
        <div className="flex w-full bg-black p-8 ">
          <div className="flex flex-col items-center justify-center p-10 w-[40%]">
            <span className="p-4 text-white gap-4 flex flex-col">
              <h3 className="text-4xl font-bold">Why Choose Our Builder?</h3>
              <span>
                Build with ease, preview in real-time, and export clean code—all
                with our intuitive drag-and-drop builder.
              </span>
              <button className="p-4 bg-blue-700 text-white rounded-lg w-[30%]">
                Learn More
              </button>
            </span>
          </div>

          <div className="p-12 w-[50%] flex  items-center justify-end ">
            {/* From Uiverse.io by Deri-Kurniawan */}
            <div className="loader w-80 h-80">
              <div className="cube">
                <div className="face"></div>
                <div className="face"></div>
                <div className="face"></div>
                <div className="face"></div>
                <div className="face"></div>
                <div className="face"></div>
              </div>
            </div>
          </div>
        </div>

        {/* features */}
        <div className="w-full flex flex-col items-center justify-center bg-black text-white  p-36 ">
          <span className="p-4 pb-24 flex items-center justify-center text-center  ">
            <h3 className="heading text-4xl font-bold w-[70%] ">
              Everything you need to make your own website
            </h3>
          </span>
          <div className="grid grid-cols-2 grid-rows-2 gap-12  pt-2 text-center  ">
            <div className="flex flex-col gap-3">
              <span className="flex items-center justify-center text-center ">
                <RiDragDropLine className="text-6xl text-blue-600 " />
              </span>
              <span className="font-bold text-xl ">Drag and drop editor</span>
              <p className="px-4 font-normal text-lg ">
                Explore the easiest way to create a website if you don•t have
                coding skills Of a web developers assistance.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex items-center justify-center text-center ">
                <VscPreview className="text-6xl text-blue-600 " />
              </span>
              <span className="font-bold text-xl">
              Live Preview
              </span>
              <p className=" font-normal text-lg ">
              See your design come to life instantly. Make real-time changes and perfect your creation before going live.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex items-center justify-center text-center ">
                <MdWidgets  className="text-6xl text-blue-600 " />
              </span>
              <span className="font-bold text-xl">Customizable widgets</span>
              <p className=" font-normal text-lg ">
                Use widgets as budding blocks! Simply drop a bunch Of them on
                the canvas to get a fully.featured website in no time.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex items-center justify-center text-center ">
                <IoCodeSlash className="text-6xl text-blue-600 " />
              </span>
              <span className="font-bold text-xl">Code at Your Fingertips</span>
              <p className=" font-normal text-lg ">
              Ready to export? Download clean, production-ready code with a single click. Ideal for developers and designers alike.
              </p>
            </div>
          </div>
        </div>

{/* row animation  */}
        <section className="flex  sm:mx-auto w-full flex-col md:px-12 xl:px-12 md:pb-32 pt-10  bg-black">
          <div
            id="title"
            className="flex flex-col w-full items-center justify-center mb-8 md:pb-16 text-white"
          >
            <h2 className="sm:font-semibold font-semibold  text-3xl sm:text-4xl md:text-6xl headland-one-regular text-gray-300 text-center sm:text-left xl:text-6xl">
              How it works
            </h2>
            <h4 className="font-mono text-xl pt-3">Follow The Steps Below</h4>
          </div>

          {/* Row Sections */}
          <div
            className="row relative border-t-2 border-gray-500 py-8 px-4 md:py-12 md:px-6   md:text-left"
            ref={(el) => (rowRefs.current[0] = el)}
          >
            <Image
              className="hidden md:block absolute opacity-0 md:w-1/3 rounded-2xl z-[999] row-image"
              src="/assets/builder-ss.png"
              alt="Ayurvedic medicines"
              width={500}
              height={500}
            />
            <div className="title flex flex-col gap-3">
              <span className="sm:text-4xl md:text-6xl lg:text-5xl text-3xl  playfair-display-medium text-gray-300">
                Create a account
              </span>
              <span className="sm:text-left  xl:text-xl text-base lato-regular text-gray-300 ">
                Create a free account. The free plan includes unlimited projects
                and free templates.
              </span>
            </div>
          </div>

          <div
            className="row relative border-t-2 border-gray-500 py-8 px-4 md:py-12 md:px-6md:text-left"
            ref={(el) => (rowRefs.current[1] = el)}
          >
            <Image
              className="hidden md:block absolute opacity-0 md:w-1/3 rounded-2xl z-[999] row-image"
              src="/assets/builder-ss.png"
              alt="Ayurvedic medicines"
              width={500}
              height={500}
            />
            <div className="title flex flex-col gap-3">
              <span className="sm:text-4xl md:text-6xl lg:text-5xl text-3xl  playfair-display-medium text-gray-300">
                Create a FREE Website
              </span>
              <span className="sm:text-left  xl:text-xl text-base lato-regular text-gray-300 ">
                Add, arrange, and customize components to create a unique
                design..
              </span>
            </div>
          </div>

          <div
            className="row relative border-t-2 border-gray-500 border-b-2 py-8 px-4 md:py-12 md:px-6  md:text-left"
            ref={(el) => (rowRefs.current[2] = el)}
          >
            <Image
              className="hidden md:block absolute opacity-0 md:w-1/3 rounded-2xl z-[999] row-image"
              src="/assets/builder-ss.png"
              alt="pagecrafter"
              width={500}
              height={500}
            />
            <div className="title flex flex-col gap-3">
              <span className="sm:text-4xl md:text-6xl lg:text-5xl text-3xl  playfair-display-medium text-gray-300">
                Preview and Download
              </span>
              <span className="sm:text-left  xl:text-xl text-base lato-regular text-gray-300 ">
                Review your masterpiece in real-time. Once satisfied, download
                the code and deploy it.
              </span>
            </div>
          </div>
        </section>

{/* static  */}
        <section className={'flex  sm:mx-auto w-full flex-col md:px-12 xl:px-12   pt-10  bg-black'}>
        <div
            id="title"
            className="flex flex-col w-full items-center justify-center  md:pb-16 text-white"
          >
            <h2 className="sm:font-semibold font-semibold  text-3xl sm:text-4xl md:text-6xl headland-one-regular text-gray-300 text-center sm:text-left xl:text-6xl">
              Host Your Site Here
            </h2>
            <h4 className="font-mono text-xl pt-3">We are happy to tell you that You can also host then project you just made ..

</h4>
          </div>

          <div className="flex items-center justify-center flex-col pb-8">
                <p className={'text-xl text-white text-center w-[60%] '}>Static.app is a simple platform for hosting static websites, enabling users to upload files via drag-and-drop. It provides free SSL certificates, a built-in code editor, and media storage, making it ideal for personal projects or small websites. Designed for ease of use, it caters to both developers and designers looking for efficient website management.</p>
                <Link href={'https://static.app/'}>
                <button className="p-4 bg-blue-700 text-white rounded-lg mb-5">
                Host Now
              </button>
                </Link>
          </div>

        </section>

        {/* Circle animation */}
        <div className="flex justify-center items-center h-screen bg-black p-32 pt-80">
          <div className="relative flex justify-center items-center">
            {/* Outer Circle */}
            <div
              ref={outerCircleRef}
              className="absolute w-[60rem] h-[60rem] flex justify-center items-center"
            >
              <Image
                src="/assets/outer-circle.svg"
                alt="Outer Circle"
                width={1000}
                height={1000}
              />
            </div>

            {/* Inner Circle */}
            <div
              ref={innerCircleRef}
              className="absolute w-[50rem] h-[50rem] flex justify-center items-center"
            >
              <Image
                src="/assets/inner-circle.svg"
                alt="Inner Circle"
                width={1000}
                height={1000}
              />
            </div>

            {/* Center Content */}
            <div className="absolute text-center text-white">
              <h4 className="text-6xl text-gray-400 w-full font-semibold">
                Team Pagecrafter
              </h4>
            </div>
          </div>
        </div>

        <div className="spaccer w-full h-[50vh] bg-black"></div>
      </div>
      <LandingFooter/>
    </>
  );
};

export default Home;
