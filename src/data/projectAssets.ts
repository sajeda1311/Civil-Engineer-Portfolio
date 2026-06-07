// Featured AI-generated hero images
import fSymga from "@/assets/projects/featured/symga-school.jpg";
import fModel from "@/assets/projects/featured/model-college.jpg";
import fDada from "@/assets/projects/featured/dada-hall.jpg";
import fAamena from "@/assets/projects/featured/aamena-hospital.jpg";
import fGlobal from "@/assets/projects/featured/global-silk-mill.jpg";
import fRahatHousing from "@/assets/projects/featured/rahat-housing.jpg";
import fRahatJama from "@/assets/projects/featured/rahat-jama.jpg";
import fEastern from "@/assets/projects/featured/eastern-enterprise.jpg";
import fRowhouse from "@/assets/projects/featured/rahat-rowhouse.jpg";
import fAmeen from "@/assets/projects/featured/ameen-silk-mill.jpg";
import fValentine from "@/assets/projects/featured/valentine-multiplex.jpg";
import fQra from "@/assets/projects/featured/qra-ogdcl.jpg";
import fOffshore from "@/assets/projects/featured/offshore-eia.jpg";
import fPipeline from "@/assets/projects/featured/pipeline-markov.jpg";
import fCstr from "@/assets/projects/featured/cstr-kalman.jpg";
import fPfas from "@/assets/projects/featured/pfas-arctic.jpg";
import fCarbon from "@/assets/projects/featured/carbon-credits.jpg";
import fIron from "@/assets/projects/featured/iron-corrosion.jpg";
import fProbChem from "@/assets/projects/featured/probability-chemical.jpg";

// Real photographs — gallery
import gSymgaBalcony from "@/assets/projects/gallery/symga/1000171738.jpg";
import gSymgaFront from "@/assets/projects/gallery/symga/symga-front.jpg";
import gSymgaBuilding from "@/assets/projects/gallery/symga/1000171729.jpg";
import gSymgaFoundation from "@/assets/projects/gallery/symga/1000171728.jpg";

import gModel11 from "@/assets/projects/gallery/model-college/0011.jpg";
import gModel13 from "@/assets/projects/gallery/model-college/0013.jpg";
import gModel15 from "@/assets/projects/gallery/model-college/0015.jpg";
import gModel10 from "@/assets/projects/gallery/model-college/0010.jpg";
import gModel09 from "@/assets/projects/gallery/model-college/0009.jpg";
import gModel07 from "@/assets/projects/gallery/model-college/0007.jpg";
import gModel06 from "@/assets/projects/gallery/model-college/0006.jpg";
import gModel04 from "@/assets/projects/gallery/model-college/0004.jpg";
import gModel12 from "@/assets/projects/gallery/model-college/0012.jpg";

import gRowExterior from "@/assets/projects/gallery/rahat-rowhouse/exterior-1.avif";
import gRowNight from "@/assets/projects/gallery/rahat-rowhouse/elevation-night.webp";
import gRowJayrath from "@/assets/projects/gallery/rahat-rowhouse/jayrath-front.webp";

import gHousingFoundation from "@/assets/projects/gallery/rahat-housing/foundation-formwork.jpg";
import gHousingColumns from "@/assets/projects/gallery/rahat-housing/columns-rebar.jpg";
import gHousingPlinth from "@/assets/projects/gallery/rahat-housing/plinth-beams.jpg";
import gHousingSlab from "@/assets/projects/gallery/rahat-housing/slab-pour.jpg";


import gEasternConstruction from "@/assets/projects/gallery/eastern-enterprise/construction.jpg";
import gEasternSunset from "@/assets/projects/gallery/eastern-enterprise/sunset.jpg";

import gAmeenColumns from "@/assets/projects/gallery/ameen-silk-mill/columns-rebar.jpg";
import gAmeenStructure from "@/assets/projects/gallery/ameen-silk-mill/structure-wide.jpg";
import gAmeenSlabPour from "@/assets/projects/gallery/ameen-silk-mill/slab-pour.jpg";

