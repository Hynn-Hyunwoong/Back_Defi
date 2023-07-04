// Get Today's date in YYYY-MM-DD format
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

let todayStr = yyyy + '-' + mm + '-' + dd;

// Define DateRange

const startDate:Date = new Date('2023-06-01')
const endDate:Date = new Date(todayStr) // Update end date to today
export const dataLength:string[] = [];

for (let dt = new Date(startDate); dt <= endDate; dt.setDate(dt.getDate() + 1)) {
    dataLength.push(new Date(dt).toISOString().slice(0,10));
}


// Ethereum 2023-06-01~2023-07-02

export const ETHkrwopenPrice:number[] = [2477483.9283035400,2445688.32076505,2491568.451089810,2471755.9273641600,2469150.379177970,2355200.5562992800,2448836.841473820,2398141.2045214300,2393772.2509256100,2369835.952478020,2256694.767338270,2257417.5533210300,2238849.360813670,2205273.4893744900,2103295.8898348800,2115696.0877601200,2192704.7803472200,2206144.5196041900,2197397.684156710,2229441.5293110900,2309326.073894870,2435434.771818310,2431559.7314726200,2478029.0702458700,2455129.2518686700,2486538.806618180,2423955.2839424400,2452341.085665850,2393542.107753680,2450938.7643502100,2544835.727884850,2533152.596626490]
export const ETHkrwclosePrice:number[] = [2445396.390448220,2491353.9811728300,2471774.624565510,2469275.6378182500,2356822.5294093300,2448995.2664815800,2397987.325787370,2394062.7079938500,2369621.156987040,2256510.765516140,2257855.121106320,2239027.3255165000,2205003.9588627800,2103322.6901011700,2115834.738635470,2192701.126502900,2206157.8634978700,2197489.838178650,2230442.2403361600,2309487.0522759300,2436997.644886940,2432082.0996025500,2476838.4612215600,2455404.8812198800,2487135.408269340,2424068.2401925200,2452077.4644791800,2393426.659746370,2451228.3338524900,2544658.151647940,2533307.647130350,2550251.278321880]
export const ETHusdopenPrice:number[] = [1873.9147321964,1862.423759786,1907.4208237897,1892.3982141175,1890.4176597218,1810.5814536374,1884.3729302172,1832.5135456548,1846.0778688055,1840.3919859661,1752.5276212635,1753.0754314612,1742.3901386175,1739.2501168201,1650.4982107179,1665.4106761871,1716.6717140439,1727.1937051634,1720.5053375704,1736.8797897445,1791.9950289874,1889.7944269231,1872.5407720867,1893.7720012745,1875.8491070016,1900.050251713,1859.3462129181,1889.9065340307,1828.0593642918,1852.0084814742,1933.3238877329,1924.4481569744]
export const ETHusdclosePrice:number[] = [1862.2014510177,1907.2566362935,1892.4125288604,1890.5135595696,1811.8283599458,1884.4948378065,1832.3959608921,1846.3018693826,1840.2251778375,1752.3847272043,1753.4152398112,1742.5286400944,1739.0375441046,1650.5192414211,1665.5198178778,1716.668853444,1727.2041521169,1720.577491777,1737.6594086455,1792.119945283,1891.0071503552,1872.9430470581,1892.8621079799,1876.0597024608,1900.5061356568,1859.4328584009,1889.7033733015,1827.9711912824,1852.2272895415,1933.1889822154,1924.5659495846,1937.4383914033]


// USDT 2023-06-01~2023-07-02

export const USDTkrwopenPrice:number[] = [1322.3730438892,1313.6568687387,1306.7622524043,1306.3895543147,1306.4057189138,1301.2565751471,1299.7714694396,1308.8682430646,1296.9426075502,1287.6955171314,1288.2988452064,1287.9278871251,1284.8948454402,1267.7109634487,1274.1002472567,1269.2849485154,1276.4770243932,1276.930379249,1276.861066704,1283.3034487137,1289.0515399761,1288.9650066684,1298.8277459176,1309.3092285185,1309.4211944731,1309.4063587075,1303.9458743473,1297.7226965507,1309.4410358133,1323.0001020998,1316.0618960434,1316.4422785177]
export const USDTkrwclosePrice:number[] = [1313.6132601864,1306.7506881799,1306.3575185202,1306.336784739,1301.1954969692,1299.7764522172,1308.7481460126,1297.0828489994,1287.6146692055,1288.2457550289,1288.0954166575,1285.0002451157,1267.7695414225,1274.1324341411,1269.3368720557,1276.4441313758,1276.9224112932,1276.9364646319,1283.4125351075,1289.1862056184,1288.7984417023,1298.7744531823,1309.2550883036,1309.4915462838,1309.2785658741,1303.9362952612,1297.8520834366,1309.3682216733,1323.1697764525,1316.4077418987,1316.4700710297,1316.4130207192]
export const USDTusdopenPrice:number[] = [1.0002140882,1.0003669494,1.0003921549,1.0001834049,1.0002033342,1.0003526091,1.0001704201,1.0001574471,1.000202523,1.0000120505,1.0004805893,1.0001848055,0.9999726409,0.9998154206,0.9998118612,0.9991419451,0.9993556912,0.9997106234,0.9997490652,0.9997767579,1.0002805485,1.0001823552,1.0002254432,1.0006069694,1.0004673182,1.0005626596,1.000219286,1.0000952224,1.0000809845,0.9997016024,0.999818524,1.0001075024]
export const USDTusdclosePrice:number[] = [1.0003337409,1.000383302,1.000158878,1.0001505571,1.0003056547,1.0001742543,1.0000656762,1.0003106773,0.9999492647,1.00043936,1.0003149063,1.0000546684,0.9998616197,0.9998371189,0.9991828177,0.9993299392,0.9997043853,0.9998080998,0.9998617433,1.0003850465,1.0000531079,1.0001844026,1.0005655941,1.0005210707,1.0004650086,1.0002119381,1.000194935,1.0000253729,0.9998298138,1.0000812648,1.0001286165,1.0000854218]

