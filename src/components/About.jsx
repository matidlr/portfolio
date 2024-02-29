import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className="align-element grid md:grid-cols-2
      items-center gap-16">
        <img src={aboutSvg} className='w-full h-64'/>
        <article>
          <SectionTitle text='code and coffee leading-loose'/>
          <p className='text-slate-600'>I,m a front end web developer from Argentina. I love programming 
            and i like to learn new thinks all the time. I started a few years 
            ago creating web pages on Wordpress and then i started to learn programming 
            languages in order to improve my skills.</p>
        </article>
      </div>
    </section>
  )
}

export default About