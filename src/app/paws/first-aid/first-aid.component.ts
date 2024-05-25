import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
@Component({
  selector: 'app-first-aid',
  templateUrl: './first-aid.component.html',
  styleUrls: ['./first-aid.component.scss'],
})
export class FirstAidComponent implements OnInit {
  constructor(private SessionService: SessionService) {}

  ngOnInit(): void {
    this.SessionService.checkUserSession();
  }

  firstAidContent: any = [
    {
      heading: 'bleeding',
      paraOne: `It is important to stem any bleeding as soon as possible, as blood loss can lead to shock, collapse and death.`,
      paraTwo: `Bleeding is classified according to which blood vessel is damaged. Arterial blood is bright red in colour
      and under pressure, so it will spurt from the wound. Venous blood is from the veins, is dark red in
      colour and flows rather than spurts. Capillary blood is the most common and is slow due to the blood
      vessels being under low pressure (St John Ambulance Australia, 1998).`,
      paraThree: `Even when an animal has no obvious wounds it may still be bleeding internally. Internal bleeding can
      be hard to diagnose. Some signs of internal bleeding include coughing up or vomiting blood, a bloated
      abdomen, difficulty breathing. If internal bleeding is suspected then the animal is likely to have a poor
      prognosis if left untreated.`,
      parafour: `External bleeding can be treated by applying direct pressure to the wound until it stops. For severe
      bleeding, a pressure bandage can be applied, and should the bleeding come through the bandage,
      another bandage should be applied over the top. Never take the first bandage off. If the animal has lost
      large amounts of blood it is likely to have a poor prognosis if left untreated.`,
      parafive: `For both internal and external bleeding, a decision to euthanase or seek veterinary care will need to be
      made. `,
    },{
      heading: `Wounds`,
      paraOne: `An open wound caused by something sharp, where the skin, soft
      tissue or muscle is severed. The wound needs to be cleaned
      thoroughly and generally the animal can be released. If the cut is
      large or deep it will require veterinary care or euthanasia.`
    },{
      heading: `Fractures`,
      paraOne: `Fractures are broken bones and they can be open, where the bone is exposed through skin, or closed,
      where the skin is unbroken. An initial assessment needs to be made to determine if a fracture or
      dislocation has occurred by feeling for abnormalities and checking for normal range of movement in
      limbs/pain response etc.`,
      paraTwo: `Signs that an animal may have a fracture include not using the limb, pain at or near the fracture site,
      the limb may be deformed or twisted, swelling around the fracture and shock.`,
      paraThree: `The prognosis is also dependent on the number of bones involved, if the bone is in one or more
      pieces, the location of the fracture and the time the fracture spends broken. Open fractures carry a
      poor prognosis due to the increased chances of infection. Pressure or splints must never be applied to
      an open fracture, however they should be covered to prevent dirt entering the wound and loss of body
      fluid.`,
      paraFour: `Symptoms of sprains and strains are similar to fractures and if in doubt should be treated as closed
      fractures. A temporary splint and/or bandaging may be applied in the field to stabilise the injury prior to
      veterinary attention being sought, if the animal will tolerate it with minimal additional stress.`,
      paraFive: `If a fracture is suspected then the animal is likely to have a poor prognosis if left untreated. A decision
      to euthanase or seek veterinary attention will need to be made. It must be kept in mind `
    },{
      heading: `Burns`,
      paraOne: `Animals with burns require veterinary attention unless the burn is very mild. Without skin, fluid and
      electrolytes are lost from the animal's body. When assessing burns on animals the depth (superficial,
      partial thickness or full thickness), extent (percentage of body burnt) and location of the burn(s) needs
      to be considered (Fowler and Wood, n.d.). An animal with burns to over 50% of their body has no
      positive prognosis and euthanasia is recommended (Fowler and Wood, n.d.).`,
      paraTwo: `Cold water or a cold compress (i.e. wet cloth) needs to be applied to the burn without overcooling the
      animal. The animal may also need to be treated for shock, pain and dehydration. If the burns are not
      mild and the animal is likely to have a poor prognosis if left untreated, a decision to euthanase or seek
      veterinary treatment will need to be made.`
    },{
      heading: `Dehydration`,
      paraOne: `Dehydration is the excessive loss of fluid from the body. It can be life threatening as it can prevent
      every system in the body of an animal from functioning properly.
      To check for signs of dehydration, in mammals, pinch the skin of the animal to check for elasticity.
      Generally tenting of the skin will occur in a dehydrated animal (skin will have a loss of elasticity and
      won't bounce back when you pinch it). Sunken or dry eyes, a glazed look and dry tacky gums are also
      signs of dehydration.`,
      paraTwo: `It is important not to offer fluid therapy to an animal until it is warm and its condition has stabilised.
      The best way to offer fluids (e.g. water or Lectade ®) to an animal is by placing a shallow container of
      water in with them as long as they cannot tip it and get wet. If they are unable to drink by themselves
      you can wet your fingers and touch the animals mouth, this usually results in a swallow response.`,
      paraThree: `NEVER pour water down an animal's throat.
      Larger animals can go a bit longer without fluids, but smaller marsupials and birds require fluids
      sooner. Native animals require special food and the wrong food can give them diarrhoea which can
      lead rapidly to dehydration (e.g. native animals should not be given cows milk).`,
      paraFour: `Birds have a high metabolic rate and deteriorate rapidly. If you are unable to get the bird to a
      rehabilitator straight away then the most important requirement is warmth and fluid. If you have an
      electrolyte solution (such as Spark ®, Hartmanns ®), then make this up and offer it to the bird. Birds
      have an airway in their throat, so never attempt to pour fluid down a bird's throat as you will drown
      them.`,
      paraFive: `The severity of dehydration will determine the most appropriate course of action. In all cases, basic
      treatment and release as soon as possible is the preferred option however seeking veterinary care or
      euthanasia should be considered if the prognosis is poor.`,
    },{
      heading: `Venomous bites and stings`,
      paraOne: `Bites and stings can be dangerous to an animal if they are allergic to the venom injected. Signs of bites
      or stings can include drooling, vomiting, muscle weakness, difficulty breathing, convulsions etc.`,
      paraTwo: `Pressure immobilisation is used for snake and spider bites. Cold compress can be applied to other
      bites and stings, however unless threatening the animal's ability to breath or you suspect bite/sting
      from a venomous animal, treat for shock and reassess regularly before release.`,
      paraThree: `If you suspect a venomous snake or spider bite then the animal is likely to have a poor prognosis if left
      untreated. A decision will need to be made to euthanase or seek veterinary treatment.`
    },{
      heading: `Car strike`,
      paraOne: `Kangaroos, wallabies, possums, bandicoots, reptiles and birds are often found injured beside the road.`,
      paraTwo: `Injury can vary from shock, fractures to internal bleeding. The severity of the injury will determine the
      most appropriate course of action. In all cases basic treatment and release is the preferred option
      however seeking veterinary care or euthanasia should be considered if prognosis is poor.`
    },{
      heading: `Dog/cat attacks`,
      paraOne: `Cats often prey on smaller mammals, reptiles and birds. Dogs usually attack larger animals such as
      possums, wallabies, bandicoots, birds and bobtails. Both dogs and cats have a lot of bacteria in their
      mouth and it is typical for infections to result from bite wounds (QLD EPA, 2005). Any open wounds
      should be lightly covered to prevent fly strike. The severity of the injury will determine the most
      appropriate course of action. If the prognosis is poor a decision will need to be made to euthanase or
      seek veterinary treatment.`
    },{
      heading: `Poisoning`,
      paraOne: `Poisons can be swallowed, inhaled or absorbed through the skin. Poisoning of native animals generally
      occurs through ingestion of the poison (e.g. Ratsack ®), or by eating prey that has been poisoned.
      Insectivorous mammals may be affected by insecticidal poisons.`,
      paraTwo: `If you suspect poisoning then the animal is likely to have a poor prognosis if left untreated. A decision
      will need to be made to euthanase or seek veterinary attention. The Poisons Information Helpline (13
      11 26) can be contacted for more advice.`
    }
  ];
}