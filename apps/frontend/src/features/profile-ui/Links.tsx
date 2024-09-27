import { Anchor } from '@mantine/core'

function CustomeLink(link: {label: string, underline?: boolean, noMarginTop?: boolean}) {
  return (
    <Anchor 
        underline={link.underline == true ? true : false} 
        style={{marginTop: link.noMarginTop == true ? "0" : "4%"}}
    >
      {link.label}
    </Anchor>
  )
}

export default CustomeLink