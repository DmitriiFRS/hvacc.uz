export type ChillersFancoils = {
   id: string;
   chillerGroup?: {
      blockSize: string;
      compressor: string;
      compressorQuantity: string;
      connect: string;
      coolingcapacity: string;
      coolingpower: string;
      cop: string;
      description: string;
      energyregulator: string;
      fanQuantity: string;
      freon: string;
      freonType: string;
      heatPower: string;
      heatcapacity: string;
      liquidAmount: string;
      model: string;
      name: string;
      url: string;
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
            sourceUrl: string;
         };
      };
      mainParamText1: string;
      mainParamText2: string;
   };
   fancoilGroup?: {
      airQuantity: string;
      bodySize: string;
      bodyWeight: string;
      connect: string;
      coolingOutput: string;
      fanCount: string;
      fanEngine: string;
      fanType: string;
      heatOutput: string;
      model: string;
      name: string;
      noiseLevel: string;
      panelSize: string;
      panelWeight: string;
      powerConsumption: string;
      pressureHeatExchanger: string;
      throughputCapacity: number;
      url: string;
      image: {
         node: {
            sourceUrl: string;
         };
      };
   };
};
