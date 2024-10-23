import React from "react";
import cssStyle from "./hero.module.css"
const Herosection =() => {
    return (
        <div className={cssStyle.hero}>
        <h6 className={cssStyle.herotitle}>Introduction</h6>
        <p className={cssStyle.herosubtitle}>Hi, my name is Javeria Kanwal. I am 20 years old and currently pursuing a Bachelor's degree in Commerce. I am also a dedicated student enrolled in the Governor Sindh Initiative (GIAIC) program, where I am part of Quarter 2. My passion lies in learning new technologies, especially web development, and enhancing my skills in programming. I have experience in building websites using HTML, CSS, and JavaScript, and I am currently expanding my knowledge in Next.js. In addition to my technical skills, I am always eager to explore opportunities for growth and learning.</p>
      <button className={cssStyle.herobutton}>Learn More</button>
      </div>
    )
};

export default Herosection;