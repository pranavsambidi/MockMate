"use client";
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';


export default function MockInterviewHistory() {
 const [mockInterviews, setMockInterviews] = useState([]);
 const [loading, setLoading] = useState(true);
 const { data: session, status } = useSession();


 useEffect(() => {
   setLoading(true);
   const fetchData = async () => {
     try {
       const response = await fetch(`/api/history?username=${session?.user?.username || 'guest'}`);
       const data = await response.json();
       setMockInterviews(data);
     } catch (error) {
       console.error('Error fetching mock interviews:', error);
     } finally {
       setLoading(false);
     }
   };
   fetchData();
 }, [session]);


 if (status === 'loading') {
   return <div className="text-cyan-300 text-center mt-20">Loading session...</div>;
 }


 return (
   <div className="container mx-auto p-6 min-h-[70vh] bg-black text-cyan-300 rounded-xl shadow-xl mt-6">
     <h1 className="text-3xl font-bold mb-6 text-center underline underline-offset-8 decoration-cyan-500">Mock Interview History</h1>


     {loading ? (
       <div className="flex justify-center items-center mt-10">
         <div
           className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-cyan-300 border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
           role="status"
         >
           <span className="sr-only">Loading...</span>
         </div>
       </div>
     ) : mockInterviews.length === 0 ? (
       <div className="text-center text-gray-400 mt-10">History is empty</div>
     ) : (
       <div className="overflow-x-auto">
         <table className="min-w-full bg-zinc-900 rounded-lg shadow-lg overflow-hidden border border-cyan-600">
           <thead>
             <tr className="bg-zinc-800 text-cyan-300">
               <th className="py-3 px-5 text-left">Date</th>
               <th className="py-3 px-5 text-left">Topic</th>
               <th className="py-3 px-5 text-left">Actions</th>
             </tr>
           </thead>
           <tbody>
             {mockInterviews.map((interview) => (
               <tr key={interview._id} className="border-b border-zinc-700 hover:bg-zinc-800 transition-colors">
                 <td className="py-3 px-5">
                   {new Date(interview.createdAt).toLocaleString('en-US', {
                     year: 'numeric',
                     month: '2-digit',
                     day: '2-digit',
                     hour: '2-digit',
                     minute: '2-digit',
                     second: '2-digit',
                   })}
                 </td>
                 <td className="py-3 px-5">{interview.topic}</td>
                 <td className="py-3 px-5">
                   <Link
                     href={`/history/${interview._id}`}
                     className="text-cyan-400 hover:underline hover:text-cyan-300 transition"
                   >
                     View Details
                   </Link>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       </div>
     )}
   </div>
 );
}
