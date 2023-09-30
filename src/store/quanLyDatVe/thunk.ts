import { createAsyncThunk } from '@reduxjs/toolkit'
import { quanLyDatVeService } from 'services';
import { handleSleep } from 'utils';

export const getTicketRoomListThunk = createAsyncThunk("quanLyDatVe/getTicketRoomList", async(maLichChieu: string,{rejectWithValue}) => {
    try {
        const data = await quanLyDatVeService.getTicketRoomList(maLichChieu);
        await handleSleep(2000);
        return data.data.content;
    } catch(err) {
        return rejectWithValue(err);
    }
})
