import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/auth/LoginPage';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { StudentDashboard } from './components/student/StudentDashboard';
import { QuestionGenerator } from './components/generator/QuestionGenerator';
import { Auditor } from './components/auditor/Auditor';
import { Reports } from './components/reports/Reports';
import { Outcomes } from './components/outcomes/Outcomes';
import { Navbar } from './components/shared/Navbar';
import { Footer } from './components/shared/Footer';
import { OutcomeIntelligenceHUD } from './components/shared/OutcomeIntelligenceHUD';
import { Toaster } from './components/ui/sonner';

export type UserRole = 'teacher' | 'student' | null;
export type Page = 'landing' | 'login' | 'dashboard' | 'generator' | 'auditor' | 'reports' | 'outcomes';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [whyViewEnabled, setWhyViewEnabled] = useState(false);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage('landing');
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (!userRole && currentPage !== 'landing' && currentPage !== 'login') {
      return <LandingPage onNavigate={navigateTo} />;
    }

    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={navigateTo} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onBack={() => navigateTo('landing')} />;
      case 'dashboard':
        return userRole === 'teacher' ? (
          <TeacherDashboard whyViewEnabled={whyViewEnabled} />
        ) : (
          <StudentDashboard />
        );
      case 'generator':
        return <QuestionGenerator whyViewEnabled={whyViewEnabled} />;
      case 'auditor':
        return <Auditor />;
      case 'reports':
        return <Reports />;
      case 'outcomes':
        return <Outcomes />;
      default:
        return <LandingPage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-indigo-50/20 to-violet-50/30">
      {userRole && (
        <>
          <Navbar
            userRole={userRole}
            onLogout={handleLogout}
            onNavigate={navigateTo}
            currentPage={currentPage}
            whyViewEnabled={whyViewEnabled}
            onToggleWhyView={() => setWhyViewEnabled(!whyViewEnabled)}
          />
          {userRole === 'teacher' && <OutcomeIntelligenceHUD />}
        </>
      )}
      <main className="flex-1">
        {renderPage()}
      </main>
      {!userRole && <Footer />}
      <Toaster />
    </div>
  );
}

export default App;