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
    <main className="bg-black">
      <Navbar />
      <section className="py-[150px] pt-[250px]">
        <div className="w-[90%] mx-auto max-w-[800px]">
          <h1 className="text-[50px] font-[700] mb-[100px]">
            Privacy Policy
          </h1>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">General Information</h1>
            <p className="text-[18px]">
            OCMA masterclass, located in the EU and operating within the sector "855900 Other education n.e.c.", values ​​your privacy and is committed to protecting the personal data we collect about you in accordance with applicable data protection legislation, including the General Data Protection Regulation (GDPR).            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Data Collection and Purpose</h1>
            <p className="text-[18px]">
            When you register on our website or participate in our activities, you will be asked to provide your first name, email address and telephone number. This information is collected solely for the purpose of being able to contact you and offer you relevant marketing material and information about our services. </p>         </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Consent</h1>
            <p className="text-[18px]">
            By entering your information on our registration form and checking the box "I accept", you confirm that you have read and understand this privacy policy and expressly consent to us processing your personal data for marketing purposes. You can withdraw your consent at any time by contacting us or by following the unsubscribe instructions in the communications you receive from us.</p>          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Storage and Security</h1>
            <p className="text-[18px]">
            Your personal data is stored securely in our CRM system, Leadconnector, which is hosted in the EU. We use appropriate technical and organizational security measures to protect your information from unauthorized access, alteration, disclosure or destruction.            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Disclosure of information</h1>
            <p className="text-[18px]">
            Data about your use of the website, which advertisements you receive and possibly clicks on, geographic location, gender and age segment, etc. disclosed to third parties to the extent that this information is known.

We also use a number of third parties to store and process data. These only process information on our behalf and may not use it for their own purposes.
Dissemination of personal data such as name and e-mail etc. will only happen if you consent to it. We only use data processors in the EU or in countries that can provide your information with sufficient protection.

              </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Your Rights</h1>
            <p className="text-[18px]">
            As the data controller, you have the right to request access to and correction or deletion of your personal data. You also have the right to restrict the processing of your data and to object to the processing. If you wish to exercise these rights, please contact us at the contact information provided below.            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Contact information</h1>
            <p className="text-[18px]">
            If you have questions or concerns regarding the processing of your personal data, you can contact us via:
benjamin@ocmamasterclass.com

            </p>
          </div>
          <div className="mb-[50px]">
            <h1 className="text-[30px] font-[700] mb-[20px]">Changes to the Privacy Policy</h1>
            <p className="text-[18px]">
            This Privacy Policy may be updated from time to time to reflect changes in our practices. The current version will always be available on our website.            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}