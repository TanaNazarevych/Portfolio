import React from "react";
import anatomyImg from "../assets/anatomy.png";
import todoImg from "../assets/todo.png";
import chefImg from "../assets/chef.png";
import heartImg from "../assets/heart.png";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Anatomy AR Tool",
    description: "An interactive augmented reality tool for exploring human anatomy.",
    image: anatomyImg,
    demo: "https://www.linkedin.com/posts/tanya-nazarevych-861840266_im-excited-to-share-that-ive-recently-completed-activity-7348914558951936000-bqIQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFDiMkB2dZGY9BWN0Y0421r4kWtJ3ROrcI",
    phone: "https://anatomydev.webschool.au/",
  },
  {
    title: "TO-DO App",
    description: "A sleek and intuitive to-do list app built with React, Firebase, and Ant Design.",
    image: todoImg,
    github: "https://github.com/TanaNazarevych/todo-app",
    demo: "https://todo-app-by-tanya.vercel.app/",
  },
  {
    title: "Chef Community Landing Page",
    description: "A fully responsive, visually rich landing page for a chef-booking concept.",
    image: chefImg,
    github: "https://github.com/TanaNazarevych/Private-Chef",
    demo: "https://tananazarevych.github.io/Private-Chef/",
  },
  {
    title: "InteractiveHeartBeat",
    description: "This project simulates the rhythmic pulsing of a human heartbeat",
    image: heartImg,
    github: "https://github.com/TanaNazarevych/InteractiveHeartBeat",
    demo: "https://interactive-heart-beat.vercel.app/",
  },
];

const FeaturedProjects = () => (
  <section className="py-48">
    <h2 className="text-4xl font-bold text-center mb-24 text-indigo-900">Featured Projects</h2>
    <div className="grid md:grid-cols-2 gap-12 px-4 md:px-12 mx-auto" style={{maxWidth: '900px'}}>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  </section>
);

export default FeaturedProjects;
