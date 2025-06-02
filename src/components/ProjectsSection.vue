<script setup>
const projects = [
  {
    title: "Mwanafunzi Power",
    description:
      "A laravel school-based system that allows seamless retrieval of school information, including student records among other school-based tasks.",
    tech: ["Laravel 12", "JavaScript", "TailwindCSS"],
    link: "#",
  },
  {
    title: "Zen AI Diabetes Assistant",
    description:
      "An AI-powered knowledge agent that provides diabetic patients with tailored answers and insights. Part of a multi-agent system for healthcare.",
    tech: ["Python", "Langchain", "AWS Bedrock", "Pinecone", "RDS", "FastAPI"],
    link: "#",
  },
  {
    title: "Bank Express API",
    description:
      "A Laravel-based REST API that enables bank notification services for different billers / clients. Currently works for Equity Bank",
    tech: ["Laravel 12", "REST API", "PHP", "JSON"],
    link: "#",
  },
  {
    title: "KRA eTIMS API Connector",
    description:
      "A Laravel-based backend that facilitates real-time tax compliance by connecting ERP systems with KRA’s eTIMS API.",
    tech: ["Laravel", "REST API", "PHP", "JSON"],
    link: "#",
  },
  {
    title: "Loan Management System – Orao Investments",
    description:
      "A full-stack system that helps track loans, generate reports, and manage repayments for financial clients.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "Hotel Management System – Conrad Resort",
    description:
      "A booking and POS solution tailored to hotel operations. Supports guest check-in/out, restaurant orders, and billing.",
    tech: ["PHP", "MySQL", "Bootstrap", "jQuery"],
    link: "#",
  },
]
</script>

<template>
  <section class="projects">
    <div class="container">
      <h2>Projects</h2>
      <div class="projects-grid">
        <div class="project-card" v-for="(project, index) in projects" :key="index">
          <h3>{{ project.title }}</h3>
          <p class="description">{{ project.description }}</p>
          <ul class="tech">
            <li v-for="(item, idx) in project.tech" :key="idx">{{ item }}</li>
          </ul>
          <a v-if="project.link !== '#'" :href="project.link" class="project-link" target="_blank">View Project</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background: #fff;
  padding: 4rem 1rem;
}

.container {
  max-width: 960px;
  margin: auto;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #222;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.project-card {
  border: 1px solid #eee;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
  background: #f9f9f9;
}

.project-card h3 {
  margin-bottom: 0.5rem;
  color: #1e3c72;
  font-size: 1.2rem;
}

.description {
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
  color: #444;
}

.tech {
  list-style: none;
  padding: 0;
  margin-bottom: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: #333;
}

.tech li {
  background: #e3e3e3;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.project-link {
  display: inline-block;
  margin-top: 0.5rem;
  text-decoration: none;
  color: #2a5298;
  font-weight: bold;
}
</style>
