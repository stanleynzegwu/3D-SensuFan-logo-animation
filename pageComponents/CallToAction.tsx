// "use client";

// import { Button } from "../ui/button";

// const CallToAction = () => {
//   return (
//     <section className="relative min-h-screen w-full">
//       <div className="w-full h-screen min-h-[600px] lg:min-h-[500px] px-4 xs:px-10 py-10 lg:p-0 max-lg:max-w-xl lg:w-[80%] mx-auto flex flex-col justify-center">
//         <div className="relative group flex flex-col max-lg:justify-end lg:flex-row rounded-3xl h-full lg:h-3/4 p-3 sm:p-6 w-full z-20">
//           <div className="bg-[url('../public/images/bgMid.png')] lg:bg-[url('../public/images/bgLarge.png')] absolute -z-10 rounded-3xl inset-0 bg-cover object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out" />
//           <div className="p-4 sm:p-6 md:p-8 lg:p-10 h-1/2 w-full lg:w-1/2 lg:h-full rounded-3xl bg-purple-600 flex flex-col justify-end">
//             <div className="min-h-[60%] flex flex-col gap-6 sm:gap-8 justify-between max-w-sm lg:max-w-md">
//               <div className="space-y-2 sm:space-y-4">
//                 <h6 className="2xl:text-2xl">
//                   Bring your space to live with <span className="font-bold">Birble AI</span>
//                 </h6>
//                 <p>
//                   Stop holding a wish sign and start unboxing that special gift, from that special
//                   person on your special day
//                 </p>
//               </div>
//               <Button className="w-24 md:w-28 bg-mintGreen hover:bg-white text-black capitalize medium rounded-3xl px-6 transition-all duration-300 ease-in-out">
//                 Sign Up
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Background Blur */}
//       <div className="absolute hidden md:block left-0 bottom-1/2 transform translate-y-1/2 w-56 h-32 lg:h-40 rounded-full bg-violet-900 blur-7xl overflow-hidden z-0" />
//     </section>
//   );
// };

// export default CallToAction;

"use client";

import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <section className="relative lg:min-h-screen w-full">
      <div className="w-full h-screen min-h-[600px] lg:min-h-[500px] max-h-[700px] md:max-h-[900px] px-4 xs:px-10 py-10 lg:p-0 max-lg:max-w-xl lg:w-[80%] mx-auto flex flex-col justify-center">
        <div className="relative group flex flex-col max-lg:justify-end lg:flex-row rounded-3xl h-full lg:h-3/4 p-3 sm:p-6 w-full z-20">
          <div className="bg-[url('../public/images/bgMid.png')] lg:bg-[url('../public/images/bgLarge.png')] absolute -z-10 rounded-3xl inset-0 bg-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out" />
          <div className="p-4 sm:p-6 md:p-8 lg:p-10 h-1/2 w-full lg:w-1/2 lg:h-full rounded-3xl bg-purple-600 flex flex-col justify-end">
            <div className="min-h-[60%] flex flex-col gap-6 xs:gap-10 justify-between max-w-sm lg:max-w-md">
              <div className="">
                <h3 className="max-md:text-xl md:text-3xl md:font-semibold lg:font-medium pb-3 lg:p-2">
                  Bring your space to live with{" "}
                  <span className="font-bold lg:font-extrabold">Birble AI</span>
                </h3>
                <small>
                  Stop holding a wish sign and start unboxing that special gift, from that special
                  person on your special day
                </small>
              </div>
              <Button className="w-24 md:w-28 bg-mintGreen hover:bg-white text-black capitalize medium rounded-3xl px-6 transition-all duration-300 ease-in-out">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Background Blur */}
      <div className="absolute hidden md:block left-0 bottom-1/2 transform translate-y-1/2 w-56 h-32 lg:h-40 rounded-full bg-violet-900 blur-7xl overflow-hidden z-0" />
    </section>
  );
};

export default CallToAction;
