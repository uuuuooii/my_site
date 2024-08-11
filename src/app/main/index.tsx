'use client';

import Image from "next/image";
import Info from "./info";
import { useEffect, useState } from "react";

const useResize = () => {
  const [is480, setIs480] = useState(false);
  const [is768, setIs768] = useState(false);
  const [is1024, set1024] = useState(true);
  const [is1280, setIs1280] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setIs480(true);
      } else {
        setIs480(false);
      }
      if (width <= 768) {
        setIs768(true);
      } else {
        setIs768(false);
      }
      if (width <= 1024) {
        set1024(true);
      } else {
        set1024(false);
      }
      if (width <= 1280) {
        setIs1280(true);
      } else {
        setIs1280(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return { is480, is768, is1024, is1280 };
};

const Main = () => {
  const { is480, is1024 } = useResize();

  return (
    <main>
      <Info />
      <div>
        {is480 ?
          <div className="absolute w-[100%]  bottom-0 left-1/2 transform -translate-x-1/2 z-10">
            <Image
              src={'/images/women_m.png'}
              alt="women"
              className="block w-[100%] h-auto"
              width={736}
              height={883}
              priority
            />
          </div>
          :
          <div className="absolute w-[45%]  bottom-0 left-1/2 transform -translate-x-1/2 z-10">
            <Image
              src={'/images/women.png'}
              alt="women"
              className="block w-[100%] h-auto"
              width={736}
              height={883}
              priority
            />
          </div>
        }

        <div>
          {!is1024 && (
            <div
              style={{
                fontSize: 'clamp(220px, 18vw, 500px)',
              }}
              className="absolute bottom-[-8%] w-full flex items-center justify-center font-bebas font-black scale-y-200"
            >
              <ul>
                {"EUNHYE".split("").map((letter, index) => (
                  <li

                    key={index}
                    className={`inline-block animate-moveUp`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    {letter}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </main >
  );
};

export default Main;