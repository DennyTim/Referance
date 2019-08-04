class BasicFormatter {
    format(header, details) {
        let output = '';
        output += `${header}\r\n`;

        for(let [label, value] of details) {
            output += `${label}: ${value}\r\n`;
        }

        return output;
    }
}

module.exports = BasicFormatter;