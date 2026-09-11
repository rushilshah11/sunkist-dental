export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export const serviceCategories = [
  "Restorative Dentistry",
  "Periodontics",
  "Endodontics",
  "Oral Surgery",
  "General & Preventive Care",
] as const;

export type ServiceCategory = (typeof serviceCategories)[number];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  category: ServiceCategory;
  overview: string;
  whenNeeded: string[];
  whatToExpect: ServiceStep[];
  faqs: ServiceFaq[];
  relatedSlugs?: string[];
};

export const services: Service[] = [
  // Restorative Dentistry
  {
    slug: "restorative-dentistry",
    title: "Restorative Dentistry",
    summary:
      "Repairing damaged teeth or replacing missing ones to restore health and function.",
    category: "Restorative Dentistry",
    overview:
      "Restorative dentistry covers everything we do to repair a tooth damaged by decay, wear, or injury, or to replace a tooth that's missing entirely. The right restoration depends on how much natural tooth structure remains and how many teeth need attention.",
    whenNeeded: [
      "A tooth that's cracked, worn, decayed, or has a failing old filling",
      "One or more missing teeth affecting your bite or appearance",
      "You're not sure which restoration option is right for a tooth",
    ],
    whatToExpect: [
      {
        title: "Evaluation",
        description:
          "We examine the tooth and take X-rays to see how much structure remains and which restoration fits best.",
      },
      {
        title: "Treatment plan",
        description:
          "We walk through the realistic options — filling, crown, bridge, implant, or denture — along with cost and timeline.",
      },
      {
        title: "Restoration",
        description:
          "Treatment is completed over one or more visits depending on the option chosen.",
      },
    ],
    faqs: [
      {
        question: "How do I know which restorative option is right for me?",
        answer:
          "It depends on how much of the tooth is left, whether neighboring teeth are healthy, and your bite — during your exam we recommend the option that gives the best odds of a durable, natural-feeling result.",
      },
      {
        question: "Does restorative work hurt?",
        answer:
          "Most restorative procedures are done under local anesthesia, so the tooth is numbed before we begin.",
      },
    ],
    relatedSlugs: [
      "composite-fillings",
      "dental-inlays",
      "dental-onlays",
      "dental-crowns",
      "dental-bridges",
      "dental-implants",
      "partial-dentures",
      "dentures",
      "denture-repair",
    ],
  },
  {
    slug: "composite-fillings",
    title: "Composite (Tooth-Colored) Dental Fillings",
    summary: "Composite fillings that blend in and hold up to daily use.",
    category: "Restorative Dentistry",
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
    slug: "dental-bridges",
    title: "Dental Bridges",
    summary: "A fixed replacement that closes a gap using the neighboring teeth for support.",
    category: "Restorative Dentistry",
    overview:
      "A dental bridge replaces one or more missing teeth by anchoring a replacement tooth to crowns placed on the teeth on either side of the gap. Unlike a removable partial denture, a bridge stays fixed in place.",
    whenNeeded: [
      "One or a few missing teeth in a row",
      "Healthy teeth on either side of the gap that can support crowns",
      "You'd prefer a fixed replacement over a removable one",
    ],
    whatToExpect: [
      {
        title: "Preparation",
        description:
          "The supporting teeth on either side of the gap are shaped to hold crowns.",
      },
      {
        title: "Impressions",
        description:
          "An impression captures the gap and supporting teeth to fabricate a custom bridge.",
      },
      {
        title: "Temporary bridge",
        description: "A temporary bridge protects the area while the permanent one is made.",
      },
      {
        title: "Placement",
        description:
          "The finished bridge is checked for fit and bite, then cemented in place.",
      },
    ],
    faqs: [
      {
        question: "How long does a dental bridge last?",
        answer: "With good care, a bridge typically lasts 10 to 15 years or longer.",
      },
      {
        question: "Do the supporting teeth need to be healthy?",
        answer:
          "Yes — they need to be strong enough to hold crowns, which is why we check them closely before recommending a bridge.",
      },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    summary: "A permanent, natural-looking replacement for missing teeth.",
    category: "Restorative Dentistry",
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
        description: "We evaluate your jawbone and bite to map out implant placement.",
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
    slug: "dental-inlays",
    title: "Dental Inlays",
    summary:
      "A precise, lab-made filling for a cavity too large for a standard filling.",
    category: "Restorative Dentistry",
    overview:
      "An inlay is a custom-made restoration that fits within the grooves of a tooth's biting surface, used when a cavity or old filling is too large for a standard filling but doesn't require a full crown.",
    whenNeeded: [
      "A cavity or failing filling that's too large for a standard filling",
      "A tooth that still has enough healthy structure to avoid a full crown",
      "You want a durable, long-lasting alternative to a large filling",
    ],
    whatToExpect: [
      {
        title: "Preparation",
        description: "The decayed or damaged area is removed and the tooth is shaped for the inlay.",
      },
      {
        title: "Impression",
        description:
          "An impression is taken so the inlay can be custom-fabricated to fit precisely.",
      },
      {
        title: "Placement",
        description:
          "The finished inlay is bonded into place and polished to match your bite.",
      },
    ],
    faqs: [
      {
        question: "What's the difference between an inlay and a filling?",
        answer:
          "A filling is molded directly in the tooth in one visit; an inlay is custom-made outside the mouth for a more precise, durable fit when more of the tooth is involved.",
      },
      {
        question: "Are inlays noticeable?",
        answer:
          "No — they're made from tooth-colored materials that blend in with the rest of the tooth.",
      },
    ],
  },
  {
    slug: "dental-onlays",
    title: "Dental Onlays",
    summary: "A larger, lab-made restoration that covers one or more cusps of a damaged tooth.",
    category: "Restorative Dentistry",
    overview:
      "An onlay is similar to an inlay but extends over one or more of the tooth's cusps, used when damage is too extensive for an inlay but doesn't require a full crown.",
    whenNeeded: [
      "A cracked or worn cusp on a back tooth",
      "A large old filling that's failing and taking part of the tooth's biting surface with it",
      "You want to preserve as much natural tooth structure as possible",
    ],
    whatToExpect: [
      {
        title: "Preparation",
        description: "Damaged tissue is removed and the tooth is shaped for the onlay.",
      },
      {
        title: "Impression",
        description: "An impression is taken to custom-fabricate the onlay.",
      },
      {
        title: "Placement",
        description:
          "The onlay is bonded into place and adjusted to fit your bite comfortably.",
      },
    ],
    faqs: [
      {
        question: "How is an onlay different from a crown?",
        answer:
          "An onlay covers only the damaged part of the tooth, while a crown covers the entire tooth — an onlay preserves more of your natural tooth when possible.",
      },
      {
        question: "How long do onlays last?",
        answer: "With good care, onlays typically last 10 years or more.",
      },
    ],
  },
  {
    slug: "dental-crowns",
    title: "Dental Crowns",
    summary: "A custom cap that restores a damaged tooth's strength, shape, and appearance.",
    category: "Restorative Dentistry",
    overview:
      "A crown is a custom-made cap that covers a damaged, weakened, or heavily filled tooth, restoring its strength and shape while protecting what's left of the natural structure underneath.",
    whenNeeded: [
      "A tooth that's cracked, heavily filled, or worn down",
      "A tooth after root canal therapy that needs long-term protection",
      "A misshapen or discolored tooth you'd like to improve cosmetically",
    ],
    whatToExpect: [
      {
        title: "Preparation",
        description: "The tooth is shaped to make room for the crown.",
      },
      {
        title: "Impressions",
        description: "An impression is taken to fabricate a custom-fit crown.",
      },
      {
        title: "Temporary crown",
        description: "A temporary crown protects the tooth while the permanent one is made.",
      },
      {
        title: "Placement",
        description:
          "The finished crown is checked for fit and bite, then permanently cemented.",
      },
    ],
    faqs: [
      {
        question: "How long do crowns last?",
        answer: "With good care, most crowns last 10 to 15 years or longer.",
      },
      {
        question: "Will a crown match my other teeth?",
        answer: "Yes — crowns are shaded to blend in with your surrounding teeth.",
      },
    ],
  },
  {
    slug: "partial-dentures",
    title: "Partial Dentures",
    summary: "A removable appliance that fills in gaps while your remaining teeth stay in place.",
    category: "Restorative Dentistry",
    overview:
      "A partial denture replaces several missing teeth with a removable, custom-fit appliance that clips onto your remaining natural teeth, restoring your bite without altering healthy teeth.",
    whenNeeded: [
      "Several missing teeth, but healthy teeth remain in the arch",
      "You'd prefer a removable option over a bridge or implants",
      "A cost-conscious way to restore your bite and appearance",
    ],
    whatToExpect: [
      {
        title: "Impressions",
        description: "We take impressions and measurements of your bite and remaining teeth.",
      },
      {
        title: "Fitting",
        description:
          "Your partial denture is fabricated and adjusted for comfort and a secure fit.",
      },
      {
        title: "Adjustment period",
        description: "It's normal to need a short adjustment period getting used to wearing it.",
      },
    ],
    faqs: [
      {
        question: "Can I still eat normally with a partial denture?",
        answer:
          "Yes, though it may take a short adjustment period to feel fully natural while chewing.",
      },
      {
        question: "Do partial dentures damage the remaining teeth?",
        answer:
          "No — when properly fitted and maintained, they're designed to work with your existing teeth without damaging them.",
      },
    ],
  },
  {
    slug: "dentures",
    title: "Dentures (Upper and Lower)",
    summary: "A full, custom-fit replacement for an entire arch of missing teeth.",
    category: "Restorative Dentistry",
    overview:
      "Full dentures replace an entire arch of missing teeth — upper, lower, or both — with a custom-fit removable appliance designed to restore your bite, speech, and smile.",
    whenNeeded: [
      "All or nearly all teeth missing in one or both arches",
      "Failing teeth that are better replaced than repaired one by one",
      "You want a complete, natural-looking smile restored",
    ],
    whatToExpect: [
      {
        title: "Impressions",
        description: "We take detailed impressions and measurements of your bite.",
      },
      {
        title: "Fitting",
        description: "Your dentures are fabricated and adjusted for comfort and a natural look.",
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
        question: "Will dentures look natural?",
        answer:
          "Yes — dentures are custom-shaded and shaped to match your face and the appearance of natural teeth.",
      },
      {
        question: "How long do dentures last before needing adjustment?",
        answer:
          "Fit can shift over several years as your gums and jawbone change, so periodic check-ins help keep them comfortable.",
      },
    ],
  },
  {
    slug: "denture-repair",
    title: "Denture Repair",
    summary: "Fast, careful repair for cracked, chipped, or loose dentures.",
    category: "Restorative Dentistry",
    overview:
      "Cracks, chips, and loose teeth in a denture can usually be repaired rather than requiring a full replacement, getting you back to normal without the cost or wait of a brand-new denture.",
    whenNeeded: [
      "A cracked or broken denture",
      "A loose or missing tooth in an existing denture",
      "A denture that no longer fits comfortably",
    ],
    whatToExpect: [
      {
        title: "Assessment",
        description:
          "We examine the damage to determine whether a repair or a replacement makes more sense.",
      },
      {
        title: "Repair",
        description: "Most cracks, chips, and loose teeth can be repaired in a single visit.",
      },
      {
        title: "Fit check",
        description: "We confirm the repaired denture fits comfortably before you leave.",
      },
    ],
    faqs: [
      {
        question: "Can I repair my dentures myself with a home kit?",
        answer:
          "We don't recommend it — DIY repairs often don't hold up and can make a professional repair harder later.",
      },
      {
        question: "How quickly can a denture repair be done?",
        answer: "Many simple repairs can be completed the same day.",
      },
    ],
  },

  // Periodontics
  {
    slug: "periodontics",
    title: "Periodontics",
    summary:
      "Preventing, diagnosing, and treating gum disease to protect the teeth and bone that support your smile.",
    category: "Periodontics",
    overview:
      "Periodontics focuses on the health of your gums and the bone that supports your teeth. Left untreated, gum disease is a leading cause of tooth loss in adults — but it's also very manageable when caught early.",
    whenNeeded: [
      "Gums that bleed easily when brushing or flossing",
      "Persistent bad breath or a bad taste that doesn't go away",
      "Gums that look red, swollen, or are pulling away from your teeth",
    ],
    whatToExpect: [
      {
        title: "Evaluation",
        description: "We check gum pockets, bone levels, and signs of inflammation.",
      },
      {
        title: "Treatment plan",
        description:
          "Depending on severity, treatment can range from a deeper cleaning to more involved gum therapy.",
      },
      {
        title: "Maintenance",
        description:
          "Ongoing periodontal maintenance visits help keep gum disease from returning.",
      },
    ],
    faqs: [
      {
        question: "Is gum disease reversible?",
        answer:
          "Early-stage gum disease (gingivitis) is reversible with good cleaning and home care; more advanced periodontal disease can be managed and controlled, though some bone loss may not be reversible.",
      },
      {
        question: "Does gum treatment hurt?",
        answer:
          "We numb the area for anything beyond a routine cleaning, so treatment shouldn't be painful.",
      },
    ],
    relatedSlugs: ["root-planing", "scaling"],
  },
  {
    slug: "root-planing",
    title: "Root Planing",
    summary: "A deep-cleaning procedure that smooths tooth roots to help gums reattach and heal.",
    category: "Periodontics",
    overview:
      "Root planing smooths rough spots on the tooth root below the gumline, removing places where bacteria collect, so irritated gum tissue can reattach and heal.",
    whenNeeded: [
      "Gum pockets deeper than normal, found during an exam",
      "Gums that bleed easily or feel tender",
      "A diagnosis of early to moderate gum disease",
    ],
    whatToExpect: [
      { title: "Numbing", description: "The area is numbed for comfort." },
      {
        title: "Root smoothing",
        description: "Rough areas on the tooth root are smoothed to remove places bacteria can hide.",
      },
      {
        title: "Healing check",
        description: "We check gum healing at a follow-up visit.",
      },
    ],
    faqs: [
      {
        question: "Is root planing the same as a regular cleaning?",
        answer:
          "No — it's a deeper, more targeted procedure for gums affected by early gum disease, done below the gumline rather than just on the visible tooth surface.",
      },
      {
        question: "Will my gums feel sore afterward?",
        answer: "Mild sensitivity for a day or two is normal and typically resolves quickly.",
      },
    ],
  },
  {
    slug: "scaling",
    title: "Scaling",
    summary: "Removing plaque and tartar buildup above and below the gumline.",
    category: "Periodontics",
    overview:
      "Scaling removes hardened plaque (tartar) from the tooth surface and just below the gumline — buildup that a regular toothbrush can't reach and that contributes to gum disease if left in place.",
    whenNeeded: [
      "Visible tartar buildup along the gumline",
      "Gums that bleed during brushing or flossing",
      "It's been a while since your last professional cleaning",
    ],
    whatToExpect: [
      {
        title: "Assessment",
        description: "We check for tartar buildup above and below the gumline.",
      },
      {
        title: "Scaling",
        description: "Tartar is carefully removed from the tooth surface and gumline.",
      },
      {
        title: "Polish",
        description: "A polish leaves teeth smooth and helps slow new buildup.",
      },
    ],
    faqs: [
      {
        question: "Is scaling painful?",
        answer:
          "Most patients feel some pressure but not pain; we can numb the area if you're sensitive.",
      },
      {
        question: "How often do I need scaling?",
        answer:
          "It depends on how quickly tartar builds up for you — some patients need it at every routine cleaning, others less often.",
      },
    ],
  },

  // Endodontics
  {
    slug: "endodontics",
    title: "Endodontics",
    summary: "Treating problems inside the tooth to relieve pain and save it from extraction.",
    category: "Endodontics",
    overview:
      "Endodontics deals with the soft tissue inside a tooth — the pulp and nerve. When that tissue becomes infected or inflamed, endodontic treatment (most commonly root canal therapy) removes it and seals the tooth so it can keep functioning.",
    whenNeeded: [
      "Sharp pain when biting down or lingering sensitivity to hot and cold",
      "A tooth that's darkened, swollen, or tender",
      "A dental abscess or bump on the gums",
    ],
    whatToExpect: [
      {
        title: "Diagnosis",
        description: "We identify which tooth is affected and how extensive the infection is.",
      },
      {
        title: "Treatment",
        description: "The infected tissue is removed, and the canal is cleaned and sealed.",
      },
      {
        title: "Restoration",
        description: "Most treated teeth need a crown afterward for long-term protection.",
      },
    ],
    faqs: [
      {
        question: "Is endodontic treatment the same as a root canal?",
        answer:
          "Root canal therapy is the most common form of endodontic treatment — the terms are often used interchangeably.",
      },
      {
        question: "Will I lose the tooth?",
        answer:
          "The goal of endodontic treatment is specifically to save the natural tooth rather than extract it.",
      },
    ],
    relatedSlugs: ["root-canals", "single-visit-root-canals", "molar-endodontics"],
  },
  {
    slug: "root-canals",
    title: "Root Canal Therapy",
    summary: "Relieve infection and pain while saving the natural tooth.",
    category: "Endodontics",
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
        description: "The canal is filled and sealed to prevent reinfection.",
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
    slug: "single-visit-root-canals",
    title: "Single-Visit Root Canals",
    summary: "Completing root canal treatment in one appointment instead of two.",
    category: "Endodontics",
    overview:
      "For many teeth, root canal treatment can be completed in a single visit rather than spreading it across two appointments — cleaning, shaping, and sealing the canal all in one sitting.",
    whenNeeded: [
      "A root canal is needed and the case isn't unusually complex",
      "You'd prefer to complete treatment in one visit rather than two",
      "No active severe infection that needs extra time to settle first",
    ],
    whatToExpect: [
      {
        title: "Numbing & access",
        description: "The area is numbed and a small access point is opened.",
      },
      {
        title: "Cleaning & sealing",
        description: "The canal is cleaned, shaped, and sealed in the same visit.",
      },
      {
        title: "Restoration",
        description: "A crown is typically scheduled afterward to protect the tooth long-term.",
      },
    ],
    faqs: [
      {
        question: "Is a single-visit root canal as effective as a two-visit one?",
        answer:
          "For suitable cases, yes — the outcome is comparable; the decision comes down to how much infection is present and the tooth's anatomy.",
      },
      {
        question: "How long does the appointment take?",
        answer: "Typically 60 to 90 minutes, depending on the tooth.",
      },
    ],
  },
  {
    slug: "molar-endodontics",
    title: "Molar Endodontics",
    summary: "Root canal treatment for molars, which have more roots and canals than front teeth.",
    category: "Endodontics",
    overview:
      "Molars have multiple roots and canals, which makes root canal treatment on them more involved than on a front tooth. We take extra care to locate and treat every canal so the infection doesn't return.",
    whenNeeded: [
      "A molar with deep decay, a large filling, or a crack reaching the pulp",
      "Pain when chewing on a back tooth",
      "A molar that's already had a root canal but is still causing problems",
    ],
    whatToExpect: [
      {
        title: "Imaging",
        description: "X-rays help map out the molar's root and canal structure.",
      },
      {
        title: "Treatment",
        description: "Each canal is located, cleaned, and sealed.",
      },
      {
        title: "Restoration",
        description:
          "A crown is typically needed afterward, since molars carry heavy chewing forces.",
      },
    ],
    faqs: [
      {
        question: "Why do molars take longer to treat?",
        answer:
          "Molars usually have two to four canals instead of one, so locating and treating each one takes more time and precision.",
      },
      {
        question: "Will I need a crown afterward?",
        answer:
          "Almost always — molars bear the most chewing force, so a crown protects the tooth long-term.",
      },
    ],
  },

  // Oral Surgery
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    summary: "Surgical procedures to remove teeth that can't be saved or are causing problems.",
    category: "Oral Surgery",
    overview:
      "Oral surgery covers procedures that go beyond routine dental work — most commonly, removing a tooth that's too damaged to restore or a wisdom tooth that's causing crowding or discomfort.",
    whenNeeded: [
      "A tooth that's too broken down or decayed to save",
      "A wisdom tooth causing pain, crowding, or infection",
      "A tooth that needs to come out to make room for orthodontic treatment",
    ],
    whatToExpect: [
      {
        title: "Evaluation",
        description: "X-rays help us plan the safest, most comfortable approach.",
      },
      {
        title: "Procedure",
        description: "The tooth is numbed and carefully removed.",
      },
      {
        title: "Aftercare",
        description: "You'll leave with clear instructions for a smooth recovery.",
      },
    ],
    faqs: [
      {
        question: "Will I be awake during oral surgery?",
        answer:
          "Simple extractions are done under local anesthesia, so you're awake but shouldn't feel pain.",
      },
      {
        question: "How long is recovery?",
        answer:
          "Most patients feel back to normal within a few days, following the aftercare instructions we provide.",
      },
    ],
    relatedSlugs: ["simple-extractions", "wisdom-teeth"],
  },
  {
    slug: "simple-extractions",
    title: "Simple Tooth Extractions",
    summary: "Removing a tooth that's too damaged or decayed to restore.",
    category: "Oral Surgery",
    overview:
      "Sometimes a tooth is too broken down, decayed, or loose to save, and removing it is the healthiest option. Simple extractions are performed for teeth that are visible and accessible above the gumline.",
    whenNeeded: [
      "A tooth that's too broken down or decayed to restore",
      "A loose tooth that can't be stabilized",
      "A tooth that needs to come out to make room for orthodontic treatment",
    ],
    whatToExpect: [
      { title: "Numbing", description: "The area is fully numbed before we begin." },
      { title: "Removal", description: "The tooth is gently loosened and removed." },
      {
        title: "Aftercare instructions",
        description: "You'll leave with clear instructions for a smooth, comfortable recovery.",
      },
    ],
    faqs: [
      {
        question: "Will I be awake for the extraction?",
        answer:
          "Yes — simple extractions are done under local anesthesia, so you're awake but shouldn't feel pain.",
      },
      {
        question: "How long does recovery take?",
        answer: "Most patients feel back to normal within a few days.",
      },
    ],
  },
  {
    slug: "wisdom-teeth",
    title: "Non-Impacted Wisdom Teeth",
    summary: "Removing wisdom teeth that have come in but are still causing crowding or discomfort.",
    category: "Oral Surgery",
    overview:
      "Non-impacted wisdom teeth have broken through the gum but can still cause crowding, discomfort, or hard-to-reach spots that are difficult to keep clean. Removing them is often simpler than treating an impacted tooth.",
    whenNeeded: [
      "Crowding or shifting in your back teeth",
      "Difficulty cleaning around your wisdom teeth",
      "Recurring discomfort or swelling near the back of your mouth",
    ],
    whatToExpect: [
      {
        title: "Evaluation",
        description: "X-rays confirm the tooth's position and root structure.",
      },
      { title: "Numbing", description: "The area is fully numbed before we begin." },
      {
        title: "Removal",
        description: "Since the tooth isn't impacted, removal is typically straightforward.",
      },
    ],
    faqs: [
      {
        question: "Is this the same as impacted wisdom tooth removal?",
        answer:
          "No — non-impacted wisdom teeth have already come through the gum, which generally makes removal simpler than a tooth still under the gum or bone.",
      },
      {
        question: "How long is recovery?",
        answer: "Most patients recover within a few days to a week, following aftercare instructions.",
      },
    ],
  },

  // General & Preventive Care
  {
    slug: "teeth-cleaning",
    title: "Teeth Cleaning & Prevention",
    summary: "Routine cleanings and checkups to keep small issues from growing.",
    category: "General & Preventive Care",
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
        description: "We check your teeth, gums, and bite for anything that needs attention.",
      },
      {
        title: "Cleaning",
        description: "Plaque and tartar are removed, including spots a toothbrush can't reach.",
      },
      {
        title: "Polish",
        description: "A polish leaves teeth smooth and helps prevent new buildup.",
      },
      {
        title: "X-rays (as needed)",
        description: "Periodic X-rays help us catch issues that aren't visible during the exam.",
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
];
