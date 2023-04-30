import { MultiSelect } from '@mantine/core';

export function CollaborationMultipleSelect(
  select: {
    data: any, 
    setData: any, 
    value:any, 
    setValue: any,
    width?: string,
  }
) {
  return (
    <MultiSelect
      style={{width: select.width ?? "87%"}}
      data={select.data}
      value={select.value}
      placeholder="enter email to add people (seperate by commas)"
      searchable
      creatable
      getCreateLabel={(query) => `+ Create ${query}`}
      onCreate={(query) => {
        const item = { value: query, label: query };
        select.setData((current: any) => [...current, item]);
        return item;
      }}
      onChange={select.setValue}
    />
  );
}