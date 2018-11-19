const wrap = (line, maxLen) => {
    if (line.length <= maxLen) return line;
    
    if (line.length > maxLen && line.charAt(maxLen) !== ' ') {
       let str = line.slice(0, maxLen);
       let breakIdx = str.lastIndexOf(' ');
       return `${line.slice(0, breakIdx+1)}\n${wrap(line.slice(breakIdx+1))}`
    }

    if(line.length > maxLen) return `${line.slice(0, maxLen)}\n${line.slice(maxLen)}`;

};


module.exports = wrap;