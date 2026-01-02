# Outcometrix - AI-Powered Question Bank Generator & Auditor

## 🎯 Project Overview

Outcometrix is a next-generation educational technology platform that helps teachers create outcome-aligned question banks and audit existing question papers for accreditation compliance. Built with explainable AI and topic-aware intelligence, it revolutionizes the assessment creation process while maintaining full transparency.

## ✨ Key Features

### 🧠 Intelligent Features

1. **Topic-Aware Intelligence**
   - Adaptive UI that changes based on selected academic subject
   - 9 supported topics: Data Structures, Operating Systems, Database Systems, Machine Learning, Computer Networks, Software Engineering, Web Development, Algorithms, Cloud Computing
   - Topic-specific visual metaphors (nodes, lanes, grids, layers, networks)
   - Dynamic color schemes and icons per topic

2. **WHY View Explainability**
   - Toggle-able explainability mode for teachers
   - Transparent AI reasoning shown for all recommendations
   - Confidence scores displayed for AI decisions
   - Hover tooltips with detailed explanations

3. **Question DNA Strips**
   - Visual representation of question characteristics
   - Shows CO mapping, Bloom level, difficulty, and cognitive load
   - Color-coded intensity indicators
   - Topic-aware styling

4. **Outcome Intelligence HUD**
   - Floating heads-up display for real-time metrics
   - CO coverage percentage
   - Bloom distribution balance
   - Quick insights panel

5. **Outcome Drift Compass**
   - Visual indicator of outcome alignment drift over time
   - Deviation measurements
   - Trend indicators (stable, drifting, critical)

### 📊 Dashboard Features

#### Teacher Dashboard
- **Metrics Cards**: CO Coverage, Bloom Balance, Difficulty Balance, AI Confidence
- **Bloom's Pyramid Chart**: Visual representation of question distribution across cognitive levels
- **Outcome Coverage Heatmap**: Matrix showing CO coverage across topics
- **Topic Distribution Chart**: Breakdown of questions by syllabus topics (adapts visualization based on topic)
- **Outcome Drift Compass**: Real-time drift monitoring
- **AI Recommendations**: Automatically generated suggestions for improvement
- **Recent Activity**: Latest questions and modifications

#### Student Dashboard
- **Skill Distribution Chart**: Simplified Bloom levels visualization
- **Practice Question List**: Student-friendly question interface
- **Skill Overview**: Progress tracking
- **Student Feedback Cards**: Contextual learning recommendations

### 🎓 Core Functionality

1. **Question Generator**
   - Topic selector with concept hierarchy
   - Bloom level filters (L1-L6)
   - Difficulty slider (Easy/Medium/Hard)
   - Student persona selector (Regular/Remedial/Advanced)
   - Real-time question generation
   - Question DNA visualization
   - Edit and regenerate capabilities

2. **Question Bank Auditor**
   - PDF upload and parsing
   - Comprehensive audit analysis
   - Traffic-light indicators (Pass/Warning/Fail)
   - Issue detection:
     - Missing CO coverage
     - Bloom level imbalance
     - Redundancy detection
     - Rote-learning risk assessment
   - Auto-fix suggestions
   - Detailed explanations in WHY mode

3. **Outcomes Management**
   - Syllabus upload (PDF parsing)
   - Course Outcome (CO) editor
   - Program Outcome (PO) mapper
   - CO-PO relationship visualization
   - Strength indicators

4. **Reports**
   - CO-PO Matrix export
   - Bloom Distribution reports
   - Outcome Coverage analysis
   - Outcome Drift Timeline
   - Evidence Pack Exporter (PDF/DOCX)

### 🎨 Design System

