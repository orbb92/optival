import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        apiList: [],
        api: [],
        data: {},
        options: {
            Column: '',
            Operator: '',
            Value:''

        }


    },
    reducers: {
        setApi: (state, action) => {
            state.api = action.payload
        },
        setOption: (state, action) => {

           console.log(action.payload)
            state.options[action.payload.type]=action.payload.value

        },
        setValue:(state,action)=>{
            state.options.Value = action.payload
        }


    },
    extraReducers: (builder) => {
        builder

            .addCase(getApiListAsync.fulfilled, (state, action) => {

                state.apiList = action.payload;
            })

            .addCase(getApiListAsync.rejected, (state, action) => {

                state.error = 'Couldnt retrieve api info'
            })
            .addCase(setDataAsync.fulfilled, (state, action) => {

                state.data = action.payload;
            })

            .addCase(setDataAsync.rejected, (state, action) => {

                state.error = 'Couldnt retrieve data info'
            })
            .addCase(setQueryAsync.fulfilled, (state, action) => {

                state.data = action.payload;
            })

            .addCase(setQueryAsync.rejected, (state, action) => {

                state.error = 'Couldnt retrieve data info'
            })

    },
})


export const getApiListAsync = createAsyncThunk('getApiList', async () => {

    const res = await axios.get(`${window.location.origin}/getApiList`)
    return res.data
})
export const setQueryAsync = createAsyncThunk('setQuery', async (options) => {
    const res = await axios.post(`${window.location.origin}/query`, {options})
    return res.data
})
export const setDataAsync = createAsyncThunk('setData', async (api) => {

    const res = await axios.get(`${window.location.origin}/${api}`)
    if (typeof res.data !== 'object')
        return {}
    else
        return res.data
})
export const {setApi,setOption,setValue} = dataSlice.actions
export default dataSlice.reducer