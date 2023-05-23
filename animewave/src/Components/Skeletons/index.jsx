import React from 'react'
import { Container, Skeleton } from '@mui/material';

export const Skeletons = () => {
    return (
        <Container naxWidth="xxl">
            <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom: "1em"}}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom: "1em"}}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom: "1em"}}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom: "1em"}}/>
            <Skeleton variant="rounded" width="100%" height={150} sx={{marginBottom: "1em"}}/>

        </Container>
    );

};



