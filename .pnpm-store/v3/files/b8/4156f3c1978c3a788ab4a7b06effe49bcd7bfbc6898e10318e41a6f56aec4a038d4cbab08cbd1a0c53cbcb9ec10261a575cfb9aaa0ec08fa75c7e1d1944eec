import { isArray, isPlainObject, isString } from "@vuepress/helper/shared";

//#region src/shared/infoGetter.ts
const isAuthorInfo = (author) => isPlainObject(author) && isString(author.name);
const getAuthor = (author, canDisable = false) => {
	if (author) {
		if (isArray(author)) return author.map((item) => isString(item) ? { name: item } : isAuthorInfo(item) ? item : null).filter((item) => item != null);
		if (isString(author)) return [{ name: author }];
		if (isAuthorInfo(author)) return [author];
		console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${canDisable ? "" : "| false"} | undefined\`, but got`, author);
		return [];
	}
	return [];
};
const getStringArray = (value, optionName) => {
	if (value) {
		if (isArray(value) && value.every((item) => isString(item))) return value;
		if (isString(value)) return [value];
		console.error(`Expect ${optionName} to be \`string[] | string | undefined\`, but got`, value);
	}
	return [];
};
const getCategory = (category) => getStringArray(category, "category");
const getTag = (tag) => getStringArray(tag, "tag");

//#endregion
export { getTag as i, getCategory as n, getStringArray as r, getAuthor as t };
//# sourceMappingURL=infoGetter-CiYuSeA7.js.map