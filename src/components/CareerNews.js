// src/components/CareerNews.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaNewspaper, FaCalendarAlt } from "react-icons/fa"; // Importing icons
import Sidebar from "./sidebar"; // Import Sidebar component
import "./CareerNews.css"; // Import the enhanced styles

// Sample JSON data for news articles (In real life, this could come from an API)
const newsData = [
  {
    id: 1,
    title: "Tech Industry Jobs Soar in 2025",
    description:
      "The tech industry is growing rapidly, with demand for software developers and engineers at an all-time high. Check out the latest trends in the tech job market.",
    link: "#",
    date: "March 15, 2025",
  },
  {
    id: 2,
    title: "Healthcare Careers: The Fastest Growing Sector",
    description:
      "Healthcare jobs are expected to grow exponentially over the next decade. Explore opportunities in nursing, healthcare management, and telemedicine.",
    link: "#",
    date: "March 18, 2025",
  },
  {
    id: 3,
    title: "Top Remote Jobs for 2025",
    description:
      "Remote work is here to stay. Discover the best remote job opportunities in fields like marketing, tech, and education.",
    link: "#",
    date: "March 20, 2025",
  },
  {
    id: 4,
    title: "How to Land Your Dream Job in Marketing",
    description:
      "Marketing is a rapidly evolving field. Learn how to position yourself as a top candidate for marketing roles in 2025.",
    link: "#",
    date: "March 25, 2025",
  },
  {
    id: 5,
    title: "Job Search Trends: What Employers Are Looking for in 2025",
    description:
      "Understand the latest job search trends and what employers prioritize when hiring new talent in 2025.",
    link: "#",
    date: "March 28, 2025",
  },
  {
    id: 6,
    title: "Data Science Careers: The Future of Analytics",
    description:
      "With the rise of big data, data science is one of the most promising career paths. Learn more about the skills required and how to get started.",
    link: "#",
    date: "April 1, 2025",
  },
  {
    id: 7,
    title: "Cybersecurity Careers: Protecting the Digital World",
    description:
      "Cybersecurity professionals are in high demand as the world becomes increasingly digital. Explore the top job roles in cybersecurity and how to enter the field.",
    link: "#",
    date: "April 5, 2025",
  },
  {
    id: 8,
    title: "Artificial Intelligence and Machine Learning: A Career Revolution",
    description:
      "AI and Machine Learning are changing the workforce. Learn how these technologies are shaping job opportunities and which skills are needed to excel in these fields.",
    link: "#",
    date: "April 7, 2025",
  },
  {
    id: 9,
    title: "Financial Sector Careers: Navigating a Changing Industry",
    description:
      "The financial sector is evolving, with a focus on digital banking and fintech. Discover the best career paths and opportunities in this ever-changing field.",
    link: "#",
    date: "April 10, 2025",
  },
  {
    id: 10,
    title: "Sustainable Careers: Green Jobs for the Future",
    description:
      "Sustainability is at the forefront of business practices. Find out how to start a career in the growing green jobs sector, from renewable energy to environmental policy.",
    link: "#",
    date: "April 12, 2025",
  },
  {
    id: 11,
    title: "Sales Careers: The Key to Unlocking Business Growth",
    description:
      "Sales professionals are always in demand. Learn about the various sales roles across industries and the skills needed to succeed in this competitive field.",
    link: "#",
    date: "April 14, 2025",
  },
  {
    id: 12,
    title: "Career in Blockchain: The Future of Finance",
    description:
      "Blockchain technology is reshaping the world of finance. Learn about the various career opportunities in blockchain development, smart contracts, and decentralized finance (DeFi).",
    link: "#",
    date: "April 17, 2025",
  },
  {
    id: 13,
    title: "The Rise of Freelancing: Opportunities for Independent Workers",
    description:
      "Freelancing is on the rise, with more professionals opting for flexible work arrangements. Explore the best freelancing opportunities and how to build a successful freelance career.",
    link: "#",
    date: "April 20, 2025",
  },
  {
    id: 14,
    title: "How to Start a Career in UX/UI Design",
    description:
      "User Experience (UX) and User Interface (UI) design are critical in product development. Learn how to break into the field and design intuitive, user-friendly digital experiences.",
    link: "#",
    date: "April 23, 2025",
  },
  {
    id: 15,
    title: "Startups: The Best Job Opportunities in Entrepreneurial Ventures",
    description:
      "Startups offer unique job opportunities, often in fast-paced, innovative environments. Find out how to get started in a startup and what roles are the most in-demand.",
    link: "#",
    date: "April 25, 2025",
  },
];

const CareerNews = () => {
  const [randomNews, setRandomNews] = useState([]);

  useEffect(() => {
    // Shuffle the news data and select 3 random articles
    const shuffledNews = [...newsData].sort(() => 0.5 - Math.random());
    setRandomNews(shuffledNews.slice(0, 6));
  }, []);

  return (
    <div className='career-news-container'>
      <Sidebar /> {/* Include Sidebar here */}
      <div className='career-news-content'>
        <h2 className='career-news-header'>Career News & Alerts</h2>
        <div className='career-news-cards'>
          {randomNews.map((article) => (
            <div key={article.id} className='news-card'>
              <div className='news-card-header'>
                <FaNewspaper className='news-icon' />
                <h3 className='news-title'>{article.title}</h3>
              </div>
              <p className='news-description'>{article.description}</p>
              <Link to={article.link} className='news-link'>
                Read More
              </Link>
              <div className='news-date-container'>
                <FaCalendarAlt className='date-icon' />
                <span className='news-date'>{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerNews;
