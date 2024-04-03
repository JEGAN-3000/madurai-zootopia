import Bear from "../../Assets/Omnivores/Bear/Bear1.jpg";
import Fox from "../../Assets/Omnivores/Fox/Fox1.jpg";
import Hedgehog from "../../Assets/Omnivores/Hedgehog/Hedgehog1.jpg";
import Monkey from "../../Assets/Omnivores/Monkey/Monkey1.jpg";
import Squirrels from "../../Assets/Omnivores/Squirrels/Squirrel1.jpg";
import DataProps from "./DataProps";

const Omnivores = () => {
  return (
   
      <div data-aos="fade-up"
      data-aos-duration="3000">
        <h1 className="lobster md:ml-[-150px] tracking-widest text-2xl text-center md:text-4xl md:p-2 bg-[#06040A] text-white">
          OMNIVORE ANIMALS
        </h1>
        <DataProps
          image={Bear}
          name="BEAR"
          info="The bear, Ursus arctos, is a large and powerful mammal belonging to the order Carnivora. They are found in various parts of the world, including North America, Eurasia, and Northern Africa.Bears have been hunted since prehistoric times for their meat and fur; they have also been used for bear-baiting and other forms of entertainment, such as being made to dance."
        />

        <DataProps
          image={Fox}
          name="FOX"
          info="The fox, Vulpes vulpes, is a small to medium-sized mammal native to various parts of Eurasia and North Africa.They are known for their elusive and intelligent nature, with a complex communication system that allows them to live in harmony with each other and other animals in their environment while they may be larger than some within the family, such as raccoon dogs."
        />

        <DataProps
          image={Hedgehog}
          name="HEDGEHOG"
          info="HEDGEHOG is an animal native to Africa and Asia. They are well-known for their unique and distinct features, including a prickly spine, sharp nose, and bushy tail.    Their name is derived from their spiny armor and habit of rolling into a ball to protect themselves. Despite their spines, they are harmless to humans."
        />

        <DataProps
          image={Monkey}
          name="MONKEY"
          info="The monkey, also known as a simian or an anthropoid primate, is a species of primate native to various parts of Africa and Asia. They are known for their agility, strength, and ability to live in both treetop and terrestrial environments.Adaptable and opportunistic, able to thrive in diverse habitats, including rainforests, grasslands, deserts"
        />

        <DataProps
          image={Squirrels}
          name="SQUIRRELS"
          info="Squirrels are small to medium-sized rodents that belong to the Sciuridae family. They are primarily tree-dwelling animals, but some species also inhabit areas with sparse vegetation, such as grasslands or scrub forests.The earliest known fossilized squirrels date from the Eocene epoch, and among other living rodent families, the squirrels are most closely related to the mountain beaver and to the dormice."
        />
      </div>

  );
};

export default Omnivores;
