 
function About(){
    
    return (
    
    <div>
        <div className="row section-intro-about">
        <div className="col-twelve">
        {/* <h5>About</h5> */}
        <h1>Let me introduce myself.</h1>

        {/* <div className="intro-info">
            <p className="lead">Lorem ipsum Exercitation culpa qui dolor consequat exercitation fugiat laborum ex ea eiusmod 
            ad do aliqua occaecat nisi ad irure sunt id pariatur Duis laboris amet exercitation veniam labore consectetur 
            ea id quis eiusmod.</p>
        </div>  */}
        </div>   		
    </div> 

<div className="row about-content">
    <div className="col-five tab-full">
        <img src="https://media.istockphoto.com/id/537477110/photo/side-view-image-of-a-young-handsome-man.jpg?s=612x612&w=0&k=20&c=EfYjo_Z4uMCaJW9GC30kHhC4s8qeAAPTtitj-8K0X7c=" alt="React Image" />
    </div>

    <div className="col-seven tab-full">
        <p>Hey there! I'm a Computer Engineering graduate with over 7 years of experience in the tech industry, and I've got quite the toolkit under my belt!</p>
        <p>I'm fluent in languages like C#, Java, and JavaScript, and I'm no strong in frameworks like .NET Core, Angular, and React.js. Whether it's building RESTful APIs, 
            diving into microservices architecture, or wrangling data with SQL and MongoDB, I'm your go-to guy.</p>
        <p>For me, it's more than just code. I specialize in crafting tailored solutions, from elegant interfaces in HTML/CSS to scalable systems in Azure. Challenges drive me, 
            whether it's solving problems, meeting business needs, or managing projects with finesse</p>
        <p>Beyond technical skills, I excel in client and customer relations, team and risk management, and mentoring.</p>
        <p>When I'm not coding, I'm cheering for my favorite sports teams or diving into history books. 
            And if you want to chat about space, stars, or geopolitics, I'm all ears.</p>
        <p>So, if you're looking for a tech-savvy problem solver and clear thinker who's not afraid to think outside the box, you've come to the right place. Let's team up and create something awesome together!</p>
    </div>

</div>

<div className="row button-section">
    <div className="col-twelve">
        <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
        <a href="#" title="Download CV" className="button button-primary">Download CV</a>
    </div>   		
</div>

     </div>
    )
}

export default About;
