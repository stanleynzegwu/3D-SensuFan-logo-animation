// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="relative min-h-screen flex flex-col justify-center w-full h-full z-20">
//       <div className="relative md:mt-20 flex flex-col lg:flex-row lg:justify-center items-center lg:gap-20">
//         <div className="flex flex-col items-center max-lg:mr-60 max-md:mr-20">
//           <div className="relative">
//             <h1 className=" capitalize text-4xl sm:text-5xl md:text-7xl ">Ecosystem</h1>
//             <h2 className="capitalize text-sm md:text-xl font-medium text-purple-200">
//               partner's & collaborators
//             </h2>
//             {/* Torus Image */}
//             <Image
//               className="hidden md:max-lg:block top-0 right-0 -translate-y-20 -translate-x-8 absolute w-20 h-20 object-contain"
//               src={"/images/torus.png"}
//               alt="torus-image"
//               width={500}
//               height={500}
//               loading="lazy"
//             />
//             {/* Background Blur */}
//             {/* <div className="absolute hidden lg:block left-1/2 top-0 -translate-x-1/2 translate-y-6 w-72 2lg:w-80 h-40 2lg:h-56 rounded-full bg-violet-900 blur-4xl 2lg:blur-6xl -z-30" />
//             <div className="absolute hidden lg:block w-56 2lg:w-96 h-48 2lg:h-60 left-0 top-0 -translate-x-1/3 2lg:-translate-x-1/2 translate-y-1/2 rounded-bl-full bg-blue-900 blur-5xl 2lg:blur-7xl -z-40 2lg:opacity-80" /> */}
//             <div className="absolute hidden lg:block left-1/2 top-0 -translate-x-1/2 translate-y-6 w-3/4 h-40 rounded-full bg-violet-900 blur-4xl -z-30" />
//             <div className="absolute hidden lg:block w-4/5 h-48 2lg:h-60 left-0 top-0 -translate-x-1/3 2lg:-translate-x-1/2 translate-y-1/2 rounded-bl-full bg-blue-900 blur-5xl 2lg:blur-7xl -z-40 2lg:opacity-80" />
//           </div>
//         </div>
//         <div className="relative flex flex-col items-center md:max-lg:ml-14 lg:w-1/3 md:self-end">
//           <Image
//             className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-auto object-contain"
//             src={"/images/Visual.svg"}
//             alt="visual"
//             width={500}
//             height={500}
//             loading="lazy"
//           />
//           {/* Pyramid,Torus & Header Blurred Assets */}
//           {[
//             {
//               className:
//                 "absolute bottom-0 left-0 xs:-translate-x-6 sm:-translate-x-8 md:-translate-x-20 max-xs:translate-y-1 max-md:translate-y-4 w-12 h-12 xs:w-16 xs:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain",
//               assetName: "pyramid",
//             },
//             {
//               className:
//                 "absolute md:max-lg:hidden top-0 right-0 md:left-0 -translate-y-28 sm:-translate-y-32 md:-translate-y-32 lg:-translate-y-20 md:translate-x-1/4 w-12 h-12 xs:w-16 xs:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain",
//               assetName: "torus",
//             },
//             {
//               className:
//                 "absolute -top-10 md:top-0 right-4 xs:right-0 max-md:translate-x-1/2 -translate-y-full md:-translate-y-3/4 lg:-translate-y-1/3 w-16 h-16 xs:w-20 xs:h-20 md:w-28 md:h-28 object-contain",
//               assetName: "headerAsset1",
//             },
//             {
//               className:
//                 "absolute bottom-0 left-0 md:-left-10 lg:-left-0 -translate-x-3/4 xs:-translate-x-full md:-translate-x-full w-20 h-20 md:w-40 md:h-40 object-contain",
//               assetName: "headerAsset2",
//             },
//             {
//               className:
//                 "absolute md:hidden bottom-0 translate-y-4 -translate-x-0 right-0 w-24 h-24 object-contain -z-10",
//               assetName: "headerAsset4",
//             },
//           ].map(({ className, assetName }, index) => (
//             <Image
//               key={index}
//               className={className}
//               src={`/images/${assetName}.png`}
//               alt={`${assetName}`}
//               width={500}
//               height={500}
//             />
//           ))}
//         </div>
//         <div className="absolute hidden md:max-lg:block left-0 bottom-0 -translate-x-1/4 lg:translate-x-3/4 -translate-y-1/4 w-52 lg:w-72 h-40 md:rounded-r-full lg:rounded-full bg-violet-900 blur-4xl z-10" />
//         <div className="absolute hidden md:max-lg:block w-56 h-48 left-0 bottom-0 translate-x-full lg:translate-x-1/2 -translate-y-1/4 rounded-bl-full bg-blue-900 blur-5xl z-0" />
//         <Image
//           className="absolute -bottom-10 md:bottom-0 right-0 translate-y-1/2 w-20 h-20 md:w-40 md:h-40 object-contain -z-10"
//           src={"/images/headerAsset3.png"}
//           alt="blur"
//           width={500}
//           height={500}
//         />
//       </div>
//       {/* Dotted Background */}
//       <div className="bg-[url('../public/images/dottedBg.png')] h-[120%] md:h-full lg:h-[125%] absolute -z-20 inset-0 bg-cover object-cover" />
//       {/* Background Blur */}
//       <div className="absolute md:hidden lg:inline left-0 top-0 w-48 h-40 md:w-60 2lg:w-80 md:h-40 -translate-y-1/2 -translate-x-1/4 rounded-b-full bg-blur-purple blur-3xl 2lg:blur-4xl overflow-hidden -z-30" />
//       <div className="absolute right-0 top-0 -translate-y-1/2 w-36 h-40 md:w-56 2lg:w-72 md:h-48  rounded-l-full bg-violet-900 blur-3xl 2lg:blur-4xl overflow-hidden -z-30" />
//       <div className="absolute hidden lg:block right-0 bottom-0 -translate-y-full -translate-x-1/2 w-32 h-32 rounded-full bg-blue-900 overflow-hidden blur-6xl -z-30" />
//     </header>
//   );
// };

