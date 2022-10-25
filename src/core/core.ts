const getSentence = (text: string) => {
    return text.split(" ").map((word, id) => {
        if (/---.*---/i.test(word)) {
            // Regex functions can be moved to a utils.ts and the expression should not be hardcoded
            return {
                id,
                text: word.replace(/---/g, ""),
                type: "answer",
                placed: false,
                displayed: "",
            };
        }
        return { id, text: word, type: "word" }; // Type should be an enum
    });
};

const getAnswers = (text: string) => {
    const wordList = text.split(" ");
    let result: string[] = ["singular", "pages"]; // Wrong answers selected randomly from a dictionary based on the length of scentence instead of hard coding or give the user the ability to define wrong answers
    wordList.forEach((word) => {
        if (/---.*---/i.test(word))
            // Regex functions can be moved to a utils.ts and the expression should not be hardcoded
            result.push(word.replace(/---/g, "").toString());
    });
    return result;
};

export { getSentence, getAnswers };
