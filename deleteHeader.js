// Xóa các header nhạy cảm gửi đến RevenueCat
let headers = $request.headers;

delete headers['X-RevenueCat-ETag'];
delete headers['X-RevenueCat-User-ID'];
delete headers['X-RevenueCat-Session-ID'];
delete headers['X-RevenueCat-Device-ID'];

$done({headers});
