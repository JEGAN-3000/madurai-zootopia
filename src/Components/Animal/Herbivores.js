import deer1 from "../../Assets/Herbivores/Deer/Deer1.jpg";
import giraffe1 from "../../Assets/Herbivores/Giraffe/Giraffe1.jpg";
import horse1 from "../../Assets/Herbivores/Horse/Horse1.jpg";
import panda1 from "../../Assets/Herbivores/Panda/Panda1.jpg";
import rabbit1 from "../../Assets/Herbivores/Rabbit/Rabbit1.jpg";
import DataProps from "./DataProps";

const Herbivores = () => {
  return (
   
      <div className="animalDataContainer  " data-aos="fade-up"
      data-aos-duration="3000">
        <h1 className="lobster  md:ml-[-150px] tracking-widest text-2xl text-center md:text-4xl md:p-2 bg-[#06040A] text-white">
          HERBIVORE ANIMALS
        </h1>
        <DataProps
          image={deer1}
          name="DEER"
          info="The deer, scientifically known as Cervidae, is a family of large herbivorous mammals that are closely related to the antelopes and pedeefs. Deer have been domesticated by humans and have been kept as pets or livestock for various purposes.The deer is a large, even-toed ungulate mammal belonging to the family Cervidae and subfamily."
        />

        <DataProps
          image={giraffe1}
          name="GIRAFFE"
          info="The Giraffe, scientifically known as Giraffa camelopardalis, is a large, long-necked mammal belonging to the order of even-toed ungulates. It is the tallest living terrestrial animal, reaching a height of 5.5 to 6 meters The Giraffe's neck is elongated, giving it an impressive height. This adaptation allows the giraffe to reach leaves that are out of reach for other animals. Its diet consists mainly of leaves, especially from acacia trees."
        />

        <DataProps
          image={horse1}
          name="HORSE"
          info="The horse, scientifically known as Equus caballus, is a large, domesticated mammal that is often kept for its speed, endurance, and ability to perform in equestrian sports.Horses are strong and versatile, with the ability to perform tasks such as plowing fields, transporting people and goods, and participating in competitive sports like jumping, dressage, and show jumping."
        />

        <DataProps
          image={panda1}
          name="PANDA"
          info="The panda, scientifically known as Ailuropoda melanoleuca, is a large, solitary bear native to central-western China.Pandas are herbivores, primarily feeding on bamboo shoots and leaves. They have a relatively slow movement speed, with their main mode of locomotion being a fast-paced, ground-level gallop.It is characterized by its black and white fur, along with its large head, which is flat when viewed from above, and its long snout."
        />

        <DataProps
          image={rabbit1}
          name="RABBIT"
          info="The rabbit, scientifically known as Oryctolagus cuniculus, is a small, rabbit-like mammal belonging to the family Leporidae. Rabbits are known for their cute and playful nature, and they have become popular pets and fiber sources in various countries.Rabbits are small animals, with the average weight of a domestic rabbit being around 2.5 to 4 kilograms (5.5 to 8.8 pounds). They have soft fur, which can be solid colors or bi-colored. "
        />
      </div>
    
  );
};

export default Herbivores;
