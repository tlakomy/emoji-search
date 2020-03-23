export default function filterEmoji(emojiList, searchText, maxResults) {
    return emojiList
        .filter(emoji => {
            if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
            if (emoji.keywords.includes(searchText)) {
                return true;
            }
            return false;
        })
        .slice(0, maxResults);
}
