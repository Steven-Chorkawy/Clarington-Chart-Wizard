import * as React from 'react';

// Kendo UI
import { PopupPropsContext } from '@progress/kendo-react-popup';
import { Panel, PanelType } from '@fluentui/react';

export interface IChartWizardSidePanelProps {
    isOpen?: boolean;
    panelType?: PanelType;
    context: any;
}

export class ChartWizardSidePanel extends React.Component<IChartWizardSidePanelProps, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: this.props.isOpen
        };
    }

    public render(): React.ReactElement<any> {
        let wrapper: any = undefined;
        return (
            <Panel
                isLightDismiss={true}
                isOpen={this.state.isOpen}
                type={this.props.panelType ? this.props.panelType : PanelType.smallFluid}
                onDismiss={() => this.setState({ isOpen: !this.state.isOpen })}
                // customWidth={'800px'}
            >
                <div ref={e => { wrapper = e }}>
                    <PopupPropsContext.Provider value={props => ({ ...props, appendTo: wrapper })}>
                        <h1>Chart Wizard</h1>
                    </PopupPropsContext.Provider>
                </div>
            </Panel>
        );
    }
}