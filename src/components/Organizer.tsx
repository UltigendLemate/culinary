import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Link from 'next/link'

type Props = {
    img : string,
    mini : string,
    text:string,
    link : string
}

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  
const Organizer = (props : Props) => {
    
  return (
    <div className="max-w-xs md:max-w-xl  mb-5 sm:mb-0 mx-auto p-2 sm:p-5 shadow-xl  bg-white rounded-xl">
    <div className="flex w-full  h-32 sm:h-36 justify-center items-end">
        <Link href={props.link} className=''>
      <img src={props.img} alt="Image1" className={`w-80 ${props.img.includes('ihe.jpg') && "bg-gray-600"}`} />
      </Link>
    </div> <div className="p-4">
        <p className='line-clamp-3 text-black'>{props.text}</p>
    <Dialog>
          <DialogTrigger>
            <p className="text-sm cursor-pointer underline">
              Know More
            </p>
          </DialogTrigger>
          <DialogContent className="max-h-96 max-w-screen-lg overflow-auto app-scrollbar">
            <DialogHeader>
              <DialogTitle className="text-2xl">Know More</DialogTitle>
            </DialogHeader>

            <p
              className="xl:text-sm 2xl:text-lg list-disc"
              dangerouslySetInnerHTML={{ __html: props.text }}
            ></p>
          </DialogContent>
        </Dialog>
    </div>
    
  </div>
  )
}

export default Organizer