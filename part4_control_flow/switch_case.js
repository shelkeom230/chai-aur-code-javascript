// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month="april"

switch (month) {
    case "jan": console.log("January");
        break;
    case "feb": console.log("February");
        break;
        case "march": console.log("March");
        break;
        case "april": console.log("April");
        break;
        case "may": console.log("May");
        break;
    default: console.log("default case match");
        break;
}

const dayNumber=2;
//1 - sunday ... 7-saturday

switch (dayNumber) {
    case 1:console.log("Sunday");
    break;
    case 2:console.log("Monday");
    break;
    case 3:console.log("Tuesday");
    break;
    case 4:console.log("Wednesday");
    break;
    case 5:console.log("Thursday");
    break;
    case 6:console.log("Friday");
    break;
    case 7:console.log("Saturday");
    break;
    default: console.log("invalid day");
}