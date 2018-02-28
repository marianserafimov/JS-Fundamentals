function formatHelper(input) {
    let text = input[0];

    text = text
        .replace(/[.,!?:;]\s*/g, (match) => match.trim() + " ");
    text = text.replace(/\s+[.,!?:;]/g, (match) => match.trim());
    text = text.replace(/\.\s*\.\s*\.\s*!/g, "...!");
    text = text.replace(/(\.\s+)(\d+)/g,
        (match,grp1,grp2) => grp1.trim() + grp2);
    text = text.replace(/"(\s*[^"]\s*)"/g,
        (match,grp1) => `"${grp1.trim()}"`);

    console.log(text);
}
