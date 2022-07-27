import React from "react";
import ReactSelect, { StylesConfig } from "react-select";

interface CustomSelectProps {
  options: Record<string, string>[];
  labelName: string;
  valueName: string;
  defaultValue?: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  isClearable?: boolean;
}

const CustomSelect = ({
  options,
  labelName,
  valueName,
  defaultValue,
  setValue,
  isClearable
}: CustomSelectProps) => {
  const onMenuOpen = () => {
    setTimeout(() => {
      const selectedEl = document.getElementsByClassName("MyDropdown__option--is-selected")[0];
      if (selectedEl) {
        selectedEl.scrollIntoView({ behavior: "auto", block: "center", inline: "start" });
      }
    }, 15);
  };

  const handleChange = (event: any) => {
    // Overwrite the event with your own object if it doesn't exist
    if (!event) {
      setValue("start");
    } else {
      setValue(event[valueName]);
    }
  };

  const customStyles: StylesConfig<Record<string, string>[], false> = {
    option: (provided, state) => ({
      ...provided,
      // borderBottom: '1px dotted pink',
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "#494caf" : "white"
    }),
    menuList: (base) => ({
      ...base,
      "::-webkit-scrollbar-track": {
        boxShadow: " inset 0 0 6px rgba(0, 0, 0, 0.3)",
        backgroundColor: "#f5f5f5"
      },
      "::-webkit-scrollbar": {
        width: " 3px",
        backgroundColor: " #F5F5F5"
      },
      " ::-webkit-scrollbar-thumb": {
        backgroundColor: "#302f70"
      }
    }),
    menu: (provided) => ({ ...provided, zIndex: 2 }),
    control: (base) => ({
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
      menuPlacement="auto"
      styles={customStyles}
      value={defaultValue}
      getOptionLabel={(option) => option[labelName]}
      getOptionValue={(option) => option[valueName]}
      onChange={handleChange}
      onMenuOpen={onMenuOpen}
      className={"MyDropdown"}
      classNamePrefix={"MyDropdown"}
      isClearable={isClearable}
    />
  );
};

export default CustomSelect;
