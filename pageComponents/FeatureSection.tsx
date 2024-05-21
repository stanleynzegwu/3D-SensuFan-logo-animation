// import Image from "next/image";

// const FeatureSection = () => {
//   return (
//     <section className="relative p-4 xs:px-10 sm:p-10  flex flex-col justify-center gap-32">
//       <div className="max-w-sm md:max-w-md 2xl:max-w-2xl space-y-4 mx-auto ">
//         <h3 className="px-2 text-center text-xl md:text-2xl leading-normal md:leading-snug">
//           Birble AI is the corner stone <br />
//           of Web3 and AI for everyone
//         </h3>
//         <p className="text-gray-400 max-w-xl mx-auto text-center leading-relaxed">
//           At Birble AI, these partnerships aren't just collaborations—they're pillars that support
//           our commitment to innovation, community empowerment, and a sustainable future. Together,
//           we're shaping a dynamic and inclusive ecosystem where technology meets purpose.
//         </p>
//       </div>
//       <div className="relative max-w-sm md:max-w-lg lg:max-w-3xl mx-auto p-8 lg:py-10 lg:px-12 border-gray-400 border-[.5px]">
//         {[
//           "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
//           "right-0 top-0 translate-x-1/2 -translate-y-1/2",
//           "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
//           "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
//         ].map((className, index) => (
//           <Image
//             key={index}
//             className={`absolute w-5 h-5 lg:w-6 lg:h-6 object-contain ${className}`}
//             src={"/icons/plus-icon.png"}
//             alt="plus-icon"
//             width={50}
//             height={50}
//             loading="lazy"
//           />
//         ))}
//         <h3 className="px-2 mb-4 text-center text-xl md:text-2xl leading-normal md:leading-snug">
//           Building for the Next<span className="text-mintGreen">Gen</span>
//         </h3>
//         <p className="text-gray-400 max-w-xl mx-auto text-center leading-relaxed">
//           Birble AI is committed to fostering the next generation of blockchain innovators. We're
//           actively training new developers and student interns, empowering them with the skills and
//           knowledge they need to contribute to our ecosystem's growth. This dedication to talent
//           development ensures that our ecosystem remains at the forefront of blockchain innovation.
//         </p>
//       </div>
//       {/* Background Blur */}
//       <div className="absolute hidden md:block left-0 bottom-0 -translate-y-1/2 w-1/3 h-32 lg:h-40 rounded-full bg-violet-950 blur-7xl overflow-hidden -z-10" />
//     </section>
//   );
// };

// export default FeatureSection;

import Image from "next/image";

const FeatureSection = () => {
  return (
    <section className="relative p-4 xs:px-10 sm:p-10 flex flex-col justify-center gap-32">
      <div className="max-w-sm md:max-w-md lg:max-w-xl 2xl:max-w-2xl space-y-4 mx-auto">
        {/* <h3 className="px-2 text-center text-xl md:text-2xl leading-normal md:leading-snug"> */}
        <h3 className="px-2 text-center max-md:text-xl md:font-semibold ">
          Birble AI is the corner stone <br />
          of Web3 and AI for everyone
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto text-center">
          At Birble AI, these smallartnerships aren't just collaborations—they're pillars that
          support our commitment to innovation, community empowerment, and a sustainable future.
          Together, we're shaping a dynamic and inclusive ecosystem where technology meets purpose.
        </p>
      </div>
      <div className="relative max-w-sm md:max-w-lg lg:max-w-3xl mx-auto p-6 xs:p-8 lg:py-10 lg:px-12 border-gray-400 border-[.5px] z-20">
        {[
          "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
          "right-0 top-0 translate-x-1/2 -translate-y-1/2",
          "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
          "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
        ].map((className, index) => (
          <Image
            key={index}
            className={`absolute w-5 h-5 lg:w-6 lg:h-6 object-contain ${className}`}
            src={"/icons/plus-icon.png"}
            alt="plus-icon"
            width={50}
            height={50}
            loading="lazy"
          />
        ))}
        {/* <h3 className="px-2 mb-4 text-center text-xl md:text-2xl leading-normal md:leading-snug"> */}
        <h3 className="px-2 mb-4 text-center max-md:text-xl md:font-semibold ">
          Building for the Next<span className="text-mintGreen">Gen</span>
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto text-center">
          Birble AI is committed to fostering the next generation of blockchain innovators. We're
          actively training new developers and student interns, empowering them with the skills and
          knowledge they need to contribute to our ecosystem's growth. This dedication to talent
          development ensures that our ecosystem remains at the forefront of blockchain innovation.
        </p>
      </div>
      {/* Background Blur */}
      <div className="absolute hidden md:block left-0 bottom-0 -translate-y-1/2 w-1/3 h-32 lg:h-40 rounded-full bg-violet-950 blur-7xl overflow-hidden z-10" />
    </section>
  );
};

export default FeatureSection;
