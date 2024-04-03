import Chameleon from "../../Assets/Reptiles/Chameleon/Chameleon1.jpg";
import Komodo_dragon from "../../Assets/Reptiles/Komodo_dragon/Komodo_dragon1.jpg";
import Snake from "../../Assets/Reptiles/Snake/Snake1.jpg";
import Turtle from "../../Assets/Reptiles/Turtle/Turtle1.jpg";
import DataProps from "./DataProps";

const Reptiles = () => {
  return (
    
      <div data-aos="fade-up"
      data-aos-duration="3000">
        <h1 className="lobster md:ml-[-150px] tracking-widest text-2xl text-center md:text-4xl md:p-2 bg-[#06040A] text-white">
          REPTILES
        </h1>
        <DataProps
          image={Chameleon}
          name="CHAMELEON"
          info="The Green Chameleon, also known as the Flat-Headed Chameleon, is a medium-sized reptile. It is found in various countries across Africa, such as Tanzania, Malawi, Zambia, Zimbabwe, Botswana, Namibia, South Africa, and Ethiopia.Chameleons are diurnal and adapted for visual hunting of invertebrates, mostly insects, although the large species also can catch small vertebrates. "
        />

        <DataProps
          image={Komodo_dragon}
          name="KOMODO DRAGON"
          info="The Komodo Dragon, scientifically known as Varanus komodoensis, is a large, highly venomous lizard native to the Lesser Sunda Islands in Indonesia. They are the largest known lizard species in the world, reaching a maximum length of around 3 meters (10 feet) and weighing up to 70 kilograms (150 pounds).Komodo Dragons primarily eat a diverse range of small mammals, such as deer, pigs, goats, and cattle."
        />

        <DataProps
          image={Snake}
          name="SNAKE"
          info="The snake is a type of reptile known for its sinuous, elongated body. They have a muscular body that supports a flexible skeleton and they have the ability to move both forwards and backwards. Snakes also have no legs and they depend on their prehensile tail for locomotionIn terms of anatomy, snakes have a forked tongue, which is used for tasting, and highly developed eyesight that allows them to detect prey in low light conditions."
        />

        <DataProps
          image={Turtle}
          name="TURTLE"
          info="The animal turtle is a reptile characterized by a carapace, or shell, that covers its back and most of its head. It is distinguished from tortoises by its lack of a top shell, which makes its neck exposed.there are around 320 known species of turtles, classified into six distinct families.The turtle diet mainly consists of plant materials, insects, worms, fish, and even small mammals. They have a wide range of feeding habits, including herbivores, carnivores, and omnivores."
        />
      </div>
  
  );
};

export default Reptiles;
