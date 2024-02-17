import React from 'react';
import { Inter, Roboto } from 'next/font/google';

import Image from 'next/legacy/image';
import { SlideshowLightbox } from 'lightbox.js-react';
import Link from 'next/link';
import logo from '../public/assets/images/logo.png';
import hero from '../public/assets/images/hero.png';
import hero2 from '../public/assets/images/hero2.png';

import fb from '../public/assets/images/fb.png';
import tw from '../public/assets/images/tw.png';
import inst from '../public/assets/images/inst.png';

import footerWall from '../public/assets/images/footer_wall.png';

import 'lightbox.js-react/dist/index.css';
import { HeroCarousel } from '../components/embla/HeroCarousel';
import { HeroCarousel2 } from '../components/embla/HeroCarousel2';

const inter = Inter({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '300' });

export default function Home() {
  return (
    <div>
      <div
        className={` ${inter.className} `}
        style={{
          backgroundImage: `url(${hero.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="container mx-auto flex flex-wrap p-4 justify-between items-center overflow-hidden sm:hidden"
        >
          <div className="px-16">
            <Link href="/">
              <Image
                src={logo}
                alt="logo header"
                width="50"
                height="25"
              />
            </Link>
          </div>

        </div>

        <div className="container mx-auto p-4 justify-center items-center overflow-hidden hidden sm:flex">

          <div className="social py-3.5 hidden md:flex ">
            <div className="fb px-1">
              <Link href="/">
                <Image
                  src={fb}
                  alt="fb"
                  width={35}
                  height={35}
                />
              </Link>
            </div>
            <div className="tw px-1">
              <Link href="/">
                <Image
                  src={tw}
                  alt="tw"
                  width={35}
                  height={35}
                />
              </Link>
            </div>
            <div className="inst px-1">
              <Link href="/">
                <Image
                  src={inst}
                  alt="inst"
                  width={35}
                  height={35}
                />
              </Link>
            </div>
          </div>

          <div>
            <Link href="/">
              <p className={`p-3 text-white uppercase px-8 text-xs ${roboto.className}`}>Shop</p>
            </Link>
          </div>

          <div>
            <Link href="/">
              <p className={`py-3 px-1 text-white uppercase  text-xs ${roboto.className}`}>Plan my kitchen</p>
            </Link>
          </div>

          <div className="px-16">
            <Link href="/">
              <Image
                src={logo}
                alt="logo header"
                width="50"
                height="25"
              />
            </Link>
          </div>

          <div>
            <Link href="/">
              <p className={`p-3 text-white uppercase px-8 text-xs ${roboto.className}`}>About us</p>
            </Link>
          </div>

          <div>
            <Link href="/">
              <p className={`p-3 text-white uppercase px-8 text-xs ${roboto.className}`}>Gallery</p>
            </Link>
          </div>

          <div className="hidden md:block">
            <button className="border rounded-3xl bg-transparent p-3 text-white text-xs">MY ORDER</button>
          </div>

        </div>

        <hr className="solid1 w-[300px] sm:w-[1000px] py-5 mx-auto opacity-50" />
        <div
          className="py-20"
        >
          <HeroCarousel2 />
        </div>

      </div>
      <div className=" mx-auto justify-center items-center  ">
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 relative">
          <div
            className="col hidden sm:block"
            style={{
              backgroundImage: `url(${hero2.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="col sm:ml-16 md:ml32 p-3 flex-col  flex items-center sm:items-start">
            <div className=" mt-16 flex flex-col justify-center items-center sm:items-start">
              <div className="  text-left">
                <p className={` uppercase  text-xs text-center sm:text-left text-[#D4B254]  ${roboto.className}`}>
                  Quality Craftmanship from build to delivery
                </p>
              </div>
              <div className="">
                <p
                  className="py-3 text-center sm:text-left  helvetica"
                  style={{
                    maxWidth: '400px',
                    fontSize: '30px',
                  }}
                >
                  Discover the beauty of a
                  handmade kitchen
                </p>
              </div>
              <div className="  text-left">
                <p
                  className={` text-xs text-center sm:text-left text-[#777777]  ${roboto.className}`}
                  style={{
                    maxWidth: '400px',

                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget est sit amet
                  sapien
                  venenatis maximus vel in urna. Nam mauris arcu, feugiat in finibus vitae,
                  sollicitudin id purus. Ut imperdiet, magna eu pharetra tincidunt, mauris purus
                  ultrices.
                </p>
              </div>

            </div>
            <button
              className={`mt-5  mb-16 p-3 bg-[#D4B254] text-white w-40 rounded-3xl uppercase  ${roboto.className}`}
              style={{
                fontSize: '14px',
              }}
            >
              about us
            </button>
          </div>

        </div>

      </div>

      <div className="bg-[#EEEEEE]">
        <div className="container mx-auto ">
          <HeroCarousel />
        </div>
      </div>

      <div className="container mx-auto ">
        <div className=" pt-32 pb-32 flex flex-col  ">
          <div className="">
            <p
              className="py-3 mx-auto  text-center  helvetica  text-3xl "
              style={{
                maxWidth: '400px',
              }}
            >
              Customer Gallery
            </p>
          </div>
          <SlideshowLightbox
            className="container grid grid-cols-1 sm:grid-cols-4 gap-2  mx-auto"
            showThumbnails
          >
            <img className="w-full" src={hero2.src} alt="" />
            <img className="w-full" src={hero2.src} alt="" />
            <img className="w-full" src={hero2.src} alt="" />
            <img className="w-full" src={hero2.src} alt="" />
          </SlideshowLightbox>

          <button
            className={`mx-auto mt-5 p-3 bg-[#D4B254] w-40 text-white rounded-3xl uppercase  ${roboto.className}`}
            style={{
              fontSize: '14px',
            }}
          >
            View More
          </button>

        </div>

      </div>

      <footer
        className=" bg-black"
        style={{
          backgroundImage: `url(${footerWall.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto flex flex-col justify-center  items-center">

          <div className="grid mx-auto grid-cols-3 items-center">
            <hr
              className="solid "
              style={{
                maxWidth: '350px',
              }}
            />
            <div className="py-8 mx-auto">
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo header"
                  width="50"
                  height="25"
                />
              </Link>
            </div>
            <hr
              className="solid"
              style={{
                maxWidth: '350px',
              }}

            />
          </div>

          <div className="container mx-auto px-5 py-10">
            <div
              className="grid grid-cols-2 sm:grid-cols-4  mx-auto"
              style={{
                maxWidth: '600px',
              }}

            >
              <div className="text-white ">
                <div className="text-xl helvetica">
                  About
                </div>
                <div className="py-3.5 opacity-50">
                  <div className={`uppercase text-xs py-1.5 ${roboto.className}`}>
                    <Link href="/">
                      shop
                    </Link>
                  </div>
                  <div className={`uppercase text-xs py-1.5 ${roboto.className}`}>
                    <Link href="/">
                      plan my kitchen
                    </Link>
                  </div>
                  <div className={`uppercase text-xs py-1.5 ${roboto.className}`}>
                    <Link href="/">
                      about us
                    </Link>
                  </div>
                  <div className={`uppercase text-xs py-1.5 ${roboto.className}`}>
                    <Link href="/">
                      gallery
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-white ">
                <div className="text-xl helvetica">
                  Service
                </div>
                <div className="py-3.5 opacity-50">
                  <div className={`uppercase text-xs py-1.5 ${roboto.className}`}>
                    <Link href="/">
                      faq
                    </Link>
                  </div>
                  <div className={`uppercase text-xs py-1.5 ${roboto.className}`}>
                    <Link href="/">
                      contact
                    </Link>
                  </div>
                  <div className={`uppercase text-xs py-1.5 ${roboto.className}`}>
                    <Link href="/">
                      how to buy
                    </Link>
                  </div>
                  <div className={`uppercase text-xs py-1.5 ${roboto.className}`}>
                    <Link href="/">
                      downloads
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-white ">
                <div className="text-xl helvetica">
                  Info
                </div>
                <div className="py-3.5 opacity-50">
                  <div className={`uppercase text-xs py-1.5 ${roboto.className}`}>
                    <Link href="/">
                      delivery
                    </Link>
                  </div>
                  <div className={`uppercase text-xs py-1.5 ${roboto.className}`}>
                    <Link href="/">
                      terms
                    </Link>
                  </div>
                  <div className={`uppercase text-xs py-1.5 ${roboto.className}`}>
                    <Link href="/">
                      privacy
                    </Link>
                  </div>
                </div>
              </div>
              <div className="text-white ">
                <div className="text-xl helvetica">
                  Follow
                </div>
                <div className="social py-3.5 flex ">
                  <div className="fb px-1">
                    <Link href="/">
                      <Image
                        src={fb}
                        alt="fb"
                        width={35}
                        height={35}
                      />
                    </Link>
                  </div>
                  <div className="tw px-1">
                    <Link href="/">
                      <Image
                        src={tw}
                        alt="tw"
                        width={35}
                        height={35}
                      />
                    </Link>
                  </div>
                  <div className="inst px-1">
                    <Link href="/">
                      <Image
                        src={inst}
                        alt="inst"
                        width={35}
                        height={35}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pb-2">
            <p
              className={`sm:w-[480px] mx-auto ${roboto.className} text-white text-center`}
              style={{
                fontSize: '12px',
                opacity: '50%',
              }}
            >
              Copyright Online MTC Home Kitchens 2018 - All rights reserved.
              Responsive website design, Development & Hosting by mtc.
            </p>
          </div>
          <hr
            className="solid  sm:w-[1000px] py-10"
            style={{
              maxWidth: '350px',
            }}
          />
        </div>
      </footer>

    </div>
  );
}
