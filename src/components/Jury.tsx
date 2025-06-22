'use client'
import React from 'react'
import JuryCard from './JuryCard'

const Jury = () => {
  const jury = [
    {
      "name": "Balendra Singh",
      "img": "/judge1.png",
      "text": "Dr. Balendra Singh is director at Institute of Bakery &amp; Culinary Arts New Delhi. He established the institute to offer education based on his experience in hospitality industry as one of the leading pastry chef for aspiring professionals interested to make career in Bakery &amp; Pastry. He has a flair for innovation with expertise in international pastry cuisine. He studied at The IHM Dehradun with a focus on bakery and confectionery. Later he garnered over 20 years of experience at major hotels like Umaid Bhawan Palace Jodhpur, Grand Hyatt New Delhi, Westin Gurgaon, JW Marriott New Delhi, Pullman, Novotel New Delhi, The Taj Mahal New Delhi &amp; cruise ships around the world, where he honed his skills to international level. <br> He gained wide knowledge in casual &amp; fine dining, a-la-carte, buffet &amp; banquet and pastry verticals of foodservice industry. As a culinary educator, he focus on skill based education ensuring students a good career."
    },

    {
      "name": "Kazem Samandari",
      "img": "/1.png",
      "text": "Kazem Samandari holds a Ph.D. in Industrial Economy, an MS in Electrical Engineering, and a Business Degree from the Swiss Federal Institute of Technology in Zurich, Switzerland. With over 45 years of professional and entrepreneurial experience, he has been a pivotal figure in the global high-tech industry. Kazem has spearheaded six startups and worked across more than 60 countries on all continents. His extensive executive experience includes key positions at GMC Digital Printing Systems, Scitex Digital Printing, Inc., Kodak Versamark Inc., and Given Imaging Ltd. In 2014, Kazem founded KCSH & Associates in Singapore, specializing in assisting young high-tech companies to find business partners in Asia and expand their activities in the region. He also serves as the President of Terra Firma International. Kazem co-founded L’Opéra (French Bakery Pvt. Ltd.) and has served as its Executive Chairman since its inception in 2008. More recently, in 2022, he co-founded the Trajectories of Hope Foundation, dedicated to society-building endeavors. Kazem’s career has been marked by professional exposure to various cultures and traditions worldwide, enriching his global perspective and professional approach. In 2015, he was honored by the French Government with the prestigious title of Knight in the National Order of Merit (Chevalier de l’Ordre national du Mérite)."
    },
    // {
    //   "name": "Eureka Araujo",
    //   "img": "/judge2.png",
    //   "text" : "Born in Mumbai &amp; grown up in Goa, Chef Eureka graduated in 2012 from the Institute of Hotel Management, Catering Technology &amp; Applied Nutrition, Goa. Later in 2014 she did her Taj Management Training Program, a Training program by the Taj group of hotels that is comparable to an MBA in Hospitality Food Production that moulds young chefs into future inspiring professionals.  Thereafter she worked at the Umaid Bhawan Palace as Senior Chef-De-Partie Bakery, Patisserie &amp; Confectionery, for 2 years during 2014-16. Chef Eureka joined the Academy of Pastry &amp; Culinary Arts (APCA) in 2016 as a Pastry Chef Instructor and went on to be promoted as the Executive Pastry Chef at the Mumbai Centre. <br/> She represented India at the ‘World Pastry Queen’ championship in Rimini Italy in 2018, through a direct entry by winning Gold at the ‘India Pastry Queen’ competition in 2017. Her candidature was sponsored by Academy of Pastry &amp; Culinary Arts (APCA). She also represented India in 2017 as the coach/judge of team India&#39;s Junior team championship in Rimini Italy.<br/> After leaving APCA in 2022 Chef Eureka started SIVAKO. As the Creative Director at Sivako, a french patisserie cloud kitchen in Mumbai, her mission was to develop people for the best in French pastry by creating  masterpieces through sight &amp; taste. <br/> Later she once again got the chance to represent India by becoming ‘India Pastry Queen’ at the ‘World Pastry Queen’ championship in 2023, where she won the Bronze Medal, among the best from around the world. During her tenure at APCA Chef Eureka got the opportunity to learn from multiple master chefs from around the world including Chef Johan Martin, Chef Jean Francois Arnald, Chef Amaury Guichon, Chef Wei Loon Tan, Chef Christophe Morel, and Chef Emmanuele Forcone to name few. She participated in various workshops on Sugar Display, Chocolate &amp; Pralines, Viennoiserie &amp; Tarts and modern French Pastries to further hone up her skills."
    // },
    {
      "name": "Parvinder Singh",
      "img": "/judge4.png",
      "text": "Chef Parvinder Singh Bali is a distinguished culinary professional who spent 3 decades at Oberoi Hotels, renowned for his exceptional expertise and innovative approach to gastronomy. With a career spanning over three decades, Chef Bali has honed his skills in various prestigious kitchens around the world. At Oberoi Centre for Learning and Development, he has played a pivotal role in elevating culinary standards, blending traditional techniques with contemporary flair. His passion for teaching and mentoring aspiring chefs is evident through his contributions to culinary education. Chef Bali's dedication to excellence and creativity has earned him a revered place in the culinary industry. Dr. Chef Bali is now set to open his Culinary and pastry school named School for European Pastry and Culinary Arts in Gurugram in September 2024"
    }
  ]


  return (
    <div className='w-full pt-10 pb-20' id='Jury'>
      <h2 className='z-20 mx-auto text-5xl md:text-7xl mb-4  mt-10 text-center heading '>Our Jury</h2>


      <div className='md:mx-24 mx-10 mt-10 grid grid-cols-1 md:grid-cols-3 gap-10'>

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