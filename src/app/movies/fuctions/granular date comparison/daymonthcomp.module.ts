import { dm_result } from "./interfaces/daycomp_result.interface";


export function compareDate(date:Date,compdate:Date = new Date):dm_result
{  
    //this compares two dates and returns an object that containd the differences seperated by manitude from year to millisecond
    // most of this code just compares numbers it's not as complicated as it sounds 
    // note this does not give all values accurate to the 
    if(date == compdate)
    {
        return{
            before:false,
            year_dif:0,
            month_dif:0,
            date_dif:0, 
            hour_dif:0,
            sec_dif:0,
            mil_dif:0,
            min_dif:0,
            difference:0
        }
    }
    else
    {
        // math.abs() returns the absolute value, so there there is nerver a negative number
        return{
            before:date < compdate,
            year_dif: Math.abs(date.getFullYear()-compdate.getFullYear()),
            month_dif:Math.abs(date.getMonth()-compdate.getMonth()),
            date_dif:Math.abs(date.getDate()-compdate.getDate()),
            hour_dif:Math.abs(date.getHours()-compdate.getHours()),
            min_dif:Math.abs(date.getMinutes()-compdate.getMinutes()),
            sec_dif:Math.abs(date.getSeconds()-compdate.getSeconds()),
            mil_dif:Math.abs(date.getMilliseconds()-compdate.getMilliseconds()),
            difference:Math.abs(date.getTime()-compdate.getTime())
        }
    }
}