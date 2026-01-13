"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex container justify-between items-center md:text-2xl pt-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="md:text-lg rounded-md">Our Objectives</Button>
        </DialogTrigger>
        <DialogContent className="max-h-[60vh] overflow-y-scroll app-scrollbar">
          <DialogHeader>
            <DialogTitle>
              The Objectives of Culinary League 2026 for Home Bakers :
            </DialogTitle>
          </DialogHeader>
          <ul className="list-inside list-disc">
            <li>
              Celebrate and showcase the creativity and passion of home bakers
              across India.
            </li>
            <li>
              Provide a platform for home bakers to demonstrate their culinary
              skills and innovative recipes.
            </li>
            <li>
              Inspire amateur bakers to explore new techniques and elevate their
              baking expertise.
            </li>
            <li>
              Foster a supportive community where home bakers can learn from
              each other and share experiences.
            </li>
            <li>
              Encourage the use of traditional Indian ingredients and fusion
              baking approaches.
            </li>
            <li>
              Offer recognition and opportunities for home bakers to turn their
              passion into a profession.
            </li>
            <li>
              Promote healthy baking practices and sustainable ingredient
              choices.
            </li>
            <li>
              Create networking opportunities for home bakers with industry
              professionals and suppliers.
            </li>
          </ul>
        </DialogContent>
      </Dialog>
      <Link
        href={
          "https://drive.google.com/drive/folders/1_6vXqBlyR7QJhptqXsukCzpHEKOE5RdM?usp=drive_link"
        }
      >
        <Button className="md:text-lg rounded-md">Register Today</Button>
      </Link>
    </nav>
  );
};

export default Navbar; 