import React from 'react'

const Contacme = () => {
  return (
      <section id="contactme">
          <div>
              <h1>Contact me</h1>
                  <ul>
                      <li>
                          <img src="/mail.svg" alt="" />
                          <a href="mailto:raghuramramvali4@gmail.com">Mail</a>
                      </li>
                      <li>
                          <img src="/linkedin.svg" alt="" />
                          <a
                              href="https://www.linkedin.com/in/vali-mohana-raghu-rami-reddy"
                              target="_blank"
                          >
                              LinkedIn
                          </a>
                      </li>
                      <li>
                          <img src="/github.svg" alt="" />
                          <a
                              href="https://github.com/raghuramvali20"
                              target="_blank"
                          >
                              Git Hub
                          </a>
                      </li>
                      <li>
                        <img src="/instagram.svg" alt="" />
                          <a
                              href="https://www.instagram.com/raghu_ram_reddy_20/"
                              target="_blank"
                          >
                              Instagram
                          </a>
                      </li>
                  </ul>
          </div>
      </section>
  );
}

export default Contacme