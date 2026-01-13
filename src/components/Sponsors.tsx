import React from 'react'
import Organizer from './Organizer'

const Sponsors = () => {

  const sponsors = [
    {
      "img": "/agropure.png",
      "link": "https://agropure.net/",
      "mini" : "Agropure (GPA Capital Foods Pvt. Ltd.) is a trusted leader in India’s food staples sector, renowned for its superior-quality besan. Made from 100% pure chana dal and processed with precision.",
      "text": "Agropure (GPA Capital Foods Pvt. Ltd.) is a trusted leader in India’s food staples sector, renowned for its superior-quality besan. Made from 100% pure chana dal and processed with precision, Agropure Besan is prized for its fine texture, freshness, and performance in both traditional and contemporary kitchens. With a legacy spanning 50+ years and a diverse product range including dals, maida, sooji, dalia, and premium rice, Agropure serves millions across households and commercial food businesses. Its 800 MT daily milling capacity reflects both scale and consistency. MD & Chairman Shri Ghanshyam Dass Goyal received the Dal Udyog Shree Award at the 2026 Pulses Conclave - a testament to the company’s impact and commitment to quality. As a proud supporter of the Battle of Besan at the Culinary League, Agropure aims to spotlight the versatility of besan and inspire chefs to reimagine its potential in modern Indian cuisine."
    },
    // {
    //   "img": "/sponsors/dkg.png",
    //   "link": "https://dkgspl.co/",
    //   "mini": "DKG Sales Private Limited is a premier Delhi-based manufacturing company catering to the Indian hotel and restaurant industry.",
    //   "text": "DKG Sales Private Limited*, established in 1987 by Dilip Kumar Gandhi, is a premier Delhi-based manufacturing company catering to the Indian hotel and restaurant industry. Specializing in high-quality cutlery, crockery, glassware, and kitchen equipment, DKG meets the unique needs of chefs. Their state-of-the-art facility ensures premium quality, innovation, and client-centric solutions, helping chefs create exceptional culinary experiences."
    // },
    // {
    //   "img": "/sponsors/verpaco.png",
    //   "link": "https://www.amverpaco.com",
    //   "mini": "Andy Mannhart Verpaco India Pvt. Ltd., a joint venture between the erstwhile Andy Mannhart AG Switzerland and Verpaco India, was established in 1990.",
    //   "text": "Andy Mannhart Verpaco India Pvt. Ltd., a joint venture between the erstwhile Andy Mannhart AG Switzerland and Verpaco India, was established in 1990. The company has built a reputation for offering one of the most comprehensive portfolios of professional kitchen, buffet, and bakery equipment, along with complete tabletop solutions including high-quality cutlery, crockery, and glassware. With over 30 years of experience and a product range exceeding 15,000 items, Andy Mannhart Verpaco has successfully equipped more than 100 hotel projects across India."
    // },
    // {
    //   "img": "/sponsors/5.png",
    //   "link": "https://www.pi-india.com/",
    //   "mini": "Products & Ideas proudly support the Pastry and Bakery Industry with top-tier equipment from esteemed international brands...",
    //   "text": "Founded in 2009, Products & Ideas (India) Private Limited is a premier importer of commercial kitchen and bakery equipment in India. We proudly support the Pastry and Bakery Industry with top-tier equipment from esteemed international brands, ensuring exceptional quality and service. We offer premium quality products that meet high standards, providing a diverse range of commercial kitchen equipment including ovens, mixers, and table top refrigeration units. Our products boast superior shelf life and require minimal repairs, ensuring efficiency and reliability. We deal with renowned brands like SPAR, Stella, Ace Plus, Merrychef, Convotherm, Lincoln, Rowzer Plus, JTC, My Cook, Ideal, ITV, Antunes, and many more. Committed to innovation and excellence, Products & Ideas (India) Private Limited helps commercial kitchens and bakeries operate smoothly, ensuring success and satisfaction for hotels, restaurants, caterers, and more."
    // },
    {
      "img": "/sponsors/1.png",
      "link": "https://www.modequipment.com/",
      "mini": "MOD Kitchen Equipment Pvt. Ltd., known as MOD, is a leading provider of complete commercial kitchen and catering equipment solutions. Based in New Delhi, India, MOD specializes in turnkey kitchen projects, serving various industries.",
      "text": "MOD Kitchen Equipment Pvt. Ltd., known as MOD, is a leading provider of complete commercial kitchen and catering equipment solutions. Based in New Delhi, India, MOD specializes in turnkey kitchen projects, serving various industries.\n MOD is a trusted supplier of bakery and catering equipment to internationally acclaimed hotels, bakeries, coffee outlets, restaurants, educational institutions, and industrial units across the country. With a focus on quality and functionality, MOD delivers top-notch products and services to meet the diverse needs of its clients.\n MOD is a major sales and service provider in India for OZTI, a renowned commercial kitchen equipment brand from Turkey. With a ready stock of spare parts, MOD ensures prompt support for customer requirements.\n With expertise in manufacturing and importing commercial kitchen equipment, MOD's design team meticulously plans and designs layouts to optimize space utilization and facilitate smooth operations. \nMOD Kitchen Equipment Pvt. Ltd. is dedicated to customer satisfaction and has earned a reputation for excellence. Their commitment to delivering high-quality products, reliable services, and innovative solutions has made them a trusted name in the industry.\nMOD's expertise, strong industry relationships, and customer-centric approach position them as a reliable one-stop solution for all commercial kitchen and catering equipment needs."
    },
    {
      "img": "/sponsors/euro.png",
      "link": "https://eurofoods.co.in",
      "mini": "Millac proudly joins hands as the Title Sponsor for the Junior Pastry Indian Cup 2025, reaffirming its commitment to nurturing the next generation of pastry talent in India.",
      "text": "Millac proudly joins hands as the Title Sponsor for the Junior Pastry Indian Cup 2025, reaffirming its commitment to nurturing the next generation of pastry talent in India. This strategic partnership is closely aligned with Millac’s mission to support excellence in modern professional kitchens by providing high-performance, reliable ingredients like Millac Gold — a versatile cream crafted for superior results in whipping, cooking, and pouring. Imported and distributed in India by Euro Foods, Millac Gold reflects a global standard of quality tailored for the demands of Indian chefs, bakers, and foodservice professionals. Through this association, Millac aims to inspire young pastry chefs to innovate with confidence, promote skill-building and creativity, and demonstrate the functional versatility of Millac Gold in high-pressure, real-world kitchen environments. By championing this prestigious platform, Millac not only celebrates emerging culinary craftsmanship but also reinforces its position as a trusted ally to the food and hospitality industry across the country."
    },
    // {
    //   "img": "/sponsors/2.png",
    //   "link": "http://ransindia.com/",
    //   "mini": "With 27 years of industry experience, RANS Technocrats is a renowned Indian company specializing in the manufacturing of kitchen equipment for the foodservice industry. Their commitment to advanced technology has made them a trusted choice for hotels and restaurants throughout India.",
    //   "text": "With 27 years of industry experience, RANS Technocrats is a renowned Indian company specializing in the manufacturing of kitchen equipment for the foodservice industry. Their commitment to advanced technology and innovative products has made them a trusted choice for hotels and restaurants throughout India.\nRANS Technocrats serves customers nationwide, providing dedicated service and support. They pride themselves on their state-of-the-art machinery and a strong emphasis on quality, ensuring that their equipment meets international standards.\nTo offer a comprehensive range of kitchen equipment, RANS Technocrats has developed specialized brands. ULTIMATE, one of their brands, offers a wide selection of baking ovens, salamanders, and pizza ovens. ICEDEN, another brand, focuses on commercial refrigeration equipment such as display counters, deep freezers, under-counter refrigerators, and freezers.\nGRATEINOX, their specialized brand, specializes in high-quality stainless steel kitchen floor gratings. Leveraging their expertise in sheet metal fabrication, RANS Technocrats also offers a diverse range of customized commercial kitchen equipment under the RANS brand.\nAs a leading manufacturer in India, RANS Technocrats is recognized for their commitment to delivering high-quality products and excellent service to customers nationwide."
    // },
    // {
    //   "img": "/sponsors/wc.png",
    //   "link": "https://www.windsorchocolatier.com/",
    //   "mini": "Windsor Chocolatier has emerged as a pioneer in India's premium chocolate segment, crafting artisanal products from bean to bar.",
    //   "text": "Windsor Chocolatier has emerged as a pioneer in India's premium chocolate segment, crafting artisanal products from bean to bar. With its roots in Gurugram, the brand has become synonymous with quality, innovation, and refined taste. It has served discerning clients across hospitality and events, delivering bespoke chocolate creations that blend tradition with modern craftsmanship."
    // },
    // {
    //   "img": "/sponsors/eurofoods.jpg",
    //   "link": "https://eurofoods.co.in/import/",
    //   "mini": "Euro Foods is a premier importer and distributor in India, dedicated to providing top-quality products to its esteemed clientele, including 5-star hotels, retail chains, caterers, and bakeries.",
    //   "text": "Euro Foods Pvt Ltd is a premier importer and distributor in India, dedicated to providing top-quality products to its esteemed clientele, including 5-star hotels, fine dining restaurants, retail chains, caterers, and bakeries. Specializing in a diverse range of offerings, Euro Foods proudly supplies chocolates, bread pre-mixes, frozen fruits and fillings, bar syrups, and Canned product etc. Committed to excellence, Euro Foods ensures that each product meets the highest standards of quality and taste. With a focus on delivering premium ingredients, Euro Foods enables culinary enthusiasts across India to elevate their creations to unparalleled heights."
    // },

    {
      "img": "/sponsors/3.png",
      "link": "https://www.chefibpa.com",
      "mini": "IBCA is one of the topmost learning centre in the capital of India as an impeccable platform to nurture future professionals in this artistic field of Bakery and Culinary Arts.",
      "text": "IBCA has become an excellent platform for newbies to learn and master the field of Bakery and Culinary Arts in their sophisticated courses. All courses have a standard curriculum to give students guidance in various methods, processes, preparations, and building recipes from scratch. We turn newcomers with little or no experience in Bakery and Culinary Arts into dedicated professionals ready to compete in the demanding world of building their careers. IBCA offers them all the resources they need to advance their amateur careers while receiving professional guidance. Over the years, IBCA has earned one of the top names as bakery institute in Delhi & culinary institute in Delhi. Last few years, people have joined our bakery classes in India from different parts of the world and states of India, establishing us as a prestigious bakery & Culinary Institute in India. All these joinings happened based on our student performance on the International level and our placement records across the world."
    },
    {
      "img": "/sponsors/monin.png",
      "link": "https://monin.in/",
      "mini": "With a legacy of over 100 years, Monin is a global leader in premium syrups, fruit mixes, sauces, and beverage solutions. In India, Monin inspires creativity behind the bar and in the kitchen",
      "text": "With a legacy of over 100 years, Monin is a global leader in premium syrups, fruit mixes, sauces, and beverage solutions. In India, Monin inspires creativity behind the bar and in the kitchen, empowering chefs and mixologists with world-class flavors. We are proud to support platforms that nurture young culinary talent and celebrate innovation."
    },
    {
      "img": "/sponsors/butler.png",
      "link": "https://www.thebutlermart.com/",
      "mini": "Established in 1997 in Delhi, The Butler Hotel Supermarket is a premier supplier of professional bakery and hospitality equipment.",
      "text": "Established in 1997 in Delhi, The Butler Hotel Supermarket is a premier supplier of professional bakery and hospitality equipment. Offering tools from Pavoni, Chocolate World and others—from bakeware to buffet ware, chocolate tempering machines, display stands, and packaging—it serves top institutions like Taj, Marriott, Oberoi and ITC. A reliable partner for pastry professionals."
    },
    {
      "img": "/sponsors/lots.png",
      "mini": "With 30+ years of B2B experience in Thailand, LOTS Wholesale Solutions entered India to meet the evolving needs of its business customers, offering 4000+ products in Delhi NCR at wholesale prices.",
      "text": "With 30+ years of B2B experience in Thailand, LOTS Wholesale Solutions entered India to meet the evolving needs of its business customers, offering 4000+ products in Delhi NCR at wholesale prices. We cater to HoReCa and other businesses with fresh produce, frozen food, bakery ingredients, dairy, kitchenware, office supplies, and more.",
      "appLinks": {
        "android": "https://play.google.com/store/apps/details?id=com.ocsindiareactnative",
        "ios": "https://apps.apple.com/in/app/lots-wholesale-b2b-shopping/id1532881194"
      }
    }
  ]
  return (
    <div
      id="Sponsors"
      className="flex items-center flex-col mt-5 font-mon py-10"
    >
      <h1 className=" text-5xl md:text-7xl mb-4 heading">
        SPONSORS
      </h1>
      <div className="sm:grid sm:grid-cols-3 md:mx-24 mx-10 m-auto gap-4 md:gap-8 z-40 ">
        {sponsors.map((item: any) => (
          <Organizer key={item.img} {...item} />
        ))}
        {/* <Organizer/> */}
      </div>
    </div>
  )
}

export default Sponsors