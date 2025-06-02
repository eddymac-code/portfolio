<script setup>
// You can replace this with your Formspree endpoint
const formAction = 'https://formspree.io/f/xgvyezpv'

import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: '',
})

const success = ref(false)
const loading = ref(false)
const error = ref(false)

const handleSubmit = async () => {
  loading.value = true
  error.value = false
  success.value = false

  try {
    const response = await fetch(formAction, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.value),
    })

    if (response.ok) {
      success.value = true
      formData.value = { name: '', email: '', message: '' } // Clear form
    } else {
      error.value = true
    }
  } catch (error) {
    error.value = true
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2>Contact Me</h2>

      <form @submit.prevent="handleSubmit" class="contact-form">
        <input type="text" v-model="formData.name" placeholder="Your Name" required />
        <input type="email" v-model="formData.email" placeholder="Your Email" required />
        <textarea
          v-model="formData.message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" :disabled="loading">
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>
      </form>

      <p v-if="success" class="success-msg">✅ Message sent successfully!</p>
      <p v-if="error" class="error-msg">❌ Something went wrong. Try again later.</p>

      <div class="resume-link">
        <a href="/resume.pdf" download class="download-btn">Download Resume</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 4rem 1rem;
  background: #f0f4f8;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
}

.container {
  max-width: 720px;
  margin: auto;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #222;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
}

.contact-form button {
  padding: 0.75rem;
  border: none;
  background-color: #2a5298;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-family: inherit;
}

.contact-form button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.contact-form button:hover:enabled {
  background-color: #1e3c72;
}

.success-msg {
  margin-top: 1rem;
  color: green;
  font-weight: bold;
}

.error-msg {
  margin-top: 1rem;
  color: red;
  font-weight: bold;
}

.resume-link {
  margin-top: 2rem;
}

.download-btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #2a5298;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
}

.download-btn:hover {
  background-color: #1e3c72;
}
</style>
