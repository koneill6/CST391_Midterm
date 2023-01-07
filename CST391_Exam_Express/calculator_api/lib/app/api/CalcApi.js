"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalcApi = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var CalcApi = /*#__PURE__*/function () {
  function CalcApi() {
    (0, _classCallCheck2.default)(this, CalcApi);
  }
  (0, _createClass2.default)(CalcApi, [{
    key: "calculate",
    value: function calculate(num1, num2, operation) {
      var result = 0;
      switch (operation) {
        case 'add':
          result = num1 + num2;
          break;
        case 'subtract':
          result = num1 - num2;
          break;
        case 'multiply':
          result = num1 * num2;
          break;
        case 'divide':
          result = num1 / num2;
          break;
      }
      return result;
    }
  }]);
  return CalcApi;
}();
exports.CalcApi = CalcApi;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDYWxjQXBpIiwibnVtMSIsIm51bTIiLCJvcGVyYXRpb24iLCJyZXN1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvYXBpL0NhbGNBcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhbGNBcGlcclxue1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcbiAgICBcclxuICAgIHB1YmxpYyBjYWxjdWxhdGUobnVtMTpudW1iZXIsIG51bTI6bnVtYmVyLCBvcGVyYXRpb246c3RyaW5nKXtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgICAgICAgc3dpdGNoKG9wZXJhdGlvbil7XHJcbiAgICAgICAgICAgIGNhc2UgJ2FkZCc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBudW0xICsgbnVtMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnc3VidHJhY3QnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVtMSAtIG51bTI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ211bHRpcGx5JzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bTEgKiBudW0yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdkaXZpZGUnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbnVtMSAvIG51bTI7XHJcbiAgICAgICAgICAgICAgICBicmVhazsgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBQWFBLE9BQU87RUFFaEIsbUJBQWE7SUFBQTtFQUFDO0VBQUM7SUFBQTtJQUFBLE9BRWYsbUJBQWlCQyxJQUFXLEVBQUVDLElBQVcsRUFBRUMsU0FBZ0IsRUFBQztNQUV4RCxJQUFJQyxNQUFNLEdBQUcsQ0FBQztNQUNkLFFBQU9ELFNBQVM7UUFDWixLQUFLLEtBQUs7VUFDTkMsTUFBTSxHQUFHSCxJQUFJLEdBQUdDLElBQUk7VUFDcEI7UUFFSixLQUFLLFVBQVU7VUFDWEUsTUFBTSxHQUFHSCxJQUFJLEdBQUdDLElBQUk7VUFDcEI7UUFFSixLQUFLLFVBQVU7VUFDWEUsTUFBTSxHQUFHSCxJQUFJLEdBQUdDLElBQUk7VUFDcEI7UUFFSixLQUFLLFFBQVE7VUFDVEUsTUFBTSxHQUFHSCxJQUFJLEdBQUdDLElBQUk7VUFDcEI7TUFBTTtNQUdkLE9BQU9FLE1BQU07SUFDakI7RUFBQztFQUFBO0FBQUE7QUFBQSJ9