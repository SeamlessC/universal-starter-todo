import { createStyles, Input } from '@mantine/core'
import SearchIcon from '../../assets/search-icon.png'
import React from 'react'

const useStyele = createStyles((theme) => ({
  searchBar: {
    width: "50%",
  }
}))

function Search(data: {placeholder: string}) {
  const { classes, theme } = useStyele()

  return (
    <Input
      placeholder={data.placeholder}
      icon={<img src={SearchIcon} width={20} />}
      className={classes.searchBar}
    />
  )
}

export default Search