# Outcometrix User Guide

## 🚀 Quick Start

### First Launch
1. The application opens on the **Landing Page**
2. Click **"Generate Question Bank"** or **"Audit Existing Paper"** to proceed to login
3. Choose your role: **Teacher** or **Student**

---

## 👩‍🏫 Teacher Guide

### 1. Dashboard Overview

After logging in as a teacher, you'll see:

#### Topic Selector
- Located in the top navigation bar
- Click to select your academic subject
- UI adapts with topic-specific colors and visual metaphors
- Available topics:
  - Data Structures & Algorithms
  - Operating Systems  
  - Database Systems
  - Machine Learning
  - Computer Networks
  - Software Engineering
  - Web Development
  - Algorithms
  - Cloud Computing

#### WHY View Toggle
- Enable to see AI explanations for all decisions
- Shows confidence scores
- Displays reasoning behind recommendations
- Hover over metrics for detailed explanations

#### Key Metrics Cards
1. **CO Coverage**: Percentage of Course Outcomes covered
2. **Bloom Balance**: Distribution quality across cognitive levels
3. **Difficulty Balance**: Question difficulty distribution
4. **AI Confidence**: Overall system confidence level

#### Visualizations
1. **Bloom's Pyramid Chart**
   - Shows question distribution across L1-L6
   - Compares current vs target distribution
   - Color-coded by cognitive complexity

2. **CO Coverage Heatmap**
   - Matrix view of CO vs Bloom levels
   - Color intensity shows coverage density
   - Hover for specific counts

3. **Topic Distribution Chart**
   - Pie chart for node-based topics (Data Structures, ML, etc.)
   - Bar chart for grid/lane topics (OS, Databases, etc.)
   - Topic-specific concept breakdown

4. **Outcome Drift Compass**
   - Visual indicator of alignment stability
   - Shows deviation from target
   - Status: Stable, Drifting, or Critical

#### AI Recommendations
- Automatically generated suggestions
- Identifies coverage gaps
- Suggests improvements
- WHY Mode shows detailed analysis

---

### 2. Question Generator

Navigate to: **Generate Questions**

#### Controls Panel
1. **Topic Selector**: Choose specific concepts
2. **Bloom Level Filters**: Select L1-L6 (multiple selection)
3. **Difficulty Slider**: Easy, Medium, Hard
4. **Student Persona**: 
   - Regular: Standard questions
   - Remedial: Simplified, supportive questions
   - Advanced: Challenging, higher-order questions

#### Generated Questions
Each question shows:
- **Question text**
- **Metadata tags**: CO, Bloom level, Difficulty
- **DNA Strip**: Visual representation of question characteristics
  - Blue segment: CO mapping
  - Purple segment: Bloom level
  - Amber segment: Difficulty
  - Pink segment: Cognitive load

#### Actions
- **Explain**: View AI reasoning (WHY Mode)
- **Edit**: Modify question text
- **Regenerate**: Create new variation
- **Accept**: Add to question bank

---

### 3. Question Bank Auditor

Navigate to: **Audit Paper**

#### Upload
1. Click **"Upload PDF"** or drag-and-drop
2. System parses question paper
3. Analysis begins automatically

#### Audit Summary
**Traffic Light Indicators:**
- 🟢 **Green (Pass)**: Meets all criteria
- 🟡 **Yellow (Warning)**: Minor issues detected
- 🔴 **Red (Fail)**: Critical problems found

**Categories:**
- CO Coverage
- Bloom Distribution
- Difficulty Balance
- Redundancy Check
- Rote Learning Risk

#### Issue List
Each issue shows:
- **Problem description**
- **Severity level**
- **Affected questions**
- **WHY explanation** (when enabled)
- **Auto-fix suggestion**

#### Auto-Fix Panel
- Review suggested improvements
- Click **"Fix Automatically"** to apply
- Manual override available

---

### 4. Outcomes Management

Navigate to: **Outcomes**

#### Syllabus Upload
1. Upload course syllabus (PDF)
2. System extracts Course Outcomes
3. Review and edit extracted COs

#### CO Editor
- Add/Edit/Delete Course Outcomes
- Set Bloom level for each CO
- Add descriptive text
- Map to topics

#### CO-PO Mapper
- Visual matrix of CO-PO relationships
- Set strength: Low, Medium, High
- Auto-suggested mappings (WHY Mode explains)
- Export for accreditation reports

---

### 5. Reports

Navigate to: **Reports**

