import React from 'react'
import Image from 'next/image'
import { InputWithButton } from '@/components/InputWithButton'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import PricingTable from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'


const page = () => {
  // hidden sm:inline-block para elementos que quieres mostrar únicamente en formatos más pequeños que sm
  // hidden sm:block para elementos que quieres ocultar en formatos más pequeños que sm

  return (
    <div className='mt-16'>
    
      <div className='flex justify-between py-12 px-6 background-gradient'>
        <div className='sm:w-2/3'>
          <h1 className='text-xl font-bold mb-1 xl:text-5xl xl:mb-2'>Encuentra la <span className='text-[#9327F0]'>habitación</span> perfecta</h1>
          <p className='text-slate-600 mb-8 xl:text-2xl'>Y el <span className='text-[#9327F0]'>roommate</span> ideal</p>
          <InputWithButton />
        </div>
        <div className='hidden sm:block sm:w-1/3 sm:mr-6'>
          <img 
            src='/images/heroImageBG5.png'
            className='object-cover w-full'
          />
        </div>
      </div>

      <div className='w-full flex justify-center py-5 px-5 mb-8'>
        <h1 className='text-xl font-bold text-[#262450] text-center xl:text-5xl'>Unimos hogares con personas independientes</h1>
      </div>

      <div className='flex flex-col gap-10 items-center mb-10'>

        <div className='rounded-xl border border-solid border-slate-200 shadow-lg h-48 w-56 flex flex-col gap-6 items-center py-6 px-6'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9327F0" className="w-12 h-12">
              <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
            </svg>
          </div>
          <div><p className='primary-color text-center'>Explora compartir un depa con personas afines a ti</p></div>
        </div>

        <div className='rounded-xl border border-solid border-slate-200 shadow-lg h-48 w-56 flex flex-col gap-6 items-center py-6 px-6'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9327F0" className="w-12 h-12">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </div>
          <div><p className='primary-color text-center'>Consigue la mejor habitación, al mejor precio</p></div>
        </div>

        <div className='rounded-xl border border-solid border-slate-200 shadow-lg h-48 w-56 flex flex-col gap-6 items-center py-6 px-6'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9327F0" className="w-12 h-12">
              <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
          </div>
          <div><p className='primary-color text-center'>Disfruta de vivir más seguro con nuestros perfiles verificados</p></div>
        </div>
      </div>

      <h1 className='text-xl font-bold text-[#262450] text-center mt-20 xl:text-5xl'>Los destacados</h1>

      <h1 className='text-xl font-bold text-[#262450] text-center mt-20 xl:text-5xl'>¿Por qué publicar con nosotros?</h1>

      <h1 className='text-xl font-bold text-[#262450] text-center mt-20 xl:text-5xl'>Planes para rentar</h1>

      <div className='py-8 px-8'>
        <PricingTable />
      </div>

      <Testimonials />

      <h1 className='text-xl font-bold text-[#262450] text-center mt-32 xl:text-5xl'>Preguntas frecuentes</h1>

      <div className='py-8 px-8'>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Cómo elegir al mejor roommate?</AccordionTrigger>
            <AccordionContent>
              Enfócate en los perfiles verificados, son los de mayor confianza. Utiliza los filtros para encotrar personas afines a ti.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Cómo rentar habitaciones más rápido?</AccordionTrigger>
            <AccordionContent>
              Verifica tu perfil y explora nuestro plan premium. Puedes realizar una prueba gratis durante 7 días y cancelar cuando quieras.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>¿Cuánto cuesta publicar habitaciones?</AccordionTrigger>
            <AccordionContent>
              Básico: S/25. Estándar: S/50. Premium: S/80. <br />
              Para mayor información, visita la sección de planes.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    </div>
  )
}

export default page