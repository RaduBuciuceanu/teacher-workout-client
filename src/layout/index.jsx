import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'

import { Header } from 'layout/header'
import { Footer } from 'layout/footer'
import { Spacing } from 'layout/spacing'

const useStyles = makeStyles({ root: { background: '#E5E5E5' } })

export const Layout = ({ children }) => <Box className={useStyles().root}>
  <Header />

  <Spacing>
    {children}
    <Footer />
  </Spacing>
</Box>

Layout.propTypes = { children: PropTypes.node.isRequired }
