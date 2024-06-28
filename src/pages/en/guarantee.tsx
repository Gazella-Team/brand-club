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

export default function Guarantee() {
  return (
    <main className="bg-black">
      <Navbar />
      <section className="py-[150px] pt-[250px]">
        <div className="w-[90%] mx-auto max-w-[800px]">
          <h1 className="text-[50px] font-[700] mb-[30px]">Guarantee</h1>
          <p className="mb-[40px] text-[18px]">
            We at organic masterclass focus on differentiating ourselves and
            being transparent, which is why we have chosen to give you all your
            money back if you do not close your first paying customer after 180
            days in our masterclass<br></br>
            <br></br>This guarantee is offered as we are very proud of our
            product, we all know everybody will be successful with this
            masterclass if they put in the work. We have this guarantee because
            we want to ensure the success of each student.
            <br></br>
            <br></br>If you have used the guarantee once, you are still welcome
            to participate in our masterclass at a later date. However, the new
            price will apply if it has increased in the meantime. When you
            choose to participate in our masterclass again after using the
            guarantee, any kind of additional guarantee is waived when
            purchasing an organic masterclass.
            <br></br>
            <br></br>
            If you wish to make use of your guarantee, please contact us.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}