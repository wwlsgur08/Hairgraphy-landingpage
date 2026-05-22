import Script from "next/script";

export function NaverAnalytics() {
  const naverId = process.env.NEXT_PUBLIC_NAVER_ANALYTICS_ID;
  if (!naverId) return null;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src="//wcs.naver.net/wcslog.js"
      />
      <Script id="naver-analytics-init" strategy="lazyOnload">
        {`
          if (!wcs_add) var wcs_add = {};
          wcs_add["wa"] = "${naverId}";
          if (window.wcs) {
            wcs_do();
          }
        `}
      </Script>
    </>
  );
}
