import React from "react";
import ReactSelect, { StylesConfig } from "react-select";

interface CustomSelectProps {
  options: any;
  labelName: string;
  valueName: string;
  defaultValue?: any;
  value?: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  isClearable?: boolean;
  placeholder?: string;
  isMulti?: boolean;
}

const CustomSelect = ({
  options,
  labelName,
  valueName,
  defaultValue,
  setValue,
  isClearable,
  placeholder,
  value,
  isMulti
}: CustomSelectProps) => {
  console.log([defaultValue]);
  const onMenuOpen = () => {
    setTimeout(() => {
      const selectedEl = document.getElementsByClassName("MyDropdown__option--is-selected")[0];
      if (selectedEl) {
        selectedEl.scrollIntoView({ behavior: "auto", block: "center", inline: "start" });
      }
    }, 15);
  };

  const handleChange = (event: any) => {
    console.log(event);
    if (!event) {
      setValue(value);
    } else {
      if (isMulti) {
        setValue(event?.map((a: Record<string, string | number>) => a.mal_id).join());
      } else {
        setValue(event[valueName]);
      }
    }
  };

  const customStyles: StylesConfig<Record<string, string>[], any> = {
    option: (provided, state) => ({
      ...provided,
      // borderBottom: '1px dotted pink',
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#494caf" : "white",
      ":hover": {
        backgroundColor: state.isFocused ? "#707185" : ""
      }
    }),
    menuList: (base, state) => ({
      ...base,

      "::-webkit-scrollbar-track": {
        boxShadow: " inset 0 0 6px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#f5f5f5"
      },
      "::-webkit-scrollbar": {
        width: " 3px",
        height: "3px",
        backgroundColor: " #F5F5F5"
      },
      " ::-webkit-scrollbar-thumb": {
        backgroundColor: "#302f70"
      }
    }),
    menu: (provided) => ({ ...provided, zIndex: 2 }),
    control: (base, state) => ({
      ...base,
      height: 36,
      minHeight: 36
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      paddingTop: 7,
      paddingBottom: 7
    }),
    clearIndicator: (styles) => ({
      ...styles,
      paddingTop: 7,
      paddingBottom: 7
    })
  };

  return (
    <ReactSelect
      options={options}
      isMulti={isMulti}
      menuPlacement="auto"
      styles={customStyles}
      getOptionLabel={(option) => option[labelName]}
      getOptionValue={(option) => option[valueName]}
      defaultValue={defaultValue}
      onChange={handleChange}
      onMenuOpen={onMenuOpen}
      className={"MyDropdown"}
      classNamePrefix={"MyDropdown"}
      isClearable={isClearable}
      placeholder={placeholder}
    />
  );
};

export default CustomSelect;
