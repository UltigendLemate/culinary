import React from "react";
import { FaTimes } from "react-icons/fa";

type Props = {
  name: string;
  img: string;
  text: string;
};

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const JuryCard = (props: Props) => {
  return (
    <div className="md:flex w-full shadow-md gap-5 justify-center items-center shadow-primary/10">
      <div className="from-primary to-white md:w-[40%] bg-gradient-to-b rounded-xl">
        <img src={props.img} className="w-full h-full object-cover" alt="" />
      </div>

      <div className="md:w-[60%] p-5 md:p-0">
        <h2 className="text-xl font-bold mb-2">{props.name}</h2>
        <p className="text-sm line-clamp-3">{props.text}</p>
        <Dialog>
          <DialogTrigger>
            <p className="text-sm cursor-pointer underline">
              Know More
            </p>
          </DialogTrigger>
          <DialogContent className="max-h-96 max-w-screen-lg overflow-auto app-scrollbar">
            <DialogHeader>
              <DialogTitle className=" text-2xl">Know More</DialogTitle>
            </DialogHeader>

            <p
              className="xl:text-sm 2xl:text-lg list-disc"
              dangerouslySetInnerHTML={{ __html: props.text }}
            ></p>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default JuryCard;
