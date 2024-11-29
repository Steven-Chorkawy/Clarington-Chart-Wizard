import * as React from 'react';

// Kendo UI
// import { PopupPropsContext } from '@progress/kendo-react-popup';
import { PanelType } from '@fluentui/react';
import {
    ChartWizardDataRow
} from '@progress/kendo-react-chart-wizard';

import '@progress/kendo-theme-fluent'

export interface IChartWizardSidePanelProps {
    isOpen: boolean;
    panelType?: PanelType;
    context: any;
}

export interface IChartWizardSidePanelState {
    isOpen: boolean;
}

export class ChartWizardSidePanel extends React.Component<IChartWizardSidePanelProps, IChartWizardSidePanelState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen
        };
    }

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

    public render(): React.ReactElement<any> {
        // let wrapper: any = undefined;
        return (
            <h1>hello</h1>
            // <Panel
            //     isLightDismiss={true}
            //     isOpen={this.state.isOpen}
            //     type={this.props.panelType ? this.props.panelType : PanelType.smallFluid}
            //     onDismiss={() => this.setState({ isOpen: !this.state.isOpen })}
            //     // customWidth={'800px'}
            // >
            //     <div ref={e => { wrapper = e }}>
            //         <PopupPropsContext.Provider value={props => ({ ...props, appendTo: wrapper })}>
            //             <h1>Chart Wizard</h1>
            // this.state.isOpen ? <ChartWizard data={this.data} onClose={() => this.setState({ isOpen: false })} />

            //         </PopupPropsContext.Provider>
            //     </div>
            // </Panel>
        );
    }
}