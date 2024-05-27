import React from 'react';
import { useTranslation } from "react-i18next";
import './start.css';

const Start = () => {

    const { t } = useTranslation();

  return (
    <section className='start-section'>
        <div className="container mx-auto">
            <h2 className='start-section__title'>{t('how we start')}</h2>

            <ul className='start-section__list'>
                <li className='start-section__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9998 0.768555C36.8301 0.768555 47.231 11.1695 47.231 23.9998C47.231 36.8301 36.8301 47.2311 23.9998 47.2311C11.1695 47.2311 0.768555 36.8301 0.768555 23.9998C0.768555 11.1695 11.1695 0.768555 23.9998 0.768555ZM32.4619 27.2657L35.8897 30.1149C38.565 33.1873 31.2916 42.7674 18.4619 29.9323L18.2672 29.7365L18.0725 29.5429C5.23734 16.7034 14.8197 9.43429 17.8898 12.1096L20.7336 15.5374C22.8837 17.6875 18.1564 21.4876 17.9781 21.6309C17.9749 21.6335 17.9732 21.6349 17.973 21.6351C17.67 21.9391 19.6202 24.3837 21.6184 26.3809C23.6167 28.378 26.0601 30.3293 26.3642 30.0263C26.3645 30.0261 26.3667 30.0233 26.3708 30.0182C26.5499 29.7966 30.3236 25.1275 32.4619 27.2657Z" fill="#8C0F95"/>
                    </svg>

                    <div>
                        <h3 className='start-section__item-title'>{t('contact')}</h3>

                        <p className='start-section__item__desc'>Lorem ipsum dolor sit amet consectetur. Libero neque donec </p>
                    </div>
                </li>

                <li className='start-section__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                        <path d="M19.8985 45.7386C9.6194 44.4536 1.54445 36.3786 0.260722 26.1021C0.160107 25.3081 0.780416 24.6035 1.58356 24.6035H6.97249C7.62346 24.6035 8.17809 25.0735 8.2875 25.7141C9.32387 31.8517 14.1451 36.6743 20.2866 37.7119C20.9272 37.8212 21.3972 38.3759 21.3972 39.0269V44.4158C21.3971 45.2087 20.7097 45.8352 19.8985 45.7386Z" fill="#8C0F95"/>
                        <path d="M6.97345 21.5817H1.58452C0.780938 21.5817 0.161163 20.8767 0.261688 20.0832C1.67305 8.77665 11.3338 0.25 22.7314 0.25C27.7948 0.25 32.5953 1.9009 36.6144 5.0244C37.2537 5.52312 37.3016 6.45825 36.7394 7.02034L32.9298 10.8313C32.4689 11.2934 31.745 11.3508 31.2138 10.9744C28.7126 9.192 25.7792 8.2494 22.7313 8.2494C15.5587 8.2494 9.48357 13.3896 8.28838 20.4712C8.17905 21.1116 7.62443 21.5817 6.97345 21.5817Z" fill="#8C0F95"/>
                        <path d="M24.4189 44.4174V39.0284C24.4189 38.3775 24.889 37.8228 25.5295 37.7134C32.611 36.5182 37.7513 30.4431 37.7513 23.2705C37.7513 20.2226 36.8087 17.2892 35.0262 14.788C34.6487 14.2581 34.7086 13.5316 35.1694 13.072L38.9803 9.2624C39.5352 8.70751 40.4733 8.74271 40.9763 9.38737C44.0998 13.4066 45.7507 18.2071 45.7507 23.2704C45.7507 34.668 37.2239 44.3288 25.9175 45.7401C25.0976 45.8379 24.4189 45.201 24.4189 44.4174Z" fill="#8C0F95"/>
                        <path d="M17.664 17.6711C17.664 16.9348 17.0671 16.3379 16.3308 16.3379H13.6643C12.928 16.3379 12.3311 16.9348 12.3311 17.6711V28.337C12.3311 29.0733 12.928 29.6702 13.6643 29.6702H16.3308C17.0671 29.6702 17.664 29.0733 17.664 28.337V17.6711Z" fill="#8C0F95"/>
                        <path d="M25.663 28.3365V15.0041C25.663 14.2678 25.0661 13.6709 24.3298 13.6709H21.6633C20.927 13.6709 20.3301 14.2678 20.3301 15.0041V28.3365C20.3301 29.0728 20.927 29.6697 21.6633 29.6697H24.3298C25.0662 29.6697 25.663 29.0728 25.663 28.3365Z" fill="#8C0F95"/>
                        <path d="M33.662 28.3371V23.0041C33.662 22.2678 33.0651 21.6709 32.3288 21.6709H29.6623C28.926 21.6709 28.3291 22.2678 28.3291 23.0041V28.3371C28.3291 29.0734 28.926 29.6703 29.6623 29.6703H32.3288C33.0652 29.6703 33.662 29.0734 33.662 28.3371Z" fill="#8C0F95"/>
                    </svg>

                    <div>
                        <h3 className='start-section__item-title'>{t('analysis')}</h3>

                        <p className='start-section__item__desc'>Lorem ipsum dolor sit amet consectetur. Libero neque donec </p>
                    </div>
                </li>

                <li className='start-section__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="46" viewBox="0 0 44 46" fill="none">
                        <path d="M26.3769 28.2435L25.9769 28.6433C24.4156 30.2048 22.4956 33.5803 21.9246 36.3214C21.3914 38.8008 19.3919 40.827 16.9658 41.3869C16.2192 41.5735 15.4194 41.6268 14.6462 41.5469L10.5052 45.7503L0.614258 35.8593L6.08856 30.3495C6.22187 27.7636 7.28827 25.3907 9.12782 23.5512L14.0599 18.6191V29.2565L12.5669 30.7495L14.4331 32.6157C14.702 32.3489 25.2849 21.8491 24.6173 22.5114C25.0372 22.089 25.7528 22.0284 26.2702 22.4848C26.3234 22.5114 26.3501 22.5382 26.3768 22.5915C27.9499 24.1377 27.9499 26.6971 26.3769 28.2435Z" fill="#8C0F95"/>
                        <path d="M16.7256 0.25C16.7256 0.733615 16.7256 26.8567 16.7256 26.5873L22.7241 20.633C24.2054 19.1597 26.5434 19.137 28.0587 20.495C28.243 20.762 30.2249 22.2661 30.2249 25.417C30.2249 27.2017 29.531 28.8771 28.2709 30.1372L27.7919 30.5863C26.9537 31.4271 25.866 33.2132 25.1721 34.9082H43.3857V0.25H16.7256ZM28.7227 14.132L25.1142 10.5236L26.9992 8.63862L28.7227 10.3622L33.1123 5.9726L34.9973 7.85756L28.7227 14.132ZM40.7197 26.9102H32.7217V24.2441H40.7197V26.9102ZM40.7197 21.5781H32.7217V18.9121H40.7197V21.5781Z" fill="#8C0F95"/>
                    </svg>

                    <div>
                        <h3 className='start-section__item-title'>{t('proposal')}</h3>

                        <p className='start-section__item__desc'>Lorem ipsum dolor sit amet consectetur. Libero neque donec </p>
                    </div>
                </li>

                <li className='start-section__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 56 56" fill="none">
                        <path d="M40.2101 35.7653C39.8223 33.1299 38.5026 30.7207 36.4905 28.9749C34.4785 27.2291 31.9073 26.2624 29.2435 26.25H26.7608C24.097 26.2624 21.5258 27.2291 19.5137 28.9749C17.5017 30.7207 16.182 33.1299 15.7941 35.7653L14.6041 44.086C14.5661 44.355 14.5912 44.6291 14.6775 44.8867C14.7638 45.1442 14.9088 45.3782 15.1011 45.57C15.5678 46.0367 18.4308 48.4167 28.0045 48.4167C37.5781 48.4167 40.4341 46.046 40.9078 45.57C41.1001 45.3782 41.2452 45.1442 41.3314 44.8867C41.4177 44.6291 41.4428 44.355 41.4048 44.086L40.2101 35.7653Z" fill="#8C0F95"/>
                        <path d="M17.6403 27.5336C15.3852 29.6125 13.9179 32.4069 13.487 35.4436L12.6236 41.417C5.69364 41.3703 3.59364 38.8503 3.24364 38.337C3.10835 38.1505 3.0118 37.9388 2.9597 37.7143C2.9076 37.4899 2.90101 37.2573 2.94031 37.0303L3.45364 34.137C3.72109 32.6248 4.34922 31.1995 5.28478 29.9818C6.22033 28.7641 7.43572 27.79 8.82789 27.142C10.2201 26.494 11.7479 26.1912 13.282 26.2594C14.8161 26.3276 16.3111 26.7647 17.6403 27.5336Z" fill="#8C0F95"/>
                        <path d="M53.0603 37.0303C53.0996 37.2573 53.0931 37.4899 53.041 37.7143C52.9889 37.9388 52.8923 38.1505 52.757 38.337C52.407 38.8503 50.307 41.3703 43.377 41.417L42.5137 35.4436C42.0827 32.4069 40.6154 29.6125 38.3604 27.5336C39.6895 26.7647 41.1846 26.3276 42.7186 26.2594C44.2527 26.1912 45.7806 26.494 47.1728 27.142C48.5649 27.79 49.7803 28.7641 50.7159 29.9818C51.6514 31.1995 52.2796 32.6248 52.547 34.137L53.0603 37.0303Z" fill="#8C0F95"/>
                        <path d="M18.037 22.4C17.4496 23.233 16.6699 23.9119 15.764 24.3791C14.8581 24.8462 13.8529 25.0878 12.8337 25.0833C11.8169 25.0833 10.8147 24.8417 9.90971 24.3784C9.00467 23.9151 8.22268 23.2434 7.62819 22.4186C7.03369 21.5937 6.64371 20.6395 6.49038 19.6344C6.33705 18.6293 6.42476 17.6021 6.74628 16.6375C7.06779 15.673 7.61392 14.7986 8.33965 14.0865C9.06538 13.3745 9.94993 12.845 10.9204 12.5419C11.8909 12.2387 12.9195 12.1705 13.9216 12.3429C14.9236 12.5153 15.8703 12.9233 16.6837 13.5333C16.4497 14.4482 16.3321 15.389 16.3337 16.3333C16.3354 18.4733 16.9246 20.5718 18.037 22.4Z" fill="#8C0F95"/>
                        <path d="M49.5829 18.6667C49.5835 19.5095 49.4179 20.3442 49.0957 21.1229C48.7734 21.9017 48.3008 22.6093 47.7049 23.2053C47.1089 23.8013 46.4013 24.2739 45.6225 24.5961C44.8437 24.9184 44.009 25.084 43.1662 25.0833C42.147 25.0878 41.1417 24.8462 40.2359 24.3791C39.33 23.9119 38.5502 23.233 37.9629 22.4C39.0753 20.5718 39.6644 18.4733 39.6662 16.3333C39.6678 15.389 39.5502 14.4482 39.3162 13.5333C40.2695 12.8183 41.4031 12.3829 42.59 12.2759C43.7768 12.1689 44.97 12.3945 46.0358 12.9274C47.1017 13.4604 47.9981 14.2795 48.6246 15.2932C49.2511 16.3069 49.5829 17.475 49.5829 18.6667Z" fill="#8C0F95"/>
                        <path d="M28 25.083C32.8325 25.083 36.75 21.1655 36.75 16.333C36.75 11.5005 32.8325 7.58301 28 7.58301C23.1675 7.58301 19.25 11.5005 19.25 16.333C19.25 21.1655 23.1675 25.083 28 25.083Z" fill="#8C0F95"/>
                    </svg>

                    <div>
                        <h3 className='start-section__item-title'>{t('team')}</h3>

                        <p className='start-section__item__desc'>Lorem ipsum dolor sit amet consectetur. Libero neque donec </p>
                    </div>
                </li>

                <li className='start-section__item'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
                        <path d="M11.8239 12.5371L7.88196 12.8417C6.78508 12.9264 5.80818 13.5013 5.20157 14.4189L0.655431 21.2946C0.195369 21.9905 0.122232 22.8613 0.459658 23.6241C0.797173 24.3869 1.49078 24.9185 2.31501 25.0462L5.92432 25.6052C6.76864 21.1245 8.78982 16.6549 11.8239 12.5371Z" fill="#8C0F95"/>
                        <path d="M20.3945 40.0754L20.9536 43.6847C21.0813 44.5089 21.6129 45.2025 22.3756 45.5399C22.693 45.6803 23.0289 45.7497 23.3631 45.7497C23.8326 45.7497 24.2988 45.6129 24.7052 45.3442L31.5811 40.7981C32.4987 40.1914 33.0736 39.2144 33.1582 38.1177L33.4627 34.1758C29.3448 37.2099 24.8753 39.2311 20.3945 40.0754Z" fill="#8C0F95"/>
                        <path d="M19.0367 37.5743C19.162 37.5743 19.288 37.564 19.4138 37.543C21.291 37.2292 23.1003 36.7004 24.8263 36.0083L9.99179 21.1738C9.2997 22.8997 8.77094 24.709 8.45707 26.5863C8.33336 27.3263 8.58157 28.0802 9.11201 28.6107L17.3894 36.8881C17.8298 37.3284 18.4242 37.5743 19.0367 37.5743Z" fill="#8C0F95"/>
                        <path d="M42.1219 20.423C45.752 13.4048 45.8865 5.98838 45.6968 2.51014C45.6318 1.31835 44.6816 0.368192 43.4898 0.303231C42.9234 0.272305 42.2522 0.25 41.4957 0.25C37.6064 0.25 31.4523 0.839096 25.577 3.87806C20.9077 6.29319 14.7851 11.611 11.1729 18.5997C11.2155 18.633 11.2572 18.6684 11.2965 18.7077L27.2924 34.7036C27.3317 34.7429 27.367 34.7845 27.4003 34.8271C34.389 31.2148 39.7068 25.0922 42.1219 20.423ZM26.7054 9.86891C29.3039 7.27036 33.5323 7.2701 36.131 9.86891C37.3899 11.1277 38.0831 12.8015 38.0831 14.5818C38.0831 16.362 37.3899 18.0358 36.131 19.2946C34.8319 20.5938 33.1247 21.2435 31.4182 21.2436C29.7112 21.2437 28.0049 20.5941 26.7054 19.2946C25.4465 18.0358 24.7532 16.362 24.7532 14.5818C24.7532 12.8015 25.4465 11.1277 26.7054 9.86891Z" fill="#8C0F95"/>
                        <path d="M28.5902 17.4098C30.1494 18.969 32.6865 18.969 34.2457 17.4098C35.001 16.6544 35.417 15.6502 35.417 14.582C35.417 13.5138 35.001 12.5096 34.2457 11.7544C33.4662 10.9747 32.4421 10.585 31.418 10.585C30.394 10.585 29.3698 10.9747 28.5903 11.7544C27.835 12.5096 27.4189 13.5138 27.4189 14.582C27.4189 15.6502 27.8349 16.6545 28.5902 17.4098Z" fill="#8C0F95"/>
                        <path d="M1.6104 37.7457C1.95156 37.7457 2.29272 37.6156 2.55292 37.3552L6.90501 33.0031C7.4256 32.4825 7.4256 31.6386 6.90501 31.118C6.38452 30.5974 5.54046 30.5974 5.01987 31.118L0.667782 35.4701C0.147198 35.9907 0.147198 36.8346 0.667782 37.3552C0.928073 37.6155 1.26923 37.7457 1.6104 37.7457Z" fill="#8C0F95"/>
                        <path d="M10.8929 35.1072C10.3724 34.5867 9.52831 34.5867 9.00773 35.1072L0.640438 43.4745C0.119854 43.9951 0.119854 44.8391 0.640438 45.3597C0.90073 45.62 1.24189 45.7501 1.58305 45.7501C1.92421 45.7501 2.26537 45.62 2.52558 45.3596L10.8928 36.9924C11.4134 36.4718 11.4134 35.6278 10.8929 35.1072Z" fill="#8C0F95"/>
                        <path d="M12.9963 39.0955L8.64434 43.4476C8.12376 43.9682 8.12376 44.8122 8.64434 45.3327C8.90464 45.593 9.2458 45.7232 9.58687 45.7232C9.92794 45.7232 10.2692 45.5931 10.5294 45.3327L14.8815 40.9807C15.4021 40.4601 15.4021 39.6161 14.8815 39.0955C14.361 38.5749 13.5169 38.5749 12.9963 39.0955Z" fill="#8C0F95"/>
                    </svg>

                    <div>
                        <h3 className='start-section__item-title'>{t('start')}</h3>

                        <p className='start-section__item__desc'>Lorem ipsum dolor sit amet consectetur. Libero neque donec </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Start