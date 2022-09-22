import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import Page from '../components/Page';

const Server = () => {
    return (
        <>
            <Page title="Dashboard : Server">
                <Container>
                    <Typography variant="h4" sx={{ mb: 5 }}>
                        Server
                    </Typography>
                </Container>
            </Page>
            {/* <Head>
                <title>
                    Account | Material Kit
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        sx={{ mb: 3 }}
                        variant="h4"
                    >
                        Account
                    </Typography>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <AccountProfile />
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={6}
                            xs={12}
                        >
                            <AccountProfileDetails />
                        </Grid>
                    </Grid>
                </Container>
            </Box> */}
        </>
    )
}

export default Server