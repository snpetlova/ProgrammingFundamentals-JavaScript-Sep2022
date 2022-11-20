function extractFile(string) {

    let splited = string.split('\\');
    let fileNameAndFormat = splited.pop();

    let last = fileNameAndFormat.lastIndexOf('.');
    let fileName = fileNameAndFormat.substring(0, last);
    let format = fileNameAndFormat.substring(last+1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${format}`);

}extractFile('C:\\Internal\\training-internal\\Template.pptx')
extractFile('C:\\Internal\\training-internal\\template.bak.ppt')