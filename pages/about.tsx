import { Button } from '../src/components/atoms/Button/Button';
import { KeyboardArrowLeft } from '@mui/icons-material';
import { Figure } from '../src/components/atoms/Figure/Figure';
import { Icon } from '../src/components/atoms/Icon/Icon';
import { useTheme } from '@mui/material/styles'; //'next-themes'

export default function About(props:any) {
  const theme  = useTheme()
  
  console.log(theme)
  return (
    <>
    
      <br />
      <div><Button targeturl="/about" label='Primary button' variant='contained' endicon={<Icon icon='mui-arrowright' />} theme={theme}></Button></div>
      <br />
      <div><Button targeturl="/" label='Secondary button' variant='outlined' starticon={<KeyboardArrowLeft />} theme={theme}></Button></div>
      <br />
      <div><Button label='Change theme' variant='text' theme={theme} onClick={()=> {props.toggleTheme()}}></Button></div>
      <br />
    </>
  );
}
