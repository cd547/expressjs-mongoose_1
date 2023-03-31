import dayjs from 'dayjs';
export const timeTools = {

    getUnix() {
        var d = new Date();
        return d.getTime() //13位
    },
    getUnixbyDate(d: Date) {
        return d.getTime()
    },
    getTodayDate() {
        return dayjs().format('YYYY-MM-DD')

    },
    getNowTime() {
        return dayjs().format('YYYY-MM-DD HH:mm:ss')
    },
    formatTime(unixstr: number) {
            return dayjs(unixstr).format('YYYY-MM-DD')
    },
    formatdDTime(unixstr: number) {
        return  dayjs(unixstr).format('YYYY-MM-DD HH:mm:ss')
    },
    unixToDay(unixstr: number) {
        return dayjs(unixstr).format('DD')
    },
    unixToYearMonth(unixstr: number) {
        return dayjs(unixstr).format('YYYY-MM')
    },
}


