import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Spacing } from 'layout/common/spacing'

const useStyles = makeStyles({
  root: {
    height: 80,
    borderBottom: '1px solid #E5E7EB',
    background: 'white',
  },
})

const properties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80px',
}

export const Wrapper = ({ children }) => <Box className={useStyles().root}>
  <Spacing>
    <Box {...properties}>
      {children}
    </Box>
  </Spacing>
</Box>

Wrapper.propTypes = { children: PropTypes.node.isRequired }
