import { nanoid } from "@reduxjs/toolkit";
import { OptionItem, SelectList } from "../LoginForm/LoginForm.styled";
import { useEffect } from "react";


export const SelectionList = ({array,focus, inputedData,potentialCandidates, setInputed, setFocus, setPotentialCandidates,field }) => {
    
    useEffect(() => {
        const handleCity = () => {
          const regexPrefix = /^(с\.|м\.|смт\.)/i;
          const regex = new RegExp(
            `^${inputedData.trim().replace(regexPrefix, "")}`,
            "i"
          );
    
          if (inputedData && inputedData.trim().length > 2) {
            setPotentialCandidates(
                array.filter((item) => {
                const cityName = item.CITY_NAME.replace(regexPrefix, "")
                  .toLowerCase()
                  .trim();
                return regex.test(cityName);
              })
            );
          }
        };
        if (inputedData) {
          handleCity();
        }
      }, [inputedData]);
    console.log(potentialCandidates)
    return (
        <SelectList focus = {focus}>
            {
                (inputedData && inputedData.length > 3) &&
                potentialCandidates.map((item)=>(
                    <OptionItem key={nanoid(3)} onClick={(e)=>{
                        setInputed((prevData) =>({
                            ...prevData,
                            [field]: `${item.OBL_NAME}, ${item.REGION_NAME}, ${item.CITY_NAME}`
                        }));
                        setFocus(false);
                    }}> 
                    {item.OBL_NAME},{item.REGION_NAME}, {item.CITY_NAME}
                    </OptionItem>
                ))
            }
        </SelectList>
    )
}