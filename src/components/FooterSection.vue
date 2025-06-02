<script setup>
const year = new Date().getFullYear()

const socials = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/edwin-ong-aro-817a97b6/",
  },
  {
    label: "GitHub",
    url: "https://github.com/eddymac-code",
  },
]
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="socials">
        <a
          v-for="(link, index) in socials"
          :key="index"
          :href="link.url"
          target="_blank"
          rel="noopener"
        >
          {{ link.label }}
        </a>
      </div>
      <p>&copy; {{ year }} Edwin Oduor Ong’aro. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1e3c72;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
}

.footer-container {
  max-width: 720px;
  margin: auto;
}

.socials {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.socials a {
  color: white;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}

.socials a:hover {
  color: #ddd;
}

p {
  font-size: 0.9rem;
}
</style>
