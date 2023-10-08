import Link from "next/link";
import { FaUsers,FaCheckToSlot,FaPenRuler,FaClock } from "react-icons/fa6";


export default function Home() {
  return (
    <>
     <div className="bg-[#c5c7cd] md:pb-20 pb-[10px] box-border">
     <div className="bg-[url('../assets/banner.jpg')] bg-center bg-cover bg-no-repeat h-fit">
        <div className='w-full lg:py-[150px] md:py-[100px] py-[50px] bg-[radial-gradient(circle,rgba(60,49,122,0.7)28%,rgba(81,81,184,0.9)60%,rgba(153,161,177,0.8)89%)]'>
           <div className='container text-center text-white'>
             <h1 className='md:text-[40px] text-[25px] font-poppins font-bold lg:px-[450px] md:px-[250px]'>Building stellar websites for early startups</h1>
             <p className='font-poppins text-md lg:px-[400px] md:px-[200px] px-50px text-white my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit est eaque ut numquam.</p>
             <button className='font-poppins font-bold uppercase text-black rounded-lg text-sm mt-5 px-5 py-2 lg:px-6 lg:py-3 bg-[#efe644] transition ease-in-out duration-300 hover:bg-[#fdfdff]'>View our work</button>
           </div>
        </div>
      </div>
      <div className=" container py-14">
        <h2 className="md:text-[30px] text-[20px] font-poppins font-bold lg:px-[470px] md:px-[200px] px-[20px] text-center mb-12">Design that solves problems, one product at a time</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-x-6 lg:gap-x-6 gap-y-6">
          
          <div className="item p-10 sm:p-8 md:p-6 lg:p-5 bg-[#f8f8f7] text-black rounded-md">
          <div className="icon w-1 h-1 md:w-3 lg:h-3 mb-10">
            <FaUsers className="w-10 h-10"/>
            </div>
            <h2 className="font-poppins font-bold  text-md md:text-lg lg:text-xl">
            Uses Client First
            </h2>
            <p className="font-poppins text-sm md:text-md lg:text-[16px] pt-2 pb-6 text-justify">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Nihil.
            </p>
            <Link
              href={"#"}
              className="font-poppins uppercase text-sm font-bold  flex items-center justify-start"
            >
              read more
            </Link>
          </div>
          <div className="item p-10 sm:p-8 md:p-6 lg:p-5 bg-[#f8f8f7] text-black rounded-md">
          <div className="icon w-1 h-1 md:w-3 lg:h-3 mb-10">
            <FaCheckToSlot className="w-8 h-8"/>
            </div>
            <h2 className="font-poppins font-bold text-md md:text-lg lg:text-xl">
            Two Free Revision Round
            </h2>
            <p className="font-poppins text-sm md:text-md lg:text-[16px] text-justify pt-2 pb-6">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Nihil.
            </p>
            <Link
              href={"#"}
              className="font-poppins uppercase text-sm font-bold  flex items-center justify-start"
            >
              read more
            </Link>
          </div>
          <div className="item p-10 sm:p-8 md:p-6 lg:p-5 bg-[#f8f8f7] text-black rounded-md">
          <div className="icon w-1 h-1 md:w-3 lg:h-3 mb-10">
            <FaPenRuler className="w-8 h-8"/>
            </div>
            <h2 className="font-poppins font-bold  text-md md:text-lg lg:text-xl">
            Template Customization
            </h2>
            <p className="font-poppins text-sm md:text-md lg:text-[16px] text-justify pt-2 pb-6">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Nihil.
            </p>
            <Link
              href={"#"}
              className="font-poppins uppercase text-sm font-bold  flex items-center justify-start"
            >
              read more
            </Link>
          </div>
          <div className="item p-10 sm:p-8 md:p-6 lg:p-5 bg-[#f8f8f7] text-black rounded-md">
          <div className="icon w-1 h-1 md:w-3 lg:h-3 mb-10">
            <FaClock className="w-8 h-8"/>
            </div>
            <h2 className="font-poppins font-bold  text-md md:text-lg lg:text-xl">
            Quick Delivery
            </h2>
            <p className="font-poppins text-sm md:text-md lg:text-[16px] text-justify pt-2 pb-6">
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Nihil.
            </p>
            <Link
              href={"#"}
              className="font-poppins uppercase text-sm font-bold  flex items-center justify-start"
            >
              read more
            </Link>
          </div>
        </div>
      </div>
     </div>
    </>
  );
}
