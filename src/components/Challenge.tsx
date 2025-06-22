"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const Challenge = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <div className="md:mx-24 mx-5">
        {/* Part 1: The Hook */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-2 items-center mb-16">
          <div className="p-0 rounded-lg flex items-center justify-center">
            <Image
              src="/battleOfBesan.png"
              alt="Battle of Besan Logo"
              width={800}
              height={400}
              className="rounded-md aspect-[2/1.2] object-cover "
            />
          </div>
          <div className="prose lg:prose-xl md:col-span-2">
            <h2 className="text-3xl font-bold text-amber-500">
              The Ultimate Culinary Showdown
            </h2>
            <p className="mt-4 text-lg">
              Do you have a passion for flavor and innovation? The AgroPure
              Culinary League at IHE Expo 2025 offers home chefs a unique
              chance to showcase their skills.
            </p>
            <p className="mt-2">
              Transform humble besan (chickpea/gram flour) into exquisite
              gourmet dishes in a nationwide challenge. Break tradition, win
              big, and let your kitchen story become the next national
              sensation.
            </p>
            <p className="font-semibold text-amber-500 mt-4">
              Elevate Besan, Elevate Your Story!
            </p>
          </div>
        </div>

        {/* Part 2: The Interactive Details */}
        <Tabs defaultValue="challenge" orientation="vertical" className="flex flex-col md:flex-row gap-8">
          <TabsList className="flex flex-row max-md:flex-wrap md:flex-col justify-start items-start md:w-1/4 bg-transparent p-0 border-none max-md:mb-12">
            <TabsTrigger value="challenge" className=" md:w-full md:justify-start rounded-lg text-lg font-medium text-muted-foreground data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200">The Challenge</TabsTrigger>
            <TabsTrigger value="criteria" className=" md:w-full md:justify-start rounded-lg text-lg font-medium text-muted-foreground data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200">Entry Criteria</TabsTrigger>
            <TabsTrigger value="rules" className=" md:w-full md:justify-start rounded-lg text-lg font-medium text-muted-foreground data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200">Rules & Regulations</TabsTrigger>
            <TabsTrigger value="setup" className=" md:w-full md:justify-start rounded-lg text-lg font-medium text-muted-foreground data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200">Competition Setup</TabsTrigger>
            <TabsTrigger value="schedule" className=" md:w-full md:justify-start rounded-lg text-lg font-medium text-muted-foreground data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200">Schedule</TabsTrigger>
            <TabsTrigger value="objective" className=" md:w-full md:justify-start rounded-lg text-lg font-medium text-muted-foreground data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200">Objective</TabsTrigger>
          </TabsList>

          <div className="md:flex-1">
            <TabsContent value="challenge" className="bg-foreground text-background p-8 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold text-primary mb-4">Whats the Goal?</h3>
              <p className="text-lg leading-relaxed">Culinary League events for home cooks give everyday people a chance to share their skills, stories, and regional dishes. They bring forward real talent from home kitchens, making cooking more relatable and inclusive. These events create content others can try, build community through shared experiences, and give recognition to those who usually stay behind the scenes. They make food personal.</p>
            </TabsContent>
            <TabsContent value="criteria" className="bg-foreground text-background  p-8 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold text-primary mb-4">Who Can Enter?</h3>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Must be a Home Cook Indian citizen, aged 18 years or above with a passion for cooking.</li>
                <li>Contestants (Team of 2 Home cooks/chefs).</li>
                <li>Maximum of 8 team entries accepted.</li>
                <li>Contestants must be registered for the exhibition.</li>
                <li>Only registered contestants are allowed in the contest area.</li>
                <li>Registration/Participation Team fee applies.</li>
                <li className="font-bold text-primary">First Apply, First Chosen.</li>
              </ul>
            </TabsContent>
            <TabsContent value="rules" className="bg-foreground text-background p-8 rounded-2xl shadow-2xl">
                <h3 className="text-3xl font-bold text-primary mb-4">Rules & Regulations</h3>
                <p className="mt-4 text-lg">Checkout <a href="https://drive.google.com/drive/folders/1c2E6y5i5EraRXJd49rqCOeBggCXdMzYZ" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline hover:text-amber-300">here</a> for the rules and regulations.</p>
            </TabsContent>
            <TabsContent value="setup" className="bg-foreground text-background p-8 rounded-2xl shadow-2xl">
                <h3 className="text-3xl font-bold text-primary mb-4">The Arena</h3>
                <p className="text-lg leading-relaxed">The competition will feature 8 live cooking stations, properly partitioned, set within a large exhibition hall at the IHE Expo 2025. This setup ensures a professional and exciting environment for a live competition.</p>
                <p className="mt-4 text-lg">Visit <a href="https://www.ihexpo.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline hover:text-amber-300">www.ihexpo.com</a> for more details on the venue.</p>
            </TabsContent>
            <TabsContent value="schedule" className="bg-foreground text-background p-8 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold text-primary mb-4">Competition Day</h3>
              <div className="space-y-4">
                <div className="p-4 bg-foreground rounded-lg shadow-md">
                  <p className="font-bold text-lg text-primary">08:00 - 08:30 am</p>
                  <p className="text-background">Registration + Orientation</p>
                </div>
                 <div className="p-4 bg-foreground rounded-lg shadow-md">
                  <p className="font-bold text-lg text-primary">Round 1: Street food to Signature dish</p>
                  <p className="text-background">90 minutes (Judging before 10:00 am)</p>
                </div>
                <div className="p-4 bg-foreground rounded-lg shadow-md">
                  <p className="font-bold text-lg text-primary">Round 2: Global Besan Fusion</p>
                  <p className="text-background">90 minutes (Judging before 11:30 am)</p>
                </div>
                 <div className="p-4 bg-foreground rounded-lg shadow-md">
                  <p className="font-bold text-lg text-primary">Round 3: Mystery Box Showdown</p>
                  <p className="text-background">120 minutes (Judging before 1:30 pm)</p>
                </div>
                <div className="p-4 bg-foreground rounded-lg shadow-md">
                  <p className="font-bold text-lg text-primary">2:00 - 03:00 pm</p>
                  <p className="text-background">Prize Ceremony + Group Photo</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="objective" className="bg-foreground text-background p-8 rounded-2xl shadow-2xl">
              <h3 className="text-3xl font-bold text-primary mb-4">Objective</h3>
              <p className="text-lg leading-relaxed">The objective of the AgroPure Culinary League is to celebrate and showcase the creativity and passion of home bakers across India. By providing a platform for home bakers to demonstrate their culinary skills and innovative recipes, the competition aims to:</p>
              <ul className="list-disc list-inside space-y-3 text-lg">
                <li>Inspire amateur bakers to explore new techniques and elevate their baking expertise.</li>
                <li>Foster a supportive community where home bakers can learn from each other and share experiences.</li>
                <li>Encourage the use of traditional Indian ingredients and fusion baking approaches.</li>
                <li>Offer recognition and opportunities for home bakers to turn their passion into a profession.</li>
                <li>Promote healthy baking practices and sustainable ingredient choices.</li>
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Challenge; 