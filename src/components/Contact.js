import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>Contact</span> Us
        </h1>
        <div class="row">
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6976.923227469524!2d78.26869030743133!3d29.032924848572126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390b988e4dc35e93%3A0xe2a195c957225fde!2sRampur%20Nazrana%2C%20Uttar%20Pradesh%20246736!5e0!3m2!1sen!2sin!4v1713158640039!5m2!1sen!2sin"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"/>

          <form action="">
            <h3>Get in Touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="Name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="Email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder=" Phone Number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
