"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Participant = {
  name: string;
  img: string;
  text: string;
};

type Team = {
  id: number;
  participant1: Participant;
  participant2: Participant;
};

const teams: Team[] = [
    {
      id: 1,
      participant1: {
        name: "Kajal Sharma",
        img: "/pp/Kajal Sharma.jpg",
        text: "Kajal Sharma is a passionate home chef and baker offering cooking and baking classes, homemade tiffin services, small catering and customized cakes, cookies and baked treats. Winner of the Rasoi Ke Durandar cooking contest, where she was awarded by Master Chef Kamal Deep Kaur, she focuses on fresh homemade food, desserts, creative presentation and quality service for every customer.",
      },
      participant2: {
        name: "Neelam Garg",
        img: "/pp/Neelam Garg.jpg",
        text: "Neelam Garg is the Founder of CHOCOCHILL, a registered Delhi-based brand she started in 2016 with just ₹200. Today, CHOCOCHILL manufactures premium homemade chocolates and bakery products, selling through Amazon, wholesalers and resellers across India. An IHE 2022 Gold Medalist, BMK winner and Power Homemade Business Award recipient, she has grown from competitor to judge and entrepreneur.",
      },
    },
    {
      id: 2,
      participant1: {
        name: "Palak Jain",
        img: "/pp/Palak Jain.jpg",
        text: "Palak Jain is a customer service and operations professional with over eight years of experience in technical support, team management and process improvement. Alongside her corporate career, she has a strong passion for cooking and culinary learning. She has worked with Billgosling Outsourcing, Teleperformance and SGV Infosofttech, managing operations, client relationships, reporting, analytics and service quality across multiple client processes.",
      },
      participant2: {
        name: "Lakshita Gupta",
        img: "/pp/Lakshita Gupta.jpg",
        text: "Lakshita Gupta is a baker, pastry chef and entrepreneur from Delhi with hands-on experience in professional and home baking. Trained at Truffle Nation Baking School, Saket, she specializes in customized cakes, desserts, pastries, fondant, buttercream work and bulk corporate orders. As Founder and Home Baker of her own venture, she manages product development, client consultation, order planning and event catering.",
      },
    },
    {
      id: 3,
      participant1: {
        name: "Radhika",
        img: "/pp/Radhika Goel-white.jpg",
        text: "Chef Radhika is a culinary creator and cloud kitchen entrepreneur behind Radhika Kitchen Snaps. She began cooking at 10, baking by 14, and taking professional orders by 18. Her specialty is reinventing Indian cuisine with a modern vegetarian and vegan approach. Through workshops, YouTube tutorials and her kitchen ventures, she shares bold, creative recipes rooted in Indian flavours.",
      },
      participant2: {
        name: "Teena",
        img: "/pp/Teena Sharma-white.jpg",
        text: "Teena is a passionate home chef and baker behind Teena's Bakehouse, with a culinary journey shaped by baking, food production and years of experimentation. She has worked with Britannia, Rohini Flour Mills and Dabur franchises, and specializes in non-vegetarian cuisine, exotic sweets, cakes and festive creations. She has also been a finalist in Chef of Delhi Season 2.",
      },
    },
    {
      id: 4,
      participant1: {
        name: "Renu Dua",
        img: "/pp/Renu Dua.jpg",
        text: "Renu Dua is a 67-year-old culinary enthusiast from Jalandhar with years of experience in home cooking and baking. Passionate about sharing recipes and inspiring learners, she conducts offline cooking and baking classes for aspiring home chefs. Featured as a Live Cooking Presenter on Amul Punjab's social media page, she is known for combining traditional recipes with modern presentation.",
      },
      participant2: {
        name: "Sanjana Goyal",
        img: "/pp/Sanjana Goyal.jpg",
        text: "Sanjana Goyal is a passionate home chef and culinary enthusiast from Samana, Punjab, known for creating innovative and visually appealing dishes. Through live cooking sessions, offline classes and hands-on workshops, she shares practical cooking, baking and kitchen skills. Featured on Amul Punjab and Amul India platforms, she has also participated in national culinary competitions and won the Catch cooking competition.",
      },
    },
    {
      id: 5,
      participant1: {
        name: "Ashu Jain",
        img: "/pp/Ashu Jain.jpg",
        text: "Ashu Jain is a creative entrepreneur, culinary educator and recipe innovator specializing in vegetarian and Jain cuisine, baking and culinary training. Founder of Bells, Cakes & Candels, she promotes healthy practical cooking, food entrepreneurship and traditional recipe preservation. Her work includes vegetarian fusion recipes, survival cooking programs, baking workshops, menu planning, food presentation and educational culinary content.",
      },
      participant2: {
        name: "Sapna Jain",
        img: "/pp/Sapna Jain.jpg",
        text: "Sapna Jain is a dedicated homemaker with a strong passion for cooking, baking and learning new culinary skills. Experienced in vegetarian meal planning, kitchen management, food presentation and household organization, she creates nutritious and creative dishes for family occasions. Her strengths include recipe development, time management, hygiene standards, event planning and experimenting with new cooking techniques.",
      },
    },
  ];

const ParticipantInfo = ({ participant }: { participant: Participant }) => {
  return (
    <div className="relative aspect-[3/4] overflow-hidden shadow-lg bg-white">
      <img
        src={participant.img}
        className="w-full h-full object-cover object-top bg-white"
        alt={participant.name}
      />
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg">
          <p className="text-xs font-semibold">{participant.name}</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-black text-white px-4 py-2 rounded-lg text-xs">
              Know More
            </button>
          </DialogTrigger>
          <DialogContent className="max-h-96 max-w-screen-lg overflow-auto app-scrollbar">
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {participant.name}
              </DialogTitle>
            </DialogHeader>
            <p
              className="xl:text-sm 2xl:text-lg"
              dangerouslySetInnerHTML={{ __html: participant.text }}
            ></p>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

const TeamCard = ({ team }: { team: Team }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 rounded-2xl">
      <ParticipantInfo participant={team.participant1} />
      <ParticipantInfo participant={team.participant2} />
    </div>
  );
};

const Participants = () => {
  return (
    <div className="w-full" id="Participants">
      <h2 className="z-20 mx-auto text-5xl md:text-7xl mb-4 mt-10 text-center heading ">
        Participants
      </h2>

      <div className="md:mx-24 mx-10 mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {teams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
};

export default Participants;
