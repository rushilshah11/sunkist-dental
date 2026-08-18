export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  overview: string;
  whenNeeded: string[];
  whatToExpect: ServiceStep[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "root-canals",
    title: "Root Canal Therapy",
    summary: "Relieve infection and pain while saving the natural tooth.",
    overview:
      "A root canal removes infected or inflamed tissue from inside a tooth, then seals it to stop the pain and save the tooth from extraction. It's one of the most common ways to treat a deep cavity or a tooth that's been cracked or worked on before.",
    whenNeeded: [
      "Sharp pain when you bite down or apply pressure",
      "Lingering sensitivity to hot or cold, even after the stimulus is gone",
      "A tooth that's darkened, swollen, or tender to the touch",
      "A dental abscess or a pimple-like bump on the gums",
    ],
    whatToExpect: [
      {
        title: "Numbing & access",
        description:
          "We numb the area and open a small access point in the tooth to reach the inner chamber.",
      },
      {
        title: "Cleaning & shaping",
        description:
          "The infected or damaged tissue is removed, and the canal is cleaned and shaped.",
      },
      {
        title: "Sealing",
        description:
          "The canal is filled and sealed to prevent reinfection.",
      },
      {
        title: "Restoration",
        description:
          "Most root-canaled teeth need a crown afterward to protect what's left of the tooth structure.",
      },
    ],
    faqs: [
      {
        question: "Is a root canal painful?",
        answer:
          "With modern anesthesia, the procedure itself shouldn't hurt more than getting a filling — the pain people associate with root canals is usually from the infection that made the procedure necessary in the first place.",
      },
      {
        question: "How long does a root canal take?",
        answer:
          "Most root canals are completed in one to two visits, depending on the tooth and how much infection needs to be cleared.",
      },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    summary: "A permanent, natural-looking replacement for missing teeth.",
    overview:
      "A dental implant replaces a missing tooth root with a small titanium post, topped with a custom crown. Unlike a bridge or denture, it stands on its own without relying on neighboring teeth.",
    whenNeeded: [
      "One or more missing teeth you'd like replaced permanently",
      "A loose or failing bridge that needs a longer-term solution",
      "Enough healthy jawbone to support an implant (or interest in a bone graft)",
    ],
    whatToExpect: [
      {
        title: "Planning",
        description:
          "We evaluate your jawbone and bite to map out implant placement.",
      },
      {
        title: "Placement",
        description:
          "The titanium post is placed in the jaw and given time to fuse with the bone.",
      },
      {
        title: "Healing",
        description:
          "Osseointegration typically takes a few months before the site is ready for a crown.",
      },
      {
        title: "Crown",
        description:
          "A custom crown is attached to the implant, matched to your surrounding teeth.",
      },
    ],
    faqs: [
      {
        question: "How long do dental implants last?",
        answer:
          "With good oral hygiene, implants can last decades — many patients keep theirs for life.",
      },
      {
        question: "Does getting an implant hurt?",
        answer:
          "Placement is done under local anesthesia, and most patients describe the recovery as similar to a tooth extraction.",
      },
    ],
  },
  {
    slug: "dentures",
    title: "Dentures & Partials",
    summary: "Custom-fit full and partial dentures, plus repairs.",
    overview:
      "Dentures replace some or all of your natural teeth with a removable, custom-fit appliance. Full dentures replace an entire arch; partial dentures fill in gaps while your remaining natural teeth stay in place.",
    whenNeeded: [
      "Multiple missing teeth affecting how you eat or speak",
      "Loose or damaged existing dentures that no longer fit well",
      "A cost-conscious alternative to implants or bridges",
    ],
    whatToExpect: [
      {
        title: "Impressions",
        description:
          "We take impressions and measurements of your bite to design a custom fit.",
      },
      {
        title: "Fitting",
        description:
          "Your dentures are fabricated and adjusted for comfort and a natural look.",
      },
      {
        title: "Adjustment period",
        description:
          "It's normal to need a short adjustment period as you get used to speaking and eating with them.",
      },
      {
        title: "Ongoing care",
        description:
          "We check the fit periodically, since your gums and jawbone can shift over time.",
      },
    ],
    faqs: [
      {
        question: "Can dentures be repaired instead of replaced?",
        answer:
          "Often, yes — cracks, chips, and loose teeth in a denture can usually be repaired rather than requiring a full replacement.",
      },
      {
        question: "Will dentures look natural?",
        answer:
          "Dentures are custom-shaded and shaped to match your face and the appearance of natural teeth.",
      },
    ],
  },
  {
    slug: "crowns-bridges",
    title: "Crowns & Bridges",
    summary: "Restore damaged teeth or replace gaps with durable, natural results.",
    overview:
      "A crown is a custom cap that covers a damaged or weakened tooth to restore its strength and shape. A bridge uses crowns on the neighboring teeth to anchor a replacement tooth across a gap.",
    whenNeeded: [
      "A tooth that's cracked, worn down, or has a large filling that's failing",
      "A tooth after root canal therapy that needs long-term protection",
      "One or more missing teeth you'd like to replace without an implant",
    ],
    whatToExpect: [
      {
        title: "Preparation",
        description:
          "The tooth (or teeth, for a bridge) is shaped to make room for the restoration.",
      },
      {
        title: "Impressions",
        description:
          "We take an impression to fabricate a custom-fit crown or bridge.",
      },
      {
        title: "Temporary",
        description:
          "A temporary restoration protects the tooth while the permanent one is made.",
      },
      {
        title: "Placement",
        description:
          "The final crown or bridge is checked for fit and bite, then permanently cemented.",
      },
    ],
    faqs: [
      {
        question: "How long do crowns and bridges last?",
        answer:
          "With good care, most crowns and bridges last 10 to 15 years or longer.",
      },
      {
        question: "Will a crown match my other teeth?",
        answer: "Yes — crowns are shaded to blend in with your surrounding teeth.",
      },
    ],
  },
  {
    slug: "fillings",
    title: "Tooth-Colored Fillings",
    summary: "Composite fillings that blend in and hold up to daily use.",
    overview:
      "Composite fillings repair cavities and minor chips using a tooth-colored resin that bonds directly to the tooth — no metal, and no dark fillings showing when you smile.",
    whenNeeded: [
      "A cavity found during a routine checkup",
      "Tooth sensitivity that turns out to be early decay",
      "A small chip or worn edge you'd like smoothed out",
    ],
    whatToExpect: [
      {
        title: "Removing decay",
        description:
          "Any decayed tissue is gently removed and the area is cleaned.",
      },
      {
        title: "Bonding",
        description:
          "The composite resin is applied in layers and bonded to the tooth.",
      },
      {
        title: "Shaping",
        description:
          "The filling is shaped and polished to match your natural bite.",
      },
    ],
    faqs: [
      {
        question: "Do composite fillings hurt to get?",
        answer:
          "The area is numbed beforehand, so the procedure itself is comfortable — most patients are back to normal the same day.",
      },
      {
        question: "How long do tooth-colored fillings last?",
        answer:
          "Typically 7 to 10 years with normal wear, sometimes longer with good care.",
      },
    ],
  },
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning & Prevention",
    summary: "Routine cleanings and checkups to keep small issues from growing.",
    overview:
      "Regular cleanings and checkups catch small problems before they become big ones — removing plaque and tartar your toothbrush can't reach, and giving us a chance to spot decay or gum issues early.",
    whenNeeded: [
      "It's been six months (or more) since your last cleaning",
      "Bleeding or tender gums when you brush or floss",
      "A general checkup before or after other dental work",
    ],
    whatToExpect: [
      {
        title: "Exam",
        description:
          "We check your teeth, gums, and bite for anything that needs attention.",
      },
      {
        title: "Cleaning",
        description:
          "Plaque and tartar are removed, including spots a toothbrush can't reach.",
      },
      {
        title: "Polish",
        description:
          "A polish leaves teeth smooth and helps prevent new buildup.",
      },
      {
        title: "X-rays (as needed)",
        description:
          "Periodic X-rays help us catch issues that aren't visible during the exam.",
      },
    ],
    faqs: [
      {
        question: "How often should I get a cleaning?",
        answer:
          "Most patients do well with a cleaning every six months, though some benefit from more frequent visits.",
      },
      {
        question: "Are cleanings covered by insurance?",
        answer:
          "Most dental insurance plans cover routine cleanings — we're happy to help you check your specific benefits.",
      },
    ],
  },
  {
    slug: "extractions",
    title: "Tooth Extractions",
    summary: "Simple extractions performed with care, including wisdom teeth.",
    overview:
      "Sometimes a tooth is too damaged, decayed, or crowded to save, and removing it is the healthiest option. We handle simple extractions, including wisdom teeth that aren't impacted, with your comfort as the priority.",
    whenNeeded: [
      "A tooth that's too broken down or decayed to restore",
      "Wisdom teeth causing crowding or discomfort",
      "A tooth that needs to come out to make room for orthodontic treatment",
    ],
    whatToExpect: [
      {
        title: "Numbing",
        description: "The area is fully numbed before we begin.",
      },
      {
        title: "Removal",
        description: "The tooth is gently loosened and removed.",
      },
      {
        title: "Aftercare instructions",
        description:
          "You'll leave with clear instructions for a smooth, comfortable recovery.",
      },
    ],
    faqs: [
      {
        question: "Will I be awake for the extraction?",
        answer:
          "Simple extractions are done under local anesthesia, so you're awake but shouldn't feel pain.",
      },
      {
        question: "How long does recovery take?",
        answer:
          "Most patients feel back to normal within a few days, following the aftercare instructions we provide.",
      },
    ],
  },
];
