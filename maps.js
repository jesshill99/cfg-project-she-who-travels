google.charts.load('current', {
    'packages': ['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Global Peace Index Rating'],
        ["Iceland", 1],
        ["New Zealand", 2],
        ["Portugal", 3],
        ["Austria", 4],
        ["Denmark", 5],
        ["Canada", 6],
        ["Singapore", 7],
        ["Slovenia", 8],
        ["Japan", 9],
        ["Switzerland", 10],
        ["Czechia", 11],
        ["Ireland", 12],
        ["Australia", 13],
        ["Finland", 14],
        ["Bhutan", 15],
        ["Malaysia", 16],
        ["Netherlands", 17],
        ["Belgium", 18],
        ["Sweden", 19],
        ["Norway", 20],
        ["Hungary", 21],
        ["Germany", 22],
        ["Slovakia", 23],
        ["Romania", 24],
        ["Mauritius", 25],
        ["Bulgaria", 26],
        ["Chile", 27],
        ["Croatia", 28],
        ["Poland", 29],
        ["Botswana", 30],
        ["Qatar", 31],
        ["Spain", 32],
        ["Costa Rica", 33],
        ["Uruguay", 34],
        ["Latvia", 35],
        ["Taiwan", 36],
        ["Estonia", 37],
        ["Malawi", 38],
        ["Italy", 39],
        ["Lithuania", 40],
        ["Indonesia", 41],
        ["Mongolia", 42],
        ["Kuwait", 43],
        ["Ghana", 44],
        ["United Kingdom", 45],
        ["Laos", 46],
        ["Panama", 47],
        ["Cyprus", 48],
        ["Zambia", 49],
        ["Serbia", 50],
        ["Albania", 51],
        ["Sierra Leone", 52],
        ["United Arab Emirates", 53],
        ["Tanzania", 54],
        ["South Korea", 55],
        ["Madagascar", 56],
        ["Vietnam", 57],
        ["Senegal", 58],
        ["Liberia", 59],
        ["France", 60],
        ["Namibia", 61],
        ["The Gambia", 62],
        ["East Timor", 63],
        ["Kazakhstan", 64],
        ["Greece", 65],
        ["North Macedonia", 66],
        ["Montenegro", 67],
        ["Moldova", 68],
        ["Oman", 69],
        ["Equatorial Guinea", 70],
        ["Ecuador", 71],
        ["Benin", 72],
        ["Sri Lanka", 73],
        ["Eswatini", 74],
        ["Argentina", 75],
        ["Nepal", 76],
        ["Angola", 77],
        ["Jordan", 78],
        ["Rwanda", 79],
        ["Peru", 80],
        ["Bosnia and Herzegovina", 81],
        ["Tunisia", 82],
        ["Jamaica", 83],
        ["Dominican Republic", 84],
        ["Bolivia", 85],
        ["Kosovo", 86],
        ["Haiti", 87],
        ["Paraguay", 88],
        ["Cambodia", 89],
        ["Morocco", 90],
        ["Cuba", 91],
        ["Guyana", 92],
        ["Trinidad and Tobago", 93],
        ["Mozambique", 94],
        ["Kyrgyz Republic", 95],
        ["Gabon", 96],
        ["Belarus", 97],
        ["Papua New Guinea", 98],
        ["Georgia", 99],
        ["Guinea", 100],
        ["Bangladesh", 101],
        ["Uzbekistan", 102],
        ["Lesotho", 103],
        ["Burkina Faso", 104],
        ["Tajikistan", 105],
        ["Uganda", 106],
        ["Cote d'Ivoire", 107],
        ["Togo", 108],
        ["Djibouti", 109],
        ["China", 110],
        ["Algeria", 111],
        ["Guinea-Bissau", 112],
        ["El Salvador", 113],
        ["Guatemala", 114],
        ["Turkmenistan", 115],
        ["Brazil", 116],
        ["Thailand", 117],
        ["Armenia", 118],
        ["Kenya", 119],
        ["Nicaragua", 120],
        ["Republic of the Congo", 121],
        ["Mauritania", 122],
        ["Honduras", 123],
        ["Bahrain", 124],
        ["Myanmar", 125],
        ["Niger", 126],
        ["South Africa", 127],
        ["United States", 128],
        ["Saudi Arabia", 129],
        ["Azerbaijan", 130],
        ["Ethiopia", 131],
        ["Zimbabwe", 132],
        ["Eritrea", 133],
        ["Philippines", 134],
        ["Burundi", 135],
        ["Egypt", 136],
        ["Chad", 137],
        ["Cameroon", 138],
        ["Iran", 139],
        ["Mexico", 140],
        ["India", 141],
        ["Palestine", 142],
        ["Colombia", 143],
        ["Venezuela", 144],
        ["Mali", 145],
        ["Israel", 146],
        ["Lebanon", 147],
        ["Nigeria", 148],
        ["Sudan", 149],
        ["Ukraine", 150],
        ["North Korea", 151],
        ["Turkey", 152],
        ["Pakistan", 153],
        ["Russia", 154],
        ["Democratic Republic of the Congo", 155],
        ["Libya", 156],
        ["Central African Republic", 157],
        ["Afghanistan", 158],
        ["Yemen", 159],
        ["Syria", 160],
        ["South Sudan", 161],
        ["Iraq", 162],
        ["Somalia", 163]
    ]);
    var options = { colorAxis: { minValue: 0, colors: ['#1AEBF4', '#9AA7FF'] }, width: window.innerWidth, backgroundColor: { fill: '#92D1D3' }, legend: 'none' };
    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}