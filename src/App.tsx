
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
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
