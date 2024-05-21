export type AirCondSemiInner = {
   id: string;
   semiIndustrialGroup?: {
      airOutput: string;
      coolingOutput: number;
      energyOutput: string;
      freon: string;
      heatOutput: number;
      innerBlock: string;
      outerBlock: string;
      m2: string;
      m3: string;
      name: string;
      model: string;
      noiseInnerdb: string;
      noiseOuterdb: string;
      url: string;
      weightInner: string;
      weightOuter: string;
      type: string[];
      panelSize: string | null;
      pathLength: string | null;
      image: {
         node: {
            sourceUrl: string;
         };
      };
      image2: {
         node: {
            sourceUrl: string | null;
         };
      };
      image3: {
         node: {
            sourceUrl: string | null;
         };
      };
      image4: {
         node: {
            sourceUrl: string | null;
         };
      };
      description: string;
   };
   airCondGroup?: {
      airOutput: string;
      coolingOutput: number;
      energyOutput: string;
      freon: string;
      heatOutput: number;
      innerBlock: string;
      outerBlock: string;
      m2: string;
      m3: string;
      name: string;
      model: string;
      noiseInnerdb: string;
      noiseOuterdb: string;
      popular: boolean;
      price: number;
      url: string;
      weightInner: string;
      weightOuter: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
      image2: {
         node: {
            sourceUrl: string | null;
         };
      };
      image3: {
         node: {
            sourceUrl: string | null;
         };
      };
      image4: {
         node: {
            sourceUrl: string | null;
         };
      };
      description: string;
   };
};
