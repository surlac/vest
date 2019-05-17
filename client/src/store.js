import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from './reducers/Reducer'

var initialState = {
  chart: {
    labels: [
      "2017-01-02",
      "2017-01-03",
      "2017-01-04",
      "2017-01-05",
      "2017-01-06",
      "2017-01-09",
      "2017-01-10",
      "2017-01-11",
      "2017-01-12",
      "2017-01-13",
      "2017-01-16",
      "2017-01-17",
      "2017-01-18",
      "2017-01-19",
      "2017-01-20",
      "2017-01-23",
      "2017-01-24",
      "2017-01-25",
      "2017-01-26",
      "2017-01-27",
      "2017-01-30",
      "2017-01-31",
      "2017-02-01",
      "2017-02-02",
      "2017-02-03",
      "2017-02-06",
      "2017-02-07",
      "2017-02-08",
      "2017-02-09",
      "2017-02-10",
      "2017-02-13",
      "2017-02-14",
      "2017-02-15",
      "2017-02-16",
      "2017-02-17",
      "2017-02-20",
      "2017-02-21",
      "2017-02-22",
      "2017-02-23",
      "2017-02-24",
      "2017-02-27",
      "2017-02-28",
      "2017-03-01",
      "2017-03-02",
      "2017-03-03",
      "2017-03-06",
      "2017-03-07",
      "2017-03-08",
      "2017-03-09",
      "2017-03-10",
      "2017-03-13",
      "2017-03-14",
      "2017-03-15",
      "2017-03-16",
      "2017-03-17",
      "2017-03-20",
      "2017-03-21",
      "2017-03-22",
      "2017-03-23",
      "2017-03-24",
      "2017-03-27",
      "2017-03-28",
      "2017-03-29",
      "2017-03-30",
      "2017-03-31",
      "2017-04-03",
      "2017-04-04",
      "2017-04-05",
      "2017-04-06",
      "2017-04-07",
      "2017-04-10",
      "2017-04-11",
      "2017-04-12",
      "2017-04-13",
      "2017-04-14",
      "2017-04-17",
      "2017-04-18",
      "2017-04-19",
      "2017-04-20",
      "2017-04-21",
      "2017-04-24",
      "2017-04-25",
      "2017-04-26",
      "2017-04-27",
      "2017-04-28",
      "2017-05-01",
      "2017-05-02",
      "2017-05-03",
      "2017-05-04",
      "2017-05-05",
      "2017-05-08",
      "2017-05-09",
      "2017-05-10",
      "2017-05-11",
      "2017-05-12",
      "2017-05-15",
      "2017-05-16",
      "2017-05-17",
      "2017-05-18",
      "2017-05-19",
      "2017-05-22",
      "2017-05-23",
      "2017-05-24",
      "2017-05-25",
      "2017-05-26",
      "2017-05-29",
      "2017-05-30",
      "2017-05-31",
      "2017-06-01",
      "2017-06-02",
      "2017-06-05",
      "2017-06-06",
      "2017-06-07",
      "2017-06-08",
      "2017-06-09",
      "2017-06-12",
      "2017-06-13",
      "2017-06-14",
      "2017-06-15",
      "2017-06-16",
      "2017-06-19",
      "2017-06-20",
      "2017-06-21",
      "2017-06-22",
      "2017-06-23",
      "2017-06-26",
      "2017-06-27",
      "2017-06-28",
      "2017-06-29",
      "2017-06-30",
      "2017-07-03",
      "2017-07-04",
      "2017-07-05",
      "2017-07-06",
      "2017-07-07",
      "2017-07-10",
      "2017-07-11",
      "2017-07-12",
      "2017-07-13",
      "2017-07-14",
      "2017-07-17",
      "2017-07-18",
      "2017-07-19",
      "2017-07-20",
      "2017-07-21",
      "2017-07-24",
      "2017-07-25",
      "2017-07-26",
      "2017-07-27",
      "2017-07-28",
      "2017-07-31",
      "2017-08-01",
      "2017-08-02",
      "2017-08-03",
      "2017-08-04",
      "2017-08-07",
      "2017-08-08",
      "2017-08-09",
      "2017-08-10",
      "2017-08-11",
      "2017-08-14",
      "2017-08-15",
      "2017-08-16",
      "2017-08-17",
      "2017-08-18",
      "2017-08-21",
      "2017-08-22",
      "2017-08-23",
      "2017-08-24",
      "2017-08-25",
      "2017-08-28",
      "2017-08-29",
      "2017-08-30",
      "2017-08-31",
      "2017-09-01",
      "2017-09-04",
      "2017-09-05",
      "2017-09-06",
      "2017-09-07",
      "2017-09-08",
      "2017-09-11",
      "2017-09-12",
      "2017-09-13",
      "2017-09-14",
      "2017-09-15",
      "2017-09-18",
      "2017-09-19",
      "2017-09-20",
      "2017-09-21",
      "2017-09-22",
      "2017-09-25",
      "2017-09-26",
      "2017-09-27",
      "2017-09-28",
      "2017-09-29",
      "2017-10-02",
      "2017-10-03",
      "2017-10-04",
      "2017-10-05",
      "2017-10-06",
      "2017-10-09",
      "2017-10-10",
      "2017-10-11",
      "2017-10-12",
      "2017-10-13",
      "2017-10-16",
      "2017-10-17",
      "2017-10-18",
      "2017-10-19",
      "2017-10-20",
      "2017-10-23",
      "2017-10-24",
      "2017-10-25",
      "2017-10-26",
      "2017-10-27",
      "2017-10-30",
      "2017-10-31",
      "2017-11-01",
      "2017-11-02",
      "2017-11-03",
      "2017-11-06",
      "2017-11-07",
      "2017-11-08",
      "2017-11-09",
      "2017-11-10",
      "2017-11-13",
      "2017-11-14",
      "2017-11-15",
      "2017-11-16",
      "2017-11-17",
      "2017-11-20",
      "2017-11-21",
      "2017-11-22",
      "2017-11-23",
      "2017-11-24",
      "2017-11-27",
      "2017-11-28",
      "2017-11-29",
      "2017-11-30",
      "2017-12-01",
      "2017-12-04",
      "2017-12-05",
      "2017-12-06",
      "2017-12-07",
      "2017-12-08",
      "2017-12-11",
      "2017-12-12",
      "2017-12-13",
      "2017-12-14",
      "2017-12-15",
      "2017-12-18",
      "2017-12-19",
      "2017-12-20",
      "2017-12-21",
      "2017-12-22",
      "2017-12-25",
      "2017-12-26",
      "2017-12-27",
      "2017-12-28",
      "2017-12-29"
    ],
    values: [
      1145.9,
      1151,
      1164.25,
      1176.7,
      1175.85,
      1178.5,
      1189.5,
      1178.55,
      1205.05,
      1190.35,
      1203,
      1216.05,
      1214.75,
      1196.05,
      1200.55,
      1212.85,
      1216.8,
      1195,
      1189.7,
      1184.85,
      1192.8,
      1212.8,
      1203.65,
      1221.95,
      1215.2,
      1226.75,
      1231,
      1242.1,
      1236.8,
      1228.3,
      1222.25,
      1230.75,
      1224.4,
      1240.55,
      1241.95,
      1237.3,
      1233.2,
      1236.65,
      1247.9,
      1253.65,
      1257.2,
      1255.6,
      1240.4,
      1238.1,
      1226.5,
      1230.95,
      1216.65,
      1209.2,
      1206.55,
      1202.65,
      1204.2,
      1204.6,
      1198.8,
      1229.35,
      1229.6,
      1232.4,
      1241.6,
      1249.05,
      1247.5,
      1247.5,
      1257.55,
      1257.25,
      1251.1,
      1248.8,
      1244.85,
      1247.25,
      1257.65,
      1245.8,
      1252.5,
      1266.45,
      1250.05,
      1252.9,
      1274.3,
      1284.15,
      1284.15,
      1284.15,
      1278.95,
      1279.05,
      1282.1,
      1281.85,
      1269.4,
      1267.8,
      1261.85,
      1262.8,
      1266.45,
      1266.45,
      1255.45,
      1250.3,
      1228.45,
      1228.05,
      1229.8,
      1220.4,
      1222.95,
      1223.15,
      1231.25,
      1233.3,
      1234.2,
      1257.4,
      1255.9,
      1252,
      1258.85,
      1260.2,
      1252.55,
      1256.95,
      1265.05,
      1265.05,
      1262.7,
      1266.2,
      1264.85,
      1274.95,
      1279.95,
      1293.5,
      1291,
      1273.1,
      1266.55,
      1266.4,
      1262,
      1275.5,
      1254.55,
      1255.4,
      1248.15,
      1242.2,
      1242.5,
      1250.8,
      1255.7,
      1245.25,
      1249.55,
      1248,
      1243.5,
      1242.25,
      1229.25,
      1223.75,
      1220.3,
      1224.9,
      1215.65,
      1211.9,
      1211.05,
      1218.8,
      1218.9,
      1230.3,
      1234.1,
      1240.75,
      1242.15,
      1238.7,
      1248.55,
      1255.55,
      1254.4,
      1248.1,
      1261.1,
      1264.9,
      1267.55,
      1270.95,
      1269.6,
      1268.1,
      1257.7,
      1258,
      1261.8,
      1271.05,
      1284.4,
      1286.1,
      1282.3,
      1270.3,
      1272.75,
      1285.15,
      1295.8,
      1292.9,
      1284.2,
      1286.65,
      1289,
      1285.3,
      1285.3,
      1318.65,
      1308.5,
      1311.75,
      1320.4,
      1333.1,
      1335.55,
      1337.85,
      1343.5,
      1346.25,
      1334.2,
      1326.5,
      1327.55,
      1324.55,
      1322.85,
      1312.1,
      1309.6,
      1311.3,
      1292.1,
      1294.8,
      1293.3,
      1300.05,
      1282.55,
      1283.35,
      1283.1,
      1273.7,
      1271.25,
      1274.25,
      1274.5,
      1261.8,
      1278.75,
      1291.4,
      1289.25,
      1290.25,
      1299.6,
      1303.3,
      1284.75,
      1280.2,
      1286.4,
      1281.2,
      1274.9,
      1276.45,
      1275,
      1273.75,
      1266.45,
      1272,
      1270.15,
      1277.05,
      1279.2,
      1267.2,
      1270.9,
      1275.6,
      1284,
      1284.8,
      1284.3,
      1277.95,
      1274.6,
      1282.2,
      1280,
      1284.35,
      1286.2,
      1283.3,
      1286.95,
      1290.35,
      1290.5,
      1294.9,
      1291.85,
      1283.85,
      1280.2,
      1275.5,
      1273.45,
      1266.3,
      1263.7,
      1255,
      1250.65,
      1247.15,
      1240.9,
      1242.65,
      1251,
      1254.6,
      1260.6,
      1260.35,
      1264.55,
      1264.55,
      1264.55,
      1264.55,
      1264.55,
      1279.4,
      1291,
      1291
    ]
  },
  metrics: {},
  stats: {
    annualized_rest: 0.37,
    annualized_return: -1.72,
    average_profit: 4.69,
    average_return: 0.53,
    calendar_days: 55,
    current_streak: -5,
    looser_count: 3,
    looser_profit: 0.64,
    max_loss: 4.36,
    max_profit: -4.4,
    median_return: -0.34,
    pattern_count: 6,
    profit_rate: 26.2,
    standard_deviation: 3.51,
    total_profit: 78.11,
    trading_days: 223,
    winner_count: 7,
    winner_profit: 0.55
  },
  patternChartData: {
    labels: ["2015", "2016", "2017", "2018"],
    values: [-1.86, -3.44, -4.8, 3.87]
  },
  equityChartData: {
    labels: [
      "2015-01-05",
      "2015-01-12",
      "2015-01-19",
      "2015-01-26",
      "2015-02-02",
      "2015-02-09",
      "2015-02-16",
      "2015-02-23",
      "2016-01-04",
      "2016-01-11",
      "2016-01-18",
      "2016-01-25",
      "2016-02-01",
      "2016-02-08",
      "2016-02-15",
      "2016-02-22",
      "2016-02-29",
      "2017-01-02",
      "2017-01-09",
      "2017-01-16",
      "2017-01-23",
      "2017-01-30",
      "2017-02-06",
      "2017-02-13",
      "2017-02-20",
      "2017-02-27",
      "2018-01-01",
      "2018-01-08",
      "2018-01-15",
      "2018-01-22",
      "2018-01-29",
      "2018-02-05",
      "2018-02-12",
      "2018-02-19",
      "2018-02-26"
    ],
    values: [
      104.84,
      100.17,
      96.15,
      96.8,
      96.98,
      102.63,
      97.96,
      96.37,
      97.86,
      100.36,
      103.22,
      102.97,
      95.02,
      95.43,
      101.04,
      102.6,
      96.42,
      104.32,
      104.19,
      99.07,
      95.02,
      100.21,
      101.69,
      101.03,
      97.93,
      102.86,
      95.85,
      98.04,
      98.13,
      98.98,
      104.93,
      104.73,
      95.68,
      95.97,
      100.45
    ]
  },
  patterns: [
    {
      trading_days: 324,
      calendar_days: 32,
      start_date: "2015-01-01",
      end_date: "2015-03-01",
      start_price: 102.06,
      end_price: 99.08,
      max_drop: -5.46,
      max_rise: 1.65,
      profit_abs: 1.69,
      profit_rel: 1.62
    },
    {
      trading_days: 231,
      calendar_days: 200,
      start_date: "2016-01-01",
      end_date: "2016-03-01",
      start_price: 101.83,
      end_price: 100.98,
      max_drop: -1.36,
      max_rise: 5.93,
      profit_abs: 16.26,
      profit_rel: 0.62
    },
    {
      trading_days: 18,
      calendar_days: 15,
      start_date: "2017-01-01",
      end_date: "2017-03-01",
      start_price: 103.43,
      end_price: 95.26,
      max_drop: -8.19,
      max_rise: 3.19,
      profit_abs: 20.97,
      profit_rel: 0.4
    },
    {
      trading_days: 215,
      calendar_days: 125,
      start_date: "2018-01-01",
      end_date: "2018-03-01",
      start_price: 101.84,
      end_price: 101.08,
      max_drop: -3.92,
      max_rise: 5.17,
      profit_abs: 5.68,
      profit_rel: 3.06
    }
  ]
};


const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;