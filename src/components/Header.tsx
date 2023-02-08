import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { tokens } from '../theme';

interface IHeaderProps {
  title: string;
  subTitle: string;
}

function Header(props: IHeaderProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb='30px'>
      <Typography variant='h2' color={colors.grey[100]} fontWeight='bold' sx={{ mb: '5px' }}>
        {props.title}
      </Typography>
      <Typography variant='h5' color={colors.greenAccent[400]}>
        {props.subTitle}
      </Typography>
    </Box>
  );
}

export default Header;
