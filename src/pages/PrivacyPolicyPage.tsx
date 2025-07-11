
import React from 'react';
import { Header } from '@/components/Header';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6056a4]/5 via-white to-[#f0648b]/5">
      <Header />
      
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-[#6056a4]/10 p-8 md:p-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#6056a4] to-[#f0648b] bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>
            <div className="inline-flex items-center bg-gradient-to-r from-[#6056a4]/10 to-[#f0648b]/10 rounded-full px-6 py-2 border border-[#6056a4]/20">
              <span className="text-gray-600 font-medium">Updated on January 2, 2025</span>
            </div>
          </div>
          
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-2xl p-8 mb-8 border-l-4 border-[#6056a4]">
              <p className="text-lg">
                This Privacy Policy explains how Flonnect ("we," "us," or "our") collects, uses, protects, and shares your Personally Identifiable Information ("PII") when you visit our website, use our browser extensions, desktop applications, and related services. We are committed to safeguarding your privacy in accordance with applicable laws.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">1</span>
                Information We Do Not Collect Unless You're Logged In
              </h2>

              <div className="border-l-4 border-[#f0648b] pl-6">
                <h3 className="text-2xl font-semibold text-[#6056a4] mb-4">Browser Extensions & Desktop Applications</h3>
                <p className="mb-4">
                  If you install our extension or desktop app—but do not activate it or log in—we do not collect any data. Only once you log in and actively use features do we collect information as described below.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">2</span>
                Information You Provide Voluntarily
              </h2>
              <p className="mb-4">
                When you decide to create an account or submit data through one of our products, you control what you share. Such information may include:
              </p>
              <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-xl p-6 border border-[#6056a4]/20">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Location</li>
                  <li>Phone number</li>
                  <li>Payment details</li>
                </ul>
              </div>
              <p className="mt-4">
                You will always have clear choices for how to manage or delete your data in those platforms.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">3</span>
                Public Information
              </h2>
              <p className="mb-4">
                If you post, transact, or publish content that contains personal details (e.g. in comments, shared links, or embedded guides), that information becomes publicly visible. Please exercise caution when sharing any PII in public spaces; Flonnect cannot be held responsible for information you choose to disclose publicly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">4</span>
                Automatically Collected Technical Data
              </h2>
              <p className="mb-4">
                When you use our website or extensions (while logged in), we may automatically gather anonymized, aggregated data about your device and usage patterns, such as:
              </p>
              <div className="bg-gradient-to-r from-[#f0648b]/5 to-[#6056a4]/5 rounded-xl p-6 border border-[#f0648b]/20">
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address</li>
                  <li>Time and date of access</li>
                  <li>URLs visited via our extension</li>
                </ul>
              </div>
              <p className="mt-4">
                This information by itself does not identify you.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">5</span>
                Link Generation & Sharing
              </h2>
              <p className="mb-4">
                We do not collect or process the content (images, videos, messages) you post through Flonnect tools. Videos you upload are public by default and accessible to anyone with the link you share.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">6</span>
                Payment Information
              </h2>
              <p className="mb-4">
                All payments are handled directly by reputable third‐party payment processors. Card numbers, expiration dates, and other sensitive financial data are transmitted securely to those providers—Flonnect does not store or retain your payment credentials.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">7</span>
                Analytics Tools
              </h2>
              <p className="mb-4">
                We use Google Analytics and Mixpanel to understand how our website and applications are used. Collected metrics (e.g., session durations, page views, device/browser types) are:
              </p>
              <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-xl p-6 border border-[#6056a4]/20 mb-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fully anonymized and aggregated</li>
                  <li>Used solely to improve our products and your user experience</li>
                </ul>
              </div>
              <p>
                You may opt out of these analytics at any time via your browser's privacy settings or the available opt‐out tools, though this may affect certain features.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">8</span>
                Google & Microsoft Calendar Integration
              </h2>
              <p className="mb-4">
                With your explicit consent, Flonnect can integrate with your Google Calendar or Microsoft Outlook Calendar to automatically record meetings you have scheduled. Key points:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-xl p-4 border border-[#6056a4]/20">
                  <h4 className="font-semibold text-[#6056a4] mb-2">Secure OAuth 2.0 Flow:</h4>
                  <p>You grant permission via Google's or Microsoft's standard authorization screens.</p>
                </div>
                <div className="bg-gradient-to-r from-[#f0648b]/5 to-[#6056a4]/5 rounded-xl p-4 border border-[#f0648b]/20">
                  <h4 className="font-semibold text-[#f0648b] mb-2">Data Minimization:</h4>
                  <p>We request only the minimum scopes needed (e.g., calendar read events).</p>
                </div>
                <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-xl p-4 border border-[#6056a4]/20">
                  <h4 className="font-semibold text-[#6056a4] mb-2">On-Device Syncing:</h4>
                  <p>Calendar data is used solely to trigger recordings at the scheduled start time. No calendar entries or personal details ever leave your device unencrypted.</p>
                </div>
                <div className="bg-gradient-to-r from-[#f0648b]/5 to-[#6056a4]/5 rounded-xl p-4 border border-[#f0648b]/20">
                  <h4 className="font-semibold text-[#f0648b] mb-2">Compliance:</h4>
                  <p>All interactions follow Google's and Microsoft's Terms of Service and Developer Policies.</p>
                </div>
                <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-xl p-4 border border-[#6056a4]/20">
                  <h4 className="font-semibold text-[#6056a4] mb-2">User Control:</h4>
                  <p>You can revoke calendar access at any time in your Flonnect settings or directly in your Google/Microsoft account.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">9</span>
                Use of Google User Data
              </h2>
              <p className="mb-4">
                Flonnect uses Google user data solely to interact with Google services such as YouTube and Google Calendar to provide core features like video publishing, managing upcoming meetings, generating AI notes, and updating events.
              </p>
              <p className="mb-4">
                We do not store any Google Workspace or Google Photos API data on our servers. All interactions happen directly through secure API connections.
              </p>
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#6056a4] mb-4">Data Retention and Deletion</h3>
                <p className="mb-4">
                  Flonnect does not retain Google user data beyond what is needed to deliver these services in real-time. Users can disconnect their Google account at any time using the built-in disconnect option in the app.
                </p>
                <p className="mb-4">
                  Additionally, users may request removal of any related data by contacting us at{' '}
                  <a href="mailto:support@flonnect.com" className="text-[#6056a4] hover:text-[#f0648b] font-medium">
                    support@flonnect.com
                  </a>.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-xl p-6 border border-[#6056a4]/20">
                <h3 className="text-2xl font-semibold text-[#6056a4] mb-4">Limited Use Disclosure</h3>
                <p>
                  Flonnect complies with Google's Limited Use requirements for user data, as defined in the Workspace API User Data and Developer Policy and the Photos API User Data and Developer Policy. We never use Google user data for advertising or any unrelated purposes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">10</span>
                Compliance with Google API Services User Data Policy – Limited Use
              </h2>
              <p className="mb-6">
                To ensure easy accessibility for all users, Flonnect makes the following disclosure about Limited Use requirements:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-xl p-6 border border-[#6056a4]/20">
                  <h3 className="text-2xl font-semibold text-[#6056a4] mb-4">Workspace APIs</h3>
                  <p className="mb-3">
                    Flonnect complies with the Limited Use requirements for Workspace APIs. We use Workspace API data (such as Google Calendar) only to provide core services like scheduling, meeting updates, and AI-powered notes.
                  </p>
                  <p>
                    For more information, see{' '}
                    <a 
                      href="https://developers.google.com/workspace/workspace-api-user-data-developer-policy#limited-use" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#6056a4] hover:text-[#f0648b] font-medium underline"
                    >
                      Google's Workspace API User Data Developer Policy
                    </a>.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-[#f0648b]/5 to-[#6056a4]/5 rounded-xl p-6 border border-[#f0648b]/20">
                  <h3 className="text-2xl font-semibold text-[#f0648b] mb-4">Photos APIs</h3>
                  <p className="mb-3">
                    Flonnect does not currently use the Google Photos API. If we ever choose to use the Photos API in the future, we will fully comply with the Limited Use requirements for Photos APIs.
                  </p>
                  <p>
                    For more information, see{' '}
                    <a 
                      href="https://developers.google.com/photos/support/api-policy#limited_use_of_user_data" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#f0648b] hover:text-[#6056a4] font-medium underline"
                    >
                      Google's Photos API Limited Use Policy
                    </a>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">11</span>
                Permissions Used
              </h2>
              
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-[#6056a4] mb-4">Mandatory Permissions (for core features)</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-xl p-4 border border-[#6056a4]/20">
                    <h4 className="font-semibold text-[#6056a4] mb-2">tabs</h4>
                    <p>Read active tabs for step-by-step recording</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#f0648b]/5 to-[#6056a4]/5 rounded-xl p-4 border border-[#f0648b]/20">
                    <h4 className="font-semibold text-[#f0648b] mb-2">contentSettings</h4>
                    <p>Temporarily adjust settings for bug reporting</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-xl p-4 border border-[#6056a4]/20">
                    <h4 className="font-semibold text-[#6056a4] mb-2">storage</h4>
                    <p>Save preferences locally</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#f0648b]/5 to-[#6056a4]/5 rounded-xl p-4 border border-[#f0648b]/20">
                    <h4 className="font-semibold text-[#f0648b] mb-2">downloads</h4>
                    <p>Save recordings/screenshots to your device</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-xl p-4 border border-[#6056a4]/20">
                    <h4 className="font-semibold text-[#6056a4] mb-2">scripting</h4>
                    <p>Inject scripts for accurate page captures</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#6056a4] mb-4">Optional Permissions (requested when you enable specific enhancements)</h3>
                <div className="space-y-4 mb-4">
                  <div className="bg-gradient-to-r from-[#f0648b]/5 to-[#6056a4]/5 rounded-xl p-4 border border-[#f0648b]/20">
                    <h4 className="font-semibold text-[#f0648b] mb-2">desktopCapture</h4>
                    <p>Capture your full desktop or specific windows</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-xl p-4 border border-[#6056a4]/20">
                    <h4 className="font-semibold text-[#6056a4] mb-2">webNavigation</h4>
                    <p>Track page navigation events for debugging</p>
                  </div>
                  <div className="bg-gradient-to-r from-[#f0648b]/5 to-[#6056a4]/5 rounded-xl p-4 border border-[#f0648b]/20">
                    <h4 className="font-semibold text-[#f0648b] mb-2">webRequest</h4>
                    <p>Inspect network requests to enrich bug reports</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">12</span>
                How We Share Your Information
              </h2>
              <p className="mb-4">
                Flonnect does not sell, trade, or otherwise transfer your PII to outside parties, except in these cases:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#6056a4]/5 to-[#f0648b]/5 rounded-xl p-4 border border-[#6056a4]/20">
                  <h4 className="font-semibold text-[#6056a4] mb-2">Legal Requirements:</h4>
                  <p>To comply with court orders or applicable laws</p>
                </div>
                <div className="bg-gradient-to-r from-[#f0648b]/5 to-[#6056a4]/5 rounded-xl p-4 border border-[#f0648b]/20">
                  <h4 className="font-semibold text-[#f0648b] mb-2">Trusted Providers:</h4>
                  <p>Only with vendors who support services such as payment processing or customer support—and then only the data required to perform those services</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">13</span>
                Changes to This Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy to reflect changes in our practices or legal obligations. Whenever we do, we will post the revised date at the top of this page. Your continued use of Flonnect after those updates signify your acceptance of the amended policy.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#6056a4]/10 mb-8">
              <h2 className="text-3xl font-bold text-[#6056a4] mb-6 flex items-center">
                <span className="w-8 h-8 bg-gradient-to-r from-[#6056a4] to-[#f0648b] rounded-lg flex items-center justify-center text-white text-sm mr-3">14</span>
                Contact Us
              </h2>
              <p className="mb-6">
                If you have questions or concerns about this policy or wish to exercise your privacy rights, please contact us at:
              </p>
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="mailto:support@flonnect.com" className="inline-flex items-center bg-gradient-to-r from-[#6056a4] to-[#f0648b] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    📧 support@flonnect.com
                  </a>
                  <a href="#" className="inline-flex items-center bg-gradient-to-r from-[#f0648b] to-[#6056a4] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                    💬 Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
