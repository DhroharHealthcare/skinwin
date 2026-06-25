'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const interlinksMapping: Record<string, { href: string; label: string }[]> = {
  "/plastic-surgery/body-contouring/arm-lift": [
    {
      "href": "/plastic-surgery/body-contouring/thigh-lift",
      "label": "Thigh Lift Surgery"
    }
  ],
  "/plastic-surgery/body-contouring/liposuction": [
    {
      "href": "/plastic-surgery/body-contouring/tummy-tuck",
      "label": "Tummy Tuck Surgery"
    },
    {
      "href": "/plastic-surgery/body-contouring/mommy-makeover",
      "label": "Mommy Makeover Surgery"
    },
    {
      "href": "/plastic-surgery/body-contouring/arm-lift",
      "label": "Arm Lift Surgery"
    },
    {
      "href": "/plastic-surgery/body-contouring/thigh-lift",
      "label": "Thigh Lift Surgery"
    }
  ],
  "/plastic-surgery/body-contouring/mommy-makeover": [
    {
      "href": "/plastic-surgery/body-contouring/liposuction",
      "label": "Liposuction Surgery"
    },
    {
      "href": "/plastic-surgery/body-contouring/tummy-tuck",
      "label": "Tummy Tuck Surgery"
    }
  ],
  "/plastic-surgery/body-contouring/thigh-lift": [
    {
      "href": "/plastic-surgery/body-contouring/arm-lift",
      "label": "Arm Lift Surgery"
    }
  ],
  "/plastic-surgery/body-contouring/tummy-tuck": [
    {
      "href": "/plastic-surgery/body-contouring/liposuction",
      "label": "Liposuction Surgery"
    },
    {
      "href": "/plastic-surgery/body-contouring/mommy-makeover",
      "label": "Mommy Makeover Surgery"
    }
  ],
  "/plastic-surgery/breast-surgery/breast-augmentation": [
    {
      "href": "/plastic-surgery/breast-surgery/breast-reduction",
      "label": "Breast Reduction Surgery"
    }
  ],
  "/plastic-surgery/breast-surgery/breast-lump": [
    {
      "href": "/plastic-surgery/breast-surgery/breast-augmentation",
      "label": "Breast Augmentation Surgery"
    },
    {
      "href": "/plastic-surgery/breast-surgery/breast-reduction",
      "label": "Breast Reduction Surgery"
    }
  ],
  "/plastic-surgery/breast-surgery/breast-reduction": [
    {
      "href": "/plastic-surgery/breast-surgery/breast-augmentation",
      "label": "Breast Augmentation Surgery"
    }
  ],
  "/plastic-surgery/face-aesthetic/brow-lift": [
    {
      "href": "/plastic-surgery/face-aesthetic/face-lift",
      "label": "Face Lift Surgery"
    }
  ],
  "/plastic-surgery/face-aesthetic/cheek-implant": [
    {
      "href": "/plastic-surgery/face-aesthetic/rhinoplasty",
      "label": "Rhinoplasty Surgery"
    }
  ],
  "/plastic-surgery/face-aesthetic/chin-implant": [
    {
      "href": "/plastic-surgery/face-aesthetic/rhinoplasty",
      "label": "Rhinoplasty Surgery"
    }
  ],
  "/plastic-surgery/face-aesthetic/dimple-creation": [
    {
      "href": "/plastic-surgery/face-aesthetic/cheek-implant",
      "label": "Cheek Implant Surgery"
    }
  ],
  "/plastic-surgery/face-aesthetic/eyelid-surgery": [
    {
      "href": "/plastic-surgery/face-aesthetic/face-lift",
      "label": "Face Lift Surgery"
    }
  ],
  "/plastic-surgery/face-aesthetic/face-lift": [
    {
      "href": "/plastic-surgery/face-aesthetic/face-neck-lift",
      "label": "Face & Neck Lift Surgery"
    },
    {
      "href": "/plastic-surgery/face-aesthetic/brow-lift",
      "label": "Brow Lift Surgery"
    },
    {
      "href": "/plastic-surgery/face-aesthetic/eyelid-surgery",
      "label": "Eyelid Surgery"
    }
  ],
  "/plastic-surgery/face-aesthetic/lip-augmentation": [
    {
      "href": "/plastic-surgery/face-aesthetic/face-lift",
      "label": "Face Lift Surgery"
    }
  ],
  "/plastic-surgery/face-aesthetic/rhinoplasty": [
    {
      "href": "/plastic-surgery/face-aesthetic/chin-implant",
      "label": "Chin Implant Surgery"
    },
    {
      "href": "/plastic-surgery/face-aesthetic/cheek-implant",
      "label": "Cheek Implant Surgery"
    },
    {
      "href": "/plastic-surgery/face-aesthetic/face-lift",
      "label": "Face Lift Surgery"
    }
  ],
  "/plastic-surgery/reconstructive/cleft-palate": [
    {
      "href": "/plastic-surgery/reconstructive/hand-surgery",
      "label": "Hand Surgery"
    }
  ],
  "/plastic-surgery/reconstructive/cyst-removal": [
    {
      "href": "/plastic-surgery/reconstructive/scar-revision",
      "label": "Scar Revision Surgery"
    }
  ],
  "/plastic-surgery/reconstructive/gynecomastia": [
    {
      "href": "/plastic-surgery/body-contouring/liposuction",
      "label": "Liposuction Surgery"
    }
  ],
  "/plastic-surgery/reconstructive/hand-surgery": [
    {
      "href": "/plastic-surgery/reconstructive/scar-revision",
      "label": "Scar Revision Surgery"
    }
  ],
  "/plastic-surgery/reconstructive/scar-revision": [
    {
      "href": "/plastic-surgery/reconstructive/cyst-removal",
      "label": "Cyst Removal Procedure"
    }
  ],
  "/plastic-surgery/sexual-wellness/o-shot": [
    {
      "href": "/plastic-surgery/sexual-wellness/p-shot",
      "label": "P-Shot Treatment"
    }
  ],
  "/plastic-surgery/sexual-wellness/p-shot": [
    {
      "href": "/plastic-surgery/sexual-wellness/o-shot",
      "label": "O-Shot Treatment"
    }
  ],
  "/treatments/hair-treatments/hair-loss/hair-transplant": [
    {
      "href": "/treatments/hair-treatments/therapies/prp",
      "label": "PRP Hair Treatment"
    },
    {
      "href": "/treatments/hair-treatments/therapies/gfc-prp",
      "label": "GFC Hair Treatment"
    },
    {
      "href": "/treatments/hair-treatments/therapies/mesotherapy",
      "label": "Mesotherapy Hair Treatment"
    },
    {
      "href": "/treatments/hair-treatments/therapies/lllt",
      "label": "LLLT Hair Treatment"
    },
    {
      "href": "/treatments/hair-treatments/therapies/medical-therapy",
      "label": "Medical Therapy for Hair Loss"
    },
    {
      "href": "/treatments/hair-treatments/hair-loss/beard-transplant",
      "label": "Beard Transplant"
    },
    {
      "href": "/treatments/hair-treatments/hair-loss/eyebrow-transplant",
      "label": "Eyebrow Transplant"
    }
  ],
  "/treatments/hair-treatments/therapies/gfc-prp": [
    {
      "href": "/treatments/hair-treatments/hair-loss/hair-transplant",
      "label": "Hair Transplant"
    },
    {
      "href": "/treatments/hair-treatments/therapies/prp",
      "label": "PRP Hair Treatment"
    },
    {
      "href": "/treatments/hair-treatments/therapies/mesotherapy",
      "label": "Mesotherapy Hair Treatment"
    }
  ],
  "/treatments/hair-treatments/therapies/prp": [
    {
      "href": "/treatments/hair-treatments/hair-loss/hair-transplant",
      "label": "Hair Transplant"
    },
    {
      "href": "/treatments/hair-treatments/therapies/gfc-prp",
      "label": "GFC Hair Treatment"
    },
    {
      "href": "/treatments/hair-treatments/therapies/mesotherapy",
      "label": "Mesotherapy Hair Treatment"
    },
    {
      "href": "/treatments/hair-treatments/therapies/lllt",
      "label": "LLLT Hair Treatment"
    }
  ],
  "/treatments/laser-treatments/advanced-laser/tattoo-removal": [
    {
      "href": "/treatments/laser-treatments/hair-removal/laser-hair-reduction",
      "label": "Laser Hair Reduction Treatment"
    },
    {
      "href": "/treatments/laser-treatments/skin-concerns/laser-birthmark",
      "label": "Laser Birthmark Removal"
    }
  ],
  "/treatments/laser-treatments/hair-removal/laser-hair-reduction": [
    {
      "href": "/treatments/laser-treatments/advanced-laser/tattoo-removal",
      "label": "Laser Tattoo Removal"
    },
    {
      "href": "/treatments/laser-treatments/skin-concerns/laser-birthmark",
      "label": "Laser Birthmark Removal"
    }
  ],
  "/treatments/laser-treatments/skin-concerns/laser-birthmark": [
    {
      "href": "/treatments/laser-treatments/hair-removal/laser-hair-reduction",
      "label": "Laser Hair Reduction Treatment"
    },
    {
      "href": "/treatments/laser-treatments/advanced-laser/tattoo-removal",
      "label": "Laser Tattoo Removal"
    }
  ],
  "/treatments/skin-treatments/anti-ageing/botox": [
    {
      "href": "/treatments/skin-treatments/anti-ageing/fillers",
      "label": "Dermal Fillers"
    },
    {
      "href": "/treatments/skin-treatments/anti-ageing/hifu",
      "label": "HIFU Treatment"
    },
    {
      "href": "/treatments/skin-treatments/face-rejuvenation/hydra-facial",
      "label": "Hydra Facial Treatment"
    }
  ],
  "/treatments/skin-treatments/anti-ageing/fillers": [
    {
      "href": "/treatments/skin-treatments/anti-ageing/botox",
      "label": "Botox Treatment"
    },
    {
      "href": "/treatments/skin-treatments/anti-ageing/hifu",
      "label": "HIFU Treatment"
    }
  ],
  "/treatments/skin-treatments/anti-ageing/hifu": [
    {
      "href": "/treatments/skin-treatments/anti-ageing/botox",
      "label": "Botox Treatment"
    },
    {
      "href": "/treatments/skin-treatments/anti-ageing/fillers",
      "label": "Dermal Fillers"
    }
  ],
  "/treatments/skin-treatments/face-rejuvenation/carbon-facial": [
    {
      "href": "/treatments/skin-treatments/face-rejuvenation/hydra-facial",
      "label": "Hydra Facial Treatment"
    },
    {
      "href": "/treatments/skin-treatments/face-rejuvenation/chemical-peel",
      "label": "Chemical Peel Treatment"
    }
  ],
  "/treatments/skin-treatments/face-rejuvenation/chemical-peel": [
    {
      "href": "/treatments/skin-treatments/skin-concerns/acne",
      "label": "Acne Treatment"
    },
    {
      "href": "/treatments/skin-treatments/skin-concerns/pigmentation",
      "label": "Pigmentation Treatment"
    },
    {
      "href": "/treatments/skin-treatments/face-rejuvenation/carbon-facial",
      "label": "Carbon Facial Treatment"
    },
    {
      "href": "/treatments/skin-treatments/face-rejuvenation/hydra-facial",
      "label": "Hydra Facial Treatment"
    }
  ],
  "/treatments/skin-treatments/face-rejuvenation/hydra-facial": [
    {
      "href": "/treatments/skin-treatments/face-rejuvenation/carbon-facial",
      "label": "Carbon Facial Treatment"
    },
    {
      "href": "/treatments/skin-treatments/face-rejuvenation/chemical-peel",
      "label": "Chemical Peel Treatment"
    }
  ],
  "/treatments/skin-treatments/glow-skin-health/glutathione-therapy": [
    {
      "href": "/treatments/skin-treatments/skin-concerns/pigmentation",
      "label": "Pigmentation Treatment"
    },
    {
      "href": "/treatments/skin-treatments/skin-concerns/freckles",
      "label": "Freckles Treatment"
    }
  ],
  "/treatments/skin-treatments/skin-concerns/acne": [
    {
      "href": "/treatments/skin-treatments/face-rejuvenation/chemical-peel",
      "label": "Chemical Peel Treatment"
    },
    {
      "href": "/treatments/skin-treatments/face-rejuvenation/carbon-facial",
      "label": "Carbon Facial Treatment"
    },
    {
      "href": "/treatments/skin-treatments/face-rejuvenation/hydra-facial",
      "label": "Hydra Facial Treatment"
    },
    {
      "href": "/treatments/skin-treatments/skin-concerns/pigmentation",
      "label": "Pigmentation Treatment"
    }
  ],
  "/treatments/skin-treatments/skin-concerns/pigmentation": [
    {
      "href": "/treatments/skin-treatments/face-rejuvenation/chemical-peel",
      "label": "Chemical Peel Treatment"
    },
    {
      "href": "/treatments/skin-treatments/face-rejuvenation/carbon-facial",
      "label": "Carbon Facial Treatment"
    },
    {
      "href": "/treatments/skin-treatments/glow-skin-health/glutathione-therapy",
      "label": "Glutathione Therapy"
    },
    {
      "href": "/treatments/skin-treatments/skin-concerns/freckles",
      "label": "Freckles Treatment"
    }
  ]
};

export default function SEOInterlinking() {
  const pathname = usePathname();
  // Normalize current pathname: strip trailing slash for consistency
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  const links = interlinksMapping[normalizedPath];

  if (!links || links.length === 0) return null;

  return (
    <section className="bg-[#FBF5E9] py-12 border-t border-[#C09A50]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="font-serif text-xl font-semibold text-gray-900 mb-6 text-center sm:text-left">
          Related Treatments & Procedures
        </h3>
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="bg-white border border-[#C09A50]/20 hover:border-[#C09A50] hover:shadow-sm text-gray-700 hover:text-[#C09A50] px-4 py-2 rounded-lg text-sm font-medium transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
