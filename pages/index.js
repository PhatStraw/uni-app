/** @jsx jsx */
import { jsx } from 'theme-ui'
import { ThemeProvider, Link } from 'theme-ui'
import { Flex, Box } from '@theme-ui/components'

import theme from '../theme'
export default props => (
  <ThemeProvider theme={theme}>
    <Flex>

    <Box p={2} bg='secondary' name="" sx={{ 
      width: '15vw',
      maxWidth: '300px',
      height: '100vh'
     }}>
      Flex


    </Box>

    <Box bg='muted' sx={{
        width: '100%'
      }}>

      <Box sx={{
        height: '100px',
        // bg: 'blue',
        width: '100%',
        borderBottom: t => `${t.colors.border} 1px solid`
      }}>
      
      <Flex sx={{
        justifyContent: 'space-between',
        height: '100%',
        alignItems: 'center',
        width: '100%'
      }}>

      <Flex sx={{
            bg: 'red',
            width: '30%',
            justifyContent: 'space-evenly'
          }}>
        <Link href='#!'>Hello</Link>
        <Link href='#!'>World</Link>
        <Link href='#!'>Kev</Link>     
      </Flex> 

      <Box>
          Hello 
      </Box> 
      
      <Box>
          hello
      </Box>

      </Flex>

      </Box>

      <Box>

        <Flex>

          <Box sx={{
            width: '80%',
            bg: 'red',
            height: '100%'
          }}>
            MAIN
          </Box>

          <Box sx={{ 
            width: '20%',
            bg: 'turquoise',
            height: 'calc(100vh - 100px)'}}>
            SideBAr
          </Box>

        </Flex>
      </Box>

    </Box>
</Flex>
  </ThemeProvider>
)

