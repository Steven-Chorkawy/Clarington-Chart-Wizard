declare interface IChartWizardCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'ChartWizardCommandSetStrings' {
  const strings: IChartWizardCommandSetStrings;
  export = strings;
}
