import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './app.css'

// Main Pages
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import NotFound from './components/NotFound'
import QRCodeScanner from './components/QRCodeScanner'
import BuyToken from './components/BuyToken'

// Auth Components
import LoginForm from './components/Auth/LoginForm'
import SignupForm from './components/Auth/SignupForm'
import StaffLogin from './components/Auth/StaffLogin'
import Admin from './components/Auth/Admin'

// Dashboard Components
import StudentProfile from './components/dashboard/StudentProfil'
import StudentContent from './components/dashboard/StudentContent'
import StaffProfile from './components/dashboard/StaffProfile'
import AdminProfile from './components/dashboard/AdminProfil'
import AdminContent from './components/dashboard/AdminContent'
import MealHistory from './components/dashboard/MealHistory'

// Complaint Components
import ComplaintForm from './components/complaint/ComplaintForm'
import ComplaintList from './components/complaint/ComplaintList'
import AdminComplaint from './components/complaint/AdminComplaint'

// Feedback Components
import FeedbackForm from './components/feedback/FeedbackForm'
import FeedbackList from './components/feedback/FeedbackList'

// Voting Components
import CreatePoll from './components/voting/CreatPoll'
import VotingForm from './components/voting/VotingForm'
import PollResults from './components/voting/PollResults'
import CandidateList from './components/voting/CandidateList'

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/qr-scanner" element={<QRCodeScanner />} />
        <Route path="/buy-token" element={<BuyToken />} />

        {/* Auth Routes */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/staff" element={<StaffLogin />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/admin" element={<Admin />} />

        {/* Dashboard Routes */}
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/student-dashboard" element={<StudentProfile />} />
        <Route path="/student-content" element={<StudentContent />} />
        <Route path="/staff-dashboard" element={<StaffProfile />} />
        <Route path="/admin-dashboard" element={<AdminProfile />} />
        <Route path="/admin-content" element={<AdminContent />} />
        <Route path="/meal-history" element={<MealHistory />} />

        {/* Complaint Routes */}
        <Route path="/complaints" element={<ComplaintList />} />
        <Route path="/complaint-form" element={<ComplaintForm />} />
        <Route path="/complaint-list" element={<ComplaintList />} />
        <Route path="/admin-complaint" element={<AdminComplaint />} />

        {/* Feedback Routes */}
        <Route path="/feedback-form" element={<FeedbackForm />} />
        <Route path="/feedback-list" element={<FeedbackList />} />

        {/* Voting Routes */}
        <Route path="/create-poll" element={<CreatePoll />} />
        <Route path="/voting" element={<VotingForm />} />
        <Route path="/poll-results" element={<PollResults />} />
        <Route path="/candidate-list" element={<CandidateList />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
