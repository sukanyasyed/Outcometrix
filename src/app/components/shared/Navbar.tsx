import { GraduationCap, LogOut, User, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import type { UserRole, Page } from '../../App';

interface NavbarProps {
  userRole: UserRole;
  onLogout: () => void;
  onNavigate: (page: Page) => void;
  currentPage: Page;
  whyViewEnabled?: boolean;
  onToggleWhyView?: () => void;
}

export function Navbar({ userRole, onLogout, onNavigate, currentPage, whyViewEnabled, onToggleWhyView }: NavbarProps) {
  const menuItems: { label: string; page: Page; teacherOnly?: boolean }[] = [
    { label: 'Dashboard', page: 'dashboard' },
    { label: 'Generate Questions', page: 'generator', teacherOnly: true },
    { label: 'Audit Paper', page: 'auditor', teacherOnly: true },
    { label: 'Outcomes', page: 'outcomes', teacherOnly: true },
    { label: 'Reports', page: 'reports', teacherOnly: true },
  ];

  const visibleItems = menuItems.filter(
    item => !item.teacherOnly || userRole === 'teacher'
  );

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-indigo-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <button
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-gray-900 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Outcometrix
              </span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {visibleItems.map((item) => (
                <Button
                  key={item.page}
                  variant={currentPage === item.page ? 'default' : 'ghost'}
                  onClick={() => onNavigate(item.page)}
                  className={`text-sm ${
                    currentPage === item.page
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md'
                      : 'hover:bg-indigo-50'
                  }`}
                >
                  {item.label}
                </Button>
              ))}</div>
          </div>

          <div className="flex items-center gap-4">
            {/* WHY View Toggle - Only for teachers */}
            {userRole === 'teacher' && onToggleWhyView && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200">
                <Eye className="w-4 h-4 text-indigo-600" />
                <Label htmlFor="why-view" className="text-sm cursor-pointer text-indigo-700">
                  WHY View
                </Label>
                <Switch
                  id="why-view"
                  checked={whyViewEnabled}
                  onCheckedChange={onToggleWhyView}
                  className="data-[state=checked]:bg-indigo-600"
                />
              </div>
            )}

            <Badge variant="outline" className="gap-1.5 border-indigo-200 bg-indigo-50 text-indigo-700">
              <User className="w-3 h-3" />
              {userRole === 'teacher' ? 'Teacher' : 'Student'}
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={onLogout}
              className="gap-2 border-gray-300 hover:bg-red-50 hover:border-red-300 hover:text-red-600"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}