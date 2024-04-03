import Cheetah from "../../Assets/Carnivores/Cheetah/Cheetah1.jpg";
import Hyenas from "../../Assets/Carnivores/Hyenas/Hyenas1.jpg";
import Lion from "../../Assets/Carnivores/Lion/Lion1.jpg";
import Tiger from "../../Assets/Carnivores/Tiger/Tiger1.jpg";
import Wolf from "../../Assets/Carnivores/Wolf/Wolf1.jpg";
import DataProps from "./DataProps";

const Carnivores = () => {
  return (
    
      <div data-aos="fade-up"
      data-aos-duration="3000">
        <h1 className="lobster tracking-widest text-2xl text-center md:text-4xl md:py-2 bg-[#06040A] text-white md:ml-[-150px]">
          CARNIVORE ANIMALS
        </h1>
        <DataProps
          image={Cheetah}
          name="CHEETAH"
          info="The cheetah  is a large cat with a tawny to creamy white or pale buff fur that is marked with evenly spaced, solid black spots. It is the fastest land animal, capable of running at 80 to 98 km/h. While females lead a nomadic life searching for prey in large home ranges, males are more sedentary and instead establish much smaller territories in areas with plentiful prey and access to females. "
        />

        <DataProps
          image={Hyenas}
          name="HYENAS"
          info="The hyena is a large mammal belonging to the order Carnivora. They are closely related to dogs and are known for their strong bite force.They have a highly developed sense of smell, which is important for detecting their prey in the wild.Hyenas originated in the jungles of Miocene Eurasia 22 million years ago, when most early feliform species were still largely arboreal. The first ancestral hyenas were likely similar to the modern African civet."
        />

        <DataProps
          image={Lion}
          name="LION"
          info="The lion, Panthera leo, is a large and powerful wild cat belonging to the order Carnivora. It is native to various parts of Africa and the Arabian Peninsula.Lions are well-known for their powerful roar, which can be heard over a distance of several kilometers.One of the most widely recognised animal symbols in human culture, the lion has been extensively depicted in sculptures and paintings. "
        />

        <DataProps
          image={Tiger}
          name="TIGER"
          info="The tiger, Panthera tigris, is a large and powerful wild cat belonging to the order Carnivora. They are native to various parts of Asia, including India, China, Russia, and South Korea.Tigers are large cats with a unique striped pattern.The tiger is among the most recognisable and  It featured prominently in the ancient mythology and folklore of cultures throughout its historic range and continues to be depicted in modern films and literature. "
        />

        <DataProps
          image={Wolf}
          name="WOLF"
          info="The wolf, Canis lupus, is a large mammal belonging to the order Carnivora. They are found in various parts of the world, including North America, Eurasia, and Northern Africa.Wolves have a sleek, slender build with a long, bushy tail.The global wild wolf population was estimated to be 300,000 in 2003 and is considered to be of Least Concern by the International Union for Conservation of Nature (IUCN). Wolves have a long history of interactions with humans, having been despised and hunted in most pastoral communities because of their attacks on livestock."
        />
      </div>
   
  );
};

export default Carnivores;
