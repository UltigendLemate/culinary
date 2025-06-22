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
        name: "Riya Jindal",
        img: "/pp/Riya Jindal.png",
        text: "From Ghaziabad, Riya Jindal is a trained pastry chef with an advanced diploma in Patisserie & Baking Arts from the Academy of Pastry Arts, Gurgaon. With a background in business and education, she blends creativity with structure - crafting cakes, chocolates, and artisanal desserts that reflect both finesse and flavor. Riya has led core operations at professional bake sales, mastering everything from production to promotions. As the founder of Allure Cakecart, she's passionate about presentation, food styling, and modern baking techniques. Her goal at the Culinary League is to push boundaries using besan in elegant forms, and spotlight the art of pastry from a home chef's lens.",
      },
      participant2: {
        name: "Aishwarya Malhotra",
        img: "/pp/Aishwarya Malhotra.png",
        text: "A culinary entrepreneur from Faridabad, Aishwarya Malhotra is the founder of World of Chocolates and Mom-Made Dabba - two ventures that blend emotion with innovation. With over four years of experience, she crafts handcrafted chocolates, bakes celebration treats, and runs a successful North Indian cloud kitchen inspired by the Mumbai dabbawala system. Aishwarya has earned accolades like 'Best Party Order Chef 2025' and finalist spots in top culinary contests. Known for her storytelling through food, she brings a unique flair to the Culinary League, aiming to elevate humble ingredients like besan into memorable gourmet experiences.",
      },
    },
    {
      id: 2,
      participant1: {
        name: "Manpreet Kaur",
        img: "/pp/Manpreet Kaur.png",
        text: "Based in New Delhi, Manpreet Kaur brings over 15 years of home-kitchen expertise and a disciplined flair to the Agropure Culinary League. A certified baking and culinary artist, she has completed courses in advanced cake decoration, chocolate artistry, fondant modeling, and professional-level baking techniques. Her repertoire spans eggless and fusion desserts, with a keen focus on flavor balance and visual appeal. Manpreet is a consistent performer in food exhibitions and workshops, where her calm demeanor and meticulous craft shine through. With her technical command and traditional roots, she aims to turn besan into plated elegance - worthy of national recognition.",
      },
      participant2: {
        name: "Mamta Pandey",
        img: "/pp/Mamta Pandey.png",
        text: "Hailing from Greater Noida, Mamta Pandey is a dynamic home chef and educator who has transformed her love for cooking into a growing culinary brand. With a strong foundation in teaching and a creative flair for food innovation, she runs a Swiggy and Zomato-listed home kitchen known for its originality and consistent customer praise. Mamta actively experiments with flavor combinations, plating techniques, and visual storytelling - building an engaged digital following through food reels and recipe-led narratives. She's the founder of a thriving food community, a winner at IBCA's Main Course Competition, and a contender in live contests like SGT University's Barbecue Challenge. Whether it's reinventing a classic or crafting a new dish from scratch, Mamta brings precision, personality, and passion to every plate.",
      },
    },
    {
      id: 3,
      participant1: {
        name: "Archana Dave",
        img: "/pp/Archana Dave.png",
        text: "A celebrated home chef from Pune, Archana Dave is the founder of Archies Veg Kitchen, a cloud kitchen that successfully served over 1100 catering orders across six years. Her culinary journey is marked by a deep-rooted passion for traditional Indian flavors, blended with a relentless drive for innovation. With a stellar 4.9★ Google rating backed by 175+ reviews, Archana is also a popular YouTube creator sharing recipes through her channel Archies Veg Kitchen. Her accolades include the Kitchen Champion Trophy (2x winner), BMK Digital Epicurean Excellence Award, and the Women Icon Award 2025. At the Agropure Culinary League, Archana brings not just skill - but legacy, leadership, and a lifelong love for cooking.",
      },
      participant2: {
        name: "Simmi Babbar",
        img: "/pp/Simmi Babbar.png",
        text: "Simmi Babbar, the force behind Simmiz Kitchen, is a Gurugram-based home chef and culinary mentor whose journey began in 2018 with a mission to uplift and showcase homegrown cooking talent. Her Facebook community has since grown to over 50,000 followers, where she shares recipes, hosts cookery classes, and inspires everyday chefs. Simmi has catered for intimate gatherings, taught countless beginners, and earned widespread recognition across India's home chef circuits. Her awards include the Badte Kadam Award for Best Home Chef, Ciba's Innovative Recipe Award, and the BMK Savoury Star title. A regular finalist in competitions like MasterChef Jaipur and Swaad Sutra, and featured on platforms like News18, Simmi brings unmatched depth and generosity to the Agropure Culinary League 2025 stage.",
      },
    },
    {
      id: 4,
      participant1: {
        name: "Teena Sharma",
        img: "/pp/Teena Sharma.png",
        text: "From the labs of Britannia to the heart of home kitchens, Ghaziabad-based Teena Sharma brings over two decades of precision, experimentation, and passion to the Culinary League. A seasoned quality control chemist turned celebrated home chef, Teena has mastered non-veg delicacies like biryanis and drums of heaven, alongside exotic sweets such as kaju paan and pina colada modaks. Her journey spans experience with Britannia, Dabur, and Rohini Flour Mills, now culminating in her venture BakehouseTeena's. While successfully running a math coaching center for 26 years, she's carved time to cook, teach, and serve a loyal clientele. A finalist in Chef of Delhi and a jury member in India Ka Homechef, Teena fuses science, tradition, and joy into every dish she plates.",
      },
      participant2: {
        name: "Radhika Goel",
        img: "/pp/Radhika Goel.png",
        text: "Young, bold, and endlessly creative - Ghaziabad's Radhika Goel is redefining Indian vegetarian cuisine. Founder of Radhika Kitchen Snaps on YouTube, she started baking at 14 and launched her own cloud kitchen by 18. With a flair for fusing tradition and innovation, Radhika transforms classics like egg curry, dahi bhalla, and lamb chops into stunning vegetarian and vegan reinterpretations. Her accolades include 1st Place at Zaika Chef's Competition and the Bhartiyan Master Kitchener Award 2025. A finalist in India Ka Homechef 2.0, she teaches, films, and creates with one mission - prove that plant-based food can be daring, delicious, and unforgettable.",
      },
    },
    {
      id: 5,
      participant1: {
        name: "Anamika Arya",
        img: "/pp/Anamika Arya.png",
        text: "From teacher to culinary trailblazer, Anamika Arya's journey began in Jharkhand and found purpose in New Delhi. In 2020, during the COVID crisis, she launched her cloud kitchen by delivering meals to patients - a turning point that transformed her passion into a profession. Known for her innovative twists on desserts, cakes, and traditional Indian dishes, Anamika now runs a thriving home bakery. She's a finalist in Kitchen of Flavours and Khana Khazana 2024, a runner-up in national BBQ contests, and recipient of honors like the Ananya Gaurav Shree and Womennovator WePitch Delhi. Her long-term vision - to build a restaurant-cum-cooking school that empowers aspiring culinary talents who lack resources.",
      },
      participant2: {
        name: "Tanu Mittal",
        img: "/pp/Tanu Mittall.png",
        text: "A passionate home chef from Meerut, Tanu Mittal has transformed her lifelong love for cooking into a decorated culinary journey. Inspired by her mother's kitchen, she mastered traditional recipes early and built on them through bold experimentation. Her talent has earned her titles like Winner of Battle of Homechefs 2024, India Ka Homechef (Delhi), and multiple wins in contests by Catch, Maggi, and the Delhi Government. Tanu's recipes have been published in the Chef's Secret Book, and she's been named Chef of the Month by Meerut's FNS Club. At the Agropure Culinary League, she brings grit, flavor, and the art of turning humble ingredients into champions.",
      },
    },
    {
      id: 6,
      participant1: {
        name: "Neha Gupta",
        img: "/pp/Neha Gupta.png",
        text: "From teacher to baker, Neha Gupta has transformed passion into a profession with NK Cakes, her home-baking venture based in New Delhi. Over the last 5 years, she has specialized in egg-free baking, earning an advanced certificate from IBCA and accolades across national-level contests. She's a category winner at the Bakersville India Live Contest, a standout participant in Slurrp's Great Indian Cookout and Debut Dish Challenge, and has represented her craft live at the Amul booth during AAHAR 2025. Her recipe has been featured by USHA Webstories, and she was recently honored with the BMK Trailblazer of Homebaking Award 2025. Neha brings precision, creativity, and a teacher's discipline to every bake.",
      },
      participant2: {
        name: "Swati Babbar Dang",
        img: "/pp/Swati Babbar.png",
        text: "A passionate baker and content creator from New Delhi, Swati Babbar Dang runs a thriving home bakery and shares her culinary creativity through her YouTube channel. With 3+ years of baking experience, she brings artistic flair to cake design and everyday cooking. Swati has been a contestant in India Ka Homechef (both editions), a regular face on Amul Facebook Live, and a winner in multiple contests including Catch's Holi Special and Foodie Friends. Her recipes have been featured in Amar Ujala and the Slurrp App's Cooking Story. With her unique blend of content creation and craft baking, Swati adds flavor, joy, and celebration to every plate she prepares.",
      },
    },
    {
      id: 7,
      participant1: {
        name: "Payal Gupta",
        img: "/pp/Payal Gupta.png",
        text: "Founder of CakeBites by Payal, Payal Gupta is a seasoned home baker and entrepreneur from New Delhi with over 7 years of experience in bespoke baking. Backed by a B.Tech, MBA, and professional training from Delhi Bakery School, she leads her brand with a rare blend of artistry and business acumen. Payal has earned 1st positions in competitions like Dress the Cake by Tedco Academy, Bento Cake Contest by Sangeeta's Kitchen Mantra, and Cake Decorating by Mala's Fruit. Her creations have been featured at Aahar 2024 & 2025, and she's a ChocoCraft Excellence Award recipient. She's also collaborated with Confect (Shark Tank-funded) and content creators like Nishu Tripathi. Currently a board member of Rising Cake Star of India, Payal continues to inspire with innovation and elegance - one slice at a time.",
      },
      participant2: {
        name: "Monika Goel",
        img: "/pp/Monika Goel.png",
        text: "Founder of Connection Over Food, Monika Goel is a Delhi-based home baker who crafts 100% vegetarian baked goods with a mission - turn everyday moments into heartfelt memories. Through her initiative, she has created a space where food becomes a medium of comfort, bonding, and joy. Monika's culinary journey spans live cooking sessions with Healux, Amul, Catch Masale, and Kitchen of Flavors. She's a winner at the Aahar 2025 Catch Booth Contest, and has earned recognition from Tedco Academy and Foodie Cheers Club. Her collaboration with Confect (Shark Tank-funded) further reflects her growing influence. With a strong YouTube presence and years of community engagement, Monika brings both soul and skill to the Culinary League stage.",
      },
    },
    {
      id: 8,
      participant1: {
        name: "Priya Verma",
        img: "/pp/Priya.png",
        text: "Priya Verma is a celebrated home baker and dessert innovator from New Delhi, with over a decade of experience turning passion into mastery. From winning Pacific Mall Star Chef Season 1 to being honored as a 'Chocolate Master Artist' by Chef Philippe Agnese at IBCA, her journey has been marked by technical finesse and artistic flair. She has collaborated with brands like Amul, Asahi Kasei, Catch Spices, and Galaxy Basmati Rice, and earned accolades in competitions such as Cornitos Masterchef, CTU Super Chef, and Noida Super Chef. A frequent face on culinary shows, her work has been praised by MasterChef icons and TV celebrities alike. At the Agropure Culinary League, Priya brings a legacy of excellence rooted in innovation and grace.",
      },
      participant2: {
        name: "Ritika Garg Bansal",
        img: "/pp/Ritika Garg.png",
        text: "A rising culinary star from Kurukshetra, Ritika Garg Bansal brings a track record of excellence, creativity, and media recognition. With 10+ major competition accolades - including 1st Runner-Up at Kitchen Ka Dangal (Noida), Best Chocolate Artist by Chef Kavita Singh, and SHEROES Award by Radio City - she stands out for her flair in both presentation and flavor. Ritika reached the third audition round of MasterChef India and has been repeatedly praised by Chef Ranveer Brar. Her digital journey includes brand collaborations with Tropolite, Galaxy Basmati Rice, and a thriving YouTube channel with 10K+ subscribers. She's not just competing - she's building a legacy of innovation and visibility in homegrown Indian cuisine.",
      },
    },
  ];

const ParticipantInfo = ({ participant }: { participant: Participant }) => {
  return (
    <div className="relative aspect-square overflow-hidden shadow-lg">
      <img
        src={participant.img}
        className="w-full h-full object-cover bg-gradient-to-b from-primary to-background"
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