#### Available Reports
1. **CO-PO Matrix**: Accreditation-ready format
2. **Bloom Distribution**: Cognitive level analysis
3. **Outcome Coverage**: Gap analysis
4. **Outcome Drift Timeline**: Historical trends

#### Export Options
- **PDF**: For documentation
- **DOCX**: For editing
- **Evidence Pack**: Complete accreditation bundle

#### Outcome Drift Timeline
- Semester-wise tracking
- Trend visualization
- Deviation alerts
- Topic-aware styling

---

## 👨‍🎓 Student Guide

### 1. Student Dashboard

Simplified view showing:
- **Welcome banner**
- **Skill overview**: Your progress across cognitive levels
- **Practice recommendations**

#### Skill Distribution Chart
- Visual representation of your strengths
- Simplified labels (no CO jargon):
  - Remember & Recall
  - Apply & Use
  - Analyze & Evaluate
  - Create & Design

### 2. Practice Questions

Browse available practice questions:
- Organized by skill level
- Clear difficulty indicators
- No complex academic terminology
- Progress tracking

### 3. Feedback Cards

Personalized suggestions:
- "Practice more on graph traversal"
- "You're strong in database queries"
- "Try advanced algorithms"

---

## 🎨 Topic-Aware Features

### Visual Metaphors by Topic

**Data Structures**: Connected nodes and tree structures
- Icons show hierarchical relationships
- Node-based visualizations

**Operating Systems**: Process lanes and timelines
- Parallel execution views
- Timeline-based charts

**Database Systems**: Tables and grids
- Grid-pattern visualizations
- Relational diagrams

**Machine Learning**: Neural network layers
- Layered architecture views
- Gradient flows

**Computer Networks**: Network topology
- Interconnected node patterns
- Protocol stack visualizations

### Dynamic Color Schemes
Each topic has unique primary, secondary, and accent colors that appear throughout:
- Chart colors
- Badge styles
- Button gradients
- Border highlights

---

## 🧠 AI Explainability (WHY Mode)

### How to Use
1. Click **WHY View toggle** in navbar
2. All AI decisions now show explanations
3. Hover over metrics for details
4. Issue cards show AI reasoning

### What You'll See
- **Confidence scores**: 0-100% for each decision
- **Reasoning text**: Plain language explanation
- **Data sources**: What the AI analyzed
- **Alternative suggestions**: Other options considered

### Example
Without WHY Mode:
> "CO4 needs more coverage"

With WHY Mode:
> "AI analyzed 156 questions and found only 45% coverage for CO4. Based on syllabus analysis, recommend 8 more questions targeting Apply and Analyze levels."

---

## 🔧 Tips & Best Practices

### For Question Generation
1. **Start broad**: Select multiple Bloom levels
2. **Review DNA strips**: Ensure balanced representation
3. **Use personas wisely**: Match to actual student needs
4. **Enable WHY Mode**: Learn from AI suggestions

### For Auditing
1. **Upload clean PDFs**: Better parsing accuracy
2. **Review all warnings**: Yellow flags matter
3. **Use auto-fix carefully**: Always review suggestions
4. **Export evidence**: Keep audit trails

### For Accreditation
1. **Regular drift monitoring**: Check timeline weekly
2. **Maintain CO-PO mapping**: Keep updated
3. **Export reports regularly**: Build evidence pack
4. **Document overrides**: Track manual changes

---

## 🎯 Keyboard Shortcuts

- `Ctrl/Cmd + K`: Quick topic selector
- `W`: Toggle WHY View (teacher only)
- `G`: Go to Generator
- `A`: Go to Auditor
- `D`: Go to Dashboard

---

## 🐛 Troubleshooting

### Topic selector not updating visuals?
- Refresh the page
- Check browser compatibility (Chrome/Firefox/Safari recommended)

### WHY Mode explanations not showing?
- Ensure toggle is enabled
- Hover directly over metric cards
- Some features require teacher role

### Charts not rendering?
- Clear browser cache
- Ensure JavaScript is enabled
- Try different browser

---

## 📞 Support

- **Email**: support@outcometrix.demo
- **GitHub**: github.com/outcometrix/app
- **Documentation**: outcometrix.demo/docs

---

## 🎓 Demo Disclaimer

This is a **demonstration prototype** showcasing:
- Topic-aware adaptive interfaces
- Explainable AI features
- Modern educational technology

**Not for production use.** All data is simulated.

---

**Last Updated**: December 2024  
**Version**: 1.0 (Hackathon Demo)
