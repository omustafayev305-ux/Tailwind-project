import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BeliefSection from '../components/BeliefSection';
import StorySection from '../components/StorySection';

function Home () {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <StorySection/>
      <BeliefSection/> 
    </div>
  )
}
export default Home;