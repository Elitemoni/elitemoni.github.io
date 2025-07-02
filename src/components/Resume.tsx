export default function Resume() {
   return (
      <div className="bg-gray-400 flex justify-center items-center w-full h-224">
            
            {/* degrees */}
            <div className="bg-gray-600 flex-1 flex flex-col justify-center items-start">

               {/* associate's degree */}
               <div className="text-xl font-light mb-1">
                  associate's degree in computer science:
               </div>
               <img
                  className="border-white w-128 h-96 object-cover object-[20%_center] rounded-lg border-4"
                  src="degreeDVC.jpg"
                  alt="Degree certificate"
               />

               {/* bachelor's degree */}
               <div className="text-xl font-light mt-4 mb-1">
                  bachelor's degree in computer science:
               </div>
               <img
                  className="border-white w-128 h-96 object-cover object-[20%_center] rounded-lg border-4"
                  src="degreeUOPX.png"
                  alt="Degree certificate"
               />

            </div>
            
            {/* skills and experience */}
            <div className="bg-gray-300 text-black flex-1 flex flex-col justify-center items-center h-full font-bold">
               <div className="text-2xl font-bold mb-2">
                  Skills:
               </div>
               <div className="text-gray-800 font-light mb-8">
                  React - Tailwind - TypeScript - NextJS - Vercel
               </div>
               <div className="text-2xl font-bold mb-2">
                  Experience:
               </div>
               <div className="text-gray-800 font-light">
                  code tutoring
               </div>
            </div>

      </div>
   )
}
