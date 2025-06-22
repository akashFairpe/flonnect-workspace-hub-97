import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AIPage from "./pages/AIPage";
import ResourcesPage from "./pages/ResourcesPage";
import HowToRecordPage from "./pages/HowToRecordPage";
import HowToSharePage from "./pages/HowToSharePage";
import ScreenRecordingPage from "./pages/ScreenRecordingPage";
import BugCapturePage from "./pages/BugCapturePage";
import TeamsMeetingRecordingPage from "./pages/TeamsMeetingRecordingPage";
import HowToRecordBugsPage from "./pages/HowToRecordBugsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AIPage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/downloads" element={<ResourcesPage />} />
          <Route path="/tutorials/how-to-record" element={<HowToRecordPage />} />
          <Route path="/tutorials/how-to-share" element={<HowToSharePage />} />
          <Route path="/features/screen-recording" element={<ScreenRecordingPage />} />
          <Route path="/features/bug-capture" element={<BugCapturePage />} />
          <Route path="/features/teams-meeting-recording" element={<TeamsMeetingRecordingPage />} />
          <Route path="/resources/how-to-record-bugs" element={<HowToRecordBugsPage />} />
          <Route path="*" element={<AIPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
