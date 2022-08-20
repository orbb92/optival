import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useSelector,useDispatch} from "react-redux";
import {setOption} from "../store/slices/data";

export default function SingleOption(props) {
    const [option, setOption1] = React.useState('');
    const dispatch = useDispatch()
    const handleChange = (event) => {

        setOption1(event.target.value);
        dispatch(setOption({type:props.option.name,value:event.target.value}))
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">{props.option.name}</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={option}
                    onChange={handleChange}
                    label="Age"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {props.option.value.map(val=>{
                        return  <MenuItem value={val.field}>{val.headerName}</MenuItem>
                    })}
                                  </Select>
            </FormControl>

        </div>
    );
}