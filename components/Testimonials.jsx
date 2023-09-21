'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    avatar: "/images/testimonial-01.jpeg",
    name: "Diego García",
    review: "Logré alquilar mi departamento en pocos días con Roommer",
    district: "Surco",
    initials: "DG"
  },
  {
    avatar: "/images/testimonial-01.jpeg",
    name: "Bruno Gardini",
    review: "Me mudé a Lima buscando un depa para alquilar con amigos, Roommer me ayudó a encontrar la mejor opción.",
    district: "San Isidro",
    initials: "BG"
  },
  {
    avatar: "/images/testimonial-01.jpeg",
    name: "Bruno Jacobs",
    review: "Me independicé y busqué nuevos ambientes con personas que no conocía y que ahora son mis amigos!",
    district: "Miraflores",
    initials: "BJ"
  }
]

const settings = {
  dots: true,
  infinite: true,
  fade: true,
  autoplaySpeed: 5000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true
};

const Testimonials = () => {
  return (
    <div>
      <div className='flex flex-col gap-10 items-center mb-10'>
        <h1 className='text-xl font-bold text-[#262450] text-center mt-20 xl:text-5xl'>Testimonios</h1>
        <Slider {...settings} className="max-w-[288px]">
          {
            reviews.map ((client, index) => {
              return (
                <div key={index}>
                  <div className='rounded-xl border border-solid border-slate-200 shadow-lg h-auto w-72 flex flex-col gap-6 items-center py-6 px-6 relative'>
                    <div>
                      <Avatar>
                        <AvatarImage src={client.avatar} />
                        <AvatarFallback>{client.initials}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h2 className='text-center'>{client.review}</h2>
                    </div>
                    <div className='text-[#ADB7BE] flex flex-row justify-center items-center'>
                      <p className='text-sm'>{`${client.name} - ${client.district}`}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials