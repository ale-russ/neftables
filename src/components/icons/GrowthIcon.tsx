"use client";

import React from "react";

type GrowthIconProps = {
  active?: boolean;
};

const GrowthIcon = ({ active }: GrowthIconProps) => {
  const paintId = crypto.randomUUID();

  return (
    <svg
      width="100"
      height="114"
      viewBox="0 0 100 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <g clipPath="url(#clip0_2508_68)">
        <path
          d="M14.0288 93.4964L6.69545 89.3164L6.94305 88.882L3.27639 86.792C1.55983 85.8136 0.5 83.9896 0.5 82.0137V77.8448H0V69.5069H0.5V61.169H0V52.831H0.5V44.4931H0V36.1552H0.5V31.9863C0.5 30.0104 1.55983 28.1864 3.27638 27.208L6.94305 25.118L6.69545 24.6836L14.0288 20.5036L14.2764 20.938L21.6097 16.758L21.3621 16.3236L28.6954 12.1436L28.9431 12.578L36.2764 8.39798L36.0288 7.96359L43.3621 3.78359L43.6097 4.21798L47.2764 2.12798C48.9646 1.16568 51.0354 1.16568 52.7236 2.12798L56.3903 4.21798L56.6379 3.78359L63.9712 7.96359L63.7236 8.39798L71.0569 12.578L71.3046 12.1436L78.6379 16.3236L78.3903 16.758L85.7236 20.938L85.9712 20.5036L93.3046 24.6836L93.0569 25.118L96.7236 27.208C98.4402 28.1864 99.5 30.0104 99.5 31.9863V36.1552H100V44.4931H99.5V52.831H100V61.169H99.5V69.5069H100V77.8448H99.5V82.0137C99.5 83.9896 98.4402 85.8136 96.7236 86.792L93.057 88.882L93.3046 89.3164L85.9712 93.4964L85.7236 93.062L78.3903 97.242L78.6379 97.6764L71.3046 101.856L71.0569 101.422L63.7236 105.602L63.9712 106.036L56.6379 110.216L56.3903 109.782L52.7236 111.872C51.0354 112.834 48.9646 112.834 47.2764 111.872L43.6097 109.782L43.3621 110.216L36.0288 106.036L36.2764 105.602L28.9431 101.422L28.6954 101.856L21.3621 97.6764L21.6097 97.242L14.2764 93.062L14.0288 93.4964Z"
          stroke={`url(#${paintId})`}
          strokeDasharray="8 8"
        />
        <path
          d="M16 41.5204C16 39.3467 17.1756 37.343 19.0731 36.2827L47.0731 20.6356C48.892 19.6192 51.108 19.6192 52.9269 20.6356L80.9269 36.2827C82.8244 37.343 84 39.3467 84 41.5204V72.4796C84 74.6533 82.8244 76.657 80.9269 77.7173L52.9269 93.3644C51.108 94.3808 48.892 94.3808 47.0731 93.3644L19.0731 77.7173C17.1756 76.657 16 74.6533 16 72.4796V41.5204Z"
          className={`transform-all ${active ? "fill-white" : "fill-tertiary"}`}
        />
        <path
          d="M22 45.0366C22 42.8543 23.1849 40.8441 25.0941 39.7872L47.0941 27.6086C48.9021 26.6078 51.0979 26.6078 52.9059 27.6086L74.9059 39.7872C76.8151 40.8441 78 42.8543 78 45.0366V68.9634C78 71.1457 76.8151 73.1559 74.9059 74.2128L52.9059 86.3914C51.0979 87.3922 48.9021 87.3922 47.0941 86.3914L25.0941 74.2128C23.1849 73.1559 22 71.1457 22 68.9634V45.0366Z"
          className={`transform-all ${
            active ? "fill-tertiary" : "fill-white opacity-10"
          }`}
        />
        <path
          d="M54.2727 45V46.7143H56.7411L50.4545 52.3594L47.5909 49.7879L39.2797 57.2511L40.6294 58.4632L47.5909 52.212L50.4545 54.7835L58.0909 47.9263V50.1428H60V45H54.2727ZM54.2727 54.4285V69H60V54.4285H54.2727ZM46.6364 57.8572V69H52.3636V57.8572H46.6364ZM39 60.4285V69H44.7273V60.4285H39Z"
          fill="white"
        />
      </g>
      <defs>
        <linearGradient
          id={paintId}
          x1="7.45058e-07"
          y1="57"
          x2="100"
          y2="57"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3D8BFF" />
          <stop offset="1" stopColor="#AB23FF" />
        </linearGradient>
        <clipPath id="clip0_2508_68">
          <rect width="100" height="114" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GrowthIcon;
