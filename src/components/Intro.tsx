export default function Intro() {
   return (
      <div className="text-white flex flex-col justify-center items-center mt-4">
         <div className="text-white flex justify-center items-center ">

            <div className="flex flex-col justify-between items-center">
               <div className="text-2xl font-bold">Simeon Cekov</div>
               <div className="text-1xl font-light">Web Developer</div>
               <div className="">&lt;/&gt;</div>
            </div>

            <img 
               className="border-white w-48 h-48 object-cover object-[20%_center] rounded-full border-4 shadow-lg ml-8" 
               src="/moni-hike.jpg" 
               alt="Profile picture" 
            />

         </div>

         <div className="flex flex-col text-2xl font-bold mt-4">
            <div className="text-3xl font-bold">
               Hello World!
            </div>
            <div className="text-gray-400 text-2xl font-medium mt-2">
               I'm web developer with an interest in solving real-world problems well.
            </div>
         </div>

      </div>
   )
}
