// export function generateIsoFormattedDate(normalDate){
//     const dateObject = new Date(normalDate)
//     const isoFormattedDate = dateObject.toISOString();

//     return isoFormattedDate;
// }
export function generateIsoFormattedDate(normalDate) {
    try {
        if (!normalDate) {
            throw new Error("Input date is required.");
        }
        
        const dateObject = new Date(normalDate);

        // Kiểm tra xem ngày có hợp lệ không
        if (isNaN(dateObject.getTime())) {
            throw new Error("Invalid date format.");
        }

        return dateObject.toISOString();
    } catch (error) {
        console.error(error.message);
        return null; // Hoặc giá trị mặc định bạn muốn trả về khi gặp lỗi
    }
}
