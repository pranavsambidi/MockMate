# MockMate - An Interactive Interview Coach

Overview:
MockMate is an AI-driven mock interview platform that simulates real-time interview scenarios and delivers intelligent, structured feedback to users. 
Leveraging Google’s Gemini API, the system is custom-trained to conduct interview sessions, 
ask domain-specific questions, and evaluate candidate responses with contextual awareness.
This project empowers users to practice interviews effectively and receive personalized feedback, 
making it an invaluable tool for job seekers and students preparing for both technical and behavioural interviews.

---

# Features

- Gemini API Integration  
  Utilizes Google’s Gemini AI model, fine-tuned for realistic interview dialogues.

- Voice Input  
  Users can respond using voice input for a real interview-like experience.

- Intelligent Feedback  
  Scores and detailed recommendations in JSON format for self-assessment.

- Feedback Storage:
  Interview responses and feedback are stored securely in MongoDB for persistence and future use.

- Authentication  
  Secure login via Google OAuth using NextAuth.js.

- Dynamic Conversation Flow  
  Questions adapt based on previous answers, creating a personalized interview.

- Deployed on Vercel  
  Fast, scalable, and serverless deployment using Vercel.

---

# How It Works

- The app initiates an AI-powered interview using the Gemini model.
- Users answer each question via voice.
- Once the interview ends, the model returns a JSON-formatted evaluation with individual question scores and overall feedback.
- Ideal for job seekers, students, and professionals preparing for interviews.

---

# Tech Stack

Frontend:  
Next.js | React | Tailwind CSS | NextUI | React Toastify

Backend:  
Node.js | Express.js | NextAuth | Google Gemini API

Database: MongoDB (via Mongoose)

AI & Voice: Google Gemini Pro | Web Speech API

Deployment: Vercel

---

# Setup Instructions

1. Clone the repository
   ```bash
   git clone https://github.com/pranavsambidi/MockMate.git
   cd interview-bot
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env.local` file with the following variables:
   ```env
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. Run the app locally
   ```bash
   npm run dev
   ```

---




