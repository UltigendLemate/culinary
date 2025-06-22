"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

const Organizers = () => {
  return (
    <div className="md:h-full py-5 px-3 bg-foreground w-full mt-5 flex flex-col justify-center gap-5">
      <div className="text-center text-primary text-xl uppercase font-bold">
        Organised By
      </div>
      <div className="md:flex grid justify-center gap-10">
        <Dialog>
          <DialogTrigger>
            <Image
              src={"/ihe.png"}
              width={350}
              height={100}
              alt="IHE expo"
              className="bg-white object-contain w-full h-full"
            />
          </DialogTrigger>
          <DialogContent className="max-h-[60vh] overflow-y-scroll app-scrollbar">
            <DialogHeader>
              <DialogTitle>IHExpo 24</DialogTitle>
            </DialogHeader>
            The International Hospitality Expo (IHExpo) 2024 is set to take
            place in Greater Noida from 3-6 August 2024. This premier B2B event
            aims to bring together various sectors of the hospitality industry,
            including luxury hotels, restaurants, home-stays, and cloud
            kitchens. It provides an exceptional platform for industry
            professionals to network, discover new products and services, and
            stay updated with the latest trends.
            <br />
            <br />
            The expo features numerous exhibitors showcasing a wide range of
            products and solutions tailored for the hospitality industry. These
            include kitchen equipment, food and beverages, furnishings, and
            technology solutions. In addition, the event offers valuable
            opportunities for learning and development through workshops,
 seminars, and live demonstrations by experts.
            <br />
            <br />
            <p>
              One of the key highlights of IHExpo 2024 is the diverse
              participant profile, which includes CEOs, purchase heads, project
              management companies, and other decision-makers in the hospitality
              sector. This makes it an ideal venue for building business
              relationships and exploring new opportunities. For more detailed
              information, you can visit{" "}
              <Link
                href="https://ihexpo.com/visitor-registration"
                className="inline text-blue-400"
              >
                the IHExpo official website
              </Link>
            </p>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger>
            <Image
              src={"/fnblogo.png"}
              width={350}
              height={100}
              className="bg-white object-contain w-full h-full"
              alt="bakery review"
            />
          </DialogTrigger>
          <DialogContent className="max-h-[60vh] overflow-y-scroll app-scrollbar">
            <DialogHeader>
              <DialogTitle>
                Bakery Review Magazine by Hammer Publishers, India.{" "}
              </DialogTitle>
            </DialogHeader>
            Bakery Review is a bi-monthly publication dedicated to the bakery
            industry, published by Hammer Publishers Pvt. Ltd. It stands out as
            one of the few magazines in India exclusively focused on this
            sector, offering in-depth coverage of the latest trends,
            developments, and insights from leading experts.
            <h3 className="text-lg font-semibold">Key Features</h3>
            <ul className="list-inside list-disc">
              <li>
                New Products and Technologies: The magazine covers the latest
                innovations in baking equipment, ingredients, and packaging
                solutions, helping industry professionals stay updated.
              </li>
              <li>
                Industry Trends and Developments: It highlights significant
                trends such as the rise of artisanal baking and the increasing
                demand for healthier bakery products.
              </li>
              <li>
                Business and Management Advice: Bakery Review offers valuable
                tips and strategies for bakery owners and operators to enhance
                their business operations and management practices.
              </li>
              <li>
                Recipes and Baking Tips: It features contributions from leading
                pastry chefs and bakers, providing readers with recipes and
                practical baking tips.
              </li>
            </ul>
            <h3 className="text-lg font-semibold">Subscription Information</h3>
            <p>
              Bakery Review is available for digital subscription, offering
              instant access to its rich content. It is also available as part
              of the Magzter GOLD subscription, providing access to over 9,000
              magazines and newspapers. For more information, you can visit{" "}
              <Link
                href={"https://www.hammer.co.in"}
                className="text-blue-400"
              >
                www.hammer.co.in
              </Link>
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Organizers; 