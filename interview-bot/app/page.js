import Image from "next/image";
import Link from "next/link";


export default function Home() {
 return (
   <div className="min-h-screen bg-black text-cyan-300">
     <div className="text-center py-12 bg-gradient-to-b from-black via-gray-900 to-black rounded-b-2xl">
       <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-300 my-4 drop-shadow-xl">
         MockMate
       </h1>
       <p className="text-2xl text-cyan-200 mb-4 font-medium">
         An Interactive Interview Coach
       </p>
       <p className="text-xl text-cyan-400">
         Simulate interviews, practice responses, and receive feedback.
       </p>
       <Link href="/interview">
         <button className="mt-6 bg-cyan-500 text-black font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-cyan-400 transition-all">
           Start Now
         </button>
       </Link>
     </div>


     <div className="container mx-auto px-4 mt-16">
       <h2 className="text-4xl font-bold text-cyan-300 text-center mb-8">
         Why MockMate?
       </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
         <div className="p-6 bg-gray-900 rounded-lg border border-cyan-700 shadow-lg hover:shadow-cyan-500/50 transition-shadow">
           <Image
             src="https://www.hafod.org.uk/images/Feedback.png"
             alt="Personalized Feedback"
             width={150}
             height={150}
             className="mx-auto mb-4"
             priority
           />
           <h3 className="text-xl font-semibold text-cyan-200 mb-2">
             Personalized Feedback
           </h3>
           <p className="text-cyan-400">
             Get tailored insights on your interview performance.
           </p>
         </div>
         <div className="p-6 bg-gray-900 rounded-lg border border-cyan-700 shadow-lg hover:shadow-cyan-500/50 transition-shadow">
           <Image
             src="https://thumbs.dreamstime.com/b/podcast-recording-software-representing-online-interview-session-microphone-placed-near-digital-audio-file-symbolizing-341118204.jpg"
             alt="Realistic Scenarios"
             width={150}
             height={150}
             className="mx-auto mb-4"
           />
           <h3 className="text-xl font-semibold text-cyan-200 mb-2">
             Realistic Scenarios
           </h3>
           <p className="text-cyan-400">
             Simulate real-world interview settings with ease.
           </p>
         </div>
         <div className="p-6 bg-gray-900 rounded-lg border border-cyan-700 shadow-lg hover:shadow-cyan-500/50 transition-shadow">
           <Image
             src="https://cdn-icons-png.freepik.com/512/11198/11198243.png?ga=GA1.1.1137836748.1744405921"
             alt="Comprehensive Analytics"
             width={150}
             height={150}
             className="mx-auto mb-4"
           />
           <h3 className="text-xl font-semibold text-cyan-200 mb-2">
             Comprehensive Analytics
           </h3>
           <p className="text-cyan-400">
             Track your progress and improvement over time.
           </p>
         </div>
       </div>
     </div>


     <div className="text-center py-12 bg-gradient-to-t from-gray-900 to-black mt-16 rounded-t-2xl">
       <h2 className="text-3xl font-bold text-cyan-200">
         Ready to Excel in Your Career?
       </h2>
       <p className="text-xl text-cyan-400 mt-2">
         Join MockMate and start your journey today.
       </p>
       <Link href="/login">
         <button className="mt-6 bg-green-400 text-black font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-green-300 transition-all">
           Sign Up Now
         </button>
       </Link>
     </div>
   </div>
 );
}