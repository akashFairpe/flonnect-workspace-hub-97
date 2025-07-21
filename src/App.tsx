
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
import HowToUseStepRecorderPage from '@/pages/HowToUseStepRecorderPage';
import HowToUseFlonnectVideoRecorderPage from '@/pages/HowToUseFlonnectVideoRecorderPage';

// Enterprise Extension
import EnterpriseExtensionPopupPage from '@/pages/EnterpriseExtensionPopupPage';

// Email Setup Pages
import EmailSetupPage from '@/pages/EmailSetupPage';
import InviteTeamEmailPage from '@/pages/InviteTeamEmailPage';
import WorkspaceSetupEmailPage from '@/pages/WorkspaceSetupEmailPage';
import ExtensionSpotlightEmailPage from '@/pages/ExtensionSpotlightEmailPage';
import WelcomeEmailPage from '@/pages/WelcomeEmailPage';
import CalendarReminderEmailPage from '@/pages/CalendarReminderEmailPage';
import FirstProjectEmailPage from '@/pages/FirstProjectEmailPage';
import SkipReengagementEmailPage from '@/pages/SkipReengagementEmailPage';
import BestPracticesEmailPage from '@/pages/BestPracticesEmailPage';
import FeedbackCheckinEmailPage from '@/pages/FeedbackCheckinEmailPage';
import TeamInvitationEmailPage from '@/pages/TeamInvitationEmailPage';
import AddedToProjectEmailPage from '@/pages/AddedToProjectEmailPage';
import TaskAssignmentEmailPage from '@/pages/TaskAssignmentEmailPage';
import TaskActivityUpdateEmailPage from '@/pages/TaskActivityUpdateEmailPage';
import TaskCompletedEmailPage from '@/pages/TaskCompletedEmailPage';
import InvoiceGeneratedEmailPage from '@/pages/InvoiceGeneratedEmailPage';
import InvoicePastDueEmailPage from '@/pages/InvoicePastDueEmailPage';
import InvoiceReminderEmailPage from '@/pages/InvoiceReminderEmailPage';
import PayToContinueEmailPage from '@/pages/PayToContinueEmailPage';
import AccountSuspendedEmailPage from '@/pages/AccountSuspendedEmailPage';
import PaymentSuccessfulEmailPage from '@/pages/PaymentSuccessfulEmailPage';
import ForgotPasswordEmailPage from '@/pages/ForgotPasswordEmailPage';
import OTPVerificationEmailPage from '@/pages/OTPVerificationEmailPage';

// Resources Pages
import ResourcesPage from '@/pages/ResourcesPage';
import ResourcesUseCasesPage from '@/pages/ResourcesUseCasesPage';

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
            <Route path="/features" element={<FeaturePage />} />

            {/* Feature Routes */}
            <Route path="/screenrecorder" element={<ScreenRecordingPage />} />
            <Route path="/camera-recording" element={<CameraRecordingPage />} />
            <Route path="/mic-recording" element={<MicRecordingPage />} />
            <Route path="/movable-camera" element={<MovableCameraPage />} />
            <Route path="/step-recorder" element={<StepRecorderPage />} />
            <Route path="/screenshot-bug-reporting" element={<ScreenshotBugReportingPage />} />
            
            {/* How-to Guide Routes */}
            <Route path="/how-to-use-step-recorder" element={<HowToUseStepRecorderPage />} />
            <Route path="/how-to-use-flonnect-video-recorder" element={<HowToUseFlonnectVideoRecorderPage />} />

            {/* Email Setup Routes */}
            <Route path="/email-setup" element={<EmailSetupPage />} />
            <Route path="/email-setup/welcome" element={<WelcomeEmailPage />} />
            <Route path="/email-setup/calendar-reminder" element={<CalendarReminderEmailPage />} />
            <Route path="/email-setup/first-project" element={<FirstProjectEmailPage />} />
            <Route path="/email-setup/invite-team" element={<InviteTeamEmailPage />} />
            <Route path="/email-setup/workspace-setup" element={<WorkspaceSetupEmailPage />} />
            <Route path="/email-setup/skip-reengagement" element={<SkipReengagementEmailPage />} />
            <Route path="/email-setup/extension-spotlight" element={<ExtensionSpotlightEmailPage />} />
            <Route path="/email-setup/best-practices" element={<BestPracticesEmailPage />} />
            <Route path="/email-setup/feedback-checkin" element={<FeedbackCheckinEmailPage />} />
            <Route path="/email-setup/team-invitation" element={<TeamInvitationEmailPage />} />
            <Route path="/email-setup/added-to-project" element={<AddedToProjectEmailPage />} />
            <Route path="/email-setup/task-assignment" element={<TaskAssignmentEmailPage />} />
            <Route path="/email-setup/task-activity-update" element={<TaskActivityUpdateEmailPage />} />
            <Route path="/email-setup/task-completed" element={<TaskCompletedEmailPage />} />
            <Route path="/email-setup/invoice-generated" element={<InvoiceGeneratedEmailPage />} />
            <Route path="/email-setup/invoice-past-due" element={<InvoicePastDueEmailPage />} />
            <Route path="/email-setup/invoice-reminder" element={<InvoiceReminderEmailPage />} />
            <Route path="/email-setup/pay-to-continue" element={<PayToContinueEmailPage />} />
            <Route path="/email-setup/account-suspended" element={<AccountSuspendedEmailPage />} />
            <Route path="/email-setup/payment-successful" element={<PaymentSuccessfulEmailPage />} />
            <Route path="/email-setup/forgot-password" element={<ForgotPasswordEmailPage />} />
            <Route path="/email-setup/otp-verification" element={<OTPVerificationEmailPage />} />

            {/* Enterprise Extension Flow */}
            <Route path="/flow/enterprise-extension" element={<EnterpriseExtensionPopupPage />} />

            {/* Resources Routes */}
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/resources/usecases" element={<ResourcesUseCasesPage />} />

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
