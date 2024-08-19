import { IoLogoInstagram, IoLogoTwitter} from "react-icons/io";
import { RiFacebookCircleFill } from "react-icons/ri";

const peopleData = [
  {
    name: "Sudanshi Wankhade",
    position: "CEO / Co-Founder",
    imageUrl: "https://docs.material-tailwind.com/img/team-3.jpg",
    socialLinks: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram"
    }
  },
  {
    name: "Prajwal Gulhane",
    position: "CTO / Co-Founder",
    imageUrl: "https://docs.material-tailwind.com/img/team-4.jpg",
    socialLinks: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram"
    }
  },
  {
    name: "Pratibha Mahalle",
    position: "COO / Co-Founder",
    imageUrl: "https://docs.material-tailwind.com/img/team-1.jpg",
    socialLinks: {
      facebook: "#facebook",
      twitter: "#twitter",
      instagram: "#instagram"
    }
  }
];

function People() {
  return (
    <>
      
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center p-12">
          Meet the people behind our Innovation
        </h2>
        <div className="flex flex-wrap justify-center gap-9">
          {peopleData.map((person, index) => (
            <div key={index} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 border-solid border-2 border-green-500">
              <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                <img src={person.imageUrl} alt={`profile-picture-${index}`} />
              </div>
              <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {person.name}
                </h4>
                <p className="block font-sans text-base text-black antialiased font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                  {person.position}
                </p>
              </div>
              <div className="flex justify-center p-6 pt-2 gap-7">
                <a href={person.socialLinks.facebook} >
                  <IoLogoInstagram style={{color:"pink",fontSize:"1.5rem"}}/>
                </a>
                <a href={person.socialLinks.twitter} >
                  <IoLogoTwitter style={{color:"blue",fontSize:"1.5rem"}}/>
                </a>
                <a href={person.socialLinks.instagram}>
                  <RiFacebookCircleFill style={{color:"blue",fontSize:"1.5rem"}}/>
                </a>
              </div>
            </div>
          ))}
        </div>
     
    </>
  );
}

export default People;
