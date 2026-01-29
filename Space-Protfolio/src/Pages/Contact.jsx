import "../Styles/Contact.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! I'll get back to you soon 🚀");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    { icon: "📧", label: "Email", value: "harshal@example.com", link: "mailto:harshal@example.com" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/harshal", link: "#" },
    { icon: "🐙", label: "GitHub", value: "github.com/harshal", link: "#" },
    { icon: "🐦", label: "Twitter", value: "@harshal_dev", link: "#" }
  ];

  return (
    <section className="contact">
      <div className="contact-container">
        <h1>Get In Touch 💫</h1>
        <p className="contact-subtitle">Let's explore the cosmos of opportunities together!</p>

        <div className="contact-content">
          <div className="contact-methods">
            <h2>Reach Me At</h2>
            <div className="methods-grid">
              {contactMethods.map((method, idx) => (
                <a key={idx} href={method.link} className="method-card">
                  <div className="method-icon">{method.icon}</div>
                  <h3>{method.label}</h3>
                  <p>{method.value}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message 🚀</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;