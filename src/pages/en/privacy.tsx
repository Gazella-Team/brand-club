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
              Personal information is all kinds of information that to one
              extent or another can be attributed to you. When you use our
              website, we collect and process a number of such information. This
              happens e.g. by general access to content if you sign up for our
              newsletter, participate in competitions or surveys, register as a
              user or subscriber, otherwise use services or make purchases via
              the website.<br></br>
              <br></br> We typically collect and process the following types of
              information: A unique ID and technical information about your
              computer, tablet or mobile phone, your IP number, geographic
              location, and which pages you click on (interests). To the extent
              that you give explicit consent to this and enter the information
              yourself, the following are also processed: Name, telephone
              number, e-mail, address and payment information. This will
              typically be in connection with creating a login or when making a
              purchase.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Security</h1>
            <p className="text-[18px]">
              We have taken technical and organizational measures against your
              information being accidentally or illegally deleted, published,
              lost, degraded or coming to the knowledge of unauthorized persons,
              misused or otherwise processed in violation of the law.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Purpose</h1>
            <p className="text-[18px]">
              The information is used to identify you as a user and show you the
              ads that are most likely to be relevant to you, to register your
              purchases and payments, and to be able to provide the services you
              have requested, such as e.g. to send a newsletter. In addition, we
              use the information to optimize our services and content. Period
              of storage The information is kept for the period of time
              permitted by law and we delete it when it is no longer necessary.
              The period depends on the nature of the information and the
              background for storage. It is therefore not possible to specify a
              general time frame for when information is deleted.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Period of storage
            </h1>
            <p className="text-[18px]">
              The information is kept for the period of time permitted by law
              and we delete it when it is no longer necessary. The period
              depends on the nature of the information and the background for
              storage. It is therefore not possible to specify a general time
              frame for when information is deleted.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Disclosure of informations
            </h1>
            <p className="text-[18px]">
              Data about your use of the website, which advertisements you
              receive and possibly clicks on, geographic location, gender and
              age segment, etc. disclosed to third parties to the extent that
              this information is known. You can see which third parties are
              involved in the section on "Cookies" above. The information is
              used for advertising targeting. We also use a number of third
              parties to store and process data. These only process information
              on our behalf and may not use it for their own purposes.
              Dissemination of personal data such as name and e-mail etc. will
              only happen if you consent to it. We only use data processors in
              the EU or in countries that can provide your information with
              sufficient protection.
            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">
              Insights and complaints
            </h1>
            <p className="text-[18px]">
              We can store and retain your data for up to 5 years after your
              purchase in accordance with the Bookkeeping Act, which requires
              the retention of documents for up to 5 years. You have the right
              to be informed about which personal data we process about you. You
              can also object to the use of information at any time. If the
              information processed about you is incorrect, you have the right
              to have it corrected. Inquiries about this can be made to:
              Benjamin@organicmasterclass.com. If you want to complain about our
              processing of your personal data, you also have the option of
              contacting the Danish Data Protection Authority.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}