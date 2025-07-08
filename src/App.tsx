
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';

// Landing and Main Pages
import LandingPage from '@/pages/LandingPage';
import ForEnterprisePage from '@/pages/ForEnterprisePage';
import InteractiveDemoCapturePage from '@/pages/InteractiveDemoCapturePage';
import BugCapturePage from '@/pages/BugCapturePage';
import VideoWorkspace from '@/components/VideoWorkspace';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import BugReportingPage from '@/pages/BugReportingPage';
import TestimonialsPage from '@/pages/TestimonialsPage';

// Feature Pages
import ScreenRecordingPage from '@/pages/ScreenRecordingPage';
import CameraRecordingPage from '@/pages/CameraRecordingPage';
import MicRecordingPage from '@/pages/MicRecordingPage';
import MovableCameraPage from '@/pages/MovableCameraPage';
import StepRecorderPage from '@/pages/StepRecorderPage';
import ScreenshotBugReportingPage from '@/pages/ScreenshotBugReportingPage';
import FeaturePage from '@/pages/FeaturePage';

// Enterprise Extension
import EnterpriseExtensionPopupPage from '@/pages/EnterpriseExtensionPopupPage';

// Email Setup Pages
import EmailSetupPage from '@/pages/EmailSetupPage';
import InviteTeamEmailPage from '@/pages/InviteTeamEmailPage';
import WorkspaceSetupEmailPage from '@/pages/WorkspaceSetupEmailPage';
import ExtensionSpotlightEmailPage from '@/pages/ExtensionSpotlightEmailPage';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/for-enterprise" element={<ForEnterprisePage />} />
            <Route path="/interactive-demo-capture" element={<InteractiveDemoCapturePage />} />
            <Route path="/bug-capture" element={<BugCapturePage />} />
            <Route path="/bug-reporting" element={<BugReportingPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/workspace" element={<VideoWorkspace />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/feature" element={<FeaturePage />} />

            {/* Feature Routes */}
            <Route path="/screenrecorder" element={<ScreenRecordingPage />} />
            <Route path="/camera-recording" element={<CameraRecordingPage />} />
            <Route path="/mic-recording" element={<MicRecordingPage />} />
            <Route path="/movable-camera" element={<MovableCameraPage />} />
            <Route path="/step-recorder" element={<StepRecorderPage />} />
            <Route path="/screenshot-bug-reporting" element={<ScreenshotBugReportingPage />} />

            {/* Email Setup Routes */}
            <Route path="/email-setup" element={<EmailSetupPage />} />
            <Route path="/email-setup/invite-team" element={<InviteTeamEmailPage />} />
            <Route path="/email-setup/workspace-setup" element={<WorkspaceSetupEmailPage />} />
            <Route path="/email-setup/extension-spotlight" element={<ExtensionSpotlightEmailPage />} />

            {/* Enterprise Extension Flow */}
            <Route path="/flow/enterprise-extension" element={<EnterpriseExtensionPopupPage />} />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
