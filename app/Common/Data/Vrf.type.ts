export type OuterInnerVRF = {
   id: string;
   vrfGroup?: {
      airFlow: string;
      compressor: string;
      compressorQuantity: string;
      connect: string;
      coolingOutput: string;
      coolingPowerConsumption: string;
      cop: string;
      eer: string;
      fanQuantity: string;
      freonType: string;
      heatOutput: string;
      heatPowerConsumption: string;
      maxInnerBlocks: string;
      model: string;
      name: string;
      noiseLevel: string;
      size: string;
      url: string;
      weight: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
      mainParamIcon1: {
         node: {
            sourceUrl: string;
         };
      };
      mainParamIcon2: {
         node: {
            sourceUrl: string | null;
         };
      };
      mainParamText1: string;
      mainParamText2: string | null;
   };
   vrfInnerGroup?: {
      airSupply: string;
      connect: string;
      coolingOutput: string;
      coolingPowerConsumption: string;
      heatOutput: string;
      heatPowerConsumption: string;
      mainSize: string;
      mainWeight: string;
      model: string;
      name: string;
      noiseLevel: string;
      panelSize: string;
      panelWeight: string;
      url: string;
      staticPressure: string | null;
      image: {
         node: {
            sourceUrl: string;
         };
      };
      mainParamIcon1: {
         node: {
            sourceUrl: string;
         };
      };
      mainParamIcon2: {
         node: {
            sourceUrl: string | null;
         };
      };
      mainParamText1: string;
      mainParamText2: string | null;
      description: string;
   };
};
