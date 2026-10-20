Content Security Policy can significantly reduce the risk and impact of cross-site scripting attacks in modern browsers.


![Joe Medley](https://web.dev/images/authors/joemedley.jpg) Joe Medley [GitHub](https://github.com/jpmedley) Mike West [X](https://twitter.com/mikewest) [Homepage](https://mikewest.org/)

<br />


Browser Support

- ![Chrome: 25.](data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='-10 -10 276 276'%3E%3ClinearGradient id='a' x1='145' x2='34' y1='253' y2='61' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%231e8e3e'/%3E%3Cstop offset='1' stop-color='%2334a853'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='111' x2='222' y1='254' y2='62' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fcc934'/%3E%3Cstop offset='1' stop-color='%23fbbc04'/%3E%3C/linearGradient%3E%3ClinearGradient id='c' x1='17' x2='239' y1='80' y2='80' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23d93025'/%3E%3Cstop offset='1' stop-color='%23ea4335'/%3E%3C/linearGradient%3E%3Ccircle cx='128' cy='128' r='64' fill='%23fff'/%3E%3Cpath fill='url(%23a)' d='M96 183a64 64 0 0 1-23-23L17 64a128 128 0 0 0 111 192l55-96a64 64 0 0 1-87 23Z'/%3E%3Cpath fill='url(%23b)' d='M192 128a64 64 0 0 1-9 32l-55 96A128 128 0 0 0 239 64H128a64 64 0 0 1 64 64Z'/%3E%3Ccircle cx='128' cy='128' r='52' fill='%231a73e8'/%3E%3Cpath fill='url(%23c)' d='M96 73a64 64 0 0 1 32-9h111a128 128 0 0 0-222 0l56 96a64 64 0 0 1 23-87Z'/%3E%3C/svg%3E)
- ![Edge: 14.](data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 27600 27600'%3E%3ClinearGradient id='A' gradientUnits='userSpaceOnUse'/%3E%3ClinearGradient id='B' x1='6870' x2='24704' y1='18705' y2='18705' xlink:href='%23A'%3E%3Cstop offset='0' stop-color='%230c59a4'/%3E%3Cstop offset='1' stop-color='%23114a8b'/%3E%3C/linearGradient%3E%3ClinearGradient id='C' x1='16272' x2='5133' y1='10968' y2='23102' xlink:href='%23A'%3E%3Cstop offset='0' stop-color='%231b9de2'/%3E%3Cstop offset='.16' stop-color='%231595df'/%3E%3Cstop offset='.67' stop-color='%230680d7'/%3E%3Cstop offset='1' stop-color='%230078d4'/%3E%3C/linearGradient%3E%3CradialGradient id='D' cx='16720' cy='18747' r='9538' xlink:href='%23A'%3E%3Cstop offset='.72' stop-opacity='0'/%3E%3Cstop offset='.95' stop-opacity='.53'/%3E%3Cstop offset='1'/%3E%3C/radialGradient%3E%3CradialGradient id='E' cx='7130' cy='19866' r='14324' gradientTransform='matrix(.14843 -.98892 .79688 .1196 -8759 25542)' xlink:href='%23A'%3E%3Cstop offset='.76' stop-opacity='0'/%3E%3Cstop offset='.95' stop-opacity='.5'/%3E%3Cstop offset='1'/%3E%3C/radialGradient%3E%3CradialGradient id='F' cx='2523' cy='4680' r='20243' gradientTransform='matrix(-.03715 .99931 -2.12836 -.07913 13579 3530)' xlink:href='%23A'%3E%3Cstop offset='0' stop-color='%2335c1f1'/%3E%3Cstop offset='.11' stop-color='%2334c1ed'/%3E%3Cstop offset='.23' stop-color='%232fc2df'/%3E%3Cstop offset='.31' stop-color='%232bc3d2'/%3E%3Cstop offset='.67' stop-color='%2336c752'/%3E%3C/radialGradient%3E%3CradialGradient id='G' cx='24247' cy='7758' r='9734' gradientTransform='matrix(.28109 .95968 -.78353 .22949 24510 -16292)' xlink:href='%23A'%3E%3Cstop offset='0' stop-color='%2366eb6e'/%3E%3Cstop offset='1' stop-color='%2366eb6e' stop-opacity='0'/%3E%3C/radialGradient%3E%3Cpath id='H' d='M24105 20053a9345 9345 0 01-1053 472 10202 10202 0 01-3590 646c-4732 0-8855-3255-8855-7432 0-1175 680-2193 1643-2729-4280 180-5380 4640-5380 7253 0 7387 6810 8137 8276 8137 791 0 1984-230 2704-456l130-44a12834 12834 0 006660-5282c220-350-168-757-535-565z'/%3E%3Cpath id='I' d='M11571 25141a7913 7913 0 01-2273-2137 8145 8145 0 01-1514-4740 8093 8093 0 013093-6395 8082 8082 0 011373-859c312-148 846-414 1554-404a3236 3236 0 012569 1297 3184 3184 0 01636 1866c0-21 2446-7960-8005-7960-4390 0-8004 4166-8004 7820 0 2319 538 4170 1212 5604a12833 12833 0 007684 6757 12795 12795 0 003908 610c1414 0 2774-233 4045-656a7575 7575 0 01-6278-803z'/%3E%3Cpath id='J' d='M16231 15886c-80 105-330 250-330 566 0 260 170 512 472 723 1438 1003 4149 868 4156 868a5954 5954 0 003027-839 6147 6147 0 001133-850 6180 6180 0 001910-4437c26-2242-796-3732-1133-4392-2120-4141-6694-6525-11668-6525-7011 0-12703 5635-12798 12620 47-3654 3679-6605 7996-6605 350 0 2346 34 4200 1007 1634 858 2490 1894 3086 2921 618 1067 728 2415 728 2952s-271 1333-780 1990z'/%3E%3Cuse fill='url(%23B)' xlink:href='%23H'/%3E%3Cuse fill='url(%23D)' opacity='.35' xlink:href='%23H'/%3E%3Cuse fill='url(%23C)' xlink:href='%23I'/%3E%3Cuse fill='url(%23E)' opacity='.4' xlink:href='%23I'/%3E%3Cuse fill='url(%23F)' xlink:href='%23J'/%3E%3Cuse fill='url(%23G)' xlink:href='%23J'/%3E%3C/svg%3E)
- ![Firefox: 23.](data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 512 512'%3E%3Cdefs%3E%3CradialGradient id='ff-b' cx='428.5' cy='55.1' r='501' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.1' stop-color='%23ffbd4f'/%3E%3Cstop offset='.2' stop-color='%23ffac31'/%3E%3Cstop offset='.3' stop-color='%23ff9d17'/%3E%3Cstop offset='.3' stop-color='%23ff980e'/%3E%3Cstop offset='.4' stop-color='%23ff563b'/%3E%3Cstop offset='.5' stop-color='%23ff3750'/%3E%3Cstop offset='.7' stop-color='%23f5156c'/%3E%3Cstop offset='.8' stop-color='%23eb0878'/%3E%3Cstop offset='.9' stop-color='%23e50080'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-c' cx='245.4' cy='259.9' r='501' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.3' stop-color='%23960e18'/%3E%3Cstop offset='.3' stop-color='%23b11927' stop-opacity='.7'/%3E%3Cstop offset='.4' stop-color='%23db293d' stop-opacity='.3'/%3E%3Cstop offset='.5' stop-color='%23f5334b' stop-opacity='.1'/%3E%3Cstop offset='.5' stop-color='%23ff3750' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-d' cx='305.8' cy='-58.6' r='363' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.1' stop-color='%23fff44f'/%3E%3Cstop offset='.3' stop-color='%23ffdc3e'/%3E%3Cstop offset='.5' stop-color='%23ff9d12'/%3E%3Cstop offset='.5' stop-color='%23ff980e'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-e' cx='190' cy='390.8' r='238.6' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.3' stop-color='%233a8ee6'/%3E%3Cstop offset='.5' stop-color='%235c79f0'/%3E%3Cstop offset='.7' stop-color='%239059ff'/%3E%3Cstop offset='1' stop-color='%23c139e6'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-f' cx='252.2' cy='201.3' r='126.5' gradientTransform='matrix(1 0 0 1 -48 31)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.2' stop-color='%239059ff' stop-opacity='0'/%3E%3Cstop offset='.3' stop-color='%238c4ff3' stop-opacity='.1'/%3E%3Cstop offset='.8' stop-color='%237716a8' stop-opacity='.5'/%3E%3Cstop offset='1' stop-color='%236e008b' stop-opacity='.6'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-g' cx='239.1' cy='34.6' r='171.6' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffe226'/%3E%3Cstop offset='.1' stop-color='%23ffdb27'/%3E%3Cstop offset='.3' stop-color='%23ffc82a'/%3E%3Cstop offset='.5' stop-color='%23ffa930'/%3E%3Cstop offset='.7' stop-color='%23ff7e37'/%3E%3Cstop offset='.8' stop-color='%23ff7139'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-h' cx='374' cy='-74.3' r='732.2' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.1' stop-color='%23fff44f'/%3E%3Cstop offset='.5' stop-color='%23ff980e'/%3E%3Cstop offset='.6' stop-color='%23ff5634'/%3E%3Cstop offset='.7' stop-color='%23ff3647'/%3E%3Cstop offset='.9' stop-color='%23e31587'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-i' cx='304.6' cy='7.1' r='536.4' gradientTransform='rotate(84 303 4)' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23fff44f'/%3E%3Cstop offset='.1' stop-color='%23ffe847'/%3E%3Cstop offset='.2' stop-color='%23ffc830'/%3E%3Cstop offset='.3' stop-color='%23ff980e'/%3E%3Cstop offset='.4' stop-color='%23ff8b16'/%3E%3Cstop offset='.5' stop-color='%23ff672a'/%3E%3Cstop offset='.6' stop-color='%23ff3647'/%3E%3Cstop offset='.7' stop-color='%23e31587'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-j' cx='235' cy='98.1' r='457.1' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.1' stop-color='%23fff44f'/%3E%3Cstop offset='.5' stop-color='%23ff980e'/%3E%3Cstop offset='.6' stop-color='%23ff5634'/%3E%3Cstop offset='.7' stop-color='%23ff3647'/%3E%3Cstop offset='.9' stop-color='%23e31587'/%3E%3C/radialGradient%3E%3CradialGradient id='ff-k' cx='355.7' cy='124.9' r='500.3' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.1' stop-color='%23fff44f'/%3E%3Cstop offset='.2' stop-color='%23ffe141'/%3E%3Cstop offset='.5' stop-color='%23ffaf1e'/%3E%3Cstop offset='.6' stop-color='%23ff980e'/%3E%3C/radialGradient%3E%3ClinearGradient id='ff-a' x1='446.9' y1='76.8' x2='47.9' y2='461.8' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.1' stop-color='%23fff44f'/%3E%3Cstop offset='.1' stop-color='%23ffe847'/%3E%3Cstop offset='.2' stop-color='%23ffc830'/%3E%3Cstop offset='.4' stop-color='%23ff980e'/%3E%3Cstop offset='.4' stop-color='%23ff8b16'/%3E%3Cstop offset='.5' stop-color='%23ff672a'/%3E%3Cstop offset='.5' stop-color='%23ff3647'/%3E%3Cstop offset='.7' stop-color='%23e31587'/%3E%3C/linearGradient%3E%3ClinearGradient id='ff-l' x1='442.1' y1='74.8' x2='102.6' y2='414.3' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.2' stop-color='%23fff44f' stop-opacity='.8'/%3E%3Cstop offset='.3' stop-color='%23fff44f' stop-opacity='.6'/%3E%3Cstop offset='.5' stop-color='%23fff44f' stop-opacity='.2'/%3E%3Cstop offset='.6' stop-color='%23fff44f' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M479 166c-11-25-32-52-49-60a249 249 0 0 1 25 73c-27-68-73-95-111-155a255 255 0 0 1-8-14 44 44 0 0 1-4-9 1 1 0 0 0 0-1 1 1 0 0 0-1 0c-60 35-81 101-83 134a120 120 0 0 0-66 25 71 71 0 0 0-6-5 111 111 0 0 1-1-58c-25 11-44 29-58 44-9-12-9-52-8-60l-8 4a175 175 0 0 0-24 21 210 210 0 0 0-22 26 203 203 0 0 0-32 73l-1 2-2 15a229 229 0 0 0-4 34v1a240 240 0 0 0 477 40l1-9c5-41 0-84-15-121zM202 355l3 1-3-1zm55-145zm198-31z' fill='url(%23ff-a)'/%3E%3Cpath d='M479 166c-11-25-32-52-49-60 14 26 22 53 25 72v1a207 207 0 0 1-206 279c-113-3-212-87-231-197-3-17 0-26 2-40-2 11-3 14-4 34v1a240 240 0 0 0 477 40l1-9c5-41 0-84-15-121z' fill='url(%23ff-b)'/%3E%3Cpath d='M479 166c-11-25-32-52-49-60 14 26 22 53 25 72v1a207 207 0 0 1-206 279c-113-3-212-87-231-197-3-17 0-26 2-40-2 11-3 14-4 34v1a240 240 0 0 0 477 40l1-9c5-41 0-84-15-121z' fill='url(%23ff-c)'/%3E%3Cpath d='m362 195 1 1a130 130 0 0 0-22-29C266 92 322 5 331 0c-60 35-81 101-83 134l9-1c45 0 84 25 105 62z' fill='url(%23ff-d)'/%3E%3Cpath d='M257 210c-1 6-22 26-29 26-68 0-80 41-80 41 3 35 28 64 57 79l4 2 7 3a107 107 0 0 0 31 6c120 6 143-143 57-186 22-4 45 5 58 14-21-37-60-62-105-62l-9 1a120 120 0 0 0-66 25l17 16c16 16 58 33 58 35z' fill='url(%23ff-e)'/%3E%3Cpath d='M257 210c-1 6-22 26-29 26-68 0-80 41-80 41 3 35 28 64 57 79l4 2 7 3a107 107 0 0 0 31 6c120 6 143-143 57-186 22-4 45 5 58 14-21-37-60-62-105-62l-9 1a120 120 0 0 0-66 25l17 16c16 16 58 33 58 35z' fill='url(%23ff-f)'/%3E%3Cpath d='m171 151 5 3a111 111 0 0 1-1-58c-25 11-44 29-58 44 1 0 36 0 54 11z' fill='url(%23ff-g)'/%3E%3Cpath d='M18 261a242 242 0 0 0 231 197 207 207 0 0 0 206-279c8 56-20 110-64 146-86 71-169 43-186 31l-3-1c-50-24-71-70-67-110-42 0-57-35-57-35s38-28 89-4c46 22 90 4 90 4 0-2-42-19-58-35l-17-16a71 71 0 0 0-6-5l-5-3c-18-11-52-11-54-11-9-12-9-51-8-60l-8 4a175 175 0 0 0-24 21 210 210 0 0 0-22 26 203 203 0 0 0-32 73c0 1-9 38-5 57z' fill='url(%23ff-h)'/%3E%3Cpath d='M341 167a130 130 0 0 1 22 29 46 46 0 0 1 4 3c55 50 26 121 24 126 44-36 72-90 64-146-27-68-73-95-111-155a255 255 0 0 1-8-14 44 44 0 0 1-4-9 1 1 0 0 0 0-1 1 1 0 0 0-1 0c-9 5-65 92 10 167z' fill='url(%23ff-i)'/%3E%3Cpath d='M367 199a46 46 0 0 0-4-3l-1-1c-13-9-36-18-58-15 86 44 63 193-57 187a107 107 0 0 1-31-6 131 131 0 0 1-11-5c17 12 99 39 186-31 2-5 31-76-24-126z' fill='url(%23ff-j)'/%3E%3Cpath d='M148 277s12-41 80-41c7 0 28-20 29-26s-44 18-90-4c-51-24-89 4-89 4s15 35 57 35c-4 40 16 85 67 110l3 1c-29-15-54-44-57-79z' fill='url(%23ff-k)'/%3E%3Cpath d='M479 166c-11-25-32-52-49-60a249 249 0 0 1 25 73c-27-68-73-95-111-155a255 255 0 0 1-8-14 44 44 0 0 1-4-9 1 1 0 0 0 0-1 1 1 0 0 0-1 0c-60 35-81 101-83 134l9-1c45 0 84 25 105 62-13-9-36-18-58-14 86 43 63 192-57 186a107 107 0 0 1-31-6 131 131 0 0 1-11-5l-3-1 3 1c-29-15-54-44-57-79 0 0 12-41 80-41 7 0 28-20 29-26 0-2-42-19-58-35l-17-16a71 71 0 0 0-6-5 111 111 0 0 1-1-58c-25 11-44 29-58 44-9-12-9-52-8-60l-8 4a175 175 0 0 0-24 21 210 210 0 0 0-22 26 203 203 0 0 0-32 73l-1 2-2 15a279 279 0 0 0-4 34v1a240 240 0 0 0 477 40l1-9c5-41 0-84-15-121zm-24 13z' fill='url(%23ff-l)'/%3E%3C/svg%3E)
- ![Safari: 7.](data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='195 190 135 135'%3E%3Cdefs%3E%3ClinearGradient id='s-a' x1='132.6' x2='134.4' y1='111.7' y2='-105.3' xlink:href='%23s-b'%3E%3Cstop offset='0' stop-color='%23d2d2d2' /%3E%3Cstop offset='.5' stop-color='%23f2f2f2' /%3E%3Cstop offset='1' stop-color='%23fff' /%3E%3C/linearGradient%3E%3ClinearGradient id='s-b' gradientUnits='userSpaceOnUse' /%3E%3ClinearGradient id='s-c' x1='65.4' x2='67.4' y1='115.7' y2='17.1' xlink:href='%23s-b'%3E%3Cstop offset='0' stop-color='%23005ad5' /%3E%3Cstop offset='.2' stop-color='%230875f0' /%3E%3Cstop offset='.3' stop-color='%23218cee' /%3E%3Cstop offset='.6' stop-color='%2327a5f3' /%3E%3Cstop offset='.8' stop-color='%2325aaf2' /%3E%3Cstop offset='1' stop-color='%2321aaef' /%3E%3C/linearGradient%3E%3ClinearGradient id='s-d' x1='158.7' x2='176.3' y1='96.7' y2='79.5' xlink:href='%23s-b'%3E%3Cstop offset='0' stop-color='%23c72e24' /%3E%3Cstop offset='1' stop-color='%23fd3b2f' /%3E%3C/linearGradient%3E%3CradialGradient id='s-i' cx='-69.9' cy='69.3' r='54' gradientTransform='matrix(.9 -.01 .04 2.72 -9 -120)' xlink:href='%23s-b'%3E%3Cstop offset='0' stop-color='%2324a5f3' stop-opacity='0' /%3E%3Cstop offset='1' stop-color='%231e8ceb' /%3E%3C/radialGradient%3E%3CradialGradient id='s-j' cx='109.3' cy='13.8' r='93.1' gradientTransform='matrix(-.02 1.1 -1.04 -.02 137 -115)' xlink:href='%23s-b'%3E%3Cstop offset='0' stop-opacity='0' /%3E%3Cstop offset='1' stop-color='%235488d6' stop-opacity='0' /%3E%3Cstop offset='1' stop-color='%235d96eb' /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='220' height='220' x='22' y='-107' fill='url(%23s-a)' ry='49' transform='matrix(.57 0 0 .57 187 256)' /%3E%3Cg transform='translate(194 190)'%3E%3Ccircle cx='67.8' cy='67.7' fill='url(%23s-c)' paint-order='stroke fill markers' r='54' /%3E%3Ccircle cx='-69.9' cy='69.3' fill='url(%23s-i)' transform='translate(138 -2)' r='54' /%3E%3C/g%3E%3Cellipse cx='120' cy='14.2' fill='url(%23s-j)' rx='93.1' ry='93.7' transform='matrix(.58 0 0 .58 192 250)' /%3E%3Cg transform='matrix(.58 0 0 .57 197 182)'%3E%3Cpath fill='%23cac7c8' d='M46 192h1l72-48-7-9-66 57Z' /%3E%3Cpath fill='%23fbfffc' d='M46 191v1l66-57-7-9-59 65Z' /%3E%3Cpath fill='url(%23s-d)' d='m119 144-7-9 66-57-59 66Z' /%3E%3Cpath fill='%23fb645c' d='m105 126 7 9 66-57-1-1-72 49Z' /%3E%3C/g%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-miterlimit='1' stroke-width='1.3' d='m287 278 3-2m-12-17 8-2m-8-3h4m-4-13 8 2m-8 3h4m-1-13 7 3m-4-11 7 4m-2-11 6 6m0-12 6 7m1-11 4 6m4-10 3 7m5-9 2 7m15-7-1 7m10-5-3 7m11-4-4 7m11-2-5 6m16 7-7 4m10 4-7 3m10 6-8 1m8 16-8-2m5 10-7-3m4 11-7-4m2 11-6-5m0 11-5-6m-2 11-4-7m-4 11-3-8m-6 10-1-8m-16 8 2-8m-10 5 3-7m-11 4 4-7m-11 2 5-6m-8 3 3-3m4 8 2-3m5 8 2-4m6 7 1-4m8 5v-4m8 4v-4m9 3-1-4m9 1-2-4m9 0-2-4m9-2-3-3m8-4-3-2m8-5-4-2m7-6-4-1m5-8h-4m4-8h-4m3-9-4 1m1-9-4 2m-1-9-3 2m-2-9-3 3m-4-8-2 3m-5-8-2 4m-6-6-1 3m-8-5v4m-8-4v4m-9-2 1 3m-9 0 2 3m-9 1 2 3m-9 2 3 3m-8 4 3 2m-8 5 4 2m-7 6 4 1m-4 25 4-1m-2 5 7-3m-6 7 4-2m-2 6 7-4m-13-21h8m41-41v-8m0 99v-8m49-42h-8' transform='translate(-65 8)' /%3E%3C/svg%3E)

[Source](https://developer.mozilla.org/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)

<br />

The web's security model is based on a
[*same-origin policy*](https://en.wikipedia.org/wiki/Same-origin_policy). For example,
code from `https://mybank.com` must have access to only `https://mybank.com`'s
data, and `https://evil.example.com` must never be allowed access.
Each origin is, in theory, kept isolated from the rest of the web, giving
developers a safe sandbox to build in. In practice, however, attackers have
found several ways to subvert the system.
[![Sign up for the web.dev newsletter.](https://web.dev/static/images/newsletter/opt2_square.png)](https://web.dev/newsletter?nl_cta=true)

[Cross-site scripting (XSS)](https://en.wikipedia.org/wiki/Cross-site_scripting)
attacks, for example, bypass the same-origin policy by tricking a site into
delivering malicious code along with the intended content. This is a huge
problem, as browsers trust all of the code that shows up on a page as being
legitimately part of that page's security origin. The
[XSS Cheat Sheet](https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet)
is an old but representative cross-section of the methods an attacker might use
to violate this trust by injecting malicious code. If an attacker successfully
injects *any* code at all, they've compromised the user session and gained
access to private information.

This page outlines Content Security Policy (CSP) as a strategy for reducing the
risk and impact of XSS attacks in modern browsers.

## Components of CSP

To implement an effective CSP, take the following steps:

- Use allowlists to tell the client what's allowed and what isn't.
- Learn what directives are available.
- Learn the keywords they take.
- Restrict the use of inline code and `eval()`.
- Report policy violations to your server before enforcing them.

## Source allowlists

XSS attacks exploit the browser's inability to distinguish between script that's
part of your application and script that's been maliciously injected by a third
party. For example, the Google +1 button at the bottom of this page loads and
executes code from `https://apis.google.com/js/plusone.js` in the context of
this page's origin.
We trust that code, but we can't expect the browser to figure out on its own
that code from `apis.google.com` is safe to run, while code from
`apis.evil.example.com` probably isn't. The browser happily downloads and
executes any code a page requests, regardless of source.

CSP's `Content-Security-Policy` HTTP header lets you create an allowlist of
sources of trusted content, and tells the browser to execute or render only
resources from those sources. Even if an attacker can find a hole to inject a
script through, the script won't match the allowlist, and therefore won't be
executed.

We trust `apis.google.com` to deliver valid code, and we trust ourselves
to do the same. Here's an example policy that allows scripts to execute only
when they come from one of those two sources:

    Content-Security-Policy: script-src 'self' https://apis.google.com

`script-src` is a directive that controls a set of script-related privileges for
a page. This header `'self'` as one valid source of script, and
`https://apis.google.com` as another. The browser can now download and execute
JavaScript from `apis.google.com` over HTTPS, as well as from the current
page's origin, but not from any other origin. If an attacker injects code into
your site, the browser throws an error and doesn't run the injected script.

<br />

![Console error: Refused to load the script 'http://evil.example.com/evil.js' because it violates the following Content Security Policy directive: script-src 'self' https://apis.google.com](https://web.dev/static/articles/csp/image/console-error-refused-l-fc9682b801661.png) The console shows an error when a script tries to run from an origin not on the allowlist.

<br />

### Policy applies to a wide variety of resources

CSP provides a set of policy directives that enable granular control over the
resources a page is allowed to load, including `script-src` from the previous
example.

The following list outlines the rest of the resource directives as of level 2. A
[level 3 specification](https://www.w3.org/TR/CSP3/) has been drafted, but
it's [largely unimplemented](https://www.chromestatus.com/features#csp3) in the
major browsers.

`base-uri`
:   Restricts the URLs that can appear in a page's `<base>` element.

`child-src`
:   Lists the URLs for workers and embedded frame contents. For example,
    `child-src https://youtube.com` enables embedding videos from YouTube but not
    from other origins.

`connect-src`
:   Limits the origins that you can connect to using XHR, WebSockets, and
    EventSource.

`font-src`
:   Specifies the origins that can serve web fonts. For example, you can allow
    Google's web fonts using `font-src https://themes.googleusercontent.com`.

`form-action`
:   Lists valid endpoints for submission from `<form>` tags.

`frame-ancestors`
:   Specifies the sources that can embed the current page. This directive applies
    to `<frame>`, `<iframe>`, `<embed>`, and `<applet>` tags. It can't be used in
    `<meta>` tags or for HTML resources.

`frame-src`
:   This directive was deprecated in level 2, but is restored in level 3. If it's
    not present, the browser falls back to `child-src`.

`img-src`
:   Defines the origins images can be loaded from.

`media-src`
:   Restricts the origins allowed to deliver video and audio.

`object-src`
:   Allows control over Flash and other plugins.

`plugin-types`
:   Limits the kinds of plugins a page can invoke.

`report-uri`
:   Specifies a URL the browser sends reports to when a content security policy is
    violated. This directive can't be used in `<meta>` tags.

`style-src`
:   Limits the origins a page can use stylesheets from.

`upgrade-insecure-requests`
:   Instructs user agents to rewrite URL schemes bychanging HTTP to HTTPS. This
    directive is for websites with large numbers of old URLs that need to be
    rewritten.

`worker-src`
:   A CSP Level 3 directive that restricts the URLs that can be loaded as a
    worker, shared worker, or service worker. As of July 2017, this
    directive has
    [limited implementations](https://www.chromestatus.com/features/5922594955984896).

By default, the browser loads the associated resource from any origin, with no
restrictions, unless you set a policy with a specific directive. To override
the default, specify a `default-src` directive. This directive defines the defaults for any
unspecified directive that ends with `-src`. For example, if you set
`default-src` to `https://example.com`, and you don't specify a `font-src`
directive, then you can load fonts only from `https://example.com`.

The following directives don't use `default-src` as a fallback. Remember that
failing to set them is the same as allowing anything:

- `base-uri`
- `form-action`
- `frame-ancestors`
- `plugin-types`
- `report-uri`
- `sandbox`

### Basic CSP syntax

To use CSP directives, list them in the HTTP header with directives separated
by colons. Make sure to list all required resources of a specific type in a
single directive as follows:

    script-src https://host1.com https://host2.com

The following is an example of multiple directives, in this case for a web app
that loads all its resources from a content delivery network at
`https://cdn.example.net`, and doesn't use framed content or plugins:

    Content-Security-Policy: default-src https://cdn.example.net; child-src 'none'; object-src 'none'

### Implementation details

Modern browsers support the unprefixed `Content-Security-Policy` header.
This is the recommended header. The `X-WebKit-CSP` and
`X-Content-Security-Policy` headers you might see in online
tutorials are deprecated.

CSP is defined on a page-by-page basis. You'll need to send the HTTP header with
every response that you want to protect. This lets you fine-tune the policy for
specific pages based on their specific needs. For example, if one set of pages
in your site has a +1 button, while others don't, you can allow the button code
to load only when necessary.

The source list for each directive is flexible. You can specify sources by
scheme (`data:`, `https:`), or ranging in specificity from hostname-only
(`example.com`, which matches any origin on that host: any scheme, any port) to
a fully qualified URI (`https://example.com:443`, which matches only HTTPS, only
`example.com`, and only port 443). Wildcards are accepted, but only as a scheme,
a port, or in the leftmost position of the hostname: `*://*.example.com:*` would
match all subdomains of `example.com` (but *not* `example.com` itself), using
any scheme, on any port.

The source list also accepts four keywords:

- **`'none'`** matches nothing.
- **`'self'`** matches the current origin, but not its subdomains.
- **`'unsafe-inline'`** allows inline JavaScript and CSS. For more information, see [Avoid inline code](https://web.dev/articles/csp#unsafe-inline).
- **`'unsafe-eval'`** allows text-to-JavaScript mechanisms like `eval`. For more information, see [Avoid `eval()`](https://web.dev/articles/csp#unsafe-eval).

These keywords require single-quotes. For example, `script-src 'self'` (with quotes)
authorizes the execution of JavaScript from the current host; `script-src self`
(no quotes) allows JavaScript from a server named "`self`" (and *not* from the
current host), which probably isn't what you meant.

### Sandbox your pages

There's one more directive worth talking about: `sandbox`. It's a bit
different from the others we've looked at, as it places restrictions on actions that
the page can take rather than on resources that the page can load. If the
`sandbox` directive is present, the page is treated as though it was loaded
inside of an `<iframe>` with a `sandbox` attribute. This can have a wide range of
effects on the page: forcing the page into a unique origin, and preventing form
submission, among others. It's a bit beyond the scope of this page, but you
can find full details on valid sandboxing attributes in the
["Sandboxing" section of the HTML5 spec](https://html.spec.whatwg.org/dev/origin.html#sandboxing).

### The meta tag

CSPs preferred delivery mechanism is an HTTP header. It can be useful, however,
to set a policy on a page directly in the markup. Do that using a `<meta>` tag with
an `http-equiv` attribute:

    <meta http-equiv="Content-Security-Policy" content="default-src https://cdn.example.net; child-src 'none'; object-src 'none'">

This can't be used for `frame-ancestors`, `report-uri`, or `sandbox`.

## Avoid inline code

As powerful as the origin-based allowlists used in CSP directives are, they
can't solve the biggest threat posed by XSS attacks: inline script injection.
If an attacker can inject a script tag that directly contains some malicious
payload (such as `<script>sendMyDataToEvilDotCom()</script>`), the browser has
no way to distinguish it from a legitimate inline script tag. CSP solves this
problem by banning inline script entirely.

This ban includes not only scripts embedded directly in `script` tags, but also
inline event handlers and `javascript:` URLs. You'll need to move the content of
`script` tags into an external file, and replace `javascript:` URLs and `<a ...
onclick="[JAVASCRIPT]">` with appropriate `addEventListener()` calls. For example,
you might rewrite the following from:

    <script>
        function doAmazingThings() {
        alert('YOU ARE AMAZING!');
        }
    </script>
    <button onclick='doAmazingThings();'>Am I amazing?</button>

to something more like:

    <!-- amazing.html -->
    <script src='amazing.js'></script>
    <button id='amazing'>Am I amazing?</button>

    // amazing.js
    function doAmazingThings() {
        alert('YOU ARE AMAZING!');
    }
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('amazing')
        .addEventListener('click', doAmazingThings);
    });

The rewritten code is not only compatible with CSP, but also aligned with web
design best practices. Inline JavaScript mixes structure and behavior in ways
that make code confusing. It's also more complicated to cache and compile.
Moving your code into external resources makes your pages perform better.

Moving inline `style` tags and attributes into external stylesheets is also
strongly recommended to protect your site against CSS-based
[data exfiltration attacks](https://scarybeastsecurity.blogspot.com/2009/12/generic-cross-browser-cross-domain.html).

### How to temporarily allow inline scripts and styles

> [!WARNING]
> **Warning:** Banning inline scripts and styles is CSP's most important security feature. Only use these methods if a script or style sheet absolutely must be inline.

You can enable inline scripts and styles by adding `'unsafe-inline'` as an
allowed source in a `script-src` or `style-src`
directive. CSP Level 2 also lets you add specific inline scripts to your
allowlist using either a cryptographic nonce (number used once) or hash as
follows.

To use a nonce, give your script tag a nonce attribute. Its value must match one
in the list of trusted sources. For example:

    <script nonce="EDNnf03nceIOfn39fn3e9h3sdfa">
        // Some inline code I can't remove yet, but need to as soon as possible.
    </script>

Add the nonce to your `script-src` directive following the `nonce-` keyword:

    Content-Security-Policy: script-src 'nonce-EDNnf03nceIOfn39fn3e9h3sdfa'

Nonces must be regenerated for every page request, and they must be
unguessable.

Hashes work in a similar way. Instead of adding code to the script tag, create
an SHA hash of the script itself and add it to the `script-src` directive.
For example, if your page contained this:

    <script>alert('Hello, world.');</script>

Your policy must contain this:

    Content-Security-Policy: script-src 'sha256-qznLcsROx4GACP2dm0UCKCzCG-HiZ1guq6ZZDob_Tng='

The `sha*-` prefix specifies the algorithm that generates the hash. The previous
example uses `sha256-`, but CSP also supports `sha384-` and `sha512-`. When
generating the hash, omit the `<script>` tags. Capitalization and whitespace
matter, including leading and trailing whitespace.

Solutions for generating SHA hashes are available in any number of languages.
Using Chrome 40 or later, you can open DevTools and then reload your page. The
Console tab shows error messages with the correct SHA-256 hash for each of your
inline scripts.

## Avoid `eval()`

Even when an attacker can't inject script directly, they might be able to trick
your application into converting input text into executable JavaScript
and executing it on their behalf. `eval()`, `new Function()`,
`setTimeout([string], ...)`, and `setInterval([string], ...)` are all vectors
attackers can use to execute malicious code through injected text. CSP's default
response to this risk is to completely block all of these vectors.

This has the following effects on the way you build applications:

- You must parse JSON using the built-in `JSON.parse`, instead of relying on `eval`. Safe JSON operations are available in [every browser since IE8](https://caniuse.com/#feat=json).
- You must rewrite any `setTimeout` or `setInterval` calls you make using inline
  functions instead of strings. For example, if your page contains the
  following:

      setTimeout("document.querySelector('a').style.display = 'none';", 10);

  Rewrite it as:

      setTimeout(function () {
          document.querySelector('a').style.display = 'none';
      }, 10);
        ```

- Avoid inline templating at runtime. Many templating libraries use `new
  Function()` often to speed up template generation at runtime, which allows
  evaluation of malicious text. Some frameworks support CSP out of the box,
  falling back to a robust parser in the absence of `eval`.
  [AngularJS's ng-csp directive](https://docs.angularjs.org/api/ng/directive/ngCsp)
  is a good example of this. However, we instead recommend using a templating
  language that offers precompilation, such as
  [Handlebars](https://handlebarsjs.com/installation/precompilation.html).
  Precompiling your templates can make the user experience even faster than the
  fastest runtime implementation, as well as making your site more secure.

If `eval()` or other text-to-JavaScript functions are essential to your
application, you can enable them by adding `'unsafe-eval'` as an allowed source
in a `script-src` directive. We strongly discourage this because of the code
injection risk it presents.

## Report policy violations

To notify the server of bugs that might allow malicious injection, you can
tell the browser to `POST` JSON-formatted violation reports to a location
specified in a `report-uri` directive:

    Content-Security-Policy: default-src 'self'; ...; report-uri /my_amazing_csp_report_parser;

These reports look like the following:

    {
        "csp-report": {
        "document-uri": "http://example.org/page.html",
        "referrer": "http://evil.example.com/",
        "blocked-uri": "http://evil.example.com/evil.js",
        "violated-directive": "script-src 'self' https://apis.google.com",
        "original-policy": "script-src 'self' https://apis.google.com; report-uri http://example.org/my_amazing_csp_report_parser"
        }
    }

The report contains helpful information for finding the cause of a policy
violation, including the page it happened on (`document-uri`), that page's
`referrer`, the resource that violated the page's policy (`blocked-uri`), the
specific directive it violated (`violated-directive`), and the page's complete
policy (`original-policy`).

### Report-Only

If you're just starting out with CSP, we recommend using report-only mode to
evaluate the state of your app before you change your policy. To do this,
instead of sending a `Content-Security-Policy` header, send a
`Content-Security-Policy-Report-Only` header:

    Content-Security-Policy-Report-Only: default-src 'self'; ...; report-uri /my_amazing_csp_report_parser;

The policy specified in report-only mode doesn't block restricted resources, but
it does send violation reports to the location you specify. You can even send
*both* headers, to enforce one policy while monitoring another. This is a great
way to test changes to your CSP while enforcing your current policy: turn on
reporting for a new policy, monitor the violation reports and fix any bugs, and
when you're satisfied with the new policy, start enforcing it.

## Real World Usage

The first step towards crafting a policy for your app is to evaluate the
resources it loads. When you understand your app's structure, create a policy
based on its requirements. The following sections walk through a few common use
cases and the decision process for supporting them following the CSP
guidelines.

### Social media widgets

- Facebook's [Like button](https://developers.facebook.com/docs/plugins/like-button) has several implementation options. We recommend using the `<iframe>` version to keep it sandboxed from the rest of your site. It needs a `child-src https://facebook.com` directive to function properly.
- X's [Tweet button](https://publish.twitter.com/#) relies on access to a script. Move the script it provides into an external JavaScript file, and use the directive `script-src https://platform.twitter.com; child-src https://platform.twitter.com`.
- Other platforms have similar requirements, and can be addressed similarly. To test these resources, we recommend setting a `default-src` of `'none'` and watching your console to determine which resources you'll need to enable.

To use multiple widgets, combine the directives as follows:

    script-src https://apis.google.com https://platform.twitter.com; child-src https://plusone.google.com https://facebook.com https://platform.twitter.com

### Lockdown

For some websites, you'll want to make sure that only local resources can be
loaded. The following example develops a CSP for a banking site, starting with
a default policy that blocks everything (`default-src 'none'`).

The site loads all images, style, and script from a CDN at
`https://cdn.mybank.net`, and connects to `https://api.mybank.com/` using XHR to
retrieve data. It uses frames, but only for pages local to the site (no
third-party origins). There's no Flash on the site, no fonts, no extras. The
most restrictive CSP header it can send is this:

    Content-Security-Policy: default-src 'none'; script-src https://cdn.mybank.net; style-src https://cdn.mybank.net; img-src https://cdn.mybank.net; connect-src https://api.mybank.com; child-src 'self'

### SSL only

The following is an example CSP for a forum administrator who wants to ensure
that all resources on their forum are only loaded using secure channels, but is
inexperienced at coding and doesn't have the resources to rewrite third-party
forum software full of inline scripts and styles:

    Content-Security-Policy: default-src https:; script-src https: 'unsafe-inline'; style-src https: 'unsafe-inline'

Although `https:` is specified in `default-src`, the script and style
directives don't automatically inherit that source. Each directive overwrites
the default for that specific type of resource.

## CSP standard development

Content Security Policy Level 2 is a W3C [recommended standard](https://www.w3.org/TR/CSP2/).
W3C's Web Application Security Working Group is developing the specification's
next iteration, [Content Security Policy Level 3](https://www.w3.org/TR/CSP3/).

To follow the discussion around these upcoming features, refer to the
[public-webappsec@ mailing list archives](http://lists.w3.org/Archives/Public/public-webappsec/).