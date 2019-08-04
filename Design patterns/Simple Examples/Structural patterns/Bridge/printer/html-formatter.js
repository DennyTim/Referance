class HtmlFormatter {
    format(header, details) {
        let output = '';
        output += `<h1>${header}\r\n</h1>`;

        for(let [label, value] of details) {
            output += `<b> ${label} </b>: ${value}\r\n`;
        }

        return output;
    }
}

module.exports = HtmlFormatter;