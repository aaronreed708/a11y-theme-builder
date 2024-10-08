/**
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React from 'react';
import { Grid } from '@mui/material';

interface Props {
    style?: any;
    children?: React.ReactNode;
    dataBackground?: string;
    className?: string;
}

export const TextIcons: React.FC<Props> = ({ dataBackground }) => {
    return (
        <section data-background={dataBackground} className="">
            <Grid
                justifyContent="center"
                className="v-center"
                container
                spacing={2}
                columns={12}
                margin={2}
            >
                <Grid item className="v-center" lg={8} md={6} sm={12}>
                    <h2>
                        <div className="inline-icon">
                            <i className="fa-solid fa-chart-simple"></i>
                        </div>
                        Title
                    </h2>
                    <div className="body1">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut
                            aliquip.
                        </p>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};
