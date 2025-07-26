'use client'
import React from 'react'
import JuryCard from './JuryCard'

const Jury = () => {
  const jury = [
    
    {
      "name": "Chef Shailendra Singh",
      "img": "/judges/1.png",
      "text": "Chef Shailendra Singh brings a visionary approach to Indian hospitality, with a legacy built across global kitchens and luxury hotel chains. From pioneering regional cuisine at Sheraton and Hyatt to leading high-impact culinary transformations at Pride Hotels, he merges tradition with trend. Currently serving as Corporate Chef at Pride Hotels, his expertise spans large-scale pre-openings, concept creation, and team mentorship. He’s judged prestigious competitions like ICF, THSC, and IFCA, and is widely recognized for shaping India’s culinary narrative. A frequent guest speaker and media contributor, Chef Shailendra’s accolades include “Corporate Chef – Hotels” 2025 and leadership roles in award-winning dining ventures across continents."
    },
  

    {
      "name": "Chef Virender S. Datta (Chief Jury)",
      "img": "/judges/2.png",
      "class": "flex-row-reverse",
      "text": "Chef Virender S. Datta, Founder & Chairman of IICA, is a revered figure in India’s hospitality sector with over 50 years of distinguished service. A graduate of the Hotel Catering Institute of India and OCLD, he has held key positions including Executive Chef, General Manager, VP–ITC Hotels, and Founder President of Fortune Park Hotels. Honoured with multiple Hall of Fame inductions and Lifetime Achievement Awards, he has shaped industry standards and culinary education. As Chairman of the NCHM Core Group and Board Member at IHM Pusa, his enduring legacy continues to influence generations of hospitality professionals."
    },
    // {
    //   "name": "Eureka Araujo",
    //   "img": "/judge2.png",
    //   "text" : "Born in Mumbai &amp; grown up in Goa, Chef Eureka graduated in 2012 from the Institute of Hotel Management, Catering Technology &amp; Applied Nutrition, Goa. Later in 2014 she did her Taj Management Training Program, a Training program by the Taj group of hotels that is comparable to an MBA in Hospitality Food Production that moulds young chefs into future inspiring professionals.  Thereafter she worked at the Umaid Bhawan Palace as Senior Chef-De-Partie Bakery, Patisserie &amp; Confectionery, for 2 years during 2014-16. Chef Eureka joined the Academy of Pastry &amp; Culinary Arts (APCA) in 2016 as a Pastry Chef Instructor and went on to be promoted as the Executive Pastry Chef at the Mumbai Centre. <br/> She represented India at the ‘World Pastry Queen’ championship in Rimini Italy in 2018, through a direct entry by winning Gold at the ‘India Pastry Queen’ competition in 2017. Her candidature was sponsored by Academy of Pastry &amp; Culinary Arts (APCA). She also represented India in 2017 as the coach/judge of team India&#39;s Junior team championship in Rimini Italy.<br/> After leaving APCA in 2022 Chef Eureka started SIVAKO. As the Creative Director at Sivako, a french patisserie cloud kitchen in Mumbai, her mission was to develop people for the best in French pastry by creating  masterpieces through sight &amp; taste. <br/> Later she once again got the chance to represent India by becoming ‘India Pastry Queen’ at the ‘World Pastry Queen’ championship in 2023, where she won the Bronze Medal, among the best from around the world. During her tenure at APCA Chef Eureka got the opportunity to learn from multiple master chefs from around the world including Chef Johan Martin, Chef Jean Francois Arnald, Chef Amaury Guichon, Chef Wei Loon Tan, Chef Christophe Morel, and Chef Emmanuele Forcone to name few. She participated in various workshops on Sugar Display, Chocolate &amp; Pralines, Viennoiserie &amp; Tarts and modern French Pastries to further hone up her skills."
    // },
    {
      "name": "Chef Anuraag Narsingani",
      "img": "/judges/3.png",
      "text": "Chef Anuraag Narsingani, Director of Culinary at JW Marriott New Delhi Aerocity, brings over two decades of experience across The Oberoi Group, Carnival Cruise Liner, and Encalm Hospitality. An IHM Mumbai alumnus and ‘Chef of the Year’ (BW Hotelier 2020, Hotelier India 2019), he blends global inspiration with ethical, sustainable practices. At JW Marriott, he’s redefining luxury dining through innovative menus, strategic marketing, and a deep connection with guests and teams. His leadership ensures exceptional food, flawless kitchen operations, and an elevated gastronomic experience that sets new industry benchmarks."
    },
    {
      "name": "Balendra Singh",
      "img": "/judges/judge1.png",
      "class": "flex-row-reverse",
      "text" : "Dr. Balendra Singh is director at Institute of Bakery &amp; Culinary Arts New Delhi. He established the institute to offer education based on his experience in hospitality industry as one of the leading pastry chef for aspiring professionals interested to make career in Bakery &amp; Pastry. He has a flair for innovation with expertise in international pastry cuisine. He studied at The IHM Dehradun with a focus on bakery and confectionery. Later he garnered over 20 years of experience at major hotels like Umaid Bhawan Palace Jodhpur, Grand Hyatt New Delhi, Westin Gurgaon, JW Marriott New Delhi, Pullman, Novotel New Delhi, The Taj Mahal New Delhi &amp; cruise ships around the world, where he honed his skills to international level. <br> He gained wide knowledge in casual &amp; fine dining, a-la-carte, buffet &amp; banquet and pastry verticals of foodservice industry. As a culinary educator, he focus on skill based education ensuring students a good career."
    },
  ]


  return (
    <div className='w-full pt-10 pb-20' id='Jury'>
      <h2 className='z-20 mx-auto text-5xl md:text-7xl mb-4  mt-10 text-center heading '>Our Jury</h2>


      <div className='md:mx-24 mx-10 mt-10 grid grid-cols-1 gap-10'>

        {
          jury.map((item) => (
            <JuryCard key={item.img} {...item} />
          ))

        }
      </div>
    </div>

  )
}

export default Jury