export default function Intro() {
   //bg-gradient-to-r from-blue-500 to-orange-300
   return (
      <div className="flex justify-center items-center text-white">
         <div className="flex flex-col justify-between items-center">
            <div className="text-2xl font-bold">Simeon Cekov</div>
            <div className="text-1xl font-light">Web Developer</div>
            <div className="">&lt;/&gt;</div>
         </div>
         <img 
            className="w-48 h-48 object-cover object-[20%_center] rounded-full border-4 border-white shadow-lg ml-8" 
            src="/moni-hike.jpg" 
            alt="Profile picture" 
         />
      </div>
   )
}
