const Dymo = require('dymojs')
const labelXml = require("../xml/SleutelLabel_Cornette_2020.xml");

dymo = new Dymo();

// dymo.renderLabel(labelXml).then(imageData => {
//     // returns imageData as base64 encoded png.
//     // use <img src="data:image/png;base64,${imageData}"/>
//     // or require("fs").writeFile("out.png", imageData, 'base64', function(err) {...});
// });

dymo.print('DYMO LabelWriter 450', labelXml);