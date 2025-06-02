<script setup>
const skills = [
  "PHP (Laravel, CodeIgniter)",
  "Vue.js",
  "JavaScript / jQuery",
  "MySQL / PostgreSQL",
  "REST API Development and Integration",
  "DevOps & CI/CD",
  "Linux Administration",
  "Cloud Infrastructure",
  "M-Pesa, Bank & KRA eTims APIs",
  "Git / GitHub",
]
</script>

<template>
  <section class="about">
    <div class="container">
      <h2>About Me</h2>
      <p class="summary">
        I'm a DevOps-oriented software developer with over 5 years of experience in backend development, IT support, and cloud infrastructure.
        I specialize in building stable, API-driven systems and integrating third-party services like M-Pesa, KRA eTims, and more.
        For my last project, I built an AI-based RAG agent for medical knowledge delivery. Currently, I’m working on Mwanafunzi Power, a Laravel-based school management system
        that provides a seamless way for key stakeholders to view and act on relevant information.
      </p>

      <div class="skills-grid">
        <div class="skill-card" v-for="(skill, index) in skills" :key="index">
          {{ skill }}
        </div>
      </div>

      <p class="interests">
        <strong>Interests:</strong> System automation, AI tools, secure network architecture, and technical problem-solving.
      </p>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: #f8f9fa;
  padding: 4rem 1rem;
}

.container {
  max-width: 960px;
  margin: auto;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
}

.summary {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #444;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.skill-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  font-weight: bold;
  font-size: 0.95rem;
  color: #333;
}

.interests {
  font-size: 1rem;
  color: #555;
}
</style>
