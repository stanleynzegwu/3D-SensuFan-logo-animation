// "use client";

// import React from "react";
// import { SparklesCore } from "../ui/sparkles";
// import EcosystemCarousel from "./EcosystemCarousel";
// import HexasphereSvg from "./HexasphereSvg";
// import Image from "next/image";

// export default function HexasphereSection() {
//   return (
//     <section className="relative p-4 xs:px-10 sm:p-10 flex flex-col gap-16 z-0">
//       {/* <div className="w-full absolute inset-0 h-[75%]"> */}
//       <div className="w-full absolute inset-0 h-[75%] opacity-100">
//         <SparklesCore
//           id="tsparticlesfullpage"
//           background="transparent"
//           minSize={0.6}
//           maxSize={1.4}
//           particleDensity={80}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         />
//       </div>
//       <div className="relative flex flex-col gap-6 items-center lg:flex-row lg:min-h-screen lg:justify-center lg:gap-16">
//         <HexasphereSvg className="h-auto w-full max-md:max-w-md md:max-lg:max-w-lg lg:w-2/5 lg:h-auto object-contain overflow-visible" />
//         <div className="max-w-sm">
//           <h2 className="mb-4 lg:mb-5">
//             The <br /> Birble <br /> Hexasphere
//           </h2>
//           <p className="text-gray-400">
//             Birble AI is committed to fostering the next generation of blockchain innovators. We're
//             actively training new developers and student interns, empowering them with the skills
//           </p>
//         </div>
//       </div>
//       <EcosystemCarousel />
//     </section>
//   );
// }

"use client";

import React from "react";
import { SparklesCore } from "../ui/sparkles";
import EcosystemCarousel from "./EcosystemCarousel";
import HexasphereSvg from "./HexasphereSvg";
import Image from "next/image";

export default function HexasphereSection() {
  return (
    <section className="relative p-4 xs:px-10 sm:p-10 flex flex-col gap-24 lg:gap-20 z-0">
      {/* <div className="w-full absolute inset-0 h-[75%]"> */}
      <div className="w-full absolute inset-0 h-[75%] opacity-40">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* Background Gradient Opacity*/}
      {/* <div className="absolute -z-10 top-0 left-0 h-full w-full bg-gradient-to-b from-[#0a0a29] from-10% via-transparent via-50% to-bottom-transparent to-transparent to-100%" /> */}
      <Image
        className="absolute object-cover bg-cover inset-0 h-44 w-full"
        src={"/images/FadeOut.svg"}
        alt="blur"
        width={500}
        height={500}
      />
      <div className="relative flex flex-col gap-6 items-center lg:flex-row lg:min-h-screen lg:justify-center lg:gap-16">
        <HexasphereSvg className="h-auto w-full max-md:max-w-md md:max-lg:max-w-lg lg:w-2/5 lg:h-auto object-contain overflow-visible" />
        <div className="max-w-sm">
          <h2 className="mb-4 lg:mb-5">
            The <br /> Birble <br /> Hexasphere
          </h2>
          <p className="text-gray-400">
            Birble AI is committed to fostering the next generation of blockchain innovators. We're
            actively training new developers and student interns, empowering them with the skills
          </p>
        </div>
      </div>
      <EcosystemCarousel />
    </section>
  );
}
