import { createStyles, Input } from '@mantine/core'
import SearchIcon from '../../assets/search-icon.png'

const useStyele = createStyles((theme) => ({
  searchBar: {
    // width: "50%",
  }
}))

function Search(data: {placeholder: string, width?: string}) {
  const { classes, theme } = useStyele()

  return (
    <Input
      placeholder={data.placeholder}
      icon={<img src={SearchIcon} width={20} />}
      className={classes.searchBar}
      style={{width: data.width == null ? "50%" : data.width}}
    />
  )
}

export default Search