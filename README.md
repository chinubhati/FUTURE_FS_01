Chinu Bhati — React + Tailwind Portfolio (Ready-to-run)

What this is:
- A pre-filled React + Tailwind portfolio project for your Future Interns Task 1.
- Includes EmailJS-ready contact form (replace placeholders).
- Dual theme (light / dark) toggle included.

How to run locally:
1. Unzip the project folder.
2. Open terminal in project root.
3. Run:
   npm install
   npm start
4. Visit http://localhost:3000

EmailJS setup (required for contact form to work):
1. Go to https://www.emailjs.com/ and sign up.
2. Add Email Service (connect Gmail) — note the SERVICE_ID.
3. Create an Email Template — note the TEMPLATE_ID.
4. Get your PUBLIC_KEY.
5. In src/components/Contact.jsx replace:
   - YOUR_SERVICE_ID
   - YOUR_TEMPLATE_ID
   - YOUR_PUBLIC_KEY
   with the actual values.

Build for production:
- npm run build

GitHub Repo name suggestion for submission:
- FUTURE_FS_01

If you want any content changes (projects, text, images), tell me and I will update the zip.