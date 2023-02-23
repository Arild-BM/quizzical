function updateWord(word) {
    return word.replace(/&lt;/g, `<`).replace(/&gt;/g, `>`).replace(/&quot;/g, `"`).replace(/&#039;/g, `'`)
}

export default updateWord