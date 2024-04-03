import Flamingo from "../../Assets/Birds/Flamingo/Flamingo1.jpg";
import Humming_bird from "../../Assets/Birds/Humming_Bird/Humming_Bird1.jpg";
import Ostrich from "../../Assets/Birds/Ostrich/Ostrich1.jpg";
import Owl from "../../Assets/Birds/Owl/Owl1.jpg";
import Parrots from "../../Assets/Birds/Parrots/Parrot1.jpg";
import DataProps from "./DataProps";

const Birds = () => {
  return (
    
      <div data-aos="fade-up"
      data-aos-duration="3000">
        <h1 className="lobster md:ml-[-150px] tracking-widest text-2xl text-center md:text-4xl md:p-2 bg-[#06040A] text-white">
          BIRDS
        </h1>
        <DataProps
          image={Flamingo}
          name="FLAMINGO"
          info="Flamingos are large wading birds that live in various habitats around the world. They are primarily known for their pink plumage and are often associated with tropical areas.Flamingos usually stand on one leg with the other tucked beneath the body. The reason for this behaviour is not fully understood. One theory is that standing on one leg allows the birds to conserve more body heat."
        />

        <DataProps
          image={Humming_bird}
          name="HUMMING BIRD"
          info="Hummingbirds are small birds with unique feeding behaviors. They have long, slender bills and extend their tongues while hovering or flying to suck up nectar from flowers.Adult hummingbirds typically have a length of around 8.5-13 cm (3.3-5.1 inches) and weigh around 3-6 grams (0.1-0.2 ounces).Hummingbirds have varied specialized characteristics to enable rapid, maneuverable flight: exceptional metabolic capacity, adaptations to high altitude."
        />

        <DataProps
          image={Ostrich}
          name="OSTRICH"
          info="The Ostrich is the largest bird in the world and belongs to the order Struthioniformes. They are flightless birds that are native to Africa.Their eyesight is not very good, but their hearing is very sensitive.They are farmed worldwide, with significant industries in the Philippines and in Namibia. Ostrich leather is a lucrative commodity, and the large feathers are used as plumes for the decoration of ceremonial headgear.Ostrich eggs have been used by humans for millennia."
        />

        <DataProps
          image={Owl}
          name="OWL"
          info="An owl is a nocturnal bird of prey, with large forward-facing eyes that enable them to hunt by night. They are typically associated with witchcraft and are found in various folklores.Owls have forward-facing ear tufts, which allow them to pinpoint the exact location of their prey's sound.They are found in all regions of the Earth except the polar ice caps and some remote islands"
        />

        <DataProps
          image={Parrots}
          name="PARROTS"
          info="A parrot is a bird known for its ability to mimic human speech. They belong to the order Psittaciformes, which includes around 350 species.Parrots have a strong beak that is used to crack open nuts and seeds.Parrots have soft, flat feathers that provide insulation.The most important components of most parrots' diets are seeds, nuts, fruit, buds, and other plant material. "
        />
      </div>
  
  );
};

export default Birds;
