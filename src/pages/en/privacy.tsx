import Navbar from "@/components/Layout/Navbar";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import FeaturesSlider from "@/components/featuresslider";
import Footer from "@/components/Layout/Footer";
import TrustBadges from "@/components/trustbadges";
import FAQ from "@/components/faq";
import Why from "@/components/why";
import TieredSystem from "@/components/tieredsystem";
import About from "@/components/about";
import Free from "@/components/free";
import ClassContent from "@/components/classcontent";
import Articles from "@/components/articles";
import Calls from "@/components/calls";
import Contents from "@/components/contents";
import { Element } from "react-scroll";

export default function Privacy() {
  return (
    <main style={{background: "linear-gradient(338deg, rgba(3,2,32,1) 0%, rgba(30,12,119,1) 49%, rgba(8,5,82,1) 100%)"}}>
      <Navbar />
      <section className="py-[150px] pt-[250px]">
        <div className="w-[90%] mx-auto max-w-[800px]">
          <h1 className="text-[50px] font-[700] mb-[100px]">Privacy policy</h1>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">In general</h1>
            <p className="text-[18px]">
            Personal data is any kind of information that can be attributed to you to one extent or another. When you use our website, we collect and process a number of such information. This happens, for example, when you access content, sign up for our newsletter, participate in competitions or surveys, register as a user or subscriber, use other services or make bookings/purchases via the website. 

We typically collect and process the following types of information: A unique ID and technical information about your computer, tablet or mobile phone, your IP number, geographical location, and which pages you click on (interests). To the extent that you explicitly consent to this and enter the information yourself, we also process Name, phone number, e-mail, address and payment information. This will typically be in connection with creating a login or making a purchase.

            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Security</h1>
            <p className="text-[18px]">
            We have taken technical and organizational measures to prevent your information from being accidentally or illegally deleted, published, lost, impaired or disclosed to unauthorized persons, misused or otherwise processed in violation of the law.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Purpose</h1>
            <p className="text-[18px]">
            The information is used to identify you as a user and show you the ads that are most likely to be relevant to you, to register your purchases and payments, and to provide the services you have requested, such as sending a newsletter. In addition, we use the following to optimize our service. 
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Period of storage
            </h1>
            <p className="text-[18px]">
            The data is stored for the period permitted by law and we delete it when it is no longer needed. The period depends on the nature of the data and the reason for storage. It is therefore not possible to specify a general time frame for when information is deleted.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Disclosure of informations
            </h1>
            <p className="text-[18px]">
            Data about your use of the website, which ads you receive and possibly click on, geographic location, gender and age segment, etc. is disclosed to third parties to the extent that this information is known. You can see which third parties are involved in the section on "Cookies" above. The information is used for targeting advertising. We also use a number of third parties to store and process data. They only process data on our behalf and may not use it for their own purposes. Disclosure of personal data such as name and e-mail etc. will only take place if you consent to it. We only use data processors in the EU or in countries that can provide adequate protection for your data.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
            General terms and conditions
            </h1>
            <p className="text-[18px]">
            Your registration in any context under our domain is subject to these terms. You agree that OCMA masterclass is allowed to send marketing related emails, calls/text(s) to you if they feel it is relevant. In addition, you agree that you are over 18 years of age when you register under our domain.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}