// ARB 2023-06-01~2023-07-02

export const ARBkrwopenPrice:number[] = [1535.9606230499,1506.1510329521,1620.3255447094,1587.6480558104,1581.5069456513,1479.8376083923,1542.149125523,1473.7927173027,1465.2394233772,1456.1269689129,1278.4384778391,1277.2090022249,1256.6988914692,1256.1678111768,1199.4962764206,1205.5992264384,1245.0519205874,1269.0241315518,1269.6552314524,1291.9831721589,1397.201234934,1471.11102323,1416.2873494648,1484.4701222753,1412.1651424874,1455.0251178359,1487.7418814163,1564.9508707871,1471.496941976,1495.5419162571,1527.5618076692,1514.0376579437]
export const ARBkrwclosePrice:number[] = [1506.1797811197,1619.8219746332,1587.5730745594,1581.5818101551,1480.2414371032,1542.033169111,1473.7901225701,1465.2276391102,1456.0730723322,1278.3107057572,1277.3502363935,1256.6082843495,1256.1677928714,1199.4743757915,1205.4941046111,1245.001832688,1269.1105808563,1269.6546946017,1291.8959243027,1397.2215212449,1471.0167918143,1416.3913325913,1484.0951542256,1412.2637824926,1454.8629769088,1487.6474460999,1564.8129342441,1471.926207225,1495.6616312134,1526.865339769,1514.2174243579,1514.7123857724]
export const ARBusdopenPrice:number[] = [1.1617670681,1.1469537822,1.2404406084,1.2155174029,1.2108248587,1.1376383727,1.1866793317,1.1261826922,1.1299930772,1.1308143086,0.9928231221,0.9918606858,0.9780290689,0.9907115933,0.9412686382,0.9490105098,0.9747529324,0.9935208107,0.9941070833,1.0065388264,1.0842027446,1.141519964,1.0906809208,1.13446932,1.0789691498,1.1118349869,1.1412039039,1.2060356911,1.1238506127,1.1300797693,1.1604960196,1.1502216583]
export const ARBusdclosePrice:number[] = [1.1469756743,1.2400551002,1.2154599966,1.2108821761,1.1379488196,1.1865901036,1.1261807094,1.1299839892,1.130772453,0.9927238955,0.9919703661,0.9779585537,0.9907115789,0.9412514524,0.9489277612,0.9747137185,0.993588492,0.9941066629,1.0064708546,1.0842184864,1.1414468444,1.090760998,1.13418276,1.079044516,1.1117110894,1.1411314653,1.2059293898,1.1241784625,1.1301702298,1.1599669096,1.1503582277,1.150734421]

// ASD 2023-06-01~2023-07-02

export const generateASDTokenPrice = (min:number, max:number, decimalPlaces:number):number=>{
    const rand = Math.random() <0.5 ? ((1 - Math.random()) * (max - min) + min) : (Math.random() * (max - min) + min);
    const power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
}

export const ASDkrwopenPrice:number[] = []
export const ASDkrwclosePrice:number[] = []
export const ASDusdopenPrice:number[] = []
export const ASDusdclosePrice:number[] = []

for (let i = 0; i < dataLength.length; i++) {
    ASDkrwclosePrice.push(generateASDTokenPrice(1250, 1450, 18))
    ASDkrwopenPrice.push(generateASDTokenPrice(1250, 1450, 18))
    ASDusdclosePrice.push(generateASDTokenPrice(0.8, 1.3, 18))
    ASDusdopenPrice.push(generateASDTokenPrice(0.8, 1.3, 18))
}