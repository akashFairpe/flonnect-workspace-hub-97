
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ScreenRecorderForTeachers from "./pages/ScreenRecorderForTeachers";
import ScreenRecorderForStudents from "./pages/ScreenRecorderForStudents";
import OnlineLectureRecorder from "./pages/OnlineLectureRecorder";
import ScreenRecorderForBusiness from "./pages/ScreenRecorderForBusiness";
import ScreenRecorderForHR from "./pages/ScreenRecorderForHR";
import SalesCallRecordingSoftware from "./pages/SalesCallRecordingSoftware";
import CallCenterRecordingSoftware from "./pages/CallCenterRecordingSoftware";
import ScreenRecorderForProjectManagers from "./pages/ScreenRecorderForProjectManagers";
import YoutubeScreenRecorder from "./pages/YoutubeScreenRecorder";
import PodcastRecordingSoftware from "./pages/PodcastRecordingSoftware";
import ScreenRecorderForSocialMedia from "./pages/ScreenRecorderForSocialMedia";
import ScreenRecorderForMarketing from "./pages/ScreenRecorderForMarketing";
import ScreenRecorderForAffiliateMarketing from "./pages/ScreenRecorderForAffiliateMarketing";
import ScreenRecorderForFreelanceDesigners from "./pages/ScreenRecorderForFreelanceDesigners";
import FreelanceWritersAndCopywriters from "./pages/FreelanceWritersAndCopywriters";
import ConsultantsAndCoaches from "./pages/ConsultantsAndCoaches";
import VirtualAssistants from "./pages/VirtualAssistants";
import SoftwareDevelopers from "./pages/SoftwareDevelopers";
import ProductManagers from "./pages/ProductManagers";
import UXUIDesigners from "./pages/UXUIDesigners";
import QATesters from "./pages/QATesters";
import ITSupportTeams from "./pages/ITSupportTeams";
import GamersAndStreamers from "./pages/GamersAndStreamers";
import EsportsCoaches from "./pages/EsportsCoaches";
import GamingContentCreators from "./pages/GamingContentCreators";
import PersonalJournalers from "./pages/PersonalJournalers";
import Researchers from "./pages/Researchers";
import LegalProfessionals from "./pages/LegalProfessionals";
import MedicalProfessionals from "./pages/MedicalProfessionals";
import ReligiousSpiritualLeaders from "./pages/ReligiousSpiritualLeaders";
import EventOrganizers from "./pages/EventOrganizers";
import NonprofitsActivists from "./pages/NonprofitsActivists";
import Musicians from "./pages/Musicians";
import DancersPerformers from "./pages/DancersPerformers";
import PhotographersVideographers from "./pages/PhotographersVideographers";
import GovernmentOfficialsPublicSpeakers from "./pages/GovernmentOfficialsPublicSpeakers";
import LawEnforcementSecurityTeams from "./pages/LawEnforcementSecurityTeams";
import Tutors from "./pages/Tutors";
import EducationAdministrators from "./pages/EducationAdministrators";
import TherapistsCounselors from "./pages/TherapistsCounselors";
import FitnessTrainersYogaInstructors from "./pages/FitnessTrainersYogaInstructors";
import DietitiansNutritionists from "./pages/DietitiansNutritionists";
import FinancialAdvisors from "./pages/FinancialAdvisors";
import StockTradersAnalysts from "./pages/StockTradersAnalysts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/screen-recorder-for-teachers" element={<ScreenRecorderForTeachers />} />
          <Route path="/screen-recorder-for-students" element={<ScreenRecorderForStudents />} />
          <Route path="/online-lecture-recorder" element={<OnlineLectureRecorder />} />
          <Route path="/screen-recorder-for-business" element={<ScreenRecorderForBusiness />} />
          <Route path="/screen-recorder-for-hr" element={<ScreenRecorderForHR />} />
          <Route path="/sales-call-recording-software" element={<SalesCallRecordingSoftware />} />
          <Route path="/call-center-recording-software" element={<CallCenterRecordingSoftware />} />
          <Route path="/screen-recorder-for-project-managers" element={<ScreenRecorderForProjectManagers />} />
          <Route path="/youtube-screen-recorder" element={<YoutubeScreenRecorder />} />
          <Route path="/podcast-recording-software" element={<PodcastRecordingSoftware />} />
          <Route path="/screen-recorder-for-social-media" element={<ScreenRecorderForSocialMedia />} />
          <Route path="/screen-recorder-for-marketing" element={<ScreenRecorderForMarketing />} />
          <Route path="/screen-recorder-for-affiliate-marketing" element={<ScreenRecorderForAffiliateMarketing />} />
          <Route path="/screen-recorder-for-freelance-designers" element={<ScreenRecorderForFreelanceDesigners />} />
          <Route path="/freelance-writers-and-copywriters" element={<FreelanceWritersAndCopywriters />} />
          <Route path="/consultants-and-coaches" element={<ConsultantsAndCoaches />} />
          <Route path="/virtual-assistants" element={<VirtualAssistants />} />
          <Route path="/software-developers" element={<SoftwareDevelopers />} />
          <Route path="/product-managers" element={<ProductManagers />} />
          <Route path="/ux-ui-designers" element={<UXUIDesigners />} />
          <Route path="/qa-testers" element={<QATesters />} />
          <Route path="/it-support-teams" element={<ITSupportTeams />} />
          <Route path="/gamers-and-streamers" element={<GamersAndStreamers />} />
          <Route path="/esports-coaches" element={<EsportsCoaches />} />
          <Route path="/gaming-content-creators" element={<GamingContentCreators />} />
          <Route path="/personal-journalers" element={<PersonalJournalers />} />
          <Route path="/researchers" element={<Researchers />} />
          <Route path="/legal-professionals" element={<LegalProfessionals />} />
          <Route path="/medical-professionals" element={<MedicalProfessionals />} />
          <Route path="/religious-spiritual-leaders" element={<ReligiousSpiritualLeaders />} />
          <Route path="/event-organizers" element={<EventOrganizers />} />
          <Route path="/nonprofits-activists" element={<NonprofitsActivists />} />
          <Route path="/musicians" element={<Musicians />} />
          <Route path="/dancers-performers" element={<DancersPerformers />} />
          <Route path="/photographers-videographers" element={<PhotographersVideographers />} />
          <Route path="/government-officials-public-speakers" element={<GovernmentOfficialsPublicSpeakers />} />
          <Route path="/law-enforcement-security-teams" element={<LawEnforcementSecurityTeams />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/education-administrators" element={<EducationAdministrators />} />
          <Route path="/therapists-counselors" element={<TherapistsCounselors />} />
          <Route path="/fitness-trainers-yoga-instructors" element={<FitnessTrainersYogaInstructors />} />
          <Route path="/dietitians-nutritionists" element={<DietitiansNutritionists />} />
          <Route path="/financial-advisors" element={<FinancialAdvisors />} />
          <Route path="/stock-traders-analysts" element={<StockTradersAnalysts />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
