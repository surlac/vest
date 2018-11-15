// The goal of this function will be to provide our application
// with price data
// that is used to initialize the App component's state.

// The module above exports the getInitialPriceData function
// that simply returns a static array of flight data.
// In a real application, the function would request data from a server.

export function getInitialPriceData() {
  return {
    stats: {
      annualized_rest: 0.17,
      annualized_return: -4.57,
      average_profit: 2.99,
      average_return: 0.26,
      calendar_days: 101,
      current_streak: -4,
      looser_count: 0,
      looser_profit: -1.43,
      max_loss: 4.31,
      max_profit: 1.15,
      median_return: 0.18,
      pattern_count: 8,
      profit_rate: 6.58,
      standard_deviation: 3.82,
      total_profit: 44.83,
      trading_days: 21,
      winner_count: 8,
      winner_profit: 0.35
    },
    patternChartData: {
      labels: ["2015", "2016", "2017", "2018"],
      values: [-3.57, 2.56, -3.35, 2.03]
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
        98.75,
        101.88,
        102.88,
        95.33,
        95.96,
        98.35,
        100.23,
        98.49,
        101.41,
        98.19,
        101.28,
        97.78,
        98.37,
        100.77,
        99.28,
        96.1,
        98.47,
        95.27,
        101.51,
        102.83,
        96.84,
        104.75,
        102.31,
        99.43,
        97.51,
        101.12,
        99.7,
        104.42,
        95.9,
        102.69,
        95.18,
        95.94,
        104.51,
        95.63,
        100.03
      ]
    },
    patterns: [
      {
        trading_days: 32,
        calendar_days: 81,
        start_date: "2015-01-01",
        end_date: "2015-03-01",
        start_price: 98.68,
        end_price: 96.58,
        max_drop: -0.91,
        max_rise: 2.63,
        profit_abs: -5.28,
        profit_rel: -3.11
      },
      {
        trading_days: 318,
        calendar_days: 51,
        start_date: "2016-01-01",
        end_date: "2016-03-01",
        start_price: 103.83,
        end_price: 98.77,
        max_drop: -1.8,
        max_rise: 4.47,
        profit_abs: -15.53,
        profit_rel: -4.01
      },
      {
        trading_days: 200,
        calendar_days: 176,
        start_date: "2017-01-01",
        end_date: "2017-03-01",
        start_price: 100,
        end_price: 97.38,
        max_drop: -2.81,
        max_rise: 4.38,
        profit_abs: 20.77,
        profit_rel: -2.95
      },
      {
        trading_days: 271,
        calendar_days: 110,
        start_date: "2018-01-01",
        end_date: "2018-03-01",
        start_price: 99.05,
        end_price: 97.02,
        max_drop: -3.18,
        max_rise: 9.51,
        profit_abs: 14.56,
        profit_rel: 4.65
      }
    ]
  };
}