// export default Header;

// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className="relative flex flex-col justify-center w-full z-20">
//       <div className="relative mt-20 md:mt-32 max-lg:mb-20 flex flex-col lg:flex-row lg:justify-center items-center lg:gap-20">
//         <div className="flex flex-col items-center max-lg:mr-60 max-md:mr-20">
//           <div className="relative">
//             <h1 className="capitalize text-[46px] md:text-[90px]">Ecosystem</h1>
//             <h5 className="capitalize md:text-2xl text-purple-200">partners & collaborators</h5>
//             {/* Torus Image */}
//             <Image
//               className="hidden md:max-lg:block top-0 right-0 -translate-y-20 -translate-x-8 absolute w-20 h-20 object-contain"
//               src={"/images/torus.png"}
//               alt="torus-image"
//               width={500}
//               height={500}
//               loading="lazy"
//             />
//             {/* Background Blur */}
//             {/* <div className="absolute hidden lg:block left-1/2 top-0 -translate-x-1/2 translate-y-6 w-72 2lg:w-80 h-40 2lg:h-56 rounded-full bg-violet-900 blur-4xl 2lg:blur-6xl -z-30" />
//             <div className="absolute hidden lg:block w-56 2lg:w-96 h-48 2lg:h-60 left-0 top-0 -translate-x-1/3 2lg:-translate-x-1/2 translate-y-1/2 rounded-bl-full bg-blue-900 blur-5xl 2lg:blur-7xl -z-40 2lg:opacity-80" /> */}
//             <div className="absolute hidden lg:block left-1/2 top-0 -translate-x-1/2 translate-y-6 w-3/4 h-40 rounded-full bg-violet-900 blur-4xl -z-30" />
//             <div className="absolute hidden lg:block w-4/5 h-48 2lg:h-60 left-0 top-0 -translate-x-1/3 2lg:-translate-x-1/2 translate-y-1/2 rounded-bl-full bg-blue-900 blur-5xl 2lg:blur-7xl -z-40 2lg:opacity-80" />
//           </div>
//         </div>
//         <div className="relative flex flex-col items-center md:max-lg:ml-14 lg:w-1/3 md:self-end">
//           <Image
//             className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-auto object-contain"
//             src={"/images/Visual.svg"}
//             alt="visual"
//             width={500}
//             height={500}
//             loading="lazy"
//           />
//           {/* Pyramid,Torus & Header Blurred Assets */}
//           {[
//             {
//               className:
//                 "absolute bottom-0 left-0 xs:-translate-x-6 sm:-translate-x-8 md:-translate-x-20 max-xs:translate-y-1 max-md:translate-y-4 w-12 h-12 xs:w-16 xs:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain",
//               assetName: "pyramid",
//             },
//             {
//               className:
//                 "absolute md:max-lg:hidden top-0 right-0 md:left-0 -translate-y-28 sm:-translate-y-32 md:-translate-y-32 lg:-translate-y-20 translate-x-1/3 xs:translate-x-1/2 md:translate-x-1/4 w-12 h-12 xs:w-16 xs:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain",
//               assetName: "torus",
//             },
//             {
//               className:
//                 "absolute -top-10 md:top-0 right-3 xs:right-0 max-md:translate-x-1/2 -translate-y-full md:-translate-y-3/4 lg:-translate-y-1/3 w-16 h-16 xs:w-20 xs:h-20 md:w-28 md:h-28 object-contain",
//               assetName: "headerAsset1",
//             },
//             {
//               className:
//                 "absolute bottom-0 left-0 md:-left-10 lg:-left-0 -translate-x-3/4 xs:-translate-x-full md:-translate-x-full w-20 h-20 md:w-40 md:h-40 object-contain",
//               assetName: "headerAsset2",
//             },
//             {
//               className:
//                 "absolute md:hidden bottom-0 translate-y-4 -translate-x-0 right-0 w-24 h-24 object-contain -z-10",
//               assetName: "headerAsset4",
//             },
//           ].map(({ className, assetName }, index) => (
//             <Image
//               key={index}
//               className={className}
//               src={`/images/${assetName}.png`}
//               alt={`${assetName}`}
//               width={500}
//               height={500}
//             />
//           ))}
//         </div>
//         <div className="absolute hidden md:max-lg:block left-0 bottom-0 -translate-x-1/4 lg:translate-x-3/4 -translate-y-1/4 w-52 lg:w-72 h-40 md:rounded-r-full lg:rounded-full bg-violet-900 blur-4xl z-10" />
//         <div className="absolute hidden md:max-lg:block w-56 h-48 left-0 bottom-0 translate-x-full lg:translate-x-1/2 -translate-y-1/4 rounded-bl-full bg-blue-900 blur-5xl z-0" />
//         <Image
//           className="absolute -bottom-10 md:bottom-0 right-0 translate-y-1/2 md:max-lg:translate-y-2/3 w-20 h-20 md:w-48 md:h-48 lg:w-40 lg:h-40 object-contain -z-10"
//           src={"/images/headerAsset3.png"}
//           alt="blur"
//           width={500}
//           height={500}
//         />
//       </div>
//       {/* Dotted Background */}
//       {/* <div className="bg-[url('../public/images/dottedBg.png')] h-[120%] md:h-full lg:h-[125%] absolute -z-20 inset-0 bg-cover object-cover" /> */}
//       <div className="bg-[url('../public/images/dottedBg.png')] h-screen absolute -z-20 inset-0 bg-cover object-cover" />
//       {/* Background Blur */}
//       <div className="absolute md:hidden lg:inline left-0 top-0 w-48 h-40 md:w-60 2lg:w-80 md:h-40 -translate-y-1/2 -translate-x-1/4 rounded-b-full bg-blur-purple blur-3xl 2lg:blur-4xl overflow-hidden -z-30" />
//       <div className="absolute right-0 top-0 -translate-y-1/2 w-36 h-40 md:h-2/5 md:w-56 2lg:w-72 rounded-l-full bg-violet-900 blur-2xl md:blur-3xl 2lg:blur-4xl overflow-hidden -z-20" />
//       <div className="absolute hidden lg:block right-0 bottom-0 -translate-y-full -translate-x-1/2 w-32 h-32 rounded-full bg-blue-900 overflow-hidden blur-6xl -z-30" />
//     </header>
//   );
// };

