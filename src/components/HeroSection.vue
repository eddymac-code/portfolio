<script setup>
// No logic needed yet
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Edwin Oduor Ong’aro</h1>
      <h2>Software Developer & DevOps Specialist</h2>
      <p>
        Automating infrastructure, integrating APIs, and building reliable systems for healthcare, finance, and enterprise.
      </p>

      <div class="buttons">
        <a href="/resume.pdf" download class="btn">Download Resume</a>
        <a href="#contact" class="btn secondary">Contact Me</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 4rem 1rem;
  background: linear-gradient(to right, #1e3c72, #2a5298);
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: auto;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn {
  background: white;
  color: #1e3c72;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s;
}

.btn:hover {
  background: #e6e6e6;
}

.secondary {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.secondary:hover {
  background: white;
  color: #1e3c72;
}

@media (min-width: 600px) {
  .buttons {
    flex-direction: row;
    justify-content: center;
  }
}
</style>
