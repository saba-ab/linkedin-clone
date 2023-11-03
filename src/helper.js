import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyBF58jdszWDXzKTMHNnbHNtmMJFqmtGQow",
  authDomain: "linkedin-clone-cd13e.firebaseapp.com",
  projectId: "linkedin-clone-cd13e",
  storageBucket: "linkedin-clone-cd13e.appspot.com",
  messagingSenderId: "954340548503",
  appId: "1:954340548503:web:c3e779dac393fe28012ed2",
};
export const app = initializeApp(firebaseConfig);
export function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}
export function isValidPassword(password) {
  return password.length >= 8 && password.length <= 22;
}
export function passwordsMatch(password, confirmPassword) {
  return password === confirmPassword;
}
export function isValidFullName(fullName) {
  return fullName.trim().length > 0;
}
export const footerListItems = [
  "About",
  "Accessibility",
  "User Agreement",
  "Privacy Policy",
  "Cookie Policy",
  "Copyright Policy",
  "Brand Policy",
  "Guest Controls",
  "Community Guidelines",
  "Language",
];
export const linkedInSections = [
  {
    title: "General",
    items: [
      "Sign Up",
      "Help Center",
      "About",
      "Press",
      "Blog",
      "Careers",
      "Developers",
    ],
  },
  {
    title: "Browse LinkedIn",
    items: ["Learning", "Jobs", "Salary", "Mobile", "Services", "Products"],
  },
  {
    title: "Business Solutions",
    items: ["Talent", "Marketing", "Sales", "Learning"],
  },
  {
    title: "Directories",
    items: [
      "Members",
      "Jobs",
      "Companies",
      "Featured",
      "Learning",
      "Posts",
      "Articles",
    ],
  },
];
