import React from 'react'


const About = () => {
  return (<>
    <section className="py-8" id="aboutme">
    <div className="container m-auto px-4">
      <h2 className="text-2xl font-semibold">About me</h2>
      <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
        <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
          <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
          <p>
            Graduated KTC (Krasnodar Technical College) and for about two
            years worked with high voltage (35, 110kV) substations as the
            specialty electrician of emergency mobile crew. Later
            qualified as a Crossfit trainer.
          </p>
        </div>
        <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
          <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
          <p>
            Underwent a digital marketing course and started to work as a
            PPC and project manager in a local web studio. After 3 months
            started my own freelance practice.
          </p>
        </div>
        <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
          <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
          <p>
            Became more interested in IT and decided to try programming.
            Underwent Java course and made a project.
          </p>
        </div>
        <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
          <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
          <p>
            Worked out in which field I want to build a developer's career
            and started to learn Frontend Development.
          </p>
        </div>
      </div>
    </div>
  </section>
        <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
            
            <div>
            <ul className="flex gap-4">
                <li>
                <a>
                    <img src={Facebook} className="w-5" />
                </a>
                </li>
                <li>
                <a>
                    <img src={LinkedIn} className="w-5" />
                </a>
                </li>
                <li>
                <a>
                    <img src={Instagram} className="w-5" />
                </a>
                </li>
            </ul>
            </div>
        </div>
        </footer>
        </>
  )
}

export default About