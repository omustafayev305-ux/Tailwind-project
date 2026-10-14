import Greens from "../assets/greens.png"
import Vegetables from "../assets/vegetables.png"

function StorySection () {
  return(
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 pb-20">
       <div>
        <img
        src={Greens}
        alt="fresh greens"
        className="w-full h-[300px] md:h-[600px] object-cover"
        />
       </div>
       <div className="flex flex-col mt-20">
         <img
         src={Vegetables}
         alt="fresh vegetables"
         className="w-full h-[250px] md:h-[450px] object-cover"
         />
        <p className="text-sm mt-4 text-gray-700">
       <span className="font-semibold">
        Central California
       </span> {" "}
          The person who grew these was located in Central California.
        </p>
       </div>
    </section>
  )
}
export default StorySection;