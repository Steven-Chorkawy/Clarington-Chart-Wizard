import * as React from 'react';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  type IListViewCommandSetExecuteEventParameters,
  type ListViewStateChangedEventArgs
} from '@microsoft/sp-listview-extensibility';
import { ChartWizard, ChartWizardDataRow } from '@progress/kendo-react-chart-wizard';
import '@progress/kendo-theme-fluent'

const LOG_SOURCE: string = 'ChartWizardCommandSet';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IChartWizardCommandSetProperties {
  // This is an example; replace with your own properties
  sampleTextOne: string;
  sampleTextTwo: string;
}

export default class ChartWizardCommandSet extends BaseListViewCommandSet<IChartWizardCommandSetProperties> {

  public data: ChartWizardDataRow[] = [
    [
      { field: 'Product Name', value: 'Calzone' },
      { field: 'Quantity', value: 1 },
      { field: 'Price', value: 12.39 },
      { field: 'Tax', value: 2.48 },
      { field: 'Total', value: 14.87 }
    ],
    [
      { field: 'Product Name', value: 'Margarita' },
      { field: 'Quantity', value: 2 },
      { field: 'Price', value: 8.79 },
      { field: 'Tax', value: 3.52 },
      { field: 'Total', value: 21.1 }
    ],
    [
      { field: 'Product Name', value: 'Pollo Formaggio' },
      { field: 'Quantity', value: 1 },
      { field: 'Price', value: 13.99 },
      { field: 'Tax', value: 2.8 },
      { field: 'Total', value: 16.79 }
    ]
  ];


  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, 'Initialized ChartWizardCommandSet');

    // initial state of the command's visibility
    // const compareOneCommand: Command = this.tryGetCommand('COMMAND_1');
    // compareOneCommand.visible = true;

    this.context.listView.listViewStateChangedEvent.add(this, this._onListViewStateChanged);

    return Promise.resolve();
  }

  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {
    switch (event.itemId) {
      case 'COMMAND_1':
        // const body = document.body;
        // const element: React.ReactElement<ChartWizardProps> = React.createElement(
        //   ChartWizard,
        //   {
        //     data: this.data,
        //   }
        // );
        React.createElement(ChartWizard, { data: this.data });
        break;
      // case 'COMMAND_2':
      //   Dialog.alert(`${this.properties.sampleTextTwo}`).catch(() => {
      //     /* handle error */
      //   });
      //   break;
      default:
        throw new Error('Unknown command');
    }
  }

  private _onListViewStateChanged = (args: ListViewStateChangedEventArgs): void => {
    Log.info(LOG_SOURCE, 'List view state changed');

    // const compareOneCommand: Command = this.tryGetCommand('COMMAND_1');
    // if (compareOneCommand) {
    //   // This command should be hidden unless exactly one row is selected.
    //   compareOneCommand.visible = this.context.listView.selectedRows?.length === 1;
    // }

    // TODO: Add your logic here

    // You should call this.raiseOnChage() to update the command bar
    this.raiseOnChange();
  }
}
