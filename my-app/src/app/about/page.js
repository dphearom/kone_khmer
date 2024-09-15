import Navbar from "../navbar";
import Footer from "../footer";
import Image from "next/image";

const TEAM_MEMBERS = [
  {
    full_name: "Somphors Tann",
    undergraduate: "Kenyon College",
    major: "Economics & International Studies",
    graduate_school_or_job: "Harvard University",
    profile: require(`../../../public/photos/somphors.jpg`)
  },
  {
    full_name: "Phidor Kong",
    undergraduate: "Beloit University",
    major: "Political Science & Environmental Justice",
    graduate_school_or_job: "Carnegie Mellon University",
    profile: require(`../../../public/photos/phidor.jpg`)
  },
  {
    full_name: "Srey Nit Khatt",
    undergraduate: "Berea College",
    major: "Computer Science",
    graduate_school_or_job: "Vanderbilt University",
    profile: require(`../../../public/photos/sreynit.jpg`)
  },
  {
    full_name: "Usaphea Vanna",
    undergraduate: "Elon University",
    major: "Chemistry",
    graduate_school_or_job: "Quantic School of Business & Technology",
    profile: ""
  },
  {
    full_name: "Sinet Kroch",
    undergraduate: "Bucknell University",
    major: "Environmental Studies & Women's Studies",
    graduate_school_or_job: "Tufts University",
    profile: ""
  },
  {
    full_name: "Phearom Duong",
    undergraduate: "Wesleyan University",
    major: "Computer Science",
    graduate_school_or_job: "Audio/Video Specialist at Wesleyan University",
    profile: require(`../../../public/photos/phearom.jpg`)
  },
  {
    full_name: "Vattana Chan",
    undergraduate: "Ithaca College",
    major: "Computer Science",
    graduate_school_or_job: "Georgetown University",
    profile: require(`../../../public/photos/vattana.jpg`)
  },
]

export default function About() {
  return (
    <div>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a')",
        }}
      >
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        <div className="relative flex items-center justify-center h-full mission">
          <div className="bg-gray-300 p-6 rounded shadow-md max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-black text-3xl font-bold mb-2">Our Mission</h1>
            <p className="text-black">
            Kone Khmer Scholarships Project (<strong>KKSP</strong>) is a non-profit mentorship program founded by Somphors Tann, a Harvard University Master’s student, 
          with a vision to empower the next generation of Cambodian high school students to achieve their dreams of studying at top universities across the globe. 
          According to many studies out there, Cambodians are considered as one of the most underrepresented ethnicities in higher education in the United States.
          We believe in the boundless potential of Cambodia's youth, and our mission is to guide and support you on this transformative journey. 
          With the unwavering dedication of our passionate mentors, we’re here to help turn your aspirations into reality.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-5">
        <h1 className="text-2xl text-black font-bold ">Meet our Team</h1>
        <div className="pt-5 grid grid-cols-12 gap-5">
         {
          TEAM_MEMBERS.map(member => {
            return (
              <div className="col-span-12 md:col-span-4">
        
                  <div className="bg-gray-300 rounded-full w-20 h-20 mb-2">
                    <Image src={member?.profile} className="rounded-full"/>
                  </div>
                  <p className="font-bold">{member.full_name}</p>
           
                <p>Undergraduate: {member.undergraduate}</p>
                <p>Major(s): {member.major}</p>
                <p>Graduate School/Job: {member.graduate_school_or_job}</p>
              </div>  
            )
          })
         }
        </div>
      </div>
      <section className="bg-red-600 text-white p-8 text-center w-full">
        <p className="max-w-screen-lg mx-auto">
         Our mentorship program was created to be free for all <strong>Cambodians</strong> and will always be free!
        </p>
      </section>
      <Footer />

    </div>
  );
}



// <div>
// <div>
//   <section className="text-center p-8">
//     <div className="flex justify-center space-x-4">
//       {TEAM_MEMBERS.map((member, index) => (
     
//         <div key={index} className="flex flex-col items-center">
//           <div className="bg-gray-300 rounded-full w-20 h-20 mb-2">
//             <Image src={member?.profile} className="rounded-full"/>
//           </div>
//           <p className="font-bold">{member.full_name}</p>
//           <p>Undergraduate: {member.undergraduate}</p>
//           <p>Major(s): {member.major}</p>
//           <p>Graduate School/Job: {member.graduate_school_or_job}</p>
//           {/* <p className="text-sm text-gray-500">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit,
//             sed do eiusmod tempor incididunt ut labore et dolore magna
//             aliqua.
//           </p> */}
//           {/* <div className="flex space-x-2 mt-2">
//             <div className="bg-gray-300 w-6 h-6"></div>
//             <div className="bg-gray-300 w-6 h-6"></div>
//           </div> */}
//         </div>
//       ))}
//     </div>
//   </section>
// </div>
// </div>