// export default Header;

import Image from "next/image";

const Header = () => {
  return (
    <header className="relative flex flex-col justify-center w-full z-20">
      <div className="relative mt-20 md:mt-32 mb-20 lg:mb-10 flex flex-col lg:flex-row lg:justify-center items-center max-md:gap-4 lg:gap-20">
        <div className="flex flex-col items-center max-lg:mr-60 max-md:mr-20">
          <div className="relative">
            <h1 className="capitalize md:leading-tight text-[46px] md:text-[90px]">Ecosystem</h1>
            <h5 className="capitalize md:text-2xl text-purple-200">partners & collaborators</h5>
            {/* Torus Image */}
            <Image
              className="hidden md:max-lg:block top-0 right-0 -translate-y-20 -translate-x-8 absolute w-20 h-20 object-contain"
              src={"/images/torus.png"}
              alt="torus-image"
              width={500}
              height={500}
              loading="lazy"
            />
            {/* Background Blur */}
            {/* <div className="absolute hidden lg:block left-1/2 top-0 -translate-x-1/2 translate-y-6 w-72 2lg:w-80 h-40 2lg:h-56 rounded-full bg-violet-900 blur-4xl 2lg:blur-6xl -z-30" />
            <div className="absolute hidden lg:block w-56 2lg:w-96 h-48 2lg:h-60 left-0 top-0 -translate-x-1/3 2lg:-translate-x-1/2 translate-y-1/2 rounded-bl-full bg-blue-900 blur-5xl 2lg:blur-7xl -z-40 2lg:opacity-80" /> */}
            <div className="absolute hidden lg:block left-1/2 top-0 -translate-x-1/2 translate-y-6 w-3/4 h-40 rounded-full bg-violet-900 blur-4xl -z-30" />
            <div className="absolute hidden lg:block w-4/5 h-48 2lg:h-60 left-0 top-0 -translate-x-1/3 2lg:-translate-x-1/2 translate-y-1/2 rounded-bl-full bg-blue-900 blur-5xl 2lg:blur-7xl -z-40 2lg:opacity-80" />
          </div>
        </div>
        <div className="relative flex flex-col items-center md:max-lg:ml-14 max-md:w-full lg:w-1/3 md:self-end">
          <div className="relative">
            <Image
              className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-full lg:h-auto object-contain"
              src={"/images/Visual.svg"}
              alt="visual"
              width={500}
              height={500}
            />
            {/* Mobile Only Header Blurred Asset */}
            <Image
              className="absolute md:hidden right-0 bottom-0 translate-y-4 translate-x-2 w-24 h-24 object-contain -z-10"
              src={"/images/headerAsset4.png"}
              alt="visual"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
          {/* Pyramid,Torus & Header Blurred Assets */}
          {[
            {
              className:
                "absolute bottom-0 left-2 md:left-0 translate-x-1/2 md:-translate-x-20 max-xs:translate-y-1 max-md:translate-y-4 w-12 h-12 xs:w-16 xs:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain",
              assetName: "pyramid",
            },
            {
              className:
                "absolute md:max-lg:hidden -top-2 md:top-0 right-0 md:left-0 -translate-y-28 md:-translate-y-32 lg:-translate-y-20 -translate-x-1/2 md:translate-x-1/4 w-12 h-12 xs:w-16 xs:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain",
              assetName: "torus",
            },
            {
              className:
                "absolute -top-16 xs:-top-10 md:top-0 -right-4 xs:-right-6 md:right-0 max-md:-translate-x-1/4 -translate-y-full md:-translate-y-3/4 lg:-translate-y-1/3 w-16 h-16 xs:w-24 xs:h-24 md:w-28 md:h-28 object-contain",
              assetName: "headerAsset1",
            },
            {
              className:
                "absolute bottom-0 left-0 md:-left-10 lg:-left-0 -translate-x-1/4 md:-translate-x-full w-20 h-20 md:w-40 md:h-40 object-contain",
              assetName: "headerAsset2",
            },
          ].map(({ className, assetName }, index) => (
            <Image
              key={index}
              className={className}
              src={`/images/${assetName}.png`}
              alt={`${assetName}`}
              width={500}
              height={500}
            />
          ))}
        </div>
        <div className="absolute hidden md:max-lg:block left-0 bottom-0 -translate-x-1/4 lg:translate-x-3/4 -translate-y-1/4 w-52 lg:w-72 h-40 md:rounded-r-full lg:rounded-full bg-violet-900 blur-4xl z-10" />
        <div className="absolute hidden md:max-lg:block w-56 h-48 left-0 bottom-0 translate-x-full lg:translate-x-1/2 -translate-y-1/4 rounded-bl-full bg-blue-900 blur-5xl z-0" />
        <Image
          className="absolute -bottom-10 md:bottom-0 right-0 translate-y-1/2 md:max-lg:translate-y-2/3 w-36 h-36 md:w-48 md:h-48 lg:w-40 lg:h-40 object-contain -z-10"
          src={"/images/headerAsset3.png"}
          alt="blur"
          width={500}
          height={500}
        />
      </div>
      {/* Dotted Background */}
      {/* <div className="bg-[url('../public/images/dottedBg.png')] h-[120%] md:h-full lg:h-[125%] absolute -z-20 inset-0 bg-cover object-cover" /> */}
      <div className="bg-[url('../public/images/dottedBg.png')] h-screen lg:h-[130%] absolute -z-20 inset-0 bg-cover object-cover" />
      {/* Background Blur */}
      <div className="absolute md:hidden lg:inline left-0 top-0 w-48 h-40 md:w-60 2lg:w-80 md:h-40 -translate-y-1/2 -translate-x-1/4 rounded-b-full bg-blur-purple blur-3xl 2lg:blur-4xl overflow-hidden -z-30" />
      <div className="absolute right-0 top-0 -translate-y-1/2 w-36 h-40 md:h-2/5 md:w-56 2lg:w-72 rounded-l-full bg-violet-900 blur-2xl md:blur-3xl 2lg:blur-4xl overflow-hidden -z-20" />
      <div className="absolute hidden lg:block right-0 bottom-0 -translate-y-full -translate-x-1/2 w-32 h-32 rounded-full bg-blue-900 overflow-hidden blur-6xl -z-30" />
    </header>
  );
};

export default Header;
