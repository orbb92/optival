import '../CSS/Options.css'
import SingleOption from "./SingleOption";
import {useSelector,useDispatch} from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {setValue,setQueryAsync} from "../store/slices/data";

const Options = () => {
    const data = useSelector(state=>state.data.data)
    const api = useSelector(state=>state.data.api)
    const options = useSelector(state=>state.data.options)
    const dispatch = useDispatch()

    const queryDB =  ()=>{
         dispatch(setQueryAsync({options:options,api:api}))
    }
    const option =[
        {name:'Column',value:data.columns==undefined?[]: data.columns.map(col=>{
                const obj = {headerName:col.headerName,field:col.field}
                return obj
            })},
        {name:'Operator',value:[{headerName:'<',field:'<'},{headerName:'>',field:'>'},{headerName:'=',field:'='}]},
    ]
    return (
        <div className={'options'}>
            <div className={'header'}>
            <label >Options</label>
            </div>
            <div className={'content'}>
                {option.map(opt=>{
                    return   <SingleOption option={opt}/>
                })}
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1,width:120},
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField id="standard-basic" label="Value" variant="standard" onChange={(e)=>{
                        dispatch(setValue(e.target.value))
                    }} />
                </Box>
            </div>
            <Button onClick={queryDB} variant="outlined">Filter</Button>

        </div>
    )
}

export default Options