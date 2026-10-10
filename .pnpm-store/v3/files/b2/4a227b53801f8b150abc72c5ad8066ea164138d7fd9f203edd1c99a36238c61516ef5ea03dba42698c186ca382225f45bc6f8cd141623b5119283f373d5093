import { isArray, isPlainObject, isString } from "@vuepress/helper/shared";
const isAuthorInfo = (author) => isPlainObject(author) && isString(author.name);
export const getAuthor = (author, canDisable = false) => {
    if (author) {
        if (isArray(author)) {
            return author
                .map((item) => (isString(item) ? { name: item } : isAuthorInfo(item) ? item : null))
                .filter((item) => item != null);
        }
        if (isString(author))
            return [{ name: author }];
        if (isAuthorInfo(author))
            return [author];
        // oxlint-disable-next-line no-console
        console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${canDisable ? "" : "| false"} | undefined\`, but got`, author);
        return [];
    }
    return [];
};
export const getStringArray = (value, optionName) => {
    if (value) {
        if (isArray(value) && value.every((item) => isString(item)))
            return value;
        if (isString(value))
            return [value];
        // oxlint-disable-next-line no-console
        console.error(`Expect ${optionName} to be \`string[] | string | undefined\`, but got`, value);
    }
    return [];
};
export const getCategory = (category) => getStringArray(category, "category");
export const getTag = (tag) => getStringArray(tag, "tag");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5mb0dldHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zaGFyZWQvaW5mb0dldHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUkzRSxNQUFNLFlBQVksR0FBRyxDQUFDLE1BQWUsRUFBd0IsRUFBRSxDQUM3RCxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVqRCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFrQyxFQUFFLFVBQVUsR0FBRyxLQUFLLEVBQWdCLEVBQUU7SUFDaEcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUNYLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDcEIsT0FBTyxNQUFNO2lCQUNWLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ25GLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBc0IsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBRUQsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQUUsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFaEQsSUFBSSxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsS0FBSyxDQUNYLHlFQUNFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUNwQix5QkFBeUIsRUFDekIsTUFBTSxDQUNQLENBQUM7UUFFRixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxPQUFPLEVBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxDQUM1QixLQUFvQyxFQUNwQyxVQUFrQixFQUNSLEVBQUU7SUFDWixJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ1YsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDMUUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBDLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsVUFBVSxtREFBbUQsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRyxDQUFDO0lBRUQsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxRQUF1QyxFQUFZLEVBQUUsQ0FDL0UsY0FBYyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUV2QyxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFrQyxFQUFZLEVBQUUsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDIn0=