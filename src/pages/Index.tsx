import ReelsLanding from "@/components/ReelsLanding";
import ExpertSection from "@/components/ExpertSection";
import VideoSection from "@/components/VideoSection";
import ReviewsSection from "@/components/ReviewsSection";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ReelsLanding />
      <ExpertSection />
      <VideoSection />
      <ReviewsSection />
      <PricingSection />
    </div>
  );
};

export default Index;
