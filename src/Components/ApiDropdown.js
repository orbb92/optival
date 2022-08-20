import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getApiListAsync, setApi,setDataAsync} from "../store/slices/data";
import {useTheme} from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const ApiDropdown = () => {

    const dispatch = useDispatch()
    const apiList = useSelector(state => state.data.apiList)
    const choosenApi = useSelector(state => state.data.api)
    useEffect(() => {
        dispatch(getApiListAsync())

    }, [])
    const theme = useTheme();


    const handleChange = (event) => {
        const {
            target: {value},
        } = event;

        dispatch(setApi(value))
        //dispatch(setDataAsync(value))
    };
    return (
        <div>
            <FormControl sx={{width: 300, paddingBottom: 1}}>
                <InputLabel id="demo-multiple-name-label">API</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"

                    value={choosenApi}
                    onChange={handleChange}
                    input={<OutlinedInput label="API"/>}
                    MenuProps={MenuProps}
                >
                    {apiList.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, choosenApi, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )


}

export default ApiDropdown