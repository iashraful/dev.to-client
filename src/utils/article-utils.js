export function devPostMarkdownParser(body) {
    let parsedBody = body.split('---');
    parsedBody = parsedBody.length > 1 ? parsedBody[2] : parsedBody[0];
    // parsedBody = parsedBody.replace('\n', '  ');
    // console.log(parsedBody)
    return parsedBody
}