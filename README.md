# 🧠 Action Potential Simulator

An interactive web-based simulator to visualize and understand the behavior of action potentials in neurons using well-established biophysical models.

## 🚀 Live Demo
🌐 [Start Simulating](neuro-project-cu2z.vercel.app)

---

## 🧩 Project Overview

This project is a full-stack, visually-rich simulator that allows users to learn about **neuron action potentials** and simulate them using classic computational neuroscience models. The website is designed to be both **educational and interactive**, making it ideal for students, educators, and researchers in neuroscience and biomedical engineering.

---

## 🧱 Website Structure

- **Landing Page**
  - Introduces the concept of action potentials.
  - Displays a detailed neuron diagram.
  - Explains the purpose of the simulator.
  - Lists all supported models with brief descriptions.
  - Contains a call-to-action button to launch the simulator.

- **Simulator Page**
  - **Left Panel:** Tutorials and explanations for each algorithm.
  - **Right Panel:**
    - Top: IDE-style interface where users can input parameters.
    - Bottom: Graphical visualization of the resulting action potential.
  - Includes a dropdown menu to switch between models.
  - Allows resizing of the tutorial section.
  - Fully supports **dark mode** (text + diagrams).

---

## 🧮 Supported Models

1. **Hodgkin-Huxley Model**  
   The classic biophysical model explaining ion-channel dynamics behind action potentials.

2. **FitzHugh-Nagumo Model**  
   A simplification of Hodgkin-Huxley, useful for qualitative analysis.

3. **Morris-Lecar Model**  
   A two-variable model describing oscillatory electrical activity in neurons.

4. **Izhikevich Model**  
   A computationally efficient model that balances biological accuracy with simulation performance.

---

## ✨ Features

- 📚 Educational tutorials for each algorithm.
- 🧪 Real-time simulation with interactive parameters.
- 🌙 Dark mode for visual comfort.
- 🖼️ Responsive and modern UI using React and Tailwind CSS.
- 🧭 Easy navigation between theory and simulation.
- ⚡ Fast loading and hosted using **GitHub Pages / Vercel**.

---

## 🛠️ Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Routing**: React Router
- **Graph Plotting**: Chart.js / Plotly (or your preferred library)
- **Hosting**: GitHub Pages / Vercel
- **Development Tools**: Boltz (for scaffolding)

---

## 📂 Project Setup

```bash
# Clone the repo
git clone https://github.com/your-username/NeuroProject.git
cd NeuroProject

# Install dependencies
npm install

# Run locally
npm start
