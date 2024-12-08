// export const generateCouponCode = (title = '', expiryDate = '') => {
//     const formattedTitle = title.toUpperCase().replace(/\s+/g, ""); 

//     const formattedExpiryDate = expiryDate.split("-").reverse().join(""); 
//     const couponCode = `${formattedTitle}-${formattedExpiryDate}`;
//     return couponCode;
// };


export const generateCouponCode = (title = '', expiryDate = '') => {
    // Kiểm tra và làm sạch tham số title
    if (typeof title !== 'string' || !title.trim()) {
        console.warn("Invalid title provided for generateCouponCode");
        title = "DEFAULT";
    }

    // Kiểm tra và làm sạch tham số expiryDate
    if (typeof expiryDate !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(expiryDate)) {
        console.warn("Invalid expiry date format for generateCouponCode. Expected format: YYYY-MM-DD");
        expiryDate = "0000-00-00";
    }

    // Xử lý title
    const formattedTitle = title.toUpperCase().replace(/\s+/g, ""); // Loại bỏ khoảng trắng và chuyển thành chữ in hoa

    // Xử lý expiryDate
    const formattedExpiryDate = expiryDate.split("-").reverse().join(""); // Định dạng thành DDMMYYYY

    // Tạo coupon code
    const couponCode = `${formattedTitle}-${formattedExpiryDate}`;

    return couponCode;
};
