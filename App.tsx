
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CompetitionList from './pages/CompetitionList';
import CompetitionDetail from './pages/CompetitionDetail';
import Registration from './pages/Registration';
import RegistrationConfirm from './pages/RegistrationConfirm';
import RegistrationDetail from './pages/RegistrationDetail';
import MyRegistrations from './pages/MyRegistrations';
import UploadWork from './pages/UploadWork';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Mine from './pages/Mine';
import AIEditor from './pages/AIEditor';
import SecondaryPage from './pages/SecondaryPage';
import WorkflowGuide from './pages/WorkflowGuide';
import CertificatePreview from './pages/CertificatePreview';
import ScoreDetail from './pages/ScoreDetail';
import Consultation from './pages/Consultation';
import Rules from './pages/Rules';
import OrganizerInfo from './pages/OrganizerInfo';
import StudentScoreTimeline from './pages/StudentScoreTimeline';
import StudentCertificates from './pages/StudentCertificates';
import StudentWorks from './pages/StudentWorks';
import BottomNav from './components/BottomNav';
import FloatingHomeButton from './components/FloatingHomeButton';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#f5f5f4] text-stone-900 font-sans pb-16 max-w-md mx-auto shadow-2xl border-x border-stone-200 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/competitions" element={<CompetitionList />} />
          <Route path="/competition/:id" element={<CompetitionDetail />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/register/:id" element={<Registration />} />
          <Route path="/registration-confirm" element={<RegistrationConfirm />} />
          <Route path="/registration/:id" element={<RegistrationDetail />} />
          <Route path="/my-registrations" element={<MyRegistrations />} />
          <Route path="/upload/:id" element={<UploadWork />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/mine" element={<Mine />} />
          <Route path="/mine/scores/:studentId" element={<StudentScoreTimeline />} />
          <Route path="/mine/certificates/:studentId" element={<StudentCertificates />} />
          <Route path="/mine/works/:studentId" element={<StudentWorks />} />
          <Route path="/mine/:type" element={<SecondaryPage />} />
          <Route path="/workflow-guide" element={<WorkflowGuide />} />
          <Route path="/certificate/:id" element={<CertificatePreview />} />
          <Route path="/score/:id" element={<ScoreDetail />} />
          <Route path="/ai-editor" element={<AIEditor />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/organizer" element={<OrganizerInfo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <FloatingHomeButton />
        <BottomNav />
      </div>
    </HashRouter>
  );
};

export default App;