import gAamenaExisting from "@/assets/projects/aamena-hospital.jpg";
import gAamena23 from "@/assets/projects/gallery/aamena-hospital/0023.jpg";
import gAamena20 from "@/assets/projects/gallery/aamena-hospital/0020.jpg";
import gDadaExisting from "@/assets/projects/dada-hall.jpg";
import gDadaTrusses from "@/assets/projects/gallery/dada-hall/exterior-trusses.jpg";
import gDadaFacade from "@/assets/projects/gallery/dada-hall/facade-framing.webp";
import gDadaInterior from "@/assets/projects/gallery/dada-hall/interior-glulam.webp";

import gGlobalFormwork from "@/assets/projects/gallery/global-silk/formwork.jpg";
import gGlobalColumns from "@/assets/projects/gallery/global-silk/columns.jpg";
import gGlobalRebar from "@/assets/projects/gallery/global-silk/rebar-wall.jpg";
import gValentineExisting from "@/assets/projects/valentine-multiplex.jpg";
import gValentine22 from "@/assets/projects/gallery/valentine/0022.jpg";
import gValentine19 from "@/assets/projects/gallery/valentine/0019.jpg";
import gValentineRender from "@/assets/projects/gallery/valentine/multiplex-render.jpg";

import gJama17 from "@/assets/projects/gallery/rahat-jama/0017.jpg";
import gJama16 from "@/assets/projects/gallery/rahat-jama/0016.jpg";
import gJama26 from "@/assets/projects/gallery/rahat-jama/0026.jpg";

export interface ProjectAssets {
  featured: string;
  gallery: string[];
}

export const projectAssets: Record<string, ProjectAssets> = {
  "symga-school": {
    featured: fSymga,
    gallery: [gSymgaFront, gSymgaBalcony, gSymgaBuilding, gSymgaFoundation],
  },
  "model-college": {
    featured: fModel,
    gallery: [gModel11, gModel15, gModel13, gModel10, gModel09, gModel07, gModel06, gModel04, gModel12],
  },
  "dada-hall": {
    featured: fDada,
    gallery: [gDadaTrusses, gDadaFacade, gDadaInterior, gDadaExisting],
  },
  "aamena-hospital": {
    featured: fAamena,
    gallery: [gAamena23, gAamena20, gAamenaExisting],
  },
  "global-silk-mill": {
    featured: fGlobal,
    gallery: [gGlobalFormwork, gGlobalColumns, gGlobalRebar],
  },
  "rahat-housing": {
    featured: fRahatHousing,
    gallery: [gHousingFoundation, gHousingColumns, gHousingPlinth, gHousingSlab],
  },
  "rahat-jama": {
    featured: fRahatJama,
    gallery: [gJama17, gJama16, gJama26],
  },
  "eastern-enterprise": {
    featured: fEastern,
    gallery: [gEasternConstruction, gEasternSunset],
  },
  "rahat-rowhouse": {
    featured: fRowhouse,
    gallery: [gRowExterior, gRowNight, gRowJayrath],
  },
  "ameen-silk-mill": {
    featured: fAmeen,
    gallery: [gAmeenColumns, gAmeenStructure, gAmeenSlabPour],
  },
  "valentine-multiplex": {
    featured: fValentine,
    gallery: [gValentine22, gValentine19, gValentineRender, gValentineExisting],
  },
  "qra-ogdcl": { featured: fQra, gallery: [] },
  "offshore-eia": { featured: fOffshore, gallery: [] },
  "pipeline-markov": { featured: fPipeline, gallery: [] },
  "cstr-kalman": { featured: fCstr, gallery: [] },
  "pfas-arctic": { featured: fPfas, gallery: [] },
  "carbon-credits": { featured: fCarbon, gallery: [] },
  "iron-corrosion": { featured: fIron, gallery: [] },
  "probability-chemical": { featured: fProbChem, gallery: [] },
};
