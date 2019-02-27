import React, { Component } from 'react';
import {
    Card, Collapse, Divider
    } from 'antd';
import { DonateForm } from './form';
const { Panel } = Collapse;

export class Donate extends Component {

    renderDonate = () => (
        <Card
        title="Rs. 100"
        bordered={true}
        style={{ width: 240, margin: 20 }}
        >
            <p>Mounish Sai</p>
            <p>Chittoor, India</p>
        </Card>
    )

    render() {

        return(
            <div>
                <Collapse defaultActiveKey={['donateForm']}>
                    <Panel header="Donate Now" key="donateForm">
                        <DonateForm />
                    </Panel>
                </Collapse>
                <Divider />
                <Card title="Donors">
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        this.renderDonate()
                    }
                    {
                        this.renderDonate()
                    }
                    {
                        this.renderDonate()
                    }
                    {
                        this.renderDonate()
                    }
                    {
                        this.renderDonate()
                    }
                    </div>
                </Card>
            </div>
        );
    }
}