**Color Palette:**
- Primary: Indigo (#4F46E5)
- Secondary: Violet (#8B5CF6)
- Accent: Pink (#EC4899)
- Status Colors: Green (Pass), Amber (Warning), Red (Fail)

**Topic-Specific Themes:**
Each topic has unique colors and visual metaphors:
- **Data Structures**: Blue, node-based visuals
- **Operating Systems**: Purple, process lane visuals
- **Database Systems**: Green, grid/table visuals
- **Machine Learning**: Pink, neural layer visuals
- **Computer Networks**: Cyan, network topology visuals

**Typography:**
- Font: System fonts (optimized for readability)
- Gradient text for headings
- Clear hierarchy

**Components:**
- Glassmorphism effects
- Gradient backgrounds
- Smooth animations (using Motion)
- Responsive design
- Dark mode support (configured)

## 🏗️ Technical Architecture

### Tech Stack
- **Frontend**: React 18.3.1 + TypeScript
- **Styling**: Tailwind CSS 4.1.12
- **UI Components**: Radix UI + Custom Components
- **Charts**: Recharts
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Build Tool**: Vite 6.3.5

### Project Structure
```
/src
  /app
    /components
      /auditor       - Audit functionality
      /auth          - Login/authentication
      /generator     - Question generation
      /outcomes      - CO/PO management
      /reports       - Reporting features
      /shared        - Reusable components
      /student       - Student-specific views
      /teacher       - Teacher-specific views
      /ui            - Base UI components (Radix)
    /contexts        - React contexts
      TopicContext   - Topic theme management
    App.tsx          - Main app component
  /styles
    fonts.css        - Font imports
    index.css        - Global styles
    tailwind.css     - Tailwind imports
    theme.css        - Theme variables
```

### State Management
- React Context for topic theme
- Local state for user session
- Props drilling for component communication

### Key Design Patterns
1. **Topic Context Provider**: Wraps entire app to provide topic theme
2. **Component Composition**: Small, reusable components
3. **Props Interface**: TypeScript interfaces for type safety
4. **Conditional Rendering**: WHY mode toggle, role-based views
5. **Responsive Design**: Mobile-first approach

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 🔑 Key User Flows

### Teacher Flow
1. Login as Teacher
2. Select academic topic from navbar
3. View dashboard with real-time metrics
4. Enable WHY View for AI explanations
5. Generate questions OR audit existing papers
6. Review CO-PO mappings
7. Generate reports for accreditation

### Student Flow
1. Login as Student
2. View simplified dashboard
3. Browse practice questions
4. Review skill distribution
5. Get personalized feedback

## 🎯 Future Enhancements

- Backend integration (Supabase ready)
- Real AI model integration
- PDF parsing implementation
- User authentication system
- Question bank persistence
- Advanced analytics
- Collaboration features
- Export templates
- Multi-language support

## 🏆 Unique Selling Points

1. **Explainability First**: WHY View toggle shows reasoning for every AI decision
2. **Topic Awareness**: UI adapts to academic subject with relevant metaphors
3. **Visual Intelligence**: DNA strips, drift compass, HUD panel
4. **Pedagogically Sound**: Built on Bloom's Taxonomy and OBE principles
5. **Accreditation Ready**: NBA/NAAC compliance built-in
6. **Faculty Control**: AI suggestions with human override
7. **Student-Centric**: Separate, simplified student interface

## 📝 Demo Features

- Realistic mock data throughout
- Smooth animations and transitions
- Responsive on all screen sizes
- Professional color scheme
- Intuitive navigation
- Comprehensive tooltips
- Loading states
- Error handling UI

## 🎨 Visual Design Philosophy

**Trustworthy AI Aesthetic:**
- Soft gradients instead of harsh colors
- Rounded corners for approachability
- Clear visual hierarchy
- Consistent spacing
- Subtle shadows and depth
- Professional yet modern

**Topic-Aware Design:**
- Visual metaphors change per subject
- Colors reflect subject domain
- Icons adapt to context
- Chart types match data patterns

**Explainability:**
- Visual feedback for all actions
- Progress indicators
- Confidence scores
- Reasoning tooltips
- Status indicators

## 🤝 Contributing

This is a hackathon-ready prototype showcasing:
- Modern React development
- Advanced UI/UX design
- AI-powered educational technology
- Explainable AI principles
- Topic-aware adaptive interfaces

## 📄 License

This project is a demonstration prototype for educational purposes.

---

**Built with ❤️ for educators who believe in transparent, intelligent assessment tools.